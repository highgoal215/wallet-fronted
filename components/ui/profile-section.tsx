import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Code, Link as LinkIcon } from "lucide-react";

interface ProfileSectionProps {
  icon: "file-text" | "code" | "link";
  title: string;
  buttonText?: string;
  skills?: string[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  icon,
  title,
  buttonText,
  skills,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "file-text":
        return <FileText className="w-5 h-5 text-blue-700" />;
      case "code":
        return <Code className="w-5 h-5 text-blue-700" />;
      case "link":
        return <LinkIcon className="w-5 h-5 text-blue-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-md p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        {getIcon()}
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>

      {skills ? (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : buttonText ? (
        <Button
          variant="outline"
          className="mt-auto w-full text-gray-700 border-gray-300 hover:bg-gray-50"
        >
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
};

export default ProfileSection;
