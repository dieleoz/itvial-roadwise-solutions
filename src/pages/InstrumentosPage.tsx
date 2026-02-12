import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ruler, Eye, ArrowRight, Smartphone, MapPin, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "horizontal",
        name: "Retroreflectómetro Horizontal SAT-LUX",
        icon: Ruler,
        description: "Equipo de precisión para medición de retroreflectividad en pintura vial horizontal según normas ASTM E1710.",
        features: [
            "Medición de retroreflectividad en mcd/lx/m²",
            "Conectividad IoT vía Bluetooth",
            "App móvil para Android/iOS",
            "Geolocalización GPS de mediciones",
            "Generación automática de informes",
            "Base de datos en la nube",
            "Batería recargable de larga duración"
        ],
        models: [
            {
                name: "SAT-LUX 45/30",
                spec: "Geometría 45°/30°"
            },
            {
                name: "SAT-LUX 15/30",
                spec: "Geometría 15°/30°"
            }
        ],
        compliance: [
            "ASTM E1710",
            "Normas INVIAS",
            "Manual de Señalización Vial Colombia"
        ],
        appFeatures: [
            "Interfaz intuitiva RTH_IoT",
            "Sincronización automática",
            "Exportación de datos (PDF, Excel)",
            "Mapas de calor de retroreflectividad",
            "Alertas de valores bajo mínimos"
        ],
        image: "/images/solutions/instrumentos/retroreflectometros.webp",
        appImage: "/images/solutions/instrumentos/app-rth-iot.webp"
    },
    {
        id: "vertical",
        name: "Retroreflectómetro Vertical",
        icon: Eye,
        description: "Evaluación del estado de señales verticales de tránsito para mantenimiento predictivo y cumplimiento normativo.",
        functions: [
            "Medición en geometría estándar",
            "Evaluación por colores (blanco, amarillo, rojo, verde, azul)",
            "Clasificación según tipo de lámina reflectiva",
            "Historial de mediciones por señal",
            "Alertas por valores bajo mínimos"
        ],
        capabilities: [
            "Programación de mantenimiento predictivo",
            "Cumplimiento normativo garantizado",
            "Control de calidad de señales nuevas",
            "Auditorías de inventario vial"
        ],
        models: [
            {
                name: "SATLUX-V",
                spec: "Portátil tipo pistola"
            },
            {
                name: "SATLUX 45/30 y 15/30",
                spec: "Portátiles tipo caja"
            }
        ]
    }
];

export default function InstrumentosPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, deseo información sobre el Retroreflectómetro SAT-LUX y sus instrumentos de medición vial.");
        return () => resetWAMessage();
    }, []);

    const instrumentosSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Instrumentos para las Vías",
        "description": "Equipos de medición de retroreflectividad horizontal y vertical con integración IoT.",
        "brand": {
            "@type": "Brand",
            "name": "IT VIAL"
        },
        "category": "Infraestructura Vial / Instrumentación",
        "manufacturer": {
            "@type": "Organization",
            "name": "IT VIAL SAS"
        }
    };

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Instrumentos de Medición IoT | IT VIAL SAS"
                description="Retroreflectómetros horizontales y verticales con tecnología IoT para control de calidad en señalización vial."
                schema={instrumentosSchema}
            />
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-dark-section overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Instrumentos de Medición <span className="text-gradient-primary">con IoT</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Equipos de precisión para control de calidad y cumplimiento normativo en señalización vial
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products */}
            <div className="container mx-auto px-4 mt-16">
                <div className="space-y-20">
                    {products.map((product, index) => (
                        <motion.section
                            key={product.id}
                            id={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="scroll-mt-24"
                        >
                            <div className="glass-card rounded-2xl p-8 md:p-12">
                                {/* Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <product.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-3xl font-bold mb-3">{product.name}</h2>
                                        <p className="text-lg text-muted-foreground">{product.description}</p>

                                        {/* @ts-ignore */}
                                        {product.image && (
                                            <div className="rounded-xl overflow-hidden mt-6 border border-white/10 shadow-2xl">
                                                <img
                                                    /* @ts-ignore */
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Features */}
                                {product.features && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Características:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Functions */}
                                {product.functions && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Funciones:</h4>
                                        <ul className="space-y-2">
                                            {product.functions.map((func, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">•</span>
                                                    {func}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Capabilities */}
                                {product.capabilities && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-accent mb-4">Permite:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.capabilities.map((cap, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <ArrowRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                    {cap}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* App Features (for Horizontal) */}
                                {product.appFeatures && (
                                    <div className="mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                                        <div className="flex flex-col md:flex-row gap-6 items-center">
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                                    <Smartphone className="h-5 w-5 text-blue-500" />
                                                    App Móvil RTH_IoT
                                                </h4>
                                                <ul className="grid md:grid-cols-2 gap-3">
                                                    {product.appFeatures.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <span className="text-blue-500 mt-1">📱</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* @ts-ignore */}
                                            {product.appImage && (
                                                <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg border border-white/10">
                                                    <img
                                                        /* @ts-ignore */
                                                        src={product.appImage}
                                                        alt="App Interface"
                                                        className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Models */}
                                {product.models && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4">Modelos Disponibles:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {product.models.map((model, idx) => (
                                                <div key={idx} className="border border-border rounded-lg p-4">
                                                    <h5 className="font-semibold text-primary mb-1">{model.name}</h5>
                                                    <p className="text-sm text-muted-foreground">{model.spec}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Compliance */}
                                {product.compliance && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4">Cumple con:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.compliance.map((norm, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-lg bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20">
                                                    ✓ {norm}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Cotización <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <a
                                        href={getWhatsAppLink(`Hola, estoy interesado en el producto: ${product.name}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/20 bg-green-500/10 text-green-500 font-semibold hover:bg-green-500/20 transition-colors"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                    {product.id === "horizontal" && (
                                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                            <FileText className="h-4 w-4" />
                                            Video Tutorial
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass-card rounded-2xl p-12"
                >
                    <h3 className="font-display text-2xl font-bold mb-8 text-center">
                        Beneficios de la <span className="text-gradient-primary">Medición IoT</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Geolocalización</h4>
                            <p className="text-sm text-muted-foreground">
                                Cada medición queda registrada con coordenadas GPS para trazabilidad completa
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Smartphone className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Conectividad</h4>
                            <p className="text-sm text-muted-foreground">
                                Sincronización automática con la nube y acceso desde cualquier dispositivo
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Informes Automáticos</h4>
                            <p className="text-sm text-muted-foreground">
                                Generación instantánea de reportes técnicos en PDF y Excel
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center glass-card rounded-2xl p-12"
                >
                    <h3 className="font-display text-2xl font-bold mb-4">
                        ¿Necesita <span className="text-gradient-primary">Equipos de Medición</span>?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Solicite una demostración en campo de nuestros retroreflectómetros con tecnología IoT
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Agendar Demostración <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
