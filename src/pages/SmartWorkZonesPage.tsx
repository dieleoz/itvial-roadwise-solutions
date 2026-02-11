import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    AlertTriangle, ShieldAlert, Radio, Activity,
    Wifi, CheckCircle, ArrowRight, Zap,
    Construction, MapPin, Gauge, Server
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

export default function SmartWorkZonesPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, me interesa conocer más sobre las soluciones de Zonas de Obra Inteligentes (Smart Work Zones).");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-20 bg-background overflow-hidden">
            <SEO
                title="Smart Work Zones | IT VIAL INTELIGENTE™"
                description="Zonas de Obra Inteligentes con VIGÍA VIAL™ y CONO ALERTA PRO™. Tecnología IoT para protección activa y cumplimiento PMT."
            />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 relative">
                <div className="absolute top-0 right-0 -z-10 opacity-10">
                    <Construction className="w-96 h-96 text-primary" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                            IT VIAL INTELIGENTE™
                        </span>
                        <span className="py-1 px-3 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold border border-orange-500/20">
                            SMART WORK ZONES
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Zonas de Obra <br />
                        <span className="text-gradient-primary">Inteligentes</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl">
                        Evolucionamos el control de obra tradicional hacia un modelo activo de monitoreo, detección y alerta basado en datos IoT.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact" className="px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity flex items-center gap-2">
                            Solicitar Piloto <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Server,
                            title: "API Abierta",
                            desc: "Sin software complejo. Integramos los datos directamente a tu centro de control existente."
                        },
                        {
                            icon: Construction,
                            title: "Hardware Agnóstico",
                            desc: "Nuestros sensores se adaptan a la infraestructura que ya tienes (conos y señales)."
                        },
                        {
                            icon: ShieldAlert,
                            title: "Defensa Legal",
                            desc: "Generamos evidencia digital de cumplimiento del PMT ante demandas o interventoría."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Product 1: VIGÍA VIAL */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-wider text-sm mb-2 block">SOLUCIÓN DE MONITOREO</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">VIGÍA VIAL™</h2>
                        <h3 className="text-2xl text-foreground/80 mb-6 font-light">"Tu señalización, auditada en tiempo real."</h3>

                        <p className="text-lg text-muted-foreground mb-8">
                            Dispositivo IoT diseñado para convertir una señal temporal convencional en un activo inteligente con monitoreo de ubicación, estabilidad y estado operativo.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Monitoreo GPS Activo</h4>
                                    <p className="text-sm text-muted-foreground">Ubicación precisa en tiempo real de cada señal instalada en el frente de obra.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Detección de Caída</h4>
                                    <p className="text-sm text-muted-foreground">Acelerómetro integrado que alerta inmediatamente si la señal ha sido derribada.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-secondary text-primary">
                                    <Wifi className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Conectividad Redundante</h4>
                                    <p className="text-sm text-muted-foreground">Transmisión de datos vía 4G/5G o LoRaWAN para asegurar la entrega de alertas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-card/50 border border-primary/20 rounded-xl">
                            <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                <Server className="h-4 w-4" /> ENTREGABLES VÍA API
                            </h4>
                            <code className="text-xs text-muted-foreground block font-mono">
                                GET /api/v1/devices/{'{id}'}/status<br />
                                Response: {'{ status: "ACTIVE" | "FALLEN", battery: "98%", lat: 4.6, lng: -74.0 }'}
                            </code>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl bg-gradient-to-br from-card to-background p-8 flex items-center justify-center">
                            {/* Placeholder for Product Image */}
                            <div className="text-center">
                                <ShieldAlert className="w-32 h-32 text-primary mx-auto mb-6 opacity-80" />
                                <p className="text-sm text-muted-foreground">Visualización del Dispositivo</p>
                                <p className="font-bold text-xl">VIGÍA VIAL™</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-xl shadow-xl max-w-xs">
                            <p className="font-bold text-lg mb-1">IP67</p>
                            <p className="text-sm text-muted-foreground">Integrado y sellado para soportar clima extremo.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product 2: CONO ALERTA PRO */}
            <section className="container mx-auto px-4 mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl bg-gradient-to-br from-card to-background p-8 flex items-center justify-center">
                            {/* Placeholder for Product Image */}
                            <div className="text-center">
                                <LogoCone className="w-32 h-32 text-orange-500 mx-auto mb-6 opacity-80" />
                                <p className="text-sm text-muted-foreground">Visualización del Dispositivo</p>
                                <p className="font-bold text-xl">CONO ALERTA PRO™</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -top-6 -left-6 bg-background border border-border p-6 rounded-xl shadow-xl max-w-xs">
                            <p className="font-bold text-lg mb-1">Radar Doppler</p>
                            <p className="text-sm text-muted-foreground">Detección de intrusión +150m</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-orange-500 font-bold tracking-wider text-sm mb-2 block">PROTECCIÓN ACTIVA</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">CONO ALERTA PRO™</h2>
                        <h3 className="text-2xl text-foreground/80 mb-6 font-light">"Un segundo par de ojos cuidando a tu equipo."</h3>

                        <p className="text-lg text-muted-foreground mb-8">
                            Sistema autónomo de detección temprana de vehículos en aproximación para protección de cuadrillas, integrado directamente en un cono industrial de alta resistencia.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                    <Radio className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Radar Doppler Integrado</h4>
                                    <p className="text-sm text-muted-foreground">Mide velocidad y tasa de aproximación para detectar vehículos peligrosos a más de 150m.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Alerta Inmediata</h4>
                                    <p className="text-sm text-muted-foreground">Dispara sirena y estrobos LED de alta intensidad ante riesgo de atropello.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-secondary text-primary">
                                    <Gauge className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Datos de Tráfico</h4>
                                    <p className="text-sm text-muted-foreground">Entrega métricas de velocidad promedio y conteo vehicular básico.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-card/50 border border-border rounded-xl">
                            <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                                <Server className="h-4 w-4" /> ENTREGABLES VÍA API
                            </h4>
                            <code className="text-xs text-muted-foreground block font-mono">
                                GET /api/v1/zones/{'{id}'}/traffic<br />
                                Response: {'{ avgSpeed: "45km/h", count: 1240, nearMisses: 2 }'}
                            </code>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <div className="bg-gradient-dark-section rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            ¿Listo para implementar Smart Work Zones?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Hablemos de cómo integrar VIGÍA VIAL™ y CONO ALERTA PRO™ en su próxima concesión u obra urbana.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity">
                                Solicitar Cotización
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Custom Icon for Cone
function LogoCone(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98a1 1 0 0 0 .9 1.43h16a1 1 0 0 0 .9-1.43Z" />
            <path d="M4.18 16h15.65" />
            <path d="M5.18 12h13.65" />
        </svg>
    )
}
