import { ProjectDatails } from "@/types/projects";


export const PROJECT_DETAILS_MAP: Record<string, ProjectDatails> = {
    'portofolio-alex-dembele': {
        detailedDescription: "Ce portfolio a été construit avec Next.js pour un rendu rapide...",
        techStack: ["nextjs", "react", "typescript", "tailwind", "framermotion"],
    },
    'k8s-multi-cloud-deployment': {
        detailedDescription: "Déploiement multi-cloud (AWS, GCP, Azure) d'une application...",
        techStack: ["kubernetes", "docker", "aws", "terraform", "helm", "argocd"]
    },
    // Ajoute les noms exacts de tes repos GitHub ici
};

export const DEFAULT_PROJECT_DETAILS: ProjectDatails = {
    detailedDescription: "Pas de détails supplémentaires disponibles pour ce projet open-source.",
    techStack: ["github", "git"]
};