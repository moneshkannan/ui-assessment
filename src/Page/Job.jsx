import { useEffect, useState, useCallback } from "react";
import FilterCard from "../components/FilterCard/FilterCard";
import JobSection from "../components/job_section/JobSection";
import filters from '../data/data.json';
import axios from 'axios';
import { posted_date_range } from "../helpers/helper";

function Job() {
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          // 'http://localhost:5000/api/job/'
            const response = await axios.get('https://incresco-bb.onrender.com/api/job/');
            // const response = await axios.get('http://localhost:5000/api/job/');
            console.log(response.data)
            setAllJobs(response.data);
            setFilteredJobs(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filterJobHelper = (company_data, key, filter_check) => {
      console.log({company_data, key, filter_check})
        let filter_arr = []
        if(key === 'company'){
          filter_check.map((fc) => {
            if(company_data.company_name.includes(fc)){
              filter_arr.push(company_data)
            }
          })
        }
        if(key === 'location'){
          filter_check.map((fc) => {
            if(company_data.location.includes(fc)){
              filter_arr.push(company_data)
            }
          })
        }

        if(key === 'salary range'){
          filter_check.map((fc) => {
            if(company_data.salary >= parseInt(fc.split(" ")[0]) * 100000){
              filter_arr.push(company_data)
            }
          })
        }

        if(key === 'skills'){
          filter_check.map((fc) => {
            if(company_data.tech_stack.includes(fc)){
              console.log("skills", company_data.tech_stack)
              filter_arr.push(company_data)
            }
          })
        }

        if(key === 'experience'){
          filter_check.map((fc) => {
            let l,g
            l = parseInt((fc.split(" ")[0]).split("-")[0])
            g = parseInt((fc.split(" ")[0]).split("-")[1])
            if((l <= company_data.experience) && (company_data.experience <= g)){
              console.log("exp",l,g)
              filter_arr.push(company_data)
            }
          })
        }

        if(key === 'education'){
          filter_check.map((fc) => {
            if(company_data.education.includes(fc)){
              filter_arr.push(company_data)
            }
          })
        }

        if(key === 'date posted'){
          filter_check.map((fc) => {
            let day_type, hours;
            if(fc.split(" ")[1] == 'days'){
              day_type = parseInt(fc.split(" ")[0])
              hours = day_type * 24
            }
            if(fc.split(" ")[1] == 'hours'){
              day_type = parseInt(fc.split(" ")[0]) / 24
              hours = parseInt(fc.split(" ")[0])
            }
            if (!((day_type <= posted_date_range(company_data.date_posted)) && (day_type*24 <= hours))){
              filter_arr.push(company_data)
            }
          })
        }
        return filter_arr;
    };
    const handleFilter = useCallback((selectedFilters) => {
        let filteredData = [...allJobs];
        let all_filter_data = []
        for (let filterName in selectedFilters) {
            if (selectedFilters[filterName].length === 0) continue;
            filteredData.map(job => {all_filter_data.push(...(filterJobHelper(job,filterName, selectedFilters[filterName])))});
        }
        let optimizedFilters = [...new Set(all_filter_data)] 
        setFilteredJobs(all_filter_data.length > 0 ? optimizedFilters : allJobs);
    }, [allJobs]);

    return (
        <div className="container" style={{marginTop:'50px'}}>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <FilterCard filters={filters} clear_filter={setFilteredJobs} onFilter={handleFilter} />
                </div>
                <div className="col-sm-8">
                    <JobSection allJobs={filteredJobs} />
                </div>
            </div>
        </div>
    );
}

export default Job;
