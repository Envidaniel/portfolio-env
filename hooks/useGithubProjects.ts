import { GitHubProject } from "@/types/projects";
import { useEffect, useState } from "react";


export function useGithubProjects(username: string) {
    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!res.ok) throw new Error('Github Api error');

                const repos = await res.json();
                const ownedRepos = repos.filter((repo: GitHubProject) => !repo.fork && repo.owner?.login === username);
                setProjects(ownedRepos);

            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false)
            }
        }
        fetchProjects();
    }, [username])
    return [projects, loading, error] as const;
}