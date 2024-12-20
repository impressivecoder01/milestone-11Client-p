// import { p } from "motion/react-client";
import React from "react";

const HotJobCards = ({ job }) => {
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
    company_logo
  } = job;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <div className="flex items-center py-1 gap-2">
        <figure>
          <img
          className="w-9 h-9"
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div className="flex items-center gap-2">
            <h5 className="text-2xl font-bold">{company}</h5>
            <p>{location}</p>
        </div>
        </div>
        
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="flex gap-2 flex-wrap">
                {
                    requirements.map(requirement => <p className="border rounded-md hover:bg-slate-500 hover:text-white hover:cursor-pointer text-center">{requirement}</p>)
                }
            </div>
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCards;
