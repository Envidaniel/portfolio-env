import { experienceData } from "./experience.data";
import { ExperienceItem } from "./ExperienceItem";


export default function ExperienceTab() {
    return (
        <section className="max-w-3xl mx-auto py-4">
            <header className="mb-12 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent mb-8 text-center">Professional Experience</h2>
            </header>
            <div className="relative">
                {
                    experienceData.map((exp, index) => (
                        <ExperienceItem
                            key={`${exp.company}-${index}`}
                            exp={exp}
                            isLast={index === experienceData.length - 1}
                        />
                    ))
                }
            </div>
        </section>
    )
}