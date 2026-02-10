

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
        logo: "/images/company/evoludata.png",
        date: "November 2024 - December 2024",
        tasks: [
            "evolu_1",
            "evolu_2"
        ],
        tech: ['api', 'mysql', 'php', 'javascript', 'git']
    },
    {
        role: "frontend",
        company: "Remote",
        location: "Lumbumbashi, Drc",
        logo: "/images/company/remote.jpg",
        date: "01 December 2025 - 15 December 2025",
        tasks: [
            "remote_1"
        ],
        tech: ['nextjs', 'css', 'next-intl',]
    },
    {
        role: "frontend_engineer",
        company: "Evotech",
        location: "Butembo, Drc",
        logo: "/images/company/evoTech.jpg",
        date: "April 2025 - April 2025",
        tasks: [
            "evotech_1"
        ],
        tech: ['nextjs', 'tailwindcss', 'typescript', 'react', 'framer-motion']
    },
    {
        role: "iot_stage",
        company: "KiloVolt lab",
        location: "Goma",
        logo: "/images/company/kilo.jpg",
        date: "December 2024 - December 2024",
        tasks: [
            "kilo_1",
            "kilo_2"
        ],
        tech: ['arduino', 'api', 'postman', 'php']
    },
    {
        role: "frontend",
        company: "Remote",
        location: "Lumbumbashi, Drc",
        logo: "/images/company/remote.jpg",
        date: "March 2024 - october 2024",
        tasks: [
            "remote_2",
            "remote_3"
        ],
        tech: ['reactjs', 'shadcn', 'swagger', 'axios', 'zustand', 'zod',]
    }
]