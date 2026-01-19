import { AnimatePresence, motion } from "motion/react";
import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Content */}
                    <motion.div
                        className="relative w-full max-w-3xl rounded-2xl bg-black border border-white/10 p-6 shadow-2xl overflow-y-auto max-h-[90vh] z-10"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-primary z-20">
                            <X size={24} />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};