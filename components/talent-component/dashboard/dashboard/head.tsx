import { TalentHeadItem } from "@/types/talents/talents";

export default function Headcomponent({title, description}:TalentHeadItem){
  return (
    <div className="flex flex-col border-2 rounded-lg gap-2 bg-white p-4">
      <span>{title}</span>
      <div className="flex border-1 rounded-md p-2 ">
        <p>{description}</p>
      </div>
    </div>
  );
}