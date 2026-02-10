"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { useTheme } from "next-themes";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const { theme } = useTheme();

    const isFrench = locale === "fr";
    const isDarkMode = theme === "dark";

    const toggleLanguage = () => {
        const nextLocale = isFrench ? "en" : "fr";
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className={`hidden md:flex relative w-16 h-8 items-center rounded-full p-1 transition-colors duration-300 ${isDarkMode ? "bg-black/30" : "bg-white/30"}`}
        >
            <span className={`absolute left-2 z-10 text-xs font-bold transition-opacity duration-300 ${!isFrench ? "opacity-100" : "opacity-50"}`}>
                EN
            </span>
            <span className={`absolute right-2 z-10 text-xs font-bold transition-opacity duration-300 ${isFrench ? "opacity-100" : "opacity-50"}`}>
                FR
            </span>
            <span
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isFrench ? "translate-x-8" : "translate-x-0"}`}
            />
        </button>
    );
};
