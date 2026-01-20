import { CloudAlert, Code, Code2, Globe2, Globe2Icon, GlobeLock, GlobeLockIcon, LucideIcon, TabletSmartphoneIcon } from "lucide-react";


export const socialLinks: SocialLink[] = [
    { iconPath: "/icons/socials/gmail.svg", url: "mailto:envidaniel1@gmail.com", name: "Email" },
    { iconPath: "/icons/socials/linkedin.svg", url: "https://linkedin.com/in/envi-daniel", name: "LinkedIn" },
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
        icon: TabletSmartphoneIcon,
        title: "Mobile Development",
        skills: [
            { name: "Expo", iconPath: "/icons/skills/expo.svg" },
            { name: "Flutter", iconPath: "/icons/skills/flutter.svg" }
        ]
    },
    {
        icon: CloudAlert,
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