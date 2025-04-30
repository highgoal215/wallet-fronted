import { TalentedLandingData } from "@/app/data/icon/super-admin-panel/talentedlanding";
import { TalentedLandingDatas } from "@/types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/react";
import Image from "next/image";

export default function Landing_Component({
  icon,
  title,
  description,
}: TalentedLandingDatas) {
  return (
    <Card className="flex justify-center items-center w-full sm:max-w-[300px] lg:max-w-[400px] p-4 sm:p-6 hover:shadow-lg  transform transition duration-300 hover:scale-105 shadow-md border-2 border-gray-200">
      <div className="flex flex-col justify-between items-center gap-10 w-full ">
        <CardHeader className="flex justify-center items-center p-0">
          <Image
            alt="icon"
            height={100}
            width={100}
            // className=" w-full"
            src={icon}
          />
        </CardHeader>
        <CardBody className="flex justify-center items-center p-0">
          <p className="text-center text-xl sm:text-3xl font-bold">
            {title}
          </p>
        </CardBody>
        <CardFooter className="flex justify-center items-center p-0">
          <p className="text-center text-xl sm:text-lg text-gray-600">
            {description}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
