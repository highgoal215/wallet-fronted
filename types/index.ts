import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface AdminPanelIcon {
  label: string;
  pageTitle: string;
  icon: string;
  path: string;
}
export interface TalentedLandingDatas {
  icon: string;
  title: string;
  description: string;
}
export interface TrendingSkillsItems {
  title: string;
  percentage: string;
}
export interface OrganizationComponentItems {
  icon: "building" | "file";
  title: string;
  description: string;
}
export interface JobsItems {
  title: string;
  company: string;
  type: string;
  location: string;
  skills: Array<{
    name: string;
    color: string;
  }>;
}
export interface TalentsItems {
  icon: string;
  name: string;
  role: string;
}
export interface OrgLandingComponentItems {
  icon: string;
  title: string;
  description: string;
  button: string;
}
export interface Certification {
  title: string;
  institution: string;
  year: string;
  status: string;
  description: string;
}
export interface JobExperience {
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  salary: string;
  isCurrentJob: boolean;
  startDate: {
    year: string;
    month: string;
  };
  endDate: {
    year: string;
    month: string;
  };
  description: string;
  enjoyed: string[];
  challenges: string[];
}

export interface Project {
  title: string;
  type: string;
  status: string;
  budgetRange: string;
  description: string;
}

export interface Project {
  title: string;
  client: string;
  budget: string;
  duration: string;
  skills: string[];
}

export interface Course {
  title: string;
  provider: string;
  duration: string;
  image: string;
  providerLogo?: string;
}

export interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export interface TalentsManagementIcon {
  label: string;
  pageTitle: string;
  icon: string;
  path: string;
}