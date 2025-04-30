import React from "react";
import JobCard from "@/components/talent-component/talentedpublic/jobcard";
import { Button } from "@/components/ui/button";
const JobsSection = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      description:
        "Join our team to build modern web applications using React, TypeScript, and other cutting-edge technologies.",
      jobType: "Full-time" as const,
    },
    {
      title: "Product Designer",
      company: "Design Co.",
      location: "Remote",
      description:
        "Create beautiful and intuitive user interfaces for our next-generation products.",
      jobType: "Remote" as const,
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Systems Ltd.",
      location: "New York, NY",
      description:
        "Help us build and maintain our cloud infrastructure using AWS, Kubernetes, and Docker.",
      jobType: "Contract" as const,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Jobs Tailored for You
        </h2>
        {/* <a
          href="#"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View All Jobs
        </a> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            jobType={job.jobType}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
