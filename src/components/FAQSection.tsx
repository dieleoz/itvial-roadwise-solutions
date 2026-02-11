import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "¿Qué productos y servicios ofrece IT VIAL?",
        answer: "Ofrecemos soluciones completas en 5 categorías: Sistemas Inteligentes de Transporte (ITS) con PMV, radares y estaciones SOS; Equipos para Pavimentos incluyendo camiones demarcadores; Instrumentos de Medición con tecnología IoT; Señalización Vial completa; y Servicios Adicionales como alquiler de grúa y aplicación de marcas viales."
    },
    {
        question: "¿Fabrican los productos en Colombia?",
        answer: "Sí, el 100% de nuestros productos son diseñados y fabricados en Colombia. Contamos con taller propio en Bogotá donde realizamos todo el proceso: diseño, fabricación, galvanizado, ensamble y pruebas. Esto nos permite ofrecer soluciones a medida y soporte local inmediato."
    },
    {
        question: "¿Cumplen con las normas colombianas?",
        answer: "Absolutamente. Todos nuestros productos cumplen con las normas técnicas colombianas (NTC), el Manual de Señalización Vial vigente, normas INVIAS, ASTM internacionales y contamos con certificación ISO 9001:2015. Cada producto incluye certificados de cumplimiento."
    },
    {
        question: "¿Qué garantía ofrecen en sus productos?",
        answer: "Ofrecemos garantías diferenciadas según el producto: 5 años en estructuras metálicas, 2-3 años en equipos electrónicos como PMV y radares, y 1 año en equipos mecánicos. Además, brindamos soporte técnico continuo y servicio post-venta en todo Colombia."
    },
    {
        question: "¿Pueden personalizar productos según necesidades específicas?",
        answer: "Sí, una de nuestras fortalezas es la capacidad de customización. Al fabricar localmente, podemos adaptar dimensiones, especificaciones técnicas, colores, y funcionalidades según los requerimientos específicos de cada proyecto. Trabajamos de la mano con nuestros clientes desde el diseño."
    },
    {
        question: "¿Cuánto tiempo toma la entrega de un proyecto?",
        answer: "Los tiempos varían según la complejidad: productos estándar como señales verticales toman 2-3 semanas; equipos especializados como PMV o camiones demarcadores entre 4-8 semanas; y proyectos llave en mano con instalación pueden tomar 2-4 meses. Siempre establecemos cronogramas claros desde la cotización."
    },
    {
        question: "¿Ofrecen capacitación para el uso de los equipos?",
        answer: "Sí, incluimos capacitación técnica completa para todos nuestros equipos especializados. Esto incluye operación, mantenimiento preventivo, solución de problemas básicos y uso de software cuando aplica. La capacitación puede ser presencial en nuestras instalaciones o en sitio."
    },
    {
        question: "¿Trabajan con concesiones viales y entidades públicas?",
        answer: "Sí, tenemos amplia experiencia con concesiones viales, INVIAS, ANI, gobernaciones y alcaldías. Cumplimos todos los requisitos de contratación pública y contamos con referencias verificables en más de 50 proyectos con entidades públicas y privadas en 15 departamentos de Colombia."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-dark-section">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Preguntas <span className="text-gradient-primary">Frecuentes</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Respuestas a las consultas más comunes sobre nuestros productos y servicios
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                            >
                                <span className="font-semibold text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <div className="shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5 text-primary" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-primary" />
                                    )}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
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
                        ¿Tiene otra pregunta?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                    >
                        Contáctenos
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
