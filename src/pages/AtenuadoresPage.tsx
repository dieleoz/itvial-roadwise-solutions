import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ShieldAlert, ArrowRight, CheckCircle, Truck, AlertTriangle,
    Award, Eye, Shield, TrendingUp
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "atenuador-remolcable",
        name: "Atenuador de Impacto Remolcable",
        description: "Sistema de proteccion montado en remolque que absorbe la energia de impactos vehiculares, protegiendo a los trabajadores y conductores en zonas de trabajo vial.",
        specs: [
            { label: "Tipo", value: "Remolcable TL-3 / TL-2" },
            { label: "Velocidad de impacto certificada", value: "Hasta 100 km/h (TL-3)" },
            { label: "Peso del sistema", value: "~900 kg (con lastre)" },
            { label: "Longitud", value: "4.5 m - 6.0 m" },
            { label: "Ancho", value: "2.4 m desplegado" },
            { label: "Certificacion", value: "NCHRP 350 / MASH" },
            { label: "Material de absorcion", value: "Celdas de aluminio deformable" },
            { label: "Restauracion", value: "Modulos reemplazables" },
        ],
        features: [
            "Absorcion progresiva de energia mediante celdas deformables",
            "Proteccion para impactos frontales y angulares",
            "Sistema de senalizacion luminica integrado (flechas LED)",
            "Facil despliegue y plegado para transporte",
            "Modulos de absorcion reemplazables tras impacto",
            "Compatible con diferentes tipos de vehiculo remolcador",
            "Reflectivos de alta intensidad en todo el perimetro",
            "Panel de mensaje variable opcional integrado"
        ],
        applications: [
            "Zonas de trabajo en carreteras y autopistas",
            "Proteccion de vehiculos de mantenimiento en movimiento",
            "Cierre de carriles por obras o accidentes",
            "Operaciones de demarcacion vial",
            "Proteccion de equipos de inspeccion de pavimentos",
            "Eventos y operaciones especiales en via"
        ]
    },
    {
        id: "atenuador-montado",
        name: "Atenuador Montado en Vehiculo (TMA)",
        description: "Sistema de atenuacion de impacto instalado directamente en la parte trasera de camiones de trabajo, proporcionando proteccion movil continua durante operaciones en carretera.",
        specs: [
            { label: "Tipo", value: "TMA TL-3" },
            { label: "Montaje", value: "Directo en chasis de camion" },
            { label: "Velocidad de impacto certificada", value: "Hasta 100 km/h" },
            { label: "Peso del sistema", value: "~650 kg" },
            { label: "Elevacion", value: "Hidraulica o manual" },
            { label: "Certificacion", value: "MASH TL-3" },
        ],
        features: [
            "Montaje permanente en vehiculos de mantenimiento",
            "Mecanismo de elevacion para transporte en via urbana",
            "Panel de flechas LED de alta visibilidad",
            "Estructura de aluminio para reduccion de peso",
            "Facil acceso para reemplazo de modulos de absorcion",
            "Compatible con camiones de 3.5 toneladas en adelante"
        ],
        applications: [
            "Camiones de mantenimiento vial",
            "Vehiculos de demarcacion en movimiento",
            "Operaciones de poda y limpieza en carreteras",
            "Inspeccion de infraestructura vial",
            "Vehiculos de respuesta a emergencias",
            "Operaciones de senalizacion temporal"
        ]
    }
];

const benefits = [
    {
        icon: Shield,
        title: "Proteccion Certificada",
        description: "Cumplimiento de normas internacionales NCHRP 350 y MASH para atenuar impactos vehiculares."
    },
    {
        icon: TrendingUp,
        title: "Reduccion de Fatalidades",
        description: "Reduccion comprobada de hasta un 80% en lesiones graves en zonas de trabajo vial."
    },
    {
        icon: Award,
        title: "Facil Restauracion",
        description: "Modulos de absorcion reemplazables que permiten restaurar el atenuador sin cambiar todo el sistema."
    },
    {
        icon: Eye,
        title: "Alta Visibilidad",
        description: "Senalizacion luminica LED integrada y reflectivos de alta intensidad para maxima visibilidad."
    },
];

export default function AtenuadoresPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, estoy interesado en los atenuadores de impacto remolcables de IT VIAL. Quisiera recibir informacion tecnica y cotizacion.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Atenuadores de Impacto Remolcables | IT VIAL SAS"
                description="Atenuadores de impacto remolcables y montados en vehiculo (TMA) certificados para proteccion en zonas de trabajo vial en Colombia."
                keywords="atenuadores impacto, TMA, atenuador remolcable, proteccion zonas de trabajo, seguridad vial Colombia, IT VIAL"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Atenuadores de Impacto IT VIAL",
                    "description": "Sistemas de atenuacion de impacto para proteccion en zonas de trabajo vial",
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
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Atenuadores de Impacto <span className="text-gradient-primary">Remolcables</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Sistemas certificados de proteccion vehicular para zonas de trabajo que salvan vidas en carreteras y autopistas
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                            >
                                Solicitar Cotizacion <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <div className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-xl p-5 text-center"
                        >
                            <benefit.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                            <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
                            <p className="text-xs text-muted-foreground">{benefit.description}</p>
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
                                        <ShieldAlert className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-3xl font-bold mb-3">{product.name}</h2>
                                        <p className="text-lg text-muted-foreground">{product.description}</p>
                                    </div>
                                </div>

                                {/* Specs Table */}
                                <div className="mb-8">
                                    <h4 className="font-semibold text-primary mb-4">Especificaciones Tecnicas:</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <tbody>
                                                {product.specs.map((spec, idx) => (
                                                    <tr key={idx} className={idx % 2 === 0 ? "bg-secondary/30" : ""}>
                                                        <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{spec.label}</td>
                                                        <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Features */}
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

                                {/* Applications */}
                                <div className="mb-8">
                                    <h4 className="font-semibold text-accent mb-4">Aplicaciones:</h4>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {product.applications.map((a, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

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

                {/* Safety Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 md:p-12 border border-orange-500/20"
                >
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="h-8 w-8 text-orange-400 shrink-0" />
                        <div>
                            <h3 className="font-display text-xl font-bold mb-3">Normativa de Seguridad en Zonas de Trabajo</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Segun la normativa colombiana y las recomendaciones del Manual de Senalizacion Vial, las zonas de trabajo en carreteras nacionales deben contar con dispositivos de proteccion para trabajadores y usuarios. Los atenuadores de impacto son un componente esencial de la seguridad en zonas de obra.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                                    Resolucion 1885 de 2015 - Senalizacion de zonas de trabajo
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                                    Manual de Senalizacion Vial - Capitulo de dispositivos de proteccion
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                                    NCHRP 350 / MASH - Estandares internacionales de certificacion
                                </li>
                            </ul>
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
                        Proteja a Sus <span className="text-gradient-primary">Trabajadores</span> en Via
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Contactenos para recibir asesoria tecnica sobre la solucion de atenuacion adecuada para sus operaciones
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
                    >
                        Solicitar Asesoria Tecnica <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
