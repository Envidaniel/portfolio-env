import { ProjectDatails } from "@/types/projects";


export const PROJECT_DETAILS_MAP: Record<string, ProjectDatails> = {
    'online-vote': {
        detailedDescription: 'A modern voting platform built with Next.js and Supabase. Users can create polls, add candidates, publish polls, and share them with their community. Voters must be authenticated, and the platform',
        techStack: ['nextjs', 'supabase', 'zod', 'google cloud']
    },
    'LuxeShop': {
        detailedDescription: 'A modern voting platform built with Next.js and Supabase. Users can create polls, add candidates, publish polls, and share them with their community. Voters must be authenticated, and the platform',
        demoUrl: "https://luxe-shop-chi.vercel.app/",
        techStack: ['nextjs', 'supabase', 'zod', 'google cloud']
    },
    'Hermes': {
        detailedDescription: 'A modern voting platform built with Next.js and Supabase. Users can create polls, add candidates, publish polls, and share them with their community. Voters must be authenticated, and the platform',
        techStack: ['nextjs', 'supabase', 'zod', 'google cloud']
    },
    'Excelxiore': {
        detailedDescription: 'A modern voting platform built with Next.js and Supabase. Users can create polls, add candidates, publish polls, and share them with their community. Voters must be authenticated, and the platform',
        demoUrl: "https://excelxiore.vercel.app/",
        techStack: ['nextjs', 'supabase', 'zod', 'google cloud']
    },
    'E-Commerce-Social-Media-App': {
        detailedDescription: "Ecommerce application for people who want to sell their products",
        techStack: ["nextjs", "react", "typescript", "tailwind", "zustand", 'zod', "next-auth"]
    },
    'portfolio-env': {
        detailedDescription: "Ce portfolio a été construit avec Next.js pour un rendu rapide...",
        demoUrl: "https://google.com",
        techStack: ["nextjs", "react", "typescript", "tailwind", "framermotion"],
    },
};

export const DEFAULT_PROJECT_DETAILS: ProjectDatails = {
    detailedDescription: "Pas de détails supplémentaires disponibles pour ce projet open-source.",
    demoUrl: "mauvaise lien",
    techStack: ["github", "git"]
};