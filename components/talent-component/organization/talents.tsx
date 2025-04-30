
import Image from "next/image";
import { TalentsItems } from "@/types";
export function FeaturedTalents({ icon, name, role }: TalentsItems) {
  return (
    <div className="flex w-full flex-row justify-start items-center ">
      <div>
        <Image src={icon} alt={icon} width={40} height={40} />
      </div>
      <div className="flex flex-col ">
        <div className="text-lg font-bold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}
