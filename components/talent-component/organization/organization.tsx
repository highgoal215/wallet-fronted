import { OrganizationComponentItems } from "@/types";
import Image from "next/image";
export function OrganizationsList({icon, title, description}: OrganizationComponentItems) {
  return (
    <div className="flex w-full flex-row justify-start items-center ">
      <div>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className="flex flex-col ">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
  );
}
