import { FullProjectDetails } from "@/types/projects";
import { Modal } from "../ui/Modal";
import Image from "next/image";
import { ExternalLink, FolderGit } from "lucide-react";


interface Props {
    project: FullProjectDetails | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProjectDetailsModal = ({ project, isOpen, onClose }: Props) => {
    if (!project) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-accent">{project.name}</h3>
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-white/10">
                    <Image
                        src={`/projects/${project.name}.png`}
                        alt={project.name}
                        fill
                        className="object-cover"
                        onError={(e) => { (e.currentTarget as any).src = '/projects/default.png'; }} />
                </div>

                <div className="text-secondary leading-relaxed">
                    <p>{project.detailedDescription}</p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map(tech => (
                            <div key={tech} className="flex items-center justify-center p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" title={tech}>
                                <Image src={`/logos/${tech}.svg`} alt={tech} width={28} height={28} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-6 pt-6 border-t border-white/10">
                <a href={project.html_url} target="_blank" className="flex items-center gap-2 text-primary hover:text-accent font-medium">
                    <FolderGit size={30} /> Code source
                </a>
                {
                    project.homepage && (
                        <a href={project.homepage} target="_blank" className="flex items-center gap-2 text-primary hover:text-accent font-medium">
                            <ExternalLink size={20} /> Démo live
                        </a>
                    )
                }
            </div>

        </Modal>
    )
}