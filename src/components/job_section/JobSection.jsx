/* eslint-disable react/prop-types */
import "./JobSection.css";
import downArrow from "../../assets/down_arrow_2.svg";
import apple_icon from "../../assets/apple.svg";
import Progress from "../Progress/Progress";
import Save_tag from "../../assets/save.svg";
import {posted_days_count} from '../../helpers/helper.js'

const JobCard = ({item}) => {
  return (
      <div className="js__job_card">
        <div className="js__job_card_head">
          <div className="js__job_card_head_1">
            <img src={apple_icon} />
            <div className="js__job_card_head_data">
              <span className="js__job_card_head_title">
                {item.role}
              </span>
              <span className="js__job_card_head_desc">
                {item.company_name}
              </span>
              <span className="js__job_card_head_desc">
                {item.location}
              </span>
            </div>
          </div>
          <div className="js__job_card_head_2">
            <span style={{ marginRight: "26px", fontWeight: "450" }}>
              Skill match
            </span>
            <div>
              <Progress />
            </div>
          </div>
        </div>
        <div className="js__job_card_sub">
          <div className="js__job_card_sub_1">
            <span>Posted {posted_days_count(item.date_posted)} day ago - 10 applicants</span>
          </div>
          <div className="js__job_card_sub_2">
            <button className="js_apply_btn">APPLY NOW</button>
            <img src={Save_tag} alt="save" />
          </div>
        </div>
      </div>
  );
};

function JobSection({allJobs}) {
  return (
    <div>
      <div className="js__header">
        <div>
          <span className="js__heading">SEARCH RESULTS</span>
          <span className="js__result_header">/JOBS - {allJobs.length} results</span>
        </div>
        <div>
          <span className="js__sort_head">sort by</span>
          <button type="button" className="btn btn-light">
            Latest &nbsp;&nbsp;
            <img src={downArrow} style={{ color: "black" }} alt="latest" />
          </button>
        </div>
      </div>
      <div className="js__bg_card">
        <div className="js__bg_head">JOBS</div>
        {(allJobs && allJobs.length > 0) && allJobs.map((item, index) => {
            return <JobCard key={index} item={item} />
        })}
      </div>
    </div>
  );
}

export default JobSection;
