import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    BatteryCharging, Zap, Sun, Plug, ArrowRight, CheckCircle,
    Leaf, Globe, TrendingUp, Shield
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "cargadores-ev",
        name: "Cargadores para Vehiculos Electricos",
        icon: BatteryCharging,
        description: "Estaciones de carga para vehiculos electricos con tecnologia de ultima generacion, compatibles con los principales estandares internacionales.",
        types: [
            {
                title: "Cargadores AC (Nivel 2)",
                description: "Carga semi-rapida para estacionamientos, centros comerciales y flotas corporativas. Potencia de 7 a 22 kW.",
                features: [
                    "Compatibilidad con conectores Tipo 1 y Tipo 2",
                    "Gestion remota via plataforma cloud",
                    "Sistema de autenticacion RFID y app movil",
                    "Medicion de energia integrada",
                    "Proteccion IP54 para instalacion exterior",
                    "Cumplimiento norma IEC 61851"
                ],
                applications: [
                    "Estacionamientos publicos y privados",
                    "Centros comerciales y supermercados",
                    "Flotas corporativas y gubernamentales",
                    "Hoteles y centros de convenciones",
                    "Edificios residenciales"
                ]
            },
            {
                title: "Cargadores DC (Carga Rapida)",
                description: "Estaciones de carga rapida con potencia de 50 a 150 kW para corredores viales y estaciones de servicio.",
                features: [
                    "Conectores CCS2 y CHAdeMO",
                    "Potencia de 50 kW a 150 kW",
                    "Pantalla tactil interactiva",
                    "Sistema de pago integrado (tarjeta, QR, app)",
                    "Monitoreo remoto y diagnostico",
                    "Proteccion contra sobretensiones"
                ],
                applications: [
                    "Corredores viales y autopistas",
                    "Estaciones de servicio",
                    "Electrolineras dedicadas",
                    "Terminales de transporte",
                    "Puntos estrategicos urbanos"
                ]
            }
        ]
    },
    {
        id: "infraestructura-carga",
        name: "Infraestructura de Carga",
        icon: Plug,
        description: "Soluciones integrales de infraestructura electrica para redes de carga de vehiculos electricos, desde el diseno hasta la puesta en marcha.",
        features: [
            "Diseno e ingenieria de redes de carga",
            "Tableros de distribucion electrica dedicados",
            "Sistemas de gestion de energia (EMS)",
            "Cableado y canalizaciones especializadas",
            "Transformadores y subestaciones para alta demanda",
            "Senalizacion y demarcacion de puntos de carga"
        ],
        advantages: [
            "Diseno personalizado segun demanda proyectada",
            "Escalabilidad para crecimiento futuro",
            "Integracion con energias renovables",
            "Cumplimiento normativo colombiano RETIE",
            "Soporte tecnico post-instalacion"
        ]
    },
    {
        id: "estaciones-solares",
        name: "Estaciones de Carga Solar",
        icon: Sun,
        description: "Estaciones de carga alimentadas con energia solar fotovoltaica, ideales para zonas rurales, parques y corredores viales sostenibles.",
        features: [
            "Paneles solares de alta eficiencia",
            "Sistema de almacenamiento con baterias de litio",
            "Estructura tipo pergola o marquesina solar",
            "Operacion autonoma sin conexion a red electrica",
            "Monitoreo de generacion y consumo en tiempo real",
            "Iluminacion LED integrada"
        ],
        advantages: [
            "Cero emisiones de CO2 en la operacion",
            "Reduccion de costos operativos",
            "Independencia de la red electrica",
            "Ideal para zonas rurales y remotas",
            "Imagen de sostenibilidad corporativa"
        ],
        applications: [
            "Parques y areas recreativas",
            "Zonas rurales sin cobertura electrica",
            "Estaciones de peaje",
            "Centros de atencion al usuario en carreteras",
            "Campus corporativos y universitarios"
        ]
    }
];

const stats = [
    { value: "100%", label: "Energia Limpia", icon: Leaf },
    { value: "24/7", label: "Monitoreo Remoto", icon: Globe },
    { value: "IEC 61851", label: "Normativa Internacional", icon: Shield },
    { value: "+50%", label: "Ahorro vs Combustible", icon: TrendingUp },
];

export default function ElectromovilidadPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, estoy interesado en las soluciones de electromovilidad de IT VIAL. Quisiera recibir informacion sobre cargadores EV e infraestructura de carga.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Electromovilidad | IT VIAL SAS"
                description="Soluciones de electromovilidad: cargadores EV, infraestructura de carga y estaciones solares para la transicion energetica del transporte en Colombia."
                keywords="electromovilidad Colombia, cargadores vehiculos electricos, estaciones carga EV, infraestructura carga electrica, estaciones solares, IT VIAL"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Soluciones de Electromovilidad IT VIAL",
                    "description": "Cargadores EV, infraestructura de carga y estaciones solares",
                    "brand": { "@type": "Brand", "name": "IT VIAL SAS" }
                }}
            />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-dark-section overflow-hidden">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-6 border border-green-500/20">
                            NUEVO
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-gradient-primary">Electromovilidad</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Infraestructura de carga para vehiculos electricos y soluciones de energia sostenible para la transicion energetica del transporte
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                            >
                                Solicitar Asesoria <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-xl p-5 text-center"
                        >
                            <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Products */}
            <div className="container mx-auto px-4 mt-20">
                <div className="space-y-20">
                    {products.map((product) => (
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

                                {/* Types (for products with subtypes) */}
                                {product.types && (
                                    <div className="space-y-8 mb-8">
                                        {product.types.map((type, idx) => (
                                            <div key={idx} className="border-l-4 border-primary pl-6">
                                                <h3 className="font-display text-xl font-semibold mb-2">{type.title}</h3>
                                                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>

                                                <div className="grid lg:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-primary mb-3">Caracteristicas:</h4>
                                                        <ul className="space-y-2">
                                                            {type.features.map((f, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                                    {f}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-accent mb-3">Aplicaciones:</h4>
                                                        <ul className="space-y-2">
                                                            {type.applications.map((a, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                                    {a}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Features (for simple products) */}
                                {product.features && !product.types && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Caracteristicas:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.features.map((f, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Advantages */}
                                {product.advantages && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-accent mb-4">Ventajas:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.advantages.map((a, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <Leaf className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                    {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Applications (for simple products) */}
                                {product.applications && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-primary mb-4">Aplicaciones:</h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                            {product.applications.map((a, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {a}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* CTA */}
                                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Consultar Disponibilidad <ArrowRight className="h-4 w-4" />
                                    </Link>
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
                        Impulse la <span className="text-gradient-primary">Transicion Energetica</span>
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Contactenos para disenar la solucion de electromovilidad ideal para su proyecto
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Solicitar Propuesta Tecnica <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
