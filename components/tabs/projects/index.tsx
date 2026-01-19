import { useGithubProjects } from "@/hooks/useGithubProjects";
import { AlertTriangle, Loader } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailsModal } from "./projectDetailsModal";
import { FullProjectDetails, GitHubProject } from "@/types/projects";
import { DEFAULT_PROJECT_DETAILS, PROJECT_DETAILS_MAP } from "./project.data";


export default function ProjectsTab() {
    const [projects, loading, error] = useGithubProjects('envi-daniel');
    const [selectedProject, setSelectedProject] = useState<FullProjectDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction pour ouvrir la modale proprement

    const handleOpenModal = (project: GitHubProject) => {
        const extraDetails = PROJECT_DETAILS_MAP[project.name] || DEFAULT_PROJECT_DETAILS;
        setSelectedProject({ ...project, ...extraDetails });
        setIsModalOpen(true);
    }

    if (loading) return <div className="flex justify-center py-20"><Loader className="animate-spin text-accent" /></div>

    if (error) return (
        <div className="text-center py-20">
            <AlertTriangle className="mx-auto text-red-500 mb-4" />
            <p className="text-red-400">Impossible de charger les projets GitHub</p>
        </div>
    );

    return (
        <section>
            <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Open Source Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={() => handleOpenModal(project)}  // on appelle notre fonction ici
                    />
                ))}
            </div>
            {/*  La modale recoit l'etat et la fonction pour fermer */}
            <ProjectDetailsModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )

}