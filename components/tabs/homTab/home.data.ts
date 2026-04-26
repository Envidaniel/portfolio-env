import { CloudAlert, Code, Code2, Globe2, Globe2Icon, GlobeLock, GlobeLockIcon, LucideIcon, TabletSmartphoneIcon, ToolCase } from "lucide-react";


export const socialLinks: SocialLink[] = [
    { iconPath: "/icons/socials/gmail.svg", url: "mailto:envidaniel1@gmail.com", name: "Email" },
    { iconPath: "/icons/socials/linkedin.svg", url: "https://www.linkedin.com/in/envi-daniel-8980b7382", name: "LinkedIn" },
    { iconPath: "/icons/socials/x.svg", url: "https://x.com/envidaniel", name: "Twitter" },
    { iconPath: "/icons/socials/github.svg", url: "https://github.com/envidaniel", name: "Github" },
    { iconPath: "/icons/socials/youtube.svg", url: "https://www.youtube.com/@envidaniel", name: "Youtube" }
];

interface SocialLink {
    iconPath: string;
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
        icon: GlobeLockIcon,
        title: "skill_web",
        skills: [
            { name: "React", iconPath: "/icons/skills/react.svg" },
            { name: "Nextjs", iconPath: "/icons/skills/next.svg" },
            { name: "Nodejs", iconPath: "/icons/skills/nodejs.svg" },
            { name: "Nestjs", iconPath: "/icons/skills/nestjs.svg" },
            { name: "Django", iconPath: "/icons/skills/django.svg" },
            { name: "Postgresql", iconPath: "/icons/skills/postgresql.svg" },
            { name: "Mongodb", iconPath: "/icons/skills/mongodb.svg" },
            { name: "Vite", iconPath: "/icons/skills/vitest.svg" }]
    },
    {
        icon: TabletSmartphoneIcon,
        title: "skill_mobile",
        skills: [
            { name: "React Native", iconPath: "/icons/skills/reactNative.svg" },
            { name: "Expo", iconPath: "/icons/skills/expo.svg" },
            // { name: "Flutter", iconPath: "/icons/skills/flutter.svg" },
            { name: "Supabase", iconPath: "/icons/skills/supabase.svg" },
            { name: "Firebase", iconPath: "/icons/skills/firebase.svg" }
        ]
    },
    {
        icon: ToolCase,
        title: "skill_infra",
        skills: [
            { name: "Aws", iconPath: "/icons/skills/aws.svg" },
            { name: "Arduino", iconPath: "/icons/skills/arduino.svg" },
            // { name: "Rust", iconPath: "/icons/skills/rust.svg" },
            { name: "Docker", iconPath: "/icons/skills/docker.svg" },
            { name: "Redis", iconPath: "/icons/skills/redis.svg" },
            // { name: "Kubernetes", iconPath: "/icons/skills/kubernetes.svg" },
            // { name: "Jenkins", iconPath: "/icons/skills/jenkins.svg" },
            { name: "CI/CD Pipelines", iconPath: "/icons/skills/gitActions.svg" },
            { name: "Git", iconPath: "/icons/skills/git.svg" }]
    }
]