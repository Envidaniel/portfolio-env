// src/app/components/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    // On utilise ce state pour éviter les problèmes d'hydratation
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-16 h-8" />; // Un placeholder pour éviter le décalage
    }

    const isDarkMode = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-black/30" : "bg-white/30"}`}
        >
            <span className="absolute left-1 z-10">
                <Sun size={18} className="text-yellow-400" />
            </span>
            <span className="absolute right-1 z-10">
                <Moon size={18} className="text-black" />
            </span>
            <span
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? "translate-x-8" : "translate-x-0"}`}
            />
        </button>
    );
};