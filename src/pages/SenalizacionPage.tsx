import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TowerControl, SignpostBig, DiscAlbum, Download, ArrowRight, CheckCircle, FileText } from "lucide-react";

const products = [
    {
        id: "elevada",
        name: "Señalización Elevada",
        icon: TowerControl,
        description: "Diseño, fabricación e instalación integral de señalización elevada en pórticos y banderas con cumplimiento normativo total.",
        process: [
            {
                step: "Diseño Estructural",
                description: "Cálculos de ingeniería según NSR-10 y Manual de Señalización Vial"
            },
            {
                step: "Fabricación en Taller",
                description: "Taller propio con equipos de corte, soldadura y conformado"
            },
            {
                step: "Galvanizado en Caliente",
                description: "Protección anticorrosiva según ASTM A123"
            },
            {
                step: "Transporte Especializado",
                description: "Logística para piezas de gran tamaño"
            },
            {
                step: "Montaje en Campo",
                description: "Equipo técnico certificado con grúas especializadas"
            },
            {
                step: "Supervisión Técnica",
                description: "Ingeniero residente durante toda la instalación"
            }
        ],
        products: [
            "Pórticos tipo bandera (1 brazo)",
            "Pórticos completos (2 brazos)",
            "Banderas simples y dobles",
            "Señales informativas de gran formato",
            "Estructuras personalizadas según proyecto"
        ],
        features: [
            "Diseño estructural certificado",
            "Fabricación 100% nacional",
            "Galvanizado en caliente ASTM A123",
            "Láminas reflectivas Tipo I-IV",
            "Garantía estructural 5 años",
            "Cumplimiento Manual de Señalización Vial"
        ],
        applications: [
            "Concesiones viales",
            "Vías de alto tráfico",
            "Peajes",
            "Túneles",
            "Zonas urbanas"
        ]
    },
    {
        id: "vertical",
        name: "Señalización Vertical",
        icon: SignpostBig,
        description: "Fabricación de señales verticales de tránsito con láminas reflectivas de alta calidad y estructuras metálicas galvanizadas.",
        types: [
            {
                category: "Señales Reglamentarias",
                description: "Indican obligaciones y restricciones",
                examples: ["PARE", "CEDA EL PASO", "Límites de velocidad", "Prohibiciones"]
            },
            {
                category: "Señales Preventivas",
                description: "Advierten sobre condiciones peligrosas",
                examples: ["Curvas", "Pendientes", "Zonas escolares", "Animales en la vía"]
            },
            {
                category: "Señales Informativas",
                description: "Orientan sobre destinos y servicios",
                examples: ["Direccionales", "Distancias", "Servicios", "Turísticas"]
            }
        ],
        materials: [
            {
                component: "Lámina Base",
                spec: "Aluminio calibre 0.080\" o lámina galvanizada"
            },
            {
                component: "Película Reflectiva",
                spec: "Tipo I (Ingeniería), II (Alta Intensidad), III (Alta Intensidad Prismática), IV (Diamante)"
            },
            {
                component: "Poste",
                spec: "Tubo galvanizado 2\" o 3\" según altura"
            },
            {
                component: "Anclaje",
                spec: "Platina con pernos galvanizados"
            }
        ],
        sizes: [
            "Pequeñas: 60x60 cm, 75x75 cm",
            "Medianas: 90x90 cm, 120x120 cm",
            "Grandes: 150x150 cm, personalizadas"
        ],
        compliance: [
            "Manual de Señalización Vial Colombia",
            "Resolución 1050 de 2004 MinTransporte",
            "ASTM D4956 (películas reflectivas)",
            "Normas INVIAS"
        ]
    },
    {
        id: "horizontal",
        name: "Demarcación Horizontal",
        icon: DiscAlbum,
        description: "Aplicación profesional de marcas viales con equipos propios y materiales de alta calidad que cumplen normativa NTC.",
        materials: [
            {
                type: "Pintura de Tráfico en Frío",
                features: [
                    "Base agua o solvente",
                    "Secado rápido (5-15 min)",
                    "Retroreflectividad con microesferas de vidrio",
                    "Durabilidad 6-12 meses"
                ],
                applications: ["Vías urbanas", "Parqueaderos", "Zonas de bajo tráfico"]
            },
            {
                type: "Termoplástico",
                features: [
                    "Aplicación en caliente (180-220°C)",
                    "Alta durabilidad (2-4 años)",
                    "Excelente retroreflectividad",
                    "Resistente al tráfico pesado"
                ],
                applications: ["Autopistas", "Vías principales", "Zonas de alto tráfico", "Pasos peatonales"]
            },
            {
                type: "Epóxico",
                features: [
                    "Dos componentes",
                    "Máxima durabilidad (3-5 años)",
                    "Resistencia química",
                    "Ideal para zonas industriales"
                ],
                applications: ["Aeropuertos", "Puertos", "Zonas industriales"]
            }
        ],
        markTypes: [
            "Líneas continuas y discontinuas",
            "Líneas de borde",
            "Líneas de eje",
            "Flechas direccionales",
            "Símbolos (bicicletas, discapacitados)",
            "Textos (PARE, CEDA, SOLO BUS)",
            "Pasos peatonales (cebras)",
            "Zonas de estacionamiento"
        ],
        equipment: [
            "Camiones demarcadores IT VIAL",
            "Máquinas autopropulsadas",
            "Equipos manuales portátiles",
            "Aplicadores de termoplástico",
            "Sistema de microesferas"
        ],
        quality: [
            "Medición de retroreflectividad con SAT-LUX",
            "Control de espesor",
            "Verificación de color",
            "Cumplimiento NTC 1360, 4744"
        ]
    }
];

export default function SenalizacionPage() {
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
                            Señalización <span className="text-gradient-primary">Vial Integral</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Diseño, fabricación e instalación de señalización vertical, horizontal y elevada con cumplimiento normativo total
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
                                    </div>
                                </div>

                                {/* Process (for Elevada) */}
                                {product.process && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-6 text-lg">Proceso Integral (6 Pasos):</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {product.process.map((item, idx) => (
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

                                {/* Products List */}
                                {product.products && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Productos Disponibles:</h4>
                                        <ul className="space-y-2">
                                            {product.products.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">→</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Types (for Vertical) */}
                                {product.types && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Tipos de Señales:</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {product.types.map((type, idx) => (
                                                <div key={idx} className="border border-border rounded-lg p-5">
                                                    <h5 className="font-semibold mb-2">{type.category}</h5>
                                                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                                                    <div className="space-y-1">
                                                        {type.examples.map((ex, i) => (
                                                            <div key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                                                                <span className="text-accent">•</span> {ex}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Materials */}
                                {product.materials && product.id === "vertical" && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Materiales y Especificaciones:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {product.materials.map((mat, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                                                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <div>
                                                        <div className="font-semibold text-sm mb-1">{mat.component}</div>
                                                        <div className="text-xs text-muted-foreground">{mat.spec}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Materials (for Horizontal) */}
                                {product.materials && product.id === "horizontal" && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Materiales Disponibles:</h4>
                                        <div className="space-y-6">
                                            {product.materials.map((mat, idx) => (
                                                <div key={idx} className="border-l-4 border-primary pl-6">
                                                    <h5 className="font-semibold text-lg mb-3">{mat.type}</h5>
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <h6 className="text-sm font-semibold text-accent mb-2">Características:</h6>
                                                            <ul className="space-y-1">
                                                                {mat.features.map((feature, i) => (
                                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                        <span className="text-primary mt-1">✓</span>
                                                                        {feature}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h6 className="text-sm font-semibold text-accent mb-2">Aplicaciones:</h6>
                                                            <div className="flex flex-wrap gap-2">
                                                                {mat.applications.map((app, i) => (
                                                                    <span key={i} className="px-2 py-1 rounded bg-accent/10 text-accent text-xs">
                                                                        {app}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Mark Types */}
                                {product.markTypes && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Tipos de Marcas:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.markTypes.map((mark, idx) => (
                                                <span key={idx} className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm">
                                                    {mark}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Equipment */}
                                {product.equipment && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Equipos Propios:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.equipment.map((eq, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {eq}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Quality Control */}
                                {product.quality && (
                                    <div className="mb-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            Control de Calidad
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.quality.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-green-500 mt-1">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Features */}
                                {product.features && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Características:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Sizes */}
                                {product.sizes && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Tamaños Disponibles:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.sizes.map((size, idx) => (
                                                <span key={idx} className="px-3 py-2 rounded-lg bg-secondary text-sm">
                                                    {size}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Applications */}
                                {product.applications && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-accent mb-4">Aplicaciones:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.applications.map((app, idx) => (
                                                <span key={idx} className="px-3 py-2 rounded-lg bg-accent/10 text-accent text-sm">
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Compliance */}
                                {product.compliance && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold mb-4">Cumplimiento Normativo:</h4>
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
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Cotización <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                        <Download className="h-4 w-4" />
                                        Descargar Catálogo
                                    </button>
                                    {product.id === "horizontal" && (
                                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                            <FileText className="h-4 w-4" />
                                            Ver Proyectos
                                        </button>
                                    )}
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
                        ¿Necesita <span className="text-gradient-primary">Señalización Vial</span>?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales desde el diseño hasta la instalación con cumplimiento normativo total
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Solicitar Asesoría Técnica <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
