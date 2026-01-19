import { LucideIcon } from "lucide-react"
import Image from "next/image";
import { SkillCategory } from "./home.data";


interface SkillCardProps {
    category: SkillCategory;
}

export const SkillCard = ({ category }: SkillCardProps) => (
    <div className="p-6 bg-card-bg border border-border-color rounded-xl hover:border-accent/40 transition-all">
        <div className="flex items-center gap-3 mb-4">
            <category.icon className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-primary">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
            {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-center p-2 bg-gray-700/30 rounded-full  hover:grayscale-0 transition-all">
                    <Image

                        src={skill.iconPath}
                        alt={skill.name}
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    </div>
)