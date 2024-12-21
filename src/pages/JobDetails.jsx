import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    const {
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        company_logo, _id
      } = data;
    console.log(data)
    return (
        <div>
            <h1>Job Title: {title}</h1>
            {location} <br />
            {jobType} <br />
            {category} <br />
            {applicationDeadline} <br />
            {/* {salaryRange} */}
            {description} <br />
            {company} <br />
            {/* {requirements} */}
            {/* {} */}
        </div>
    );
};

export default JobDetails;