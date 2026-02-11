import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CarFront, Truck, Download, ArrowRight, CheckCircle,
    Clock, Shield, Users, Wrench, Phone, Calendar
} from "lucide-react";

const services = [
    {
        id: "grua",
        name: "Alquiler de Grúa de Canastilla",
        icon: CarFront,
        description: "Servicio profesional de alquiler de grúa con canastilla para trabajos en altura en señalización vial y mantenimiento de infraestructura.",
        specs: [
            {
                label: "Alcance Vertical",
                value: "18 metros"
            },
            {
                label: "Alcance Horizontal",
                value: "12 metros"
            },
            {
                label: "Capacidad de Canastilla",
                value: "200 kg (2 personas)"
            },
            {
                label: "Tipo de Vehículo",
                value: "Camión con estabilizadores"
            }
        ],
        features: [
            "Operador certificado incluido",
            "Seguro de responsabilidad civil",
            "Equipo de protección personal (EPP)",
            "Mantenimiento preventivo garantizado",
            "Disponibilidad 24/7 para emergencias",
            "Movilización incluida en Bogotá y alrededores"
        ],
        applications: [
            {
                category: "Señalización Vial",
                tasks: [
                    "Instalación de señales elevadas",
                    "Montaje de pórticos y banderas",
                    "Mantenimiento de PMV",
                    "Instalación de semáforos"
                ]
            },
            {
                category: "Infraestructura",
                tasks: [
                    "Mantenimiento de luminarias",
                    "Instalación de cámaras CCTV",
                    "Trabajos en estructuras metálicas",
                    "Inspección de puentes"
                ]
            },
            {
                category: "Otros Servicios",
                tasks: [
                    "Poda de árboles en vías",
                    "Limpieza de fachadas",
                    "Instalación de publicidad exterior",
                    "Mantenimiento industrial"
                ]
            }
        ],
        rates: [
            {
                plan: "Por Hora",
                price: "Desde $180,000 COP/hora",
                ideal: "Trabajos cortos y puntuales",
                includes: ["Operador", "Combustible", "Seguro"]
            },
            {
                plan: "Por Día",
                price: "Desde $1,200,000 COP/día",
                ideal: "Proyectos de jornada completa",
                includes: ["8 horas", "Operador", "Combustible", "Seguro"]
            },
            {
                plan: "Por Proyecto",
                price: "Propuesta técnica personalizada",
                ideal: "Contratos de largo plazo",
                includes: ["Tarifa preferencial", "Disponibilidad garantizada", "Soporte técnico"]
            }
        ],
        safety: [
            "Operador con licencia C2 vigente",
            "Certificación en trabajo en alturas",
            "Inspección diaria del equipo",
            "Póliza de seguro actualizada",
            "Cumplimiento Resolución 1409 de 2012"
        ]
    },
    {
        id: "demarcacion-servicio",
        name: "Aplicación de Marcas Viales",
        icon: Truck,
        description: "Servicio profesional de demarcación vial con equipos propios de fabricación IT VIAL y personal técnico altamente capacitado.",
        services: [
            {
                type: "Demarcación en Carreteras",
                description: "Líneas de eje, borde, y demarcación completa de vías principales",
                materials: ["Pintura termoplástica", "Microesferas de vidrio", "Pintura de tráfico"],
                equipment: "Camiones demarcadores IT VIAL"
            },
            {
                type: "Demarcación Urbana",
                description: "Pasos peatonales, zonas escolares, ciclorrutas y señalización urbana",
                materials: ["Termoplástico", "Pintura en frío", "Tachas reflectivas"],
                equipment: "Máquinas autopropulsadas y equipos manuales"
            },
            {
                type: "Parqueaderos",
                description: "Diseño y demarcación completa de estacionamientos públicos y privados",
                materials: ["Pintura epóxica", "Pintura de tráfico", "Símbolos personalizados"],
                equipment: "Equipos manuales de precisión"
            },
            {
                type: "Mantenimiento Vial",
                description: "Repintado y mantenimiento de marcas existentes",
                materials: ["Según especificación original"],
                equipment: "Equipos versátiles para todo tipo de trabajo"
            }
        ],
        process: [
            {
                step: "Inspección y Diagnóstico",
                description: "Evaluación del estado actual y medición de retroreflectividad"
            },
            {
                step: "Diseño y Presupuesto",
                description: "Plano de demarcación y propuesta técnica detallada"
            },
            {
                step: "Preparación de Superficie",
                description: "Limpieza y acondicionamiento del pavimento"
            },
            {
                step: "Aplicación de Material",
                description: "Demarcación con equipos IT VIAL y materiales certificados"
            },
            {
                step: "Control de Calidad",
                description: "Medición de espesor, retroreflectividad y color"
            },
            {
                step: "Entrega y Garantía",
                description: "Acta de entrega con certificado de calidad"
            }
        ],
        advantages: [
            "Equipos de fabricación propia IT VIAL",
            "Personal técnico certificado",
            "Materiales que cumplen NTC 1360 y 4744",
            "Control de calidad con retroreflectómetro SAT-LUX",
            "Garantía de durabilidad según material",
            "Disponibilidad para trabajos nocturnos",
            "Señalización temporal incluida"
        ],
        clients: [
            "Concesiones viales",
            "Alcaldías municipales",
            "Centros comerciales",
            "Conjuntos residenciales",
            "Empresas de construcción",
            "Aeropuertos y terminales"
        ],
        certifications: [
            "Personal certificado en seguridad vial",
            "Cumplimiento Manual de Señalización Vial",
            "Materiales certificados NTC",
            "Póliza de responsabilidad civil"
        ]
    }
];

export default function ServiciosPage() {
    return (
        <div className="pt-20 lg:pt-24 pb-24">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-dark-section overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Servicios <span className="text-gradient-primary">Adicionales</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Soluciones complementarias con equipos propios y personal técnico especializado
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <div className="container mx-auto px-4 mt-16">
                <div className="space-y-20">
                    {services.map((service, index) => (
                        <motion.section
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="scroll-mt-24"
                        >
                            <div className="glass-card rounded-2xl p-8 md:p-12">
                                {/* Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-3xl font-bold mb-3">{service.name}</h2>
                                        <p className="text-lg text-muted-foreground">{service.description}</p>
                                    </div>
                                </div>

                                {/* Specs (for Grúa) */}
                                {service.specs && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Especificaciones Técnicas:</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {service.specs.map((spec, idx) => (
                                                <div key={idx} className="border border-border rounded-lg p-4 text-center">
                                                    <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                                                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Features */}
                                {service.features && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Incluye:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Applications (for Grúa) */}
                                {service.applications && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Aplicaciones:</h4>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {service.applications.map((app, idx) => (
                                                <div key={idx} className="border border-border rounded-lg p-5">
                                                    <h5 className="font-semibold mb-3">{app.category}</h5>
                                                    <ul className="space-y-2">
                                                        {app.tasks.map((task, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span className="text-accent mt-1">→</span>
                                                                {task}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Rates (for Grúa) */}
                                {service.rates && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Tarifas:</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {service.rates.map((rate, idx) => (
                                                <div key={idx} className="border-2 border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                                                    <div className="text-center mb-4">
                                                        <h5 className="font-display text-xl font-bold mb-2">{rate.plan}</h5>
                                                        <div className="text-2xl font-bold text-gradient-primary mb-1">{rate.price}</div>
                                                        <div className="text-sm text-muted-foreground">{rate.ideal}</div>
                                                    </div>
                                                    <div className="border-t border-border pt-4">
                                                        <div className="text-xs font-semibold mb-2">Incluye:</div>
                                                        <ul className="space-y-1">
                                                            {rate.includes.map((item, i) => (
                                                                <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                                                                    <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Safety (for Grúa) */}
                                {service.safety && (
                                    <div className="mb-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-6 border border-orange-500/20">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <Shield className="h-5 w-5 text-orange-500" />
                                            Seguridad y Certificaciones
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {service.safety.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-orange-500 mt-1">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Services (for Demarcación) */}
                                {service.services && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Servicios Ofrecidos:</h4>
                                        <div className="space-y-6">
                                            {service.services.map((srv, idx) => (
                                                <div key={idx} className="border-l-4 border-primary pl-6">
                                                    <h5 className="font-semibold text-lg mb-2">{srv.type}</h5>
                                                    <p className="text-sm text-muted-foreground mb-3">{srv.description}</p>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xs font-semibold text-accent mb-2">Materiales:</div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {srv.materials.map((mat, i) => (
                                                                    <span key={i} className="px-2 py-1 rounded bg-accent/10 text-accent text-xs">
                                                                        {mat}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-semibold text-primary mb-2">Equipos:</div>
                                                            <div className="text-sm text-muted-foreground">{srv.equipment}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Process (for Demarcación) */}
                                {service.process && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-6 text-lg">Proceso de Trabajo:</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {service.process.map((item, idx) => (
                                                <div key={idx} className="border border-border rounded-lg p-4">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                                                            {idx + 1}
                                                        </span>
                                                        <h5 className="font-semibold text-sm">{item.step}</h5>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Advantages */}
                                {service.advantages && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Ventajas Competitivas:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {service.advantages.map((adv, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {adv}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Clients */}
                                {service.clients && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4">Clientes Típicos:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.clients.map((client, idx) => (
                                                <span key={idx} className="px-3 py-2 rounded-lg bg-secondary text-sm">
                                                    {client}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Certifications */}
                                {service.certifications && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4">Certificaciones:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.certifications.map((cert, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-lg bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20">
                                                    ✓ {cert}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        {service.id === "grua" ? "Reservar Grúa" : "Solicitar Asesoría Técnica"} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a
                                        href="tel:+573188200400"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Llamar Ahora
                                    </a>
                                    {service.id === "grua" && (
                                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                            <Calendar className="h-4 w-4" />
                                            Ver Disponibilidad
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Why Choose Us */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass-card rounded-2xl p-12"
                >
                    <h3 className="font-display text-2xl font-bold mb-8 text-center">
                        ¿Por Qué Elegir <span className="text-gradient-primary">IT VIAL</span>?
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Wrench className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Equipos Propios</h4>
                            <p className="text-sm text-muted-foreground">
                                Fabricación IT VIAL garantiza calidad y disponibilidad
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Personal Certificado</h4>
                            <p className="text-sm text-muted-foreground">
                                Técnicos capacitados y con experiencia comprobada
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Disponibilidad 24/7</h4>
                            <p className="text-sm text-muted-foreground">
                                Servicio de emergencia y trabajos nocturnos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Totalmente Asegurado</h4>
                            <p className="text-sm text-muted-foreground">
                                Pólizas de responsabilidad civil vigentes
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
                        ¿Necesita Nuestros <span className="text-gradient-primary">Servicios</span>?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Contáctenos para una propuesta técnica personalizada o para verificar disponibilidad inmediata
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                        >
                            Solicitar Propuesta Técnica <ArrowRight className="h-5 w-5" />
                        </Link>
                        <a
                            href="tel:+573188200400"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            Llamar Ahora
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
