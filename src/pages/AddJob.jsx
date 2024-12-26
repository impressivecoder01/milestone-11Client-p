import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddJob = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData)
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      });
  };
  return (
    <div>
      <h1 className="text-3xl">Post a new job</h1>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
          {/* Job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job title</span>
            </label>
            <input
              type="text"
              placeholder="Job title"
              name="jobTitle"
              className="input input-bordered"
              required
            />
          </div>
          {/* location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              placeholder="Job Location"
              name="jobLocation"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Job type
              </option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Job Field
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
          {/* salary range */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="number"
                placeholder="Max"
                name="max"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Min"
                name="min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                name="currency"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>

            <textarea
              className="textarea"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          {/* company name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              name="companyName"
              className="input input-bordered"
              required
            />
          </div>
          {/* requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>

            <textarea
              className="textarea"
              placeholder="Put Each Requirements in a new line"
              name="requirements"
            ></textarea>
          </div>
          {/* responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibility</span>
            </label>

            <textarea
              className="textarea"
              placeholder="Put Each Responsibility in a new line"
              name="responsibilities"
            ></textarea>
          </div>
          {/* hr name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              placeholder="HR Name"
              name="hr_name"
              className="input input-bordered"
              required
            />
          </div>
          {/* hr email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              placeholder="HR Email"
              name="hr_email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          {/* application deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              placeholder="Deadline"
              name="applicationDeadline"
              
              className="input input-bordered"
              required
            />
          </div>
          {/* company logo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="url"
              placeholder="Company Logo"
              name="companyLogo"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit btn */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
