"use client";
import { motion } from "motion/react"


interface Tab {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>
    component: React.ReactNode;
}

interface TabsNavigationProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
}

export function TabsNavigation({ tabs, activeTab, onChange }: TabsNavigationProps) {
    return (
        <div className="flex justify-center mb-8">
            <div className="flex space-x-1 sm:space-x-2 p-2 bg-black/20 rounded-full border border-white/10 backdrop-blur-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className="relative rounded-full px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base font-medium text-white"
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 bg-white/10 border border-white/20"
                                style={{ borderRadius: 9999 }}
                            />
                        )}
                        <span className="relative flex items-center gap-2">
                            <tab.icon size={16} />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
