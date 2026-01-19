'use client'
import { ProfileHeader } from "@/components/layout/header/ProfileHeader";
import { TabsNavigation } from "@/components/navigation/TabsNavigation";
import ThemeToggle from "@/components/theme-toggle";
import { useTabs } from "@/hooks/useTabs";
import { AnimatePresence, motion } from "motion/react";


export default function Home() {

  const { tabs, activeTab, setActiveTab, ActiveComponent } = useTabs();

  return (
    <main className="flex flex-col items-center min-h-screen p-4 md:p-8">
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <ProfileHeader />

        <div className="flex justify-center my-10">
          <TabsNavigation tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      <div className="relative w-full min-h-[400px] p-4 md:p-8 bg-black/30 rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )

}