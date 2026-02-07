'use client'
import { CalendarArrowDown, Download } from "lucide-react";
import { skillCategories, socialLinks } from "./home.data";
import { SkillCard } from "./skillCard";
import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";



export default function HomeTab() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            })
        })()
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Section profile */}
            <section className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-3xl font-bold text-accent">About Me</h2>
                <p className="text-primary leading-relaxed">

                    Que vous soyez  startups et PME je vous aide à bâtir des solutions logicielles et IoT performantes, pensées pour la scalabilité, la sécurité et la croissance.De l’idée au déploiement :
                    Web & Mobile (SaaS, E-commerce)-IoT & systèmes connectés intelligents 📩 Discutons de votre projet dès maintenant.

                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {
                        socialLinks.map(link => (
                            <a href={link.url} key={link.name} target="_blank" className="text-primary hover:text-primary transition-colors">
                                <Image
                                    src={link.iconPath}
                                    alt={link.name}
                                    width={18}
                                    height={18}
                                />
                            </a>
                        ))
                    }
                </div>
                <a href="/envi_resume.pdf" download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-all">
                    <Download size={18} />
                    Download my resume
                </a>
                <button
                    data-cal-link="envi-daniel-x89z9v"
                    data-cal-config='{"layout":"month_view"}'
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent font-semibold rounded-full border border-accent/30 hover:bg-accent/20 transition-all">
                    <CalendarArrowDown size={18} />
                    Book a meeting
                </button>
            </section>
            {/* Section skills */}
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