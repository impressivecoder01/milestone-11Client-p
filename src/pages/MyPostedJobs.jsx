import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/works?email=${user.email}`)
        .then(res=> res.json())
        .then(data=> {
            setJobs(data)
        })
    }, [user.email])

        return (
        <div>
            <h1>My posted Jobs {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;