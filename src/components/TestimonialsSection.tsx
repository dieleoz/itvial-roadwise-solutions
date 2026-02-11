import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "IT VIAL nos ha proporcionado soluciones tecnológicas de vanguardia para nuestra concesión. Los PMV y sistemas ITS han mejorado significativamente la seguridad vial.",
        author: "Ing. Carlos Mendoza",
        position: "Director Técnico",
        company: "Concesión Neiva-Girardot",
        project: "Implementación de 15 PMV y 8 Estaciones SOS"
    },
    {
        quote: "Los camiones demarcadores de IT VIAL son los mejores del mercado colombiano. La calidad de la demarcación y la durabilidad superan nuestras expectativas.",
        author: "María Fernanda López",
        position: "Gerente de Operaciones",
        company: "Concesión Pacífico Tres",
        project: "Demarcación de 120 km de vía"
    },
    {
        quote: "El retroreflectómetro SAT-LUX con conectividad IoT ha revolucionado nuestro control de calidad. Los informes automáticos nos ahorran tiempo y garantizan cumplimiento normativo.",
        author: "Ing. Roberto Sánchez",
        position: "Jefe de Calidad",
        company: "Constructora Colpatria",
        project: "Control de calidad en 5 proyectos viales"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Lo Que Dicen <span className="text-gradient-primary">Nuestros Clientes</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Testimonios reales de empresas y entidades que confían en nuestras soluciones tecnológicas
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-300 group"
                        >
                            {/* Quote Icon */}
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <Quote className="h-6 w-6 text-primary" />
                            </div>

                            {/* Quote Text */}
                            <p className="text-muted-foreground mb-6 italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Project Badge */}
                            <div className="mb-6 p-3 rounded-lg bg-accent/10 border border-accent/20">
                                <p className="text-xs font-semibold text-accent mb-1">Proyecto:</p>
                                <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                            </div>

                            {/* Author Info */}
                            <div className="border-t border-border pt-4">
                                <p className="font-semibold mb-1">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                                <p className="text-sm text-primary font-medium mt-1">{testimonial.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-4">
                        ¿Quiere ser parte de nuestros casos de éxito?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                    >
                        Solicitar Cotización
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
