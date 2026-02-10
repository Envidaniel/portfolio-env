import Image from "next/image";
import { Experience } from "./experience.data";
import { Badge } from "../../ui/Badge";
import { useTranslations } from "next-intl";


interface Props {
    exp: Experience;
    isLast: boolean;
}

export const ExperienceItem = ({ exp, isLast }: Props) => {
    const t = useTranslations('Experience');

    return (
        <div className="flex gap-4 sm:gap-6 group">
            {/* Colonne TimeLine (logo + ligne) */}
            <div className="relative flex flex-col items-center">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-black/40 rounded-xl border border-white/10 p-2 shadow-lg group-hover:border-accent/50 transition-colors">
                    <Image src={exp.logo} alt={exp.company} width={40} height={40}
                        className="object-contain rounded-sm"
                    />
                </div>
                {
                    !isLast && (
                        <div className="w-px bg-gradient-to-b from-border-color to-transparent flex-grow my-2"></div>
                    )
                }
            </div>
            {/*  Contenue */}
            <div className="pb-10 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {exp.company}
                        <span className="ml-2 text-sm font-normal text-secondary/60">
                            • {exp.location}
                        </span>
                    </h3>
                    <time className="text-xs font-mono uppercase tracking-wider text-secondary/70 bg-white/5 px-2 py-1 rounded" >
                        {exp.date}
                    </time>
                </div>

                <p className="text-sm font-medium text-accent/80 mb-4">
                    {t(`roles.${exp.role}` as any)}
                </p>

                <ul className="space-y-2 mb-6">
                    {
                        exp.tasks.map((task, i) => (
                            <li key={i} className="text-secondary text-sm flex gap-2">
                                <span className="text-accent text-lg leading-none">•</span>
                                {t(`tasks.${task}` as any)}
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-wrap gap-2">
                    {
                        exp.tech.map((item) => (
                            <Badge key={item} className="bg-accent/5 border-accent/20 text-[10px] text-accent/90">
                                {item}
                            </Badge>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}