import React from "react";
import { Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  jobType: "Full-time" | "Remote" | "Contract";
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  description,
  jobType,
}) => {
  const getBadgeColor = () => {
    switch (jobType) {
      case "Full-time":
        return "bg-green-100 text-green-800";
      case "Remote":
        return "bg-blue-100 text-blue-800";
      case "Contract":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="border rounded-lg p-5 bg-white">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <span className={`px-2 py-1 text-xs rounded ${getBadgeColor()}`}>
          {jobType}
        </span>
      </div>

      <div className="flex items-center gap-1 text-gray-600 text-sm mb-1">
        <Building className="w-4 h-4" />
        <span>{company}</span>
      </div>

      <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>

      <p className="text-gray-700 mb-4 text-sm">{description}</p>

      <Button className="w-full bg-blue-600 hover:bg-blue-700">
        Apply Now
      </Button>
    </div>
  );
};

export default JobCard;
