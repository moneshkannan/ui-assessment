import FilterCard from "../components/FilterCard/FilterCard"
import JobSection from "../components/job_section/JobSection"
import filters from '../data/data.json'
function Job() {
  return (
    <div className="container">
        <br/>
        <div className="row">
            <div className="col-sm-4">
                <FilterCard filters_data={filters}/>
            </div>
            <div className="col-sm-8">
                <JobSection/>
            </div>
        </div>
    </div>
  )
}

export default Job
