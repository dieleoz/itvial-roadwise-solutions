import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CarFront, Truck, Download, ArrowRight, CheckCircle,
    Clock, Shield, Users, Wrench, Phone, Calendar
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

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
                value: "10 metros"
            },
            {
                label: "Capacidad de Carga",
                value: "200 kg (2 personas + herramienta)"
            },
            {
                label: "Certificación",
                value: "ONAC Vigente"
            }
        ],
        benefits: [
            "Operador certificado incluido",
            "Combustible y mantenimiento incluido",
            "Disponibilidad 24/7",
            "Seguro de responsabilidad civil"
        ],
        applications: [
            "Mantenimiento de alumbrado público",
            "Instalación de cámaras CCTV",
            "Poda de árboles",
            "Limpieza de fachadas",
            "Montaje de estructuras metálicas"
        ],
        rates: [
            { time: "Hora", price: "$180,000" },
            { time: "Día (8h)", price: "$1,200,000" },
            { time: "Mes", price: "Cotizar" }
        ],
        image: "/images/solutions/servicios/grua-canastilla.webp"
    },
    {
        id: "marcas",
        name: "Aplicación de Marcas Viales",
        icon: Truck,
        description: "Servicio especializado de demarcación vial con diferentes tecnologías y materiales según la necesidad del proyecto.",
        types: [
            {
                title: "Pintura Acrílica Base Agua",
                use: "Vías urbanas, parqueaderos",
                durability: "6-12 meses"
            },
            {
                title: "Pintura Acrílica Base Solvente",
                use: "Carreteras, aeropuertos",
                durability: "12-18 meses"
            },
            {
                title: "Termoplástico de Aplicación en Caliente",
                use: "Vías de alto tráfico, autopistas",
                durability: "24-36 meses"
            },
            {
                title: "Plástico en Frío (Dos Componentes)",
                use: "Pasos peatonales, simbología",
                durability: "36+ meses"
            }
        ],
        process: [
            "Limpieza y preparación de superficie",
            "Pre-marcado topográfico",
            "Aplicación mecanizada o manual",
            "Sembrado de microesferas de vidrio",
            "Protección durante secado"
        ],
        image: "/images/solutions/pavimentos/camion-demarcador-operando.webp"
    }
];

export default function ServiciosPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, me interesa solicitar una cotización para sus servicios de alquiler de grúa o demarcación vial.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Servicios Especializados | IT VIAL SAS"
                description="Alquiler de grúa canastilla y servicios de demarcación vial profesional en Colombia."
            />
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-dark-section overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Wrench className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Servicios Especializados</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Soluciones Operativas <span className="text-gradient-primary">Integrales</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Complementamos nuestra oferta de productos con servicios de ejecución profesional y alquiler de equipos certificados
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#grua" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Grúa Canastilla
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a href="#marcas" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                                Demarcación Vial
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <div className="container mx-auto px-4 space-y-20 mt-12">
                {services.map((service, index) => (
                    <motion.section
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="glass-card rounded-3xl overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Content */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="font-display text-3xl font-bold">{service.name}</h2>
                                </div>

                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Service Image */}
                                {service.image && (
                                    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )}

                                {service.specs && (
                                    <div className="mb-8">
                                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <Shield className="h-5 w-5 text-accent" />
                                            Especificaciones Técnicas
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {service.specs.map((spec, i) => (
                                                <div key={i} className="bg-secondary/30 rounded-lg p-3">
                                                    <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                                                    <div className="font-medium text-sm">{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.types && (
                                    <div className="mb-8">
                                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <Truck className="h-5 w-5 text-primary" />
                                            Tecnologías Disponibles
                                        </h3>
                                        <div className="space-y-3">
                                            {service.types.map((type, i) => (
                                                <div key={i} className="bg-secondary/30 rounded-lg p-4 transition-colors hover:bg-secondary/50">
                                                    <div className="font-bold text-base mb-1 text-primary">{type.title}</div>
                                                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                                                        <div className="text-muted-foreground"><span className="font-medium text-foreground">Uso:</span> {type.use}</div>
                                                        <div className="text-muted-foreground"><span className="font-medium text-foreground">Durabilidad:</span> {type.durability}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.benefits && (
                                    <div className="mb-8">
                                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            Beneficios Incluidos
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.process && (
                                    <div className="mb-8">
                                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <Wrench className="h-5 w-5 text-accent" />
                                            Proceso de Aplicación
                                        </h3>
                                        <div className="relative border-l-2 border-primary/20 pl-6 space-y-4">
                                            {service.process.map((step, i) => (
                                                <div key={i} className="relative">
                                                    <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                                                    <span className="text-muted-foreground">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                                    >
                                        Solicitar Cotización <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Side (Applications or Rates) */}
                            <div className="bg-secondary/20 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col">
                                {service.applications && (
                                    <div className="mb-12">
                                        <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                                            <Users className="h-6 w-6 text-accent" />
                                            Aplicaciones Comunes
                                        </h3>
                                        <div className="grid gap-4">
                                            {service.applications.map((app, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-white/5">
                                                    <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span className="font-medium">{app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {service.rates && (
                                    <div className="bg-gradient-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
                                        <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2 text-accent">
                                            <Calendar className="h-6 w-6" />
                                            Tarifas de Referencia
                                        </h3>
                                        <div className="space-y-4">
                                            {service.rates.map((rate, i) => (
                                                <div key={i} className="flex justify-between items-center py-3 border-b border-accent/10 last:border-0">
                                                    <span className="text-muted-foreground">{rate.time}</span>
                                                    <span className="font-bold text-xl">{rate.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-4 italic">
                                            * Tarifas sujetas a ubicación y duración del contrato. No incluye IVA.
                                        </p>
                                    </div>
                                )}

                                <div className="mt-auto bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
                                    <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">¿Necesita Asesoría Inmediata?</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Nuestros ingenieros están disponibles para evaluar su requerimiento.
                                    </p>
                                    <a
                                        href="tel:+573188200400"
                                        className="text-2xl font-bold text-gradient-primary hover:opacity-80 transition-opacity"
                                    >
                                        +57 318 820 0400
                                    </a>
                                </div>
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
    );
}
