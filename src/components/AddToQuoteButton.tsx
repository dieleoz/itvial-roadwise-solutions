import { Plus, Check, FileText } from "lucide-react";
import { useQuote, QuoteItem } from "@/context/QuoteContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface AddToQuoteButtonProps {
    item: QuoteItem;
    className?: string;
    variant?: "default" | "outline" | "ghost";
}

export default function AddToQuoteButton({ item, className = "", variant = "default" }: AddToQuoteButtonProps) {
    const { state, dispatch } = useQuote();
    const isSelected = state.items.some((i) => i.id === item.id);

    const handleToggle = () => {
        if (isSelected) {
            dispatch({ type: "REMOVE_ITEM", id: item.id });
            toast.info(`${item.name} eliminado de la cotización`);
        } else {
            dispatch({ type: "ADD_ITEM", item });
            toast.success(`${item.name} añadido a la cotización`);
        }
    };

    const baseStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300";
    const variants = {
        default: isSelected
            ? "bg-accent text-accent-foreground shadow-glow-accent"
            : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary",
        outline: isSelected
            ? "border-2 border-accent text-accent bg-accent/10"
            : "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: isSelected
            ? "text-accent bg-accent/10"
            : "text-muted-foreground hover:text-primary hover:bg-primary/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <AnimatePresence mode="wait">
                {isSelected ? (
                    <motion.div
                        key="selected"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <Check className="h-4 w-4" />
                        <span>En Cotización</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="not-selected"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Cotizar</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
