import React, { useEffect, useState } from 'react';
import HotJobCards from './HotJobCards';

const HotJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/works')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
                {
                    jobs.map(job => <HotJobCards key={job._id} job={job}></HotJobCards>)
                }
            </div>
        </div>
    );
};

export default HotJobs;