import { GitHubProject } from "@/types/projects";
import { ExternalLink, FolderGit2, ZoomIn } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
    project: GitHubProject;
    index: number;
    onClick: () => void;
}



export const ProjectCard = ({ project, index, onClick }: Props) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
        <div className="group h-full flex flex-col bg-card-bg p-4 rounded-xl  border border-border-color hover:border-accent/50 transition-all">
            <div className="relative w-full h-44 mb-4  rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
                <Image
                    src={`/images/projects/${project.name}.jpg`}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { (e.currentTarget as any).src = '/images/projects/default.jpg'; }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white h-8 w-8" />
                </div>
            </div>

            <h3 className="text-lg font-bold text-primary mb-2">{project.name}</h3>
            <p className="text-secondary text-sm flex-grow line-clamp-2 mb-4">{project.description}</p>

            <div className="flex gap-4 pt-4 border-t border-white/5">
                <a href={project.html_url} target="_blank" className="flex items-center gap-2 text-secondary hover:text-accent"><FolderGit2 size={14} />Code</a>
                {project.demoUrl && <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 text-xs text-secondary hover:text-accent"><ExternalLink size={14} />Demo</a>}
            </div>

        </div>
    </motion.div>
)