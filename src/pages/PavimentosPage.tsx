import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Wrench, TreePine, ArrowRight, CheckCircle } from "lucide-react";
import { useRef, useEffect } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "demarcacion",
        name: "Equipos para Demarcación Vial",
        icon: Truck,
        description: "Diseñamos y fabricamos equipos completos para aplicación de pintura vial, desde camiones de alta capacidad hasta equipos manuales portátiles.",
        types: [
            {
                title: "Camiones Demarcadores",
                subtitle: "Líderes en el mercado colombiano de venta de camiones de demarcación vial",
                description: "Montaje sobre chasis de cliente o suministro integral con sistema completo de demarcación.",
                features: [
                    "Sistema de calentamiento de pintura termoplástica",
                    "Tanques de alta capacidad (500-1000 litros)",
                    "Control automático de dosificación",
                    "Aplicadores de pintura en frío y termoplástica",
                    "Sistema de microesferas",
                    "Controlador IT VIAL IT-V4.0",
                    "Cumplimiento 100% NTC para demarcación"
                ],
                capabilities: [
                    "Líneas continuas y discontinuas",
                    "Símbolos y textos",
                    "Tachas y botones reflectivos",
                    "Control de espesor y ancho"
                ],
                ideal: [
                    "Vías nacionales",
                    "Concesiones",
                    "Municipios y departamentos"
                ],
                image: "/images/solutions/pavimentos/camion-demarcador-operando.webp"
            },
            {
                title: "Máquinas Autopropulsadas",
                description: "Demarcadoras autopropulsadas ideales para trabajos de precisión en espacios reducidos.",
                ideal: [
                    "Parqueaderos",
                    "Vías urbanas",
                    "Aeropuertos",
                    "Zonas peatonales"
                ],
                advantages: [
                    "Operación por un solo trabajador",
                    "Alta precisión en trazado",
                    "Menor costo operativo que camiones",
                    "Fácil transporte"
                ]
            },
            {
                title: "Equipos Manuales",
                description: "Demarcadores portátiles para trabajos pequeños y detallados.",
                applications: [
                    "Pasos peatonales",
                    "Parqueaderos pequeños",
                    "Correcciones y retoques",
                    "Acceso a áreas estrechas"
                ],
                features: [
                    "Motor a gasolina",
                    "Tanque de pintura en frío",
                    "Sistema de aire comprimido",
                    "Pistolas intercambiables",
                    "Portátil y ligero"
                ]
            }
        ]
    },
    {
        id: "selladoras",
        name: "Selladoras de Fisuras",
        icon: Wrench,
        description: "Prevención de daños mayores mediante sellado oportuno de grietas en pavimento.",
        equipment: [
            "Caldera de asfalto caliente",
            "Sistema de aplicación directa",
            "Control de temperatura",
            "Boquillas de diferentes anchos"
        ],
        process: [
            "Limpieza de fisura",
            "Aplicación de emulsión",
            "Relleno con asfalto caliente",
            "Compactación"
        ],
        benefits: [
            "Extiende vida útil del pavimento",
            "Previene baches mayores",
            "Bajo costo de mantenimiento",
            "Aplicación rápida"
        ],
        image: "/images/solutions/pavimentos/selladora-fisuras.webp"
    },
    {
        id: "reciclaje",
        name: "Equipos de Reciclaje de Asfaltos",
        icon: TreePine,
        description: "Soluciones sostenibles para reutilización de materiales asfálticos.",
        options: [
            {
                title: "Reciclaje In Situ",
                features: [
                    "Recuperación directa en la vía",
                    "Mezcla en caliente o en frío",
                    "Reducción de transporte de materiales"
                ]
            },
            {
                title: "Planta Móvil de Recuperación",
                features: [
                    "Procesamiento de RAP (Reclaimed Asphalt Pavement)",
                    "Producción de mezcla asfáltica reciclada",
                    "Cumplimiento especificaciones técnicas"
                ]
            }
        ],
        environmental: [
            "Reducción de uso de agregados vírgenes",
            "Menor emisión de CO2",
            "Ahorro económico hasta 40%",
            "Sostenibilidad en proyectos viales"
        ]
    }
];

export default function PavimentosPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, me gustaría recibir más información sobre sus equipos para pavimentos y camiones demarcadores.");
        return () => resetWAMessage();
    }, []);

    const pavimentosSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Equipos para Pavimentos",
        "description": "Equipos de demarcación vial, máquinas autopropulsadas y selladoras de fisuras de fabricación nacional.",
        "brand": {
            "@type": "Brand",
            "name": "IT VIAL"
        },
        "category": "Infraestructura Vial / Maquinaria",
        "manufacturer": {
            "@type": "Organization",
            "name": "IT VIAL SAS"
        }
    };

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Equipos para Pavimentos | IT VIAL SAS"
                description="Líderes en equipos de demarcación vial, selladoras de fisuras y reciclaje de asfaltos en Colombia."
                schema={pavimentosSchema}
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
                            Equipos para <span className="text-gradient-primary">Pavimentos</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Soluciones integrales para mantenimiento vial: demarcación, sellado de fisuras y reciclaje de asfaltos
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

                                {/* Types (for Demarcación) */}
                                {product.types && (
                                    <div className="space-y-10">
                                        {product.types.map((type, i) => (
                                            <div key={i} className="border-l-4 border-primary pl-6">
                                                <h3 className="font-display text-2xl font-semibold mb-2">{type.title}</h3>
                                                {type.subtitle && (
                                                    <p className="text-sm text-primary font-semibold mb-3">{type.subtitle}</p>
                                                )}
                                                <p className="text-muted-foreground mb-6">{type.description}</p>

                                                {/* @ts-ignore */}
                                                {type.image && (
                                                    <div className="rounded-xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                                                        <img
                                                            /* @ts-ignore */
                                                            src={type.image}
                                                            alt={type.title}
                                                            className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                )}

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    {type.features && (
                                                        <div>
                                                            <h4 className="font-semibold text-primary mb-3">Especificaciones:</h4>
                                                            <ul className="space-y-2">
                                                                {type.features?.map((feature, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                                        {feature}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {type.capabilities && (
                                                        <div>
                                                            <h4 className="font-semibold text-accent mb-3">Capacidades:</h4>
                                                            <ul className="space-y-2">
                                                                {type.capabilities?.map((cap, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <span className="text-accent mt-1">→</span>
                                                                        {cap}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {type.ideal && (
                                                        <div>
                                                            <h4 className="font-semibold text-primary mb-3">Ideal para:</h4>
                                                            <ul className="space-y-2">
                                                                {type.ideal?.map((item, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <span className="text-primary mt-1">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {type.advantages && (
                                                        <div>
                                                            <h4 className="font-semibold text-accent mb-3">Ventajas:</h4>
                                                            <ul className="space-y-2">
                                                                {type.advantages?.map((adv, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                                        {adv}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {type.applications && (
                                                        <div className="md:col-span-2">
                                                            <h4 className="font-semibold text-primary mb-3">Aplicaciones:</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {type.applications?.map((app, idx) => (
                                                                    <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                                                        {app}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {'clients' in type && type.clients && (
                                                    <div className="mt-6 pt-6 border-t border-border">
                                                        <h4 className="font-semibold mb-3">Clientes Destacados:</h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {(type.clients as string[])?.map((client: string, idx: number) => (
                                                                <span key={idx} className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                                                                    ✓ {client}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Equipment & Process (for Selladoras) */}
                                {product.equipment && (
                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="font-semibold text-primary mb-4">El Equipo Incluye:</h4>
                                            <ul className="space-y-2">
                                                {product.equipment.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-accent mb-4">Proceso:</h4>
                                            <ol className="space-y-2">
                                                {product.process?.map((step, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent font-semibold text-xs shrink-0">
                                                            {idx + 1}
                                                        </span>
                                                        {step}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                )}

                                {product.benefits && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Beneficios:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Options (for Reciclaje) */}
                                {product.options && (
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        {product.options.map((option, idx) => (
                                            <div key={idx} className="border border-border rounded-lg p-6">
                                                <h4 className="font-semibold text-lg mb-4">{option.title}</h4>
                                                <ul className="space-y-2">
                                                    {option.features?.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <span className="text-primary mt-1">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {product.environmental && (
                                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <TreePine className="h-5 w-5 text-green-500" />
                                            Ventajas Ambientales
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.environmental.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-green-500 mt-1">🌱</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-sm transition-colors"
                                    >
                                        Consultar Especificaciones <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Ficha Técnica <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <a
                                        href={getWhatsAppLink(`Hola, estoy interesado en el producto: ${product.name}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/20 bg-green-500/10 text-green-500 font-semibold hover:bg-green-500/20 transition-colors"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center glass-card rounded-2xl p-12"
                >
                    <h3 className="font-display text-2xl font-bold mb-4">
                        ¿Necesita Equipos para su <span className="text-gradient-primary">Proyecto Vial</span>?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Contamos con equipos de fabricación nacional y personal técnico capacitado para asesorarlo
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Contactar Asesor <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
