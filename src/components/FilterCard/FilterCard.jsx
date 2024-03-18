/* eslint-disable react/prop-types */
import React from 'react'
import './FilterCard.css'
import downArrow from '../../assets/down_arrow.svg'


// const filter_ui = (item, ind) => {
//     console.log(item)
//     return <React.Fragment>
//         <div className='fc__header' data-bs-toggle="collapse" href={`#${item}`} role="button" aria-expanded="false" aria-controls={item} key={ind}>
//                     <h5 className="card-title">{item.filter_name}</h5>
//                     <span className="" >
//                         <img src={downArrow} alt='company'/>
//                     </span>
//                 </div>
//                 {item.options.map((i, n) =>{
//                     <div className="collapse" id={item.filter_name} key={n}>
//                     <div className="card-body fc__card_body fc__underline">
//                         <div>
//                             <input className='fc__check_box' type='checkbox' id={`company_${n}`} name={`company_${n}`} value={i}/>
//                             <label className='fc__check_box_label' htmlFor={`company_${n}`}> {i}</label>
//                         </div>
//                     </div>
//                 </div>
//                 })}
//     </React.Fragment>
// }

const filter_ui = (item, index) => {
    console.log(item);
    // Replace spaces in filter_name with underscores
    const id = item.filter_name.replace(/\s+/g, '_');
    return (
        <React.Fragment key={index}>
            <div className='fc__header' data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls={id}>
                <h5 className="card-title">{item.filter_name}</h5>
                <span className="">
                    <img src={downArrow} alt='company'/>
                </span>
            </div>
            {item.options.map((option, i) => (
                <div className="collapse" id={id} key={i}>
                    <div className="card-body fc__card_body fc__underline">
                        <div>
                            <input className='fc__check_box' type='checkbox' id={`${id}_${i}`} name={`${id}_${i}`} value={option}/>
                            <label className='fc__check_box_label' htmlFor={`${id}_${i}`}>{option}</label>
                        </div>
                    </div>
                </div>
            ))}
            <br/>
        </React.Fragment>
    );
};


function FilterCard({filters_data}) {
  return (
    <div>
        <div className="card mb-3 fc__card" style={{maxWidth: '18rem'}} >
            <div className='fc__header fc__underline'>
                <div className="card-header">Filter by</div>
                <div> 3 Filter applied</div>
            </div>
            <div className="card-body">
                {filters_data.length > 0 && filters_data.map((item, ind) =>{
                    return filter_ui(item, ind)
                })}
                
            </div>
        </div>
    </div>
  )
}

export default FilterCard
