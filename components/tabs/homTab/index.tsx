import { Download } from "lucide-react";
import { skillCategories, socialLinks } from "./home.data";
import { SkillCard } from "./skillCard";



export default function HomeTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Section profile */}
            <section className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">About Me</h2>
                <p className="text-secondary leading-relaxed">
                    Je construis et scale des produits SaaS et e-commerce haute performance
                    AWS · EKS · Kubernetes · Docker · TypeScript · Next.js · NestJS
                    Cloud-Native · Scalabilité horizontale · CI/CD · Observability
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {
                        socialLinks.map(link => (
                            <a href={link.url} key={link.name} target="_blank" className="text-secondary hover:text-primary transition-colors">
                                <link.icon size={24} />
                            </a>
                        ))
                    }
                </div>
                <a href="/CV_Envi_Daniel.pdf" download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-all">
                    <Download size={18} />
                    Download my resume
                </a>
            </section>
            {/* Section competences */}
            <section className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold text-accent text-center lg:text-left">Skills</h2>
                <div className="grid gap-6">
                    {
                        skillCategories.map(category => (
                            <SkillCard key={category.title} category={category} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}