import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    AlertTriangle, ShieldAlert, Radio, Activity,
    Wifi, CheckCircle, ArrowRight, Zap,
    Construction, MapPin, Gauge, Server,
    CornerRightDown
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

// Product Data
const products = [
    {
        id: "vigia-vial",
        name: "VIGÍA VIAL™",
        icon: MapPin,
        description: "Sensor inteligente diseñado para convertir una señal temporal convencional en un activo auditado en tiempo real.",
        features: [
            "Monitoreo GPS de ubicación precisa",
            "Detección automática de caída o desplazamiento",
            "Registro de eventos para auditoría de PMT",
            "Conectividad IoT (4G/5G/LoRaWAN)",
            "Instalación en señales existentes"
        ],
        benefits: [
            "Evita multas por incumplimiento de señalización",
            "Reduce costos de inspección visual",
            "Genera evidencia digital ante incidentes"
        ]
    },
    {
        id: "cono-alerta",
        name: "CONO ALERTA PRO™",
        icon: Radio, // Represents Radar/Signal
        description: "Sistema de protección activa para cuadrillas que detecta vehículos en aproximación y emite alertas inmediatas.",
        features: [
            "Radar Doppler integrado (+150m de alcance)",
            "Detección de velocidad y tasa de aproximación",
            "Alertas sonoras (sirena) y visuales (LEDs)",
            "Datos de tráfico (Conteo y Velocidad Promedio)",
            "Batería de larga duración y resistencia IP67"
        ],
        benefits: [
            "Protege la vida de los operarios en vía",
            "Alerta antes de que ocurra el accidente",
            "Valida el respeto a límites de velocidad de obra"
        ]
    },
    {
        id: "semaforo-movil",
        name: "Sistema de Semaforización Móvil IT VIAL",
        icon: Zap, // Represents energy/active control
        description: "Automatización de Paso Alternado. Ecosistema tecnológico diseñado para sustituir el control manual por una operación digital centralizada, eliminando el error humano y optimizando costos.",
        features: [
            "Alcance y Cobertura Crítica: Comunicación estable y sincronizada de hasta 800m (ideal para túneles/puentes)",
            "Hardware Industrial Robusto: Semáforos móviles LED de alta visibilidad con autonomía solar",
            "Actuación Adaptativa: Gestión vía botonera industrial, tablet o app según cobertura",
            "Control de Vía Integrado: Gestión remota de tiempos de ciclo y cumplimiento de PMT vía IT-V4.0"
        ],
        benefits: [
            "Reducción de Costos Directos: Reduce la cuadrilla a un solo operario (menor nómina y riesgo ARL)",
            "Seguridad Operativa Conectada: Entrega datos de tráfico vía API al centro de control en tiempo real"
        ]
    }
];

export default function SmartWorkZonesPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, me interesa conocer más sobre las soluciones de Zonas de Obra Inteligentes (Semaforización Móvil, VIGÍA VIAL y CONO ALERTA).");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-20 bg-background overflow-hidden">
            <SEO
                title="Smart Work Zones | IT VIAL INTELIGENTE™"
                description="Zonas de Obra Inteligentes con VIGÍA VIAL™, CONO ALERTA PRO™ y Semaforización Móvil. Tecnología IoT para protección activa y cumplimiento PMT."
            />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 relative">
                <div className="absolute top-0 right-0 -z-10 opacity-5">
                    <Construction className="w-64 h-64 text-primary" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 mb-6 py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                        <Construction className="w-4 h-4" />
                        IT VIAL INTELIGENTE™
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Zonas de Obra <span className="text-gradient-primary">Inteligentes</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
                        Evolucionamos el control de obra tradicional hacia un modelo activo de monitoreo, detección y alerta basado en datos.
                    </p>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12">
                        <img
                            src="/images/solutions/its/smart-work-zone-concept.webp"
                            alt="Concepto de Zona de Obra Inteligente con dispositivos conectados"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                </motion.div>
            </section>

            {/* Products Grid */}
            <section className="container mx-auto px-4 mb-20">
                <div className="space-y-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-8 md:p-10 border border-border/50 hover:border-primary/20 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Icon & Header */}
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <product.icon className="h-8 w-8" />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h2 className="font-display text-3xl font-bold mb-2">{product.name}</h2>
                                        <p className="text-lg text-foreground/80 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Features */}
                                        <div>
                                            <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                                <Activity className="w-4 h-4" /> Características
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits */}
                                        <div>
                                            <h3 className="font-semibold text-orange-500 mb-3 flex items-center gap-2">
                                                <ShieldAlert className="w-4 h-4" /> Valor Agregado
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CornerRightDown className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Differentiator & CTA */}
            <section className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-3xl mx-auto"
                >
                    <div className="relative p-8 rounded-2xl bg-gradient-dark-section border border-primary/20">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-background px-4 text-primary">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="font-display text-xl md:text-2xl italic font-medium text-foreground/90">
                            "No instalamos señales temporales; desplegamos una infraestructura industrial conectada que garantiza seguridad y ahorro operativo."
                        </h3>
                        <p className="mt-4 text-sm font-bold text-primary tracking-widest uppercase mb-0">
                            Diferencial IT VIAL
                        </p>
                    </div>
                </motion.div>

                <div className="inline-block p-8 rounded-2xl bg-secondary/30 border border-border">
                    <h3 className="font-display text-2xl font-bold mb-4">¿Interesado en implementar?</h3>
                    <p className="text-muted-foreground mb-6">
                        Contáctenos para agendar una demostración o piloto de estas tecnologías.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                        Solicitar Información <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
