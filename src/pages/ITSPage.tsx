import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Monitor, Radar, Radio, Wind, AlertTriangle, ShieldAlert,
    TowerControl, TrafficCone, Download, FileText, ArrowRight
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "pmv",
        name: "Paneles de Mensaje Variable",
        icon: Monitor,
        description: "PMV con tecnología LED de última generación e integración IoT para mensajes dinámicos en tiempo real.",
        types: [
            {
                title: "PMV Fijos",
                description: "Instalados en pórticos o banderas para ubicaciones estratégicas permanentes. Disponibles a color RGB o ámbar monocromático.",
                features: [
                    "Tecnología LED de alta luminosidad",
                    "Programación local o remota vía 4G/5G",
                    "Integración con plataforma NTCIP",
                    "Paneles solares para autonomía energética",
                    "Diseño, cálculos estructurales, construcción e instalación incluidos",
                    "Cumplimiento normas colombianas"
                ],
                applications: [
                    "Control de velocidad persuasivo",
                    "Alertas de condiciones climáticas",
                    "Información de obras en la vía",
                    "Gestión de tráfico en tiempo real",
                    "Campañas de seguridad vial"
                ]
            },
            {
                title: "PMV Móviles",
                description: "Paneles montados sobre remolques para despliegue rápido en zonas de trabajo temporal, eventos o emergencias.",
                features: [
                    "Remolque de fácil transporte",
                    "Autonomía con paneles solares y batería",
                    "Programación local o remota",
                    "Resistente a condiciones climáticas",
                    "Sistema de estabilización"
                ],
                applications: [
                    "Zonas de obra temporales",
                    "Desvíos de tráfico",
                    "Eventos especiales",
                    "Respuesta ante emergencias"
                ]
            }
        ]
    },
    {
        id: "radares-disuasivos",
        name: "Radares Disuasivos",
        icon: Radar,
        description: "Displays interactivos que muestran la velocidad actual del conductor, promoviendo el cumplimiento voluntario de límites de velocidad.",
        features: [
            "Display LED alta visibilidad",
            "Detección por radar Doppler",
            "Energía solar autónoma",
            "Montaje en poste o bandera",
            "Mensajes personalizables (\"DESPACIO\", \"GRACIAS\")"
        ],
        results: [
            "Reducción de velocidad promedio en 15-25%",
            "Disminución de accidentes en zonas escolares",
            "Mayor conciencia de conductores"
        ]
    },
    {
        id: "radares-conteo",
        name: "Radares de Conteo y Categorización",
        icon: Radio,
        description: "Sistemas de aforo para conteo automático y clasificación de vehículos según categoría.",
        features: [
            "Conteo bidireccional",
            "Clasificación por tipo de vehículo",
            "Medición de velocidad",
            "Reportes automáticos",
            "Conectividad IoT para transmisión de datos"
        ],
        data: [
            "TPD (Tránsito Promedio Diario)",
            "Composición vehicular",
            "Velocidades operacionales",
            "Patrones de flujo"
        ]
    },
    {
        id: "estaciones-meteo",
        name: "Estaciones Meteorológicas",
        icon: Wind,
        description: "Medición en tiempo real de condiciones climáticas para alertas automáticas integradas con PMV.",
        parameters: [
            "Temperatura",
            "Humedad",
            "Velocidad del viento",
            "Precipitación",
            "Visibilidad"
        ]
    },
    {
        id: "galibos",
        name: "Gálibos y Señales Ocultas",
        icon: AlertTriangle,
        description: "Sistemas de detección de vehículos sobredimensionados que ponen en riesgo estructuras como puentes y túneles.",
        components: [
            "Sensores láser de altura",
            "Señales LED de alerta",
            "Activación automática de PMV",
            "Registro fotográfico de infracciones"
        ]
    },
    {
        id: "sos",
        name: "Sistemas SOS",
        icon: ShieldAlert,
        description: "Postes de emergencia con comunicación directa a centros de control para asistencia inmediata.",
        services: [
            "Accidentes",
            "Emergencias médicas",
            "Asistencia mecánica",
            "Seguridad vial"
        ],
        features: [
            "Video y audio bidireccional",
            "Geolocalización GPS",
            "Botón de pánico",
            "Conexión 24/7"
        ]
    },
    {
        id: "estructuras",
        name: "Estructuras Metálicas",
        icon: TowerControl,
        description: "Diseño y fabricación de pórticos, banderas y gabinetes metálicos con galvanizado en caliente.",
        services: [
            "Diseño estructural y cálculos",
            "Fabricación en taller propio",
            "Galvanizado en caliente",
            "Transporte e instalación",
            "Supervisión técnica"
        ],
        products: [
            "Pórticos tipo bandera",
            "Pórticos completos",
            "Banderas simples y dobles",
            "Gabinetes metálicos para equipos",
            "Estructuras personalizadas"
        ]
    },
    {
        id: "semaforos",
        name: "Semaforización Convencional",
        icon: TrafficCone,
        description: "Semáforos LED de alta eficiencia con diseño moderno y bajo consumo energético.",
        features: [
            "Tecnología LED de bajo consumo",
            "Lentes de policarbonato anti-impacto",
            "Carcasa de aluminio",
            "Diseño delgado y moderno",
            "Brazos anti-rotación"
        ],
        products: [
            "Semáforos vehiculares (3-4 caras)",
            "Semáforos peatonales (estáticos/dinámicos)",
            "Cuenta regresiva digital",
            "Semáforos para ciclistas"
        ]
    }
];

export default function ITSPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, deseo solicitar asesoría técnica sobre sus Sistemas Inteligentes de Transporte (ITS) y Seguridad Vial.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="ITS y Seguridad Vial | IT VIAL SAS"
                description="Sistemas inteligentes de transporte: PMV, radares y estaciones meteorológicas de fabricación nacional."
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
                            Sistemas Inteligentes de <span className="text-gradient-primary">Tráfico (ITS)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Tecnología IoT para mejorar la operación y seguridad del tráfico en vías rurales y urbanas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <div className="container mx-auto px-4 mt-16">
                <div className="space-y-20">
                    {products.map((product, index) => (
                        <motion.section
                            key={product.id}
                            id={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="scroll-mt-24"
                        >
                            <div className="glass-card rounded-2xl p-8 md:p-12">
                                {/* Product Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <product.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-3xl font-bold mb-3">{product.name}</h2>
                                        <p className="text-lg text-muted-foreground">{product.description}</p>
                                    </div>
                                </div>

                                {/* Product Types (for PMV) */}
                                {product.types && product.types.length > 0 && (
                                    <div className="space-y-8 mb-8">
                                        {product.types.map((type, i) => (
                                            <div key={i} className="border-l-4 border-primary pl-6">
                                                <h3 className="font-display text-2xl font-semibold mb-3">{type.title}</h3>
                                                <p className="text-muted-foreground mb-4">{type.description}</p>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-primary mb-3">Características:</h4>
                                                        <ul className="space-y-2">
                                                            {type.features?.map((feature, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <span className="text-primary mt-1">✓</span>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-accent mb-3">Aplicaciones:</h4>
                                                        <ul className="space-y-2">
                                                            {type.applications?.map((app, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <span className="text-accent mt-1">→</span>
                                                                    {app}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Features */}
                                {product.features && !product.types && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Características:</h4>
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

                                {/* Results */}
                                {product.results && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-accent mb-3">Resultados Comprobados:</h4>
                                        <ul className="space-y-2">
                                            {product.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-accent mt-1">✓</span>
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Data */}
                                {product.data && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Datos Recolectados:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.data.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Parameters */}
                                {product.parameters && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Parámetros Medidos:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.parameters.map((param, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                                    {param}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Components */}
                                {product.components && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Componentes del Sistema:</h4>
                                        <ul className="space-y-2">
                                            {product.components.map((comp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">•</span>
                                                    {comp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Services */}
                                {product.services && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">
                                            {product.id === 'sos' ? 'Servicios de Emergencia:' : 'Servicios Incluidos:'}
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.services.map((service, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">✓</span>
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Products List */}
                                {product.products && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-primary mb-3">Productos Disponibles:</h4>
                                        <ul className="space-y-2">
                                            {product.products.map((prod, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">→</span>
                                                    {prod}
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
                                        Solicitar Asesoría Técnica <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors text-primary font-semibold"
                                    >
                                        Contacto Directo <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                        <Download className="h-4 w-4" />
                                        Descargar Ficha Técnica
                                    </button>
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
                        ¿Necesita una <span className="text-gradient-primary">Solución Personalizada</span>?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Nuestro equipo técnico está listo para diseñar la solución ITS perfecta para su proyecto vial
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Contactar Asesor Técnico <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
