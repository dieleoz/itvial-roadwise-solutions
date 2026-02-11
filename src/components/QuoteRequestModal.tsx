import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Trash2, CheckCircle2, Building2, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import { useState } from "react";
import { toast } from "sonner";

interface QuoteRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
    const { state, dispatch } = useQuote();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        dispatch({ type: "CLEAR_QUOTE" });
        toast.success("Solicitud enviada exitosamente");

        setTimeout(() => {
            setIsSuccess(false);
            onClose();
        }, 3000);
    };

    const removeItem = (id: string) => {
        dispatch({ type: "REMOVE_ITEM", id });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-4xl max-h-[90vh] glass-card rounded-2xl shadow-2xl overflow-hidden border border-primary/20 flex flex-col md:flex-row"
                >
                    {/* Left Side: Summary */}
                    <div className="w-full md:w-2/5 p-8 bg-secondary/30 border-b md:border-b-0 md:border-r border-border overflow-y-auto">
                        <h2 className="font-display text-2xl font-bold mb-6">Mi Cotización</h2>

                        {state.items.length === 0 ? (
                            <p className="text-muted-foreground italic">No hay productos seleccionados.</p>
                        ) : (
                            <div className="space-y-4">
                                {state.items.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border group">
                                        <div>
                                            <p className="text-sm font-semibold">{item.name}</p>
                                            <p className="text-[10px] text-primary uppercase font-bold">{item.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-muted-foreground hover:text-destructive p-1 transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <h4 className="text-xs font-bold text-primary uppercase mb-2">Resumen</h4>
                            <p className="text-sm text-muted-foreground">
                                Total de productos: <span className="text-foreground font-bold">{state.items.length}</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-3/5 p-8 bg-card overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="h-10 w-10 text-success" />
                                </div>
                                <h3 className="text-2xl font-bold">¡Solicitud Enviada!</h3>
                                <p className="text-muted-foreground">
                                    Hemos recibido su requerimiento. Un asesor experto se pondrá en contacto con usted en menos de 24 horas hábiles.
                                </p>
                                <div className="pt-6">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Código de solicitud: #{Math.floor(Math.random() * 10000)}</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-2">Solicitar Presupuesto</h3>
                                <p className="text-sm text-muted-foreground mb-8">
                                    Complete los datos para recibir una propuesta técnica y económica detallada.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                                                <User className="h-3 w-3" /> Nombre Completo
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                                                placeholder="Ej: Juan Pérez"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                                                <Building2 className="h-3 w-3" /> Empresa / Entidad
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                                                placeholder="Ej: Concesión Vial S.A."
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                                                <Mail className="h-3 w-3" /> Email Corporativo
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                                                placeholder="juan@empresa.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                                                <Phone className="h-3 w-3" /> Teléfono / WhatsApp
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                                                placeholder="+57 300 123 4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-muted-foreground flex items-center gap-2">
                                            <MessageSquare className="h-3 w-3" /> Descripción del Proyecto
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                            placeholder="Cuéntenos sobre su proyecto para brindarle la mejor asesoría..."
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || state.items.length === 0}
                                            className="w-full bg-gradient-primary text-primary-foreground font-bold py-3 rounded-xl shadow-glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Enviando...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    <span>Enviar Solicitud de Cotización</span>
                                                </>
                                            )}
                                        </button>
                                        <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
                                            Al enviar, usted acepta el tratamiento de sus datos personales según nuestra política de privacidad.
                                        </p>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
