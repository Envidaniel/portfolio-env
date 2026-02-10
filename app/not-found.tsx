"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="fixed min-h-screen inset-0 flex items-center justify-center bg-background">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-6 text-center px-4"
            >
                {/* IMAGE – centré à 100% */}
                <div className="flex justify-center w-full">
                    <Image
                        src="/images/projects/default.jpg"
                        alt="Illustration 404"
                        width={520}
                        height={320}
                        priority
                        className="block max-w-md w-full object-contain"
                    />
                </div>

                {/* TEXTE */}
                <h1 className="text-5xl font-extrabold tracking-tight">
                    404
                </h1>

                <p className="max-w-md text-muted-foreground text-lg">
                    Oups… cette page a disparu dans le néant du web.
                </p>

                {/* CTA */}
                <Link
                    href="/"
                    className="mt-4 inline-flex items-center justify-center rounded-xl border px-6 py-3 font-medium transition hover:bg-muted"
                >
                    ← Retour à l’accueil
                </Link>
            </motion.div>
        </main>
    );
}
