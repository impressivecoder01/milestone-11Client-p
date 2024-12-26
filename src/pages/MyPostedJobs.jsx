import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/works?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
//   const {title,location,category,applicationDeadline,description,hr_name,company_logo} = jobs
  return (
    <div>
      <h1>My posted Jobs {jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {
                jobs.map(job => <tr key={job._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={job.company_logo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job.hr_name}</div>
                          <div className="text-sm opacity-50">{job.applicationDeadline}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {job.location}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                       {job.description}
                      </span>
                    </td>
                    <td>
                        <Link to={`/viewApplications/${job._id}`}><button className="btn btn-link">View Applications</button></Link>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">X</button>
                    </th>
                  </tr>)
            }
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
