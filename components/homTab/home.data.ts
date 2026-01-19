import { Cloud, Code, LucideIcon, TabletSmartphone } from "lucide-react";

interface SocialLink {
    icon: any;
    url: string;
    name: string;
}

export interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

export const socialLinks: SocialLink[] = [
    { icon: MdEmail, url: "mailto:envidaniel1@gmail.com", name: "Email" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/envi-daniel", name: "LinkedIn" },
    { icon: FaMedium, url: "#", name: "Medium" },
    { icon: FaTwitter, url: "https://x.com/envidaniel", name: "Twitter" },
    { icon: FaInstagram, url: "https://www.instagram.com/envi daniel", name: "Instagram" },
    { icon: FaFacebook, url: "https://www.facebook.com/share/envidaniel", name: "Facebook" },
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