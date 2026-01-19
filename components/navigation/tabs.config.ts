import { Home, Briefcase, Code, Award, LucideIcon } from "lucide-react";
import HomeTab from "../homTab";
import ExperienceTab from "../experience";
import ProjectsTab from "../projects";


export interface TabConfig {
    id: string;
    label: string;
    icon: LucideIcon;
    component: React.ComponentType;
}

export const tabs: TabConfig[] = [
    { id: "home", label: "Home", icon: Home, component: HomeTab },
    { id: "experience", label: "Experience", icon: Briefcase, component: ExperienceTab },
    { id: "projects", label: "Projects", icon: Code, component: ProjectsTab },
];
