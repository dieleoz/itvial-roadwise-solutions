import { motion } from "framer-motion";
import { Train, Ruler, Camera, Wrench, CheckCircle, AlertTriangle, Download, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

const portableEquipment = [
    {
        icon: Ruler,
        name: "Auscultador de Geometría de Vía Portátil",
        description: "Equipo manual plegable para medición de parámetros geométricos de vía férrea",
        features: [
            "Diseño plegable y transportable",
            "Batería 8 horas de autonomía",
            "Memoria para 2,000 km de datos",
            "Operación por 1-2 personas",
            "Conexión Bluetooth"
        ],
        parameters: [
            "Trocha (ancho de vía)",
            "Alabeo (twist)",
            "Nivelación longitudinal",
            "Alineación horizontal",
            "Peralte (cant)",
            "Escuadre"
        ],
        compliance: ["EN 13848", "UIC", "Normas ferroviarias colombianas"]
    },
    {
        icon: Camera,
        name: "Carro de Medición del Perfil de Carril",
        description: "Sistema de inspección del perfil transversal del carril mediante cámaras 3D y sensores láser",
        features: [
            "Cámaras 3D estereoscópicas",
            "Sensores láser de triangulación",
            "Iluminación LED regulable",
            "Procesamiento en tiempo real",
            "Velocidad hasta 20 km/h"
        ],
        parameters: [
            "Perfil completo del carril",
            "Desgaste vertical de cabeza",
            "Desgaste horizontal",
            "Corrugación (ondulaciones)",
            "Defectos superficiales",
            "Desgaste ondulatoria (OOR)"
        ],
        compliance: ["UIC60", "UIC54", "EN standards"]
    },
    {
        icon: Wrench,
        name: "Regla Electrónica para Soldaduras",
        description: "Instrumento de precisión para verificar la calidad geométrica de soldaduras aluminotérmicas",
        features: [
            "Sensores capacitivos 0.01 mm",
            "Medición sin contacto",
            "Bluetooth para datos",
            "Batería 12 horas",
            "Memoria 10,000 mediciones"
        ],
        parameters: [
            "Irregularidad vertical",
            "Desalineación horizontal",
            "Escalón vertical",
            "Deformación lateral"
        ],
        compliance: ["EN 13231-3", "EN 14730", "Vossloh/Pandrol"]
    }
];

const vehicles = [
    {
        model: "M10",
        level: "Básico",
        speed: "10 km/h",
        capacity: "2-4 pasajeros",
        weight: "3-5 ton",
        systems: {
            geometry: true,
            profile: false,
            video: true,
            catenary: false,
            clearance: false
        },
        price: "$",
        ideal: "Tramos cortos (<100 km), vías de carga ligera, mantenimiento local"
    },
    {
        model: "M100",
        level: "Avanzado",
        speed: "100 km/h",
        capacity: "4-6 pasajeros",
        weight: "8-12 ton",
        systems: {
            geometry: true,
            profile: true,
            video: true,
            catenary: "Opcional",
            clearance: false
        },
        price: "$$",
        ideal: "Ferrocarriles de pasajeros, líneas de metro, inspecciones preventivas"
    },
    {
        model: "M1200",
        level: "Alta Velocidad",
        speed: "120 km/h",
        capacity: "6-8 pasajeros",
        weight: "15-20 ton",
        systems: {
            geometry: true,
            profile: true,
            video: true,
            catenary: true,
            clearance: true
        },
        price: "$$$",
        ideal: "Líneas de alta velocidad (>160 km/h), auditorías integrales, ferrocarriles nacionales"
    }
];

const hiRailAnalysis = {
    conversion: {
        cost: "USD $35,000 - $80,000",
        installation: "USD $15,000 - $25,000",
        maintenance: "USD $5,000 - $8,000/año",
        recertification: "USD $3,000/año"
    },
    limitations: [
        "Velocidad máxima reducida (40-60 km/h)",
        "Desgaste acelerado del vehículo",
        "Mantenimiento complejo (doble sistema)",
        "Certificación ferroviaria costosa",
        "Vida útil limitada (5-8 años)"
    ],
    whenToConvert: [
        "Proyecto temporal (<3 años)",
        "Presupuesto muy limitado",
        "Uso esporádico (<100 hrs/año)",
        "Ya posee vehículo compatible"
    ],
    whenDedicated: [
        "Proyecto largo plazo (>3 años)",
        "Uso intensivo (>200 hrs/año)",
        "Requiere alta velocidad",
        "Presupuesto permite inversión mayor"
    ]
};

export default function FerroviarioPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, estoy interesado en sus soluciones ferroviarias y vehículos de inspección de vía.");
        return () => resetWAMessage();
    }, []);

    const ferroviarioSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Soluciones Ferroviarias",
        "description": "Tecnología para infraestructura ferroviaria: equipos portátiles, vehículos de mantenimiento y sistemas Hi-Rail.",
        "brand": {
            "@type": "Brand",
            "name": "IT VIAL"
        },
        "category": "Infraestructura Ferroviaria",
        "manufacturer": {
            "@type": "Organization",
            "name": "IT VIAL SAS"
        }
    };

    return (
        <div className="pt-20 lg:pt-24 pb-24">
            <SEO
                title="Soluciones Ferroviarias | IT VIAL SAS"
                description="Instrumentación y vehículos de auscultación para infraestructura ferroviaria. Tecnología de precisión fabricada en Colombia."
                schema={ferroviarioSchema}
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
                            <Train className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-primary">Soluciones Ferroviarias</span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Tecnología para <span className="text-gradient-primary">Infraestructura Ferroviaria</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Equipos de medición y mantenimiento para vías férreas, desde inspección manual hasta sistemas de alta velocidad
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#equipos" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Ver Equipos Portátiles
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a href="#vehiculos" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                                Explorar Vehículos
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle, title: "Detección Temprana de Fallas", desc: "Identificación de problemas antes de que afecten seguridad" },
                            { icon: Train, title: "Optimización de Mantenimiento", desc: "Planificación basada en datos objetivos" },
                            { icon: Download, title: "Reducción de Costos", desc: "Mantenimiento preventivo vs. correctivo" }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card rounded-xl p-6 text-center"
                            >
                                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portable Equipment */}
            <section id="equipos" className="py-20 bg-gradient-dark-section">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Equipos <span className="text-gradient-primary">Portátiles</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Soluciones manuales para inspección y control de calidad de vías férreas
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {portableEquipment.map((equipment, index) => (
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
                                        <h3 className="font-display text-2xl font-bold mb-3">{equipment.name}</h3>
                                        <p className="text-muted-foreground mb-6">{equipment.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 text-primary">Características</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {equipment.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-accent">Parámetros de Medición</h4>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            {equipment.parameters.map((param, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-accent">✓</span>
                                                    <span>{param}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Cumplimiento Normativo</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {equipment.compliance?.map((norm, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    {norm}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-4">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                                    >
                                        Solicitar Asesoría Técnica <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <button className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors">
                                        Descargar Ficha Técnica
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Auscultation Vehicles */}
            <section id="vehiculos" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Vehículos de <span className="text-gradient-accent">Auscultación</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Sistemas integrales para inspección completa de infraestructura ferroviaria
                        </p>
                    </motion.div>

                    {/* Vehicle Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {vehicles.map((vehicle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-xl p-6 hover:bg-secondary/50 transition-all"
                            >
                                <div className="text-center mb-6">
                                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-2xl mb-3">
                                        {vehicle.model}
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-2">{vehicle.level}</div>
                                    <div className="text-3xl font-bold text-gradient-primary mb-1">{vehicle.price}</div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Velocidad:</span>
                                        <span className="font-semibold">{vehicle.speed}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Capacidad:</span>
                                        <span className="font-semibold">{vehicle.capacity}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Peso:</span>
                                        <span className="font-semibold">{vehicle.weight}</span>
                                    </div>
                                </div>

                                <div className="border-t border-border pt-4 mb-6">
                                    <h4 className="font-semibold mb-3 text-sm">Sistemas Integrados:</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Geometría de vía</span>
                                            {vehicle.systems.geometry ? <CheckCircle className="h-4 w-4 text-primary" /> : <span className="text-muted-foreground">-</span>}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Perfil de carril</span>
                                            {vehicle.systems.profile ? <CheckCircle className="h-4 w-4 text-primary" /> : <span className="text-muted-foreground">-</span>}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Video HD</span>
                                            {vehicle.systems.video ? <CheckCircle className="h-4 w-4 text-primary" /> : <span className="text-muted-foreground">-</span>}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Catenaria</span>
                                            {typeof vehicle.systems.catenary === 'string' ? <span className="text-accent text-xs">{vehicle.systems.catenary}</span> : vehicle.systems.catenary ? <CheckCircle className="h-4 w-4 text-primary" /> : <span className="text-muted-foreground">-</span>}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Gálibo</span>
                                            {vehicle.systems.clearance ? <CheckCircle className="h-4 w-4 text-primary" /> : <span className="text-muted-foreground">-</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                                    <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Ideal para:</span> {vehicle.ideal}</p>
                                </div>

                                <Link
                                    to="/contact"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
                                >
                                    Solicitar Ficha Técnica <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trailers Option */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-xl p-8"
                    >
                        <h3 className="font-display text-2xl font-bold mb-4">
                            Remolques Adaptadores <span className="text-accent">(40-60% Ahorro)</span>
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            En lugar de adquirir un vehículo completo, puede comprar solo el remolque equipado y usar su propio tractor/locomotora existente.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-primary">Ventajas</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Menor inversión inicial</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Aprovecha activos existentes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>Flexibilidad operativa</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-accent">Consideraciones</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Requiere coordinación con tractor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Menor autonomía operacional</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Posibles limitaciones de velocidad</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hi-Rail Conversion */}
            <section className="py-20 bg-gradient-dark-section">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Conversión <span className="text-gradient-primary">Hi-Rail</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Sistemas que permiten que vehículos convencionales circulen tanto en carretera como en vía férrea
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Cost Analysis */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl p-8"
                        >
                            <h3 className="font-display text-xl font-bold mb-6">Análisis de Costos</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-4 text-primary">Costos de Conversión</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Kit hi-rail completo:</span>
                                            <span className="font-semibold">{hiRailAnalysis.conversion.cost}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Instalación y certificación:</span>
                                            <span className="font-semibold">{hiRailAnalysis.conversion.installation}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Mantenimiento anual:</span>
                                            <span className="font-semibold">{hiRailAnalysis.conversion.maintenance}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Recertificación:</span>
                                            <span className="font-semibold">{hiRailAnalysis.conversion.recertification}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-4 text-accent">Limitaciones</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {hiRailAnalysis.limitations.map((limitation, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                                <span>{limitation}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decision Matrix */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            <div className="glass-card rounded-xl p-6 border-2 border-primary/20">
                                <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5" />
                                    Optar por Conversión Hi-Rail
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {hiRailAnalysis.whenToConvert.map((reason, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary">•</span>
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card rounded-xl p-6 border-2 border-accent/20">
                                <h4 className="font-semibold mb-4 text-accent flex items-center gap-2">
                                    <Train className="h-5 w-5" />
                                    Optar por Vehículo Dedicado
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {hiRailAnalysis.whenDedicated.map((reason, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-accent">•</span>
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Recommendation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl p-8 bg-gradient-accent/10 border border-accent/20"
                        >
                            <h4 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-6 w-6 text-accent" />
                                Recomendación IT VIAL
                            </h4>
                            <p className="text-muted-foreground mb-4">
                                "Para muchos clientes, <span className="text-foreground font-semibold">alquilar vehículos hi-rail por proyecto</span> es más económico que comprar y convertir. Para proyectos cortos (&lt;2 años) o presupuestos ajustados, considerar remolque. Para operación continua (&gt;3 años), vehículo dedicado es más eficiente."
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 rounded-lg bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                                    Analizar Mi Caso
                                </button>
                                <button className="px-6 py-3 rounded-lg border border-accent hover:bg-accent/10 transition-colors">
                                    Ver Vehículos Dedicados
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-12 text-center"
                    >
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                            ¿Necesita una Solución <span className="text-gradient-primary">Ferroviaria</span>?
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Nuestro equipo técnico puede asesorarlo en la selección del equipo más adecuado para su proyecto ferroviario
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Solicitar Asesoría
                            </a>
                            <a href="/downloads" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border hover:bg-secondary transition-colors">
                                <Download className="h-5 w-5" />
                                Descargar Catálogos
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
