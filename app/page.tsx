"use client";

import { useTabs } from "@/hooks/useTabs";
import { AnimatePresence, motion } from "motion/react";
import { ProfileHeader } from "@/components/layout/header/ProfileHeader";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { tabs, activeTab, setActiveTab, ActiveComponent } = useTabs();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      {/* Bouton de Thème */}
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <ProfileHeader />

        {/* --- Navigation par Onglets Stylisée --- */}
        <div className="flex justify-center my-10">
          <nav className="flex space-x-1 p-2 bg-card-bg/50 border border-border-color rounded-full backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none ${activeTab === tab.id ? "text-primary" : "text-primary hover:text-secondary"
                  }`}
              >
                {/* La Bulle Animée (Fond de l'onglet actif) */}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 z-10 bg-white/10 border border-white/20 shadow-sm"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Contenu du bouton (Icon + Label) */}
                <span className="relative z-20 flex items-center gap-2">
                  <tab.icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* --- Conteneur de Contenu avec Effet de Lueur (Glow) --- */}
        <div className="group relative w-full min-h-[400px] p-4 md:p-8 bg-card-bg border border-border-color rounded-2xl shadow-2xl backdrop-blur-xl transition-all duration-500">

          {/* L'effet de dégradé au survol (Glow Effect) */}
          <div
            className="absolute -inset-px bg-linear-to-r from-accent to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {ActiveComponent && <ActiveComponent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}