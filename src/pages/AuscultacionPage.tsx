import { motion } from "framer-motion";
import { Activity, Gauge, Camera, Waves, Volume2, Scale, CheckCircle, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const structuralEquipment = [
    {
        icon: Gauge,
        name: "Deflectómetro de Impacto (FWD)",
        subtitle: "Heavy Weight Deflectometer",
        description: "Equipo que aplica una carga de impacto controlada sobre el pavimento y mide la deflexión resultante mediante geófonos",
        specs: {
            mass: "50-400 kg",
            plate: "300 mm",
            sensors: "Hasta 2.5 m distancia",
            production: "60-120 puntos/día"
        },
        parameters: [
            "Deflexión central (D0)",
            "Deflexiones radiales (D1-D9)",
            "Radio de curvatura",
            "Índice de daño superficial (SCI)",
            "Módulo efectivo del pavimento"
        ],
        results: [
            "Módulo de subrasante (Mr)",
            "Módulo de base/subbase",
            "Módulo de capa asfáltica",
            "Vida útil remanente",
            "Necesidades de refuerzo"
        ],
        compliance: ["ASTM D4694", "ASTM D4695", "AASHTO R30"],
        applications: [
            "Diseño de sobre-carpetas",
            "Evaluación de capacidad estructural",
            "Control de calidad de construcción",
            "Priorización de mantenimiento"
        ],
        image: "/images/solutions/auscultacion/fwd-deflectometro.webp"
    },
    {
        icon: Activity,
        name: "FastFWD / Traffic Speed Deflectometer",
        subtitle: "Deflectómetro a Velocidad de Tráfico",
        description: "Evolución del FWD que permite medir deflexiones a velocidad normal de tráfico (hasta 90 km/h), sin afectar el flujo vehicular",
        specs: {
            speed: "Hasta 90 km/h",
            production: "100+ km/día",
            measurement: "Continua",
            closure: "No requiere"
        },
        advantages: [
            "Sin cierre de carriles",
            "Mayor seguridad operacional",
            "Productividad 10-20x mayor",
            "Mediciones continuas vs. puntuales"
        ],
        technology: [
            "Sistema de impacto continuo",
            "Sensores Doppler láser",
            "Georreferenciación GPS precisión",
            "Procesamiento en tiempo real"
        ],
        ideal: [
            "Redes viales extensas (>500 km)",
            "Autopistas de alto tráfico",
            "Evaluaciones a nivel de red",
            "Proyectos de concesiones"
        ],
        roi: "Inspección de 500 km en 5 días vs. 3+ meses con FWD convencional",
        image: "/images/solutions/auscultacion/fastfwd-tsd.webp"
    },
    {
        icon: Waves,
        name: "Georradar (GPR)",
        subtitle: "Ground Penetrating Radar",
        description: "Sistema de radar de penetración terrestre que emite ondas electromagnéticas para caracterizar capas del pavimento sin dañarlo",
        specs: {
            frequency: "1-2 GHz",
            speed: "Hasta 80 km/h",
            penetration: "Hasta 3-4 metros",
            resolution: "2-5 cm vertical"
        },
        information: [
            "Espesores de capas (precisión ±5%)",
            "Ubicación de barras de acero",
            "Detección de vacíos y delaminaciones",
            "Presencia de humedad en capas",
            "Espesor de losa de concreto"
        ],
        processing: [
            "Software interpretación semi-automática",
            "Calibración con núcleos de referencia",
            "Exportación a formatos GIS"
        ],
        applications: [
            "Inventario de espesores en redes viales",
            "Control de calidad de construcción",
            "Detección de fallas ocultas",
            "Diseño de rehabilitación"
        ],
        image: "/images/solutions/auscultacion/georradar-gpr.webp"
    }
];

const functionalEquipment = [
    {
        icon: Activity,
        name: "Perfilómetro Láser (IRI)",
        subtitle: "Road Surface Profilometer",
        description: "Mide el perfil longitudinal del pavimento para calcular el índice de rugosidad IRI, principal indicador de confort de rodadura",
        specs: {
            laser: "Clase 1 (seguro)",
            speed: "20-100 km/h",
            resolution: "Cada 10 cm",
            parameter: "IRI (m/km)"
        },
        results: [
            "IRI en m/km o mm/m",
            "Clasificación de estado",
            "Identificación de zonas de golpe",
            "Cálculo de PSI (Present Serviceability Index)"
        ],
        thresholds: [
            { range: "<2 m/km", status: "Excelente" },
            { range: "2-4 m/km", status: "Bueno" },
            { range: "4-6 m/km", status: "Regular" },
            { range: ">6 m/km", status: "Malo (requiere intervención)" }
        ],
        applications: [
            "Recepción de obras nuevas",
            "Evaluación de red vial",
            "Priorización de intervenciones",
            "Sistemas de gestión de pavimentos (PMS)"
        ],
        image: "/images/solutions/auscultacion/perfilometro-laser-iri.webp"
    },
    {
        icon: Camera,
        name: "Sistema LCMS",
        subtitle: "Laser Crack Measurement System",
        description: "Tecnología 3D de escaneo láser que captura la superficie completa del pavimento para detectar y clasificar automáticamente fisuras y deformaciones",
        specs: {
            cameras: "Cámaras 3D alta resolución",
            lighting: "LED alta potencia",
            speed: "Hasta 100 km/h",
            ai: "Procesamiento con IA"
        },
        parameters: {
            cracking: [
                "Fisuras longitudinales",
                "Fisuras transversales",
                "Fisuras piel de cocodrilo",
                "Severidad (ancho de fisura)",
                "Densidad (% área afectada)"
            ],
            rutting: [
                "Profundidad de huella",
                "Ancho de huella",
                "Ubicación (interior/exterior)"
            ],
            texture: [
                "MPD (Mean Profile Depth)",
                "Macrotextura"
            ],
            general: [
                "Cálculo automático de PCI",
                "Identificación de baches",
                "Detección de parches"
            ]
        },
        benefits: [
            "Objetividad (elimina subjetividad)",
            "Trazabilidad completa",
            "Productividad 100+ km/día",
            "Base de datos histórica"
        ],
        image: "/images/solutions/auscultacion/sistema-lcms.webp"
    },
    {
        icon: Gauge,
        name: "SCRIM",
        subtitle: "Sideway-force Coefficient Routine Investigation Machine",
        description: "Vehículo especializado que mide la fricción disponible entre el neumático y el pavimento, crítico para seguridad vial",
        specs: {
            wheel: "Bloqueada a 20°",
            water: "Riego continuo (simula lluvia)",
            speed: "30-80 km/h",
            parameter: "SFC (Sideway Force Coefficient)"
        },
        interpretation: [
            { sfc: ">0.55", status: "Buena fricción", color: "primary" },
            { sfc: "0.40-0.55", status: "Fricción moderada", color: "accent" },
            { sfc: "<0.40", status: "Fricción baja (¡PELIGRO!)", color: "destructive" }
        ],
        criticalApplications: [
            "Curvas peligrosas",
            "Zonas de frenado (semáforos, peajes)",
            "Pendientes pronunciadas",
            "Puentes (superficie diferente)"
        ],
        treatments: [
            "Ranurado de pavimento",
            "Aplicación de slurry seal",
            "Tratamientos superficiales con agregados duros"
        ],
        image: "/images/solutions/auscultacion/scrim-friccion.webp"
    },
    {
        icon: Volume2,
        name: "Equipos de Medición de Ruido",
        subtitle: "SPB / CPX",
        description: "Sistemas para evaluar el ruido generado por el contacto neumático-pavimento",
        methods: [
            {
                name: "SPB - Statistical Pass-By",
                description: "Micrófonos fijos en costado de vía",
                speed: "80 km/h estandarizada",
                norm: "ISO 11819-1"
            },
            {
                name: "CPX - Close Proximity",
                description: "Micrófonos cerca del neumático",
                speed: "50-110 km/h variable",
                norm: "ISO 11819-2"
            }
        ],
        applications: [
            "Evaluación de pavimentos silenciosos",
            "Cumplimiento normativa ambiental",
            "Diseño de mezclas asfálticas",
            "Mapeo de ruido en áreas urbanas"
        ],
        result: "Niveles de ruido en dB(A) y clasificación de pavimentos por desempeño acústico",
        image: "/images/solutions/auscultacion/medicion-ruido-cp.webp"
    },
    {
        icon: Scale,
        name: "Sistemas WIM",
        subtitle: "Weigh in Motion",
        description: "Sensores embebidos en el pavimento que pesan vehículos sin detenerlos, detectando sobrecargas que dañan la infraestructura",
        technology: [
            "Sensores piezoeléctricos o fibra óptica",
            "Lazos inductivos para clasificación",
            "Cámaras OCR para placas"
        ],
        data: [
            "Peso bruto vehicular (GVW)",
            "Peso por eje",
            "Clasificación vehicular",
            "Velocidad",
            "Distancia entre ejes",
            "Placa (con cámaras)"
        ],
        applications: [
            "Control de sobrecarga 24/7",
            "Protección de pavimentos",
            "Aplicación de multas automatizadas",
            "Estadísticas de tráfico de carga",
            "Diseño basado en cargas reales"
        ],
        benefits: [
            "Sin interrumpir flujo vehicular",
            "Cobertura del 100% de vehículos",
            "Reducción de daño a pavimentos",
            "Generación de ingresos por multas"
        ],
        image: "/images/solutions/auscultacion/sistemas-wim.webp"
    }
];

export default function AuscultacionPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, deseo información técnica sobre sus equipos de auscultación estructural y funcional de pavimentos.");
        return () => resetWAMessage();
    }, []);

    const auscultacionSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Auscultación de Pavimentos",
        "description": "Equipos de medición estructural y funcional: FWD, GPR, IRI y sistemas de inspección láser.",
        "brand": {
            "@type": "Brand",
            "name": "IT VIAL"
        },
        "category": "Infraestructura Vial / Consultoría Técnica",
        "manufacturer": {
            "@type": "Organization",
            "name": "IT VIAL SAS"
        }
    };

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Auscultación de Pavimentos | IT VIAL SAS"
                description="Tecnología avanzada para auscultación vial: deflectómetros, georradares y perfilómetros para gestión de infraestructura."
                schema={auscultacionSchema}
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
                            <Activity className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Auscultación de Pavimentos</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Tecnología Avanzada para <span className="text-gradient-primary">Evaluación de Pavimentos</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Equipos de última generación para caracterización estructural y funcional de carreteras
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#estructural" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Evaluación Estructural
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a href="#funcional" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                                Evaluación Funcional
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Structural Evaluation */}
            <section id="estructural" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Evaluación <span className="text-gradient-primary">Estructural</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Equipos para caracterizar la capacidad portante y condición de las capas del pavimento
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {structuralEquipment.map((equipment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-xl p-8"
                            >
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <equipment.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-2xl font-bold mb-1">{equipment.name}</h3>
                                        <p className="text-sm text-accent mb-3">{equipment.subtitle}</p>
                                        <p className="text-muted-foreground">{equipment.description}</p>
                                    </div>
                                </div>

                                {/* @ts-ignore */}
                                {equipment.image && (
                                    <div className="rounded-xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                                        <img
                                            /* @ts-ignore */
                                            src={equipment.image}
                                            alt={equipment.name}
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                    {equipment.specs && Object.entries(equipment.specs).map(([key, value]) => (
                                        <div key={key} className="bg-secondary/30 rounded-lg p-4">
                                            <div className="text-xs text-muted-foreground mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                            <div className="font-semibold text-sm">{value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                    {equipment.parameters && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-primary">Parámetros Medidos</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.parameters.map((param, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                        <span>{param}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.results && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-accent">Resultados Calculados</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">✓</span>
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.advantages && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-primary">Ventajas</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.advantages.map((adv, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                        <span>{adv}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.technology && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Tecnología</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.technology.map((tech, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{tech}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.information && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-accent">Información Obtenida</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.information.map((info, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">✓</span>
                                                        <span>{info}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.processing && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Procesamiento</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.processing.map((proc, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{proc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.applications && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Aplicaciones</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.ideal && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-accent">Ideal Para</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.ideal.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">✓</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {equipment.compliance && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3 text-sm">Cumplimiento Normativo</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {equipment.compliance.map((norm, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    {norm}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {equipment.roi && (
                                    <div className="bg-gradient-accent/10 border border-accent/20 rounded-lg p-4">
                                        <div className="font-semibold text-accent mb-1">ROI</div>
                                        <div className="text-sm text-muted-foreground">{equipment.roi}</div>
                                    </div>
                                )}

                                <div className="mt-6 flex gap-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Cotización <ArrowRight className="h-4 w-4" />
                                    </Link>

                                    <a
                                        href={getWhatsAppLink(`Hola, estoy interesado en el producto: ${equipment.name}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/20 bg-green-500/10 text-green-500 font-semibold hover:bg-green-500/20 transition-colors"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Functional Evaluation */}
            <section id="funcional" className="py-20 bg-gradient-dark-section">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Evaluación <span className="text-gradient-accent">Funcional</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Equipos para evaluar la condición superficial, confort, seguridad y deterioros del pavimento
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {functionalEquipment.map((equipment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-xl p-8"
                            >
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                        <equipment.icon className="h-8 w-8 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-2xl font-bold mb-1">{equipment.name}</h3>
                                        <p className="text-sm text-accent mb-3">{equipment.subtitle}</p>
                                        <p className="text-muted-foreground">{equipment.description}</p>
                                    </div>
                                </div>

                                {/* @ts-ignore */}
                                {equipment.image && (
                                    <div className="rounded-xl overflow-hidden mb-6 border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
                                        <img
                                            /* @ts-ignore */
                                            src={equipment.image}
                                            alt={equipment.name}
                                            className="w-full h-80 object-contain hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                {equipment.specs && (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                        {Object.entries(equipment.specs).map(([key, value]) => (
                                            <div key={key} className="bg-secondary/30 rounded-lg p-4">
                                                <div className="text-xs text-muted-foreground mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                                <div className="font-semibold text-sm">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {equipment.thresholds && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">Umbrales IRI</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                                            {equipment.thresholds.map((threshold, i) => (
                                                <div key={i} className="bg-secondary/30 rounded-lg p-3 text-center">
                                                    <div className="font-bold text-primary mb-1">{threshold.range}</div>
                                                    <div className="text-xs text-muted-foreground">{threshold.status}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {equipment.parameters && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-4">Parámetros Medidos</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {Object.entries(equipment.parameters).map(([category, items]) => (
                                                <div key={category}>
                                                    <h5 className="text-sm font-semibold text-accent mb-2 capitalize">{category}</h5>
                                                    <ul className="space-y-1 text-xs text-muted-foreground">
                                                        {(items as string[]).map((item, i) => (
                                                            <li key={i} className="flex items-start gap-1">
                                                                <span className="text-accent">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {equipment.interpretation && (
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">Interpretación SFC</h4>
                                        <div className="grid md:grid-cols-3 gap-3">
                                            {equipment.interpretation.map((interp, i) => (
                                                <div key={i} className={`rounded-lg p-4 border-2 ${interp.color === 'primary' ? 'border-primary/20 bg-primary/5' :
                                                    interp.color === 'accent' ? 'border-accent/20 bg-accent/5' :
                                                        'border-red-500/20 bg-red-500/5'
                                                    }`}>
                                                    <div className="font-bold mb-1">{interp.sfc}</div>
                                                    <div className="text-sm text-muted-foreground">{interp.status}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {equipment.methods && (
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {equipment.methods.map((method, i) => (
                                            <div key={i} className="bg-secondary/30 rounded-lg p-4">
                                                <h5 className="font-semibold mb-2">{method.name}</h5>
                                                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                                                <div className="text-xs text-muted-foreground space-y-1">
                                                    <div><span className="font-semibold">Velocidad:</span> {method.speed}</div>
                                                    <div><span className="font-semibold">Norma:</span> {method.norm}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                    {equipment.results && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-accent">Resultados</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.results.map((result, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">✓</span>
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.benefits && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-primary">Beneficios</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.applications && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Aplicaciones</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.applications.map((app, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.criticalApplications && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-red-500">Aplicaciones Críticas</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.criticalApplications.map((app, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-red-500">⚠️</span>
                                                        <span>{app}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.treatments && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Tratamientos Correctivos</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.treatments.map((treatment, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">•</span>
                                                        <span>{treatment}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.technology && (
                                        <div>
                                            <h4 className="font-semibold mb-3">Tecnología</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.technology.map((tech, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{tech}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {equipment.data && (
                                        <div>
                                            <h4 className="font-semibold mb-3 text-accent">Datos Capturados</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {equipment.data.map((datum, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-accent">✓</span>
                                                        <span>{datum}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {equipment.result && (
                                    <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                                        <div className="font-semibold text-primary mb-1">Resultado</div>
                                        <div className="text-sm text-muted-foreground">{equipment.result}</div>
                                    </div>
                                )}

                                <div className="flex gap-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Cotización <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a
                                        href={getWhatsAppLink(`Hola, estoy interesado en el producto: ${equipment.name}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/20 bg-green-500/10 text-green-500 font-semibold hover:bg-green-500/20 transition-colors"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrated Use Case */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="font-display text-3xl font-bold mb-8 text-center">
                            Caso de Uso <span className="text-gradient-primary">Integrado</span>
                        </h2>
                        <div className="glass-card rounded-xl p-8">
                            <h3 className="font-display text-xl font-bold mb-6">Inspección Completa de 100 km de Autopista</h3>

                            <div className="space-y-6">
                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="font-semibold mb-2">DÍA 1: Evaluación Estructural</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• FastFWD: Deflexiones continuas</li>
                                        <li>• GPR: Espesores de capas</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-accent pl-6">
                                    <h4 className="font-semibold mb-2">DÍA 2: Evaluación Funcional</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• Perfilómetro: IRI</li>
                                        <li>• LCMS: Fisuras y ahuellamiento</li>
                                        <li>• SCRIM: Fricción</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-6">
                                    <h4 className="font-semibold mb-3">RESULTADO:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Inventario completo de condición</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Priorización de intervenciones</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Estimación presupuestal</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Plan de mantenimiento 5 años</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-dark-section">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-12 text-center"
                    >
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            ¿Necesita Evaluar su <span className="text-gradient-primary">Red Vial</span>?
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Nuestro equipo técnico puede diseñar un plan de auscultación integral adaptado a sus necesidades
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Solicitar Asesoría
                            </a>

                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
