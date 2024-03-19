/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './FilterCard.css';
import downArrow from '../../assets/down_arrow.svg';

function FilterCard({ filters, onFilter, filter_count }) {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleCheckboxChange = (filterName, option, isChecked) => {
        setSelectedFilters(prevState => {
            const updatedFilters = { ...prevState };
            updatedFilters[filterName] = updatedFilters[filterName] || [];
            if (isChecked) {
                updatedFilters[filterName].push(option.value);
            } else {
                updatedFilters[filterName] = updatedFilters[filterName].filter(item => item !== option.value);
                if (updatedFilters[filterName].length === 0) {
                    delete updatedFilters[filterName];
                }
            }
            onFilter(updatedFilters);
            return updatedFilters;
        });
    };

    const clearFilters = () => {
        setSelectedFilters({});
        onFilter({});
    };


    return (
        <div>
            <div className="card mb-3 fc__card" style={{ maxWidth: '18rem' }}>
                <div className='fc__header fc__underline'>
                    <div className="card-header">Filter by</div>
                    <div className='fc__filter'>
                        <div style={{fontSize:'12px', fontWeight:'400', left:'15px'}}> {filter_count > 0 && `${filter_count} Filter applied`} </div>
                        <div > {filter_count > 0 && <a className='fc__clear' href='#' onClick={clearFilters}> Clear all</a>} </div>
                    </div>
                </div>
                <div className="card-body">
                    {filters.map((item, index) => {
                        const id = item.filter_name.replace(/\s+/g, '_');
                        return (
                            <React.Fragment key={index}>
                                <div className='fc__header' data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls={id}>
                                    <h5 className="card-title">{item.filter_name}</h5>
                                    <span className="">
                                        <img src={downArrow} alt='company' />
                                    </span>
                                </div>
                                {item.options.map((option, i) => (
                                    <div className="collapse" id={id} key={i}>
                                        <div className="card-body fc__card_body fc__underline">
                                            <div key={option.value}>
                                                <input
                                                    className='fc__check_box'
                                                    type='checkbox'
                                                    id={`${id}_${i}`}
                                                    name={`${id}_${i}`}
                                                    onChange={(e) => handleCheckboxChange(item.filter_name, option, e.target.checked)}
                                                    checked={selectedFilters[item.filter_name]?.includes(option.value) || false}
                                                />
                                                <label className='fc__check_box_label' htmlFor={`${item.filter_name}_${i}`}>{option.label}</label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <br />
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FilterCard;
