import { useGithubProjects } from "@/hooks/useGithubProjects";
import { AlertTriangle, Loader } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECT_DETAILS_MAP } from "./project.data";

export default function ProjectsTab() {
    const [projects, loading, error] = useGithubProjects('Envidaniel');

    if (loading) return (
        <div className="flex justify-center py-20">
            <Loader className="animate-spin text-accent" />
        </div>
    );

    if (error) return (
        <div className="text-center py-20">
            <AlertTriangle className="mx-auto text-red-500 mb-4" />
            <p className="text-red-400">Impossible de charger les projets GitHub</p>
        </div>
    );

    return (
        <section>
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                    .filter((project) => PROJECT_DETAILS_MAP.hasOwnProperty(project.name))
                    .map((project, index) => {
                        const extraDetails = PROJECT_DETAILS_MAP[project.name];

                        // On fusionne les données de GitHub avec tes démos manuelles
                        const enrichedProject = {
                            ...project,
                            demoUrl: extraDetails?.demoUrl || project.homepage || ""
                        };

                        return (
                            <ProjectCard
                                key={project.id}
                                project={enrichedProject}
                                index={index}
                                // On passe une fonction vide car la modale n'existe plus
                                onClick={() => { }}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
}