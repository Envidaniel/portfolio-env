
export interface GitHubProject {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    homepage: string | null;
    fork?: boolean;
    owner?: { login: string };
    demoUrl?: string;
}

export interface ProjectDatails {
    detailedDescription: string;
    demoUrl?: string;
    techStack: string[];
}

// type combiner pour la modale

export type FullProjectDetails = GitHubProject & ProjectDatails;