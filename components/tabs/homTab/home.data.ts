import { Cloud, Code, Github, Linkedin, LucideIcon, Mail, TabletSmartphone, X, Youtube } from "lucide-react";

export const socialLinks: SocialLink[] = [
    { icon: Mail, url: "mailto:envidaniel1@gmail.com", name: "Email" },
    { icon: Linkedin, url: "https://linkedin.com/in/envi-daniel", name: "LinkedIn" },
    { icon: X, url: "https://x.com/envidaniel", name: "Twitter" },
    { icon: Github, url: "https://github.com/envidaniel", name: "Github" },
    { icon: Youtube, url: "https://www.youtube.com/@envidaniel", name: "Youtube" }
];

interface SocialLink {
    icon: React.ComponentType<{ size?: number; className?: string }>
    url: string;
    name: string;
}

export interface Skill {
    name: string;
    iconPath: string;
}

export interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: Skill[];
}


export const skillCategories: SkillCategory[] = [
    {
        icon: Code,
        title: "Web Development",
        skills: [
            { name: "React", iconPath: "/icons/skills/react.svg" },
            { name: "Nextjs", iconPath: "/icons/skills/next.svg" },
            { name: "Nodejs", iconPath: "/icons/skills/nodejs.svg" },
            { name: "Nestjs", iconPath: "/icons/skills/nestjs.svg" },
            { name: "Postgresql", iconPath: "/icons/skills/postgresql.svg" },
            { name: "Mongodb", iconPath: "/icons/skills/mongodb.svg" },
            { name: "Vite", iconPath: "/icons/skills/vitest.svg" }]
    },
    {
        icon: TabletSmartphone,
        title: "Mobile Development",
        skills: [
            { name: "Expo", iconPath: "/icons/skills/expo.svg" },
            { name: "Flutter", iconPath: "/icons/skills/flutter.svg" }
        ]
    },
    {
        icon: Cloud,
        title: "DevOps & Cloud",
        skills: [
            { name: "Aws", iconPath: "/icons/skills/aws.svg" },
            { name: "Azure", iconPath: "/icons/skills/azure.svg" },
            { name: "Google cloud", iconPath: "/icons/skills/googleCloud.svg" },
            { name: "Docker", iconPath: "/icons/skills/docker.svg" },
            { name: "Kubernetes", iconPath: "/icons/skills/kubernetes.svg" },
            { name: "Jenkins", iconPath: "/icons/skills/jenkins.svg" },
            { name: "CI/CD Pipelines", iconPath: "/icons/skills/gitActions.svg" },
            { name: "Git", iconPath: "/icons/skills/git.svg" }]
    }
]