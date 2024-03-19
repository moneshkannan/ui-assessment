/* eslint-disable no-unused-vars */
const posted_days_count =(date)=>{
    const current_date = new Date()
    const diff = current_date - new Date(date)
    return Math.ceil(diff/(1000 * 60 * 60* 24))
}

const posted_date_range =(date) =>{
    const datePosted = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - datePosted;

    // Convert milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays
}

export {posted_date_range, posted_days_count}