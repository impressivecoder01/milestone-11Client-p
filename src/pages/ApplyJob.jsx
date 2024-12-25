import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  //   console.log(id,user);
  const submitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.name.value;
    const github = form.name.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume);
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    fetch('http://localhost:5000/jobs_application',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        navigate('/myApplications')
    })
  };
  return (
    <div>
      <div className="card bg-base-100 max-w-6xl mx-auto  shadow-2xl">
        <h1 className="text-5xl font-bold text-center">Submit now!</h1>
        <form onSubmit={submitApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              type="url"
              placeholder="LinkedIn ID"
              name="linkedIn"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub</span>
            </label>
            <input
              type="url"
              placeholder="GitHub"
              name="github"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume</span>
            </label>
            <input
              type="url"
              placeholder="Resume"
              name="resume"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
