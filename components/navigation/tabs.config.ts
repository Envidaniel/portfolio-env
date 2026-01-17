import { Home, Briefcase, Code, Award } from "lucide-react";
import HomeTab from "../tabs/HomeTab";
import ExperienceTab from "../tabs/ExperienceTab";
import ProjectsTab from "../tabs/ProjectsTab";
import CertificationsTab from "../tabs/CertificationsTab";

export const tabs = [
    { id: "home", label: "Home", icon: Home, component: HomeTab },
    { id: "experience", label: "Experience", icon: Briefcase, component: ExperienceTab },
    { id: "projects", label: "Projects", icon: Code, component: ProjectsTab },
    { id: "certifications", label: "Certifications", icon: Award, component: CertificationsTab },
];
