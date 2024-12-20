import React from 'react';

const HotJobCards = ({job}) => {
    const {title, location, jobType,category,applicationDeadline, salaryRange, description,company, requirments}= job
    return (
        <div>
            job{title}
        </div>
    );
};

export default HotJobCards;