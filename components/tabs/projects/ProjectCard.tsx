import { GitHubProject } from "@/types/projects";
import { ExternalLink, FolderGit2, ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";


interface Props {
    project: GitHubProject;
    index: number;
    onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <div className="group h-full flex flex-col bg-card-bg p-4 rounded-xl border border-border-color hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/5">
                {/* Image Section */}
                <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
                    <Image
                        src={`/images/projects/${project.name}.png`}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as any).src = '/images/projects/default.png'; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="text-white h-8 w-8" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.name}
                    </h3>

                    {/* Description Améliorée : Plus de line-clamp pour afficher tout le texte */}
                    <p className="text-secondary text-sm leading-relaxed mb-6 whitespace-pre-line">
                        {project.description || "Aucune description fournie pour ce projet."}
                    </p>
                </div>

                {/* Footer Section */}
                <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-medium text-secondary hover:text-accent transition-colors"
                    >
                        <FolderGit2 size={16} />
                        <span>Source</span>
                    </a>

                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-medium text-secondary hover:text-accent transition-colors"
                        >
                            <ExternalLink size={16} />
                            <span>Démo Live</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
};