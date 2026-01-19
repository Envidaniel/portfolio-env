

export interface Experience {
    role: string;
    company: string;
    location: string;
    logo: string;
    date: string;
    tasks: string[];
    tech: string[]
}

export const experienceData: Experience[] = [
    {
        role: "stage",
        company: "EvoluData",
        location: "Canada, Usa",
        logo: "/logos/evoludata.svg",
        date: "November 2024 - December 2024",
        tasks: [
            "collaborate and see how the large team work",
            "build a full-stack web application for traine"
        ],
        tech: ['api', 'mysql', 'php', 'javascript', 'git']
    },
    {
        role: "frontend",
        company: "Remote",
        location: 'Lumbumbashi, Drc',
        logo: "/logos/remote.svg",
        date: "01 December 2025 - 15 December 2025",
        tasks: [
            "integrate a store for a ecommerce dog shop using nextjs"
        ],
        tech: ['nextjs', 'css', 'next-intl',]
    },
    {
        role: "frontend engineer",
        company: "Evotech",
        location: "Butembo, Drc",
        logo: "/logos/nexah.svg",
        date: "April 2025 - Present",
        tasks: [
            "Build a bloc web app using nextjs for test the company",
        ],
        tech: ['nextjs', 'tailwindcss', 'typescript', 'react', 'framer-motion']
    },
    {
        role: "iot stage",
        company: "KiloVolt lab",
        location: "Goma",
        logo: "/logos/kilovolt.svg",
        date: "December 2024 - December 2024",
        tasks: [
            "Build a foot score with arduino",
            "learn how a api works and using postman"
        ],
        tech: ['arduino', 'api', 'postman', 'php']
    }

]