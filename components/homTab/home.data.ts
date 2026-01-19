import { Cloud, Code, Github, Linkedin, LucideIcon, Mail, TabletSmartphone, X, Youtube } from "lucide-react";

interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>
    url: string;
    name: string;
}

export interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

export const socialLinks: SocialLink[] = [
    { icon: Mail, url: "mailto:envidaniel1@gmail.com", name: "Email" },
    { icon: Linkedin, url: "https://linkedin.com/in/envi-daniel", name: "LinkedIn" },
    { icon: X, url: "https://x.com/envidaniel", name: "Twitter" },
    { icon: Github, url: "https://github.com/envidaniel", name: "Github" },
    { icon: Youtube, url: "https://www.youtube.com/@envidaniel", name: "Youtube" }
];

export const skillCategories: SkillCategory[] = [
    {
        icon: Code,
        title: "Web Development",
        skills: ["react", "nextjs", "nodejs", "nestjs", "postgresql", "mongodb", "vite"]
    },
    {
        icon: TabletSmartphone,
        title: "Mobile Development",
        skills: ["react native", "expo", "flutter"]
    },
    {
        icon: Cloud,
        title: "DevOps & Cloud",
        skills: ["aws", "azure", "google cloud", "docker", "kubernetes", "jenkins", "CI/CD Pipelines", "git"]
    }
]