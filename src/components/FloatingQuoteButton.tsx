import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ShoppingCart } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import { useState } from "react";
import QuoteRequestModal from "./QuoteRequestModal";

export default function FloatingQuoteButton() {
    const { state } = useQuote();
    const [isOpen, setIsOpen] = useState(false);
    const itemCount = state.items.length;

    if (itemCount === 0) return null;

    return (
        <>
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-40 w-16 h-16 rounded-full bg-gradient-primary text-white shadow-glow-primary flex items-center justify-center border-2 border-white/20 backdrop-blur-md"
            >
                <FileText className="h-7 w-7" />
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-background">
                    {itemCount}
                </span>
            </motion.button>

            <QuoteRequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
