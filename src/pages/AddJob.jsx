import React from "react";

const AddJob = () => {
  return (
    <div>
      <h1 className="text-3xl">Post a new job</h1>
      <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
        <form className="card-body">
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
              <span className="label-text">Job Location</span>
            </label>
            <select className="select select-bordered w-full max-w-xs">
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
            <select className="select select-bordered w-full max-w-xs">
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
            
            <select className="select select-bordered w-full max-w-xs">
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
            
            <textarea className="textarea" placeholder="Description" name="description"></textarea>
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
            
            <textarea className="textarea" placeholder="Put Each Requirements in a new line" name="requirements"></textarea>
          </div>
          {/* responsibilities */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibility</span>
            </label>
            
            <textarea className="textarea" placeholder="Put Each Responsibility in a new line" name="requirements"></textarea>
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
