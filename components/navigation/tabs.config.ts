import { Home, Briefcase, Code, Award } from "lucide-react";
import HomeTab from "../homTab";
import ExperienceTab from "../experience";
import { ProjectCard } from "../projects/ProjectCard";

export const tabs = [
    { id: "home", label: "Home", icon: Home, component: HomeTab },
    { id: "experience", label: "Experience", icon: Briefcase, component: ExperienceTab },
    { id: "projects", label: "Projects", icon: Code, component: ProjectCard },
];
