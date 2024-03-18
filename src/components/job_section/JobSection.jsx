import './JobSection.css'
import downArrow from '../../assets/down_arrow_2.svg'
import apple_icon from '../../assets/apple.svg'
import Progress from '../Progress/Progress'
import Save_tag from '../../assets/save.svg'

function JobSection() {
  return (
    <div>
        <div className='js__header'>
            <div>
                <span className='js__heading'>SEARCH RESULTS</span>
                <span className='js__result_header'>/JOBS - 2049 results</span>
            </div>
            <div>
                <span className='js__sort_head'>sort by</span>
                <button type="button" className="btn btn-light">
                    Latest &nbsp;&nbsp;
                    <img src={downArrow} style={{color: 'black'}} alt='latest'/>
                </button>
            </div>
        </div>
        <div className='js__bg_card'>
            <div className='js__bg_head'>
                JOBS
            </div>
            <div className='js__job_card'>
                <div className='js__job_card_head'>
                    <div className='js__job_card_head_1'>
                        <img src={apple_icon}/>
                        <div className='js__job_card_head_data'>
                            <span className='js__job_card_head_title'>Junior Art Assistant</span>
                            <span className='js__job_card_head_desc'>Apple Incorporations</span>
                            <span className='js__job_card_head_desc'>Mumbai, Maharastra, India</span>
                        </div>
                    </div>
                    <div className='js__job_card_head_2'>
                        <span style={{marginRight:'26px',fontWeight:'450'}}>Skill match</span>
                        <div>
                            <Progress/>
                        </div>
                    </div>
                </div>
                <div className='js__job_card_sub'>
                    <div className='js__job_card_sub_1'>
                        <span>Posted 1 day ago - 10 applicants</span>
                    </div>
                    <div className='js__job_card_sub_2'>
                        <button className='js_apply_btn'>APPLY NOW</button>
                        <img src={Save_tag} alt='save'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobSection
