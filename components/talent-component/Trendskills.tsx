import { TrendingSkillsItems } from "@/types";

export default function TrendskillsComponent({ title, percentage }: TrendingSkillsItems) {
  return(
   
        <div className="flex flex-row justify-between gap-2 p-3 bg-white">
            <div>{title}</div>
            <div>{percentage}</div>
        </div>


  )
}
