import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ConeIcon, ArrowRight, CheckCircle, Shield, Eye,
    ThermometerSun, Ruler, Wrench
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const products = [
    {
        id: "delineador-flexible",
        name: "Delineador Flexible Rebotable",
        description: "Delineador vial fabricado en poliuretano de alta resistencia que se recupera tras el impacto vehicular, manteniendo la senalizacion activa y reduciendo costos de mantenimiento.",
        specs: [
            { label: "Altura", value: "75 cm / 90 cm / 120 cm" },
            { label: "Material", value: "Poliuretano flexible" },
            { label: "Retroreflectividad", value: "Tipo XI ASTM D4956" },
            { label: "Base", value: "Empotrada o adhesiva" },
            { label: "Temperatura de operacion", value: "-30C a +70C" },
            { label: "Recuperacion tras impacto", value: "> 95%" },
        ],
        features: [
            "Recuperacion total tras impactos a velocidades de hasta 80 km/h",
            "Laminas retroreflectivas de alta intensidad (HIP o DG)",
            "Resistente a rayos UV, lluvia, nieve y productos quimicos",
            "Facil instalacion con tornillo central o adhesivo",
            "Minimo mantenimiento requerido",
            "Vida util superior a 5 anos en condiciones normales",
            "Colores disponibles: naranja, amarillo, blanco",
            "Cumplimiento Manual de Senalizacion Vial colombiano"
        ],
        applications: [
            "Separacion de carriles y calzadas",
            "Canalizacion en zonas de obra",
            "Isletas y medianas",
            "Curvas peligrosas",
            "Zonas escolares y hospitalarias",
            "Ciclorrutas y carriles preferenciales",
            "Peajes y cabinas de cobro",
            "Rotondas y glorietas"
        ]
    },
    {
        id: "delineador-tubular",
        name: "Delineador Tubular",
        description: "Dispositivo tubular de senalizacion vertical fabricado en polietileno de alta densidad, disenado para canalizacion de trafico en zonas urbanas e interurbanas.",
        specs: [
            { label: "Altura", value: "45 cm / 75 cm" },
            { label: "Material", value: "Polietileno de alta densidad" },
            { label: "Diametro", value: "8 cm" },
            { label: "Retroreflectividad", value: "2 bandas HIP" },
            { label: "Fijacion", value: "Base adhesiva o empotrada" },
            { label: "Peso", value: "~500 g" },
        ],
        features: [
            "Diseno de perfil bajo para zonas urbanas",
            "Resistencia a impactos repetidos",
            "Bandas retroreflectivas visibles a 360 grados",
            "Instalacion rapida sin herramientas especiales",
            "Compatible con bases existentes",
            "Colores: naranja, amarillo, blanco, verde"
        ],
        applications: [
            "Separacion de ciclorrutas",
            "Canalizacion en intersecciones",
            "Zonas de trabajo temporal",
            "Estacionamientos y parqueaderos",
            "Plataformas de transporte masivo",
            "Delimitacion de zonas peatonales"
        ]
    },
    {
        id: "delineador-vial",
        name: "Hito Delineador Vial",
        description: "Dispositivo retroreflectivo instalado al borde de la via para guiar a los conductores, especialmente en condiciones de baja visibilidad nocturna o climatica adversa.",
        specs: [
            { label: "Altura", value: "110 cm" },
            { label: "Material", value: "Polietileno o fibra de vidrio" },
            { label: "Retroreflectividad", value: "Tipo IX o XI" },
            { label: "Base", value: "Enterrada o sobre superficie" },
            { label: "Visibilidad", value: "> 300 m en condiciones nocturnas" },
            { label: "Resistencia al viento", value: "Hasta 120 km/h" },
        ],
        features: [
            "Alta visibilidad nocturna gracias a laminas retroreflectivas",
            "Resistencia a condiciones climaticas extremas",
            "Facil reposicion en caso de dano",
            "Bajo costo de mantenimiento",
            "Cumplimiento normativa INVIAS y Manual de Senalizacion",
            "Opciones con captafaro integrado"
        ],
        applications: [
            "Bordes de carreteras y autopistas",
            "Curvas y zonas de riesgo",
            "Puentes y viaductos",
            "Zonas de montana",
            "Accesos a tuneles",
            "Medianas y separadores centrales"
        ]
    }
];

export default function DelineadoresPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, estoy interesado en los delineadores rebotables de IT VIAL. Quisiera recibir una cotizacion.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Delineadores Rebotables | IT VIAL SAS"
                description="Delineadores flexibles rebotables, tubulares e hitos delineadores viales para canalizacion y seguridad vial en carreteras colombianas."
                keywords="delineadores rebotables, delineadores flexibles, hitos viales, canalizacion trafico, seguridad vial Colombia, IT VIAL"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Delineadores Rebotables IT VIAL",
                    "description": "Delineadores flexibles para canalizacion y seguridad vial",
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
                            Delineadores <span className="text-gradient-primary">Rebotables</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Dispositivos de canalizacion y delineacion vial flexibles, disenados para recuperarse tras el impacto y mantener la seguridad activa en la via
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

            {/* Products */}
            <div className="container mx-auto px-4 mt-16">
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
                                        <Shield className="h-8 w-8 text-primary" />
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
                                                <Eye className="h-4 w-4 text-accent shrink-0 mt-0.5" />
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
                                        Solicitar Cotizacion <ArrowRight className="h-4 w-4" />
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
                        Proteja las Vias con <span className="text-gradient-primary">Delineacion Flexible</span>
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Contactenos para recibir asesoria tecnica y cotizacion de delineadores para su proyecto vial
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
