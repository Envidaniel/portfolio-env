"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export const CursorTrail = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

    // Utilisation de springs pour un mouvement fluide et organique
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-glow), 0.15), transparent 80%)`,
            }}
        />
    );
};