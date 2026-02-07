import { ProjectDatails } from "@/types/projects";


export const PROJECT_DETAILS_MAP: Record<string, ProjectDatails> = {
    'online-vote': {
        detailedDescription: 'A modern voting platform built with Next.js and Supabase. Users can create polls, add candidates, publish polls, and share them with their community. Voters must be authenticated, and the platform',
        demoUrl: "https://google.com",
        techStack: ['nextjs', 'supabase', 'zod', 'google cloud']
    },
    'portfolio-env': {
        detailedDescription: "Ce portfolio a été construit avec Next.js pour un rendu rapide...",
        demoUrl: "https://google.com",
        techStack: ["nextjs", "react", "typescript", "tailwind", "framermotion"],
    },
    'blog-api': {
        detailedDescription: "Déploiement multi-cloud (AWS, GCP, Azure) d'une application...",
        demoUrl: "https://google.com",
        techStack: ["kubernetes", "docker", "aws", "terraform", "helm", "argocd"]
    },
    'ecommerce-social-media-app': {
        detailedDescription: "Ecommerce application for people who want to sell their products",
        demoUrl: "https://google.com",
        techStack: ["nextjs", "react", "typescript", "tailwind", "zustand", 'zod', "next-auth"]
    },
    'Quoti-front': {
        detailedDescription: "Quoti est une application web développée avec React.js pour le frontend et NestJS pour le backend. Elle permet de gérer une librairie de citations tirées de livres que nous aimons, avec des fonctionnalités complètes pour la gestion des : Auteurs, Livres,Citations,Utilisateurs,Catégories....",
        demoUrl: "https://google.com",
        techStack: ["React", "axios", "postman", "tanstack-query", "nestjs"]
    }
    // Ajoute les noms exacts de tes repos GitHub ici
};

export const DEFAULT_PROJECT_DETAILS: ProjectDatails = {
    detailedDescription: "Pas de détails supplémentaires disponibles pour ce projet open-source.",
    demoUrl: "mauvaise lien",
    techStack: ["github", "git"]
};