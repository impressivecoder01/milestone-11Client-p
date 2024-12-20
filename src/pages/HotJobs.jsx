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
            <div className='grid grid-cols-1 md:grid-cols-2, lg:grid-cols-4 gap-2'>
                {
                    jobs.map(job => <HotJobCards key={job._id} job={job}></HotJobCards>)
                }
            </div>
        </div>
    );
};

export default HotJobs;