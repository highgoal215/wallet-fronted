import { JobsItems } from "@/types";
import { Badge } from "@heroui/react";

export function JobsComponent({
  title,
  company,
  type,
  location,
  skills,
}: JobsItems) {
  return (
    <div className="flex w-full flex-col justify-around">
      <div className="flex flex-col gap-1 sm:gap-2">
        <p className="text-sm sm:text-base font-medium">{title}</p>
        <p className="text-xs sm:text-sm text-gray-600">
          {company} • {type} • {location}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="flat"
              className={`${skill.color} border-0 text-xs sm:text-sm`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
        <hr/>
      </div>
    </div>
  );
}
