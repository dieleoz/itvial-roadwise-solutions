import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Construction,
    TrafficCone,
    Zap, // Represents energy/active control
    Radio, // Represents Radar/Signal
    Activity,
    ShieldAlert,
    CheckCircle,
    CornerRightDown,
    MapPin,
    ArrowRight,
    Server,
    Wifi,
    UserCheck
} from "lucide-react";
import { useEffect } from "react";
import { useWhatsApp } from "@/context/WhatsAppContext";
import SEO from "@/components/SEO";

// Product Data
const products = [
    {
        id: "vigia-vial",
        name: "VIGÍA VIAL PRO™ (Sustituto de Inspección)",
        icon: UserCheck, // Represents monitoring/vigilance
        description: "Monitoreo 24/7 de señalización crítica. El sistema le avisa al celular si una señal se cae o la roban, evitando multas de la interventoría.",
        features: [
            "Sensor de inclinación y vibración industrial",
            "Geolocalización GPS en tiempo real",
            "Alerta inmediata a celular y centro de control",
            "Batería de larga duración (2 años)",
            "Instalación oculta antivandálica"
        ],
        benefits: [
            "Adiós Camionetas: Elimine recorridos de inspección 24/7 (Ahorro combustible/mant.)",
            "Cero Multas: Reaccione antes de que la interventoría note la falta de señal",
            "Protección Patrimonial: Recupere señales robadas con rastreo GPS"
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
        name: "Sistema Automatizado Pare y Siga (Smart-Flow)",
        icon: Zap,
        description: "Sustituto de Paletero: Reduzca su cuadrilla a un solo operario y elimine el riesgo de atropellamiento en el frente de obra.",
        features: [
            "Autonomía Energética Total: Paneles solares y baterías de ciclo profundo para operación 24/7",
            "Sincronización Inteligente: Enlace inalámbrico de 800m gestionado por controlador IT-V4.0",
            "Infraestructura Robusta: Tráiler industrial antivandálico diseñado para terrenos difíciles",
            "Modularidad Operativa: Funciona como semáforo individual (cierre total) o par sincronizado (paso alternado)"
        ],
        benefits: [
            "Ahorro Directo de Nómina: Elimine 3 paleteros por turno, reduciendo carga prestacional",
            "Cero Riesgo ARL: Operación desde punto seguro, sin exposición al tráfico",
            "Operación Continua: Sin fatiga humana ni errores en cambios de turno"
        ]
    }
];

const manufacturingProcess = [
    {
        title: "Capa Industrial (El Hierro)",
        icon: Construction,
        items: [
            "Chasis en acero estructural antivandálico",
            "Mástil plegable para transporte seguro",
            "Ingeniería mecánica propia"
        ]
    },
    {
        title: "Capa Electrónica (La Integración)",
        icon: Server,
        items: [
            "Ecosistema energético solar integrado",
            "Cerebro IT-V4.0 con radiofrecuencia",
            "Componentes de grado industrial"
        ]
    },
    {
        title: "Capa Digital (El Dato)",
        icon: Wifi,
        items: [
            "Normalización de protocolos (NTCIP)",
            "Habilitación de API para datos en vivo",
            "Alertas en tiempo real"
        ]
    }
];

export default function SmartWorkZonesPage() {
    const { setWAMessage, resetWAMessage } = useWhatsApp();

    useEffect(() => {
        setWAMessage("Hola, me interesa conocer más sobre el sistema Smart-Flow Dual y las soluciones de Zonas de Obra Inteligentes.");
        return () => resetWAMessage();
    }, []);

    return (
        <div className="pt-20 lg:pt-24 pb-20 bg-background overflow-hidden">
            <SEO
                title="Smart Work Zones | IT VIAL INTELIGENTE™"
                description="Zonas de Obra Inteligentes con VIGÍA VIAL™, CONO ALERTA PRO™ y Smart-Flow Dual. Tecnología IoT para protección activa y cumplimiento PMT."
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

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12 bg-white/5 flex items-center justify-center">
                        <img
                            src="/images/solutions/its/smart-work-zone-concept.webp"
                            alt="Concepto de Zona de Obra Inteligente con dispositivos conectados"
                            className="object-contain w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
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

            {/* Cost Comparison Table */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-10">
                    <h2 className="font-display text-3xl font-bold mb-4">Rentabilidad Comprobada</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        La tecnología no es un gasto, es la única forma de blindar su operación financiera y jurídica.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-lg">
                    {/* Traditional Model */}
                    <div className="bg-background/50 p-8 border-b md:border-b-0 md:border-r border-border backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                            <ShieldAlert className="w-8 h-8" />
                            <h3 className="font-display text-2xl font-bold">Modelo Tradicional</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5">X</div>
                                <span className="text-lg"><strong>4 Paleteros por turno</strong> (2 por punta) + Relevos de almuerzo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5">X</div>
                                <span className="text-lg"><strong>Alto Riesgo ARL V</strong> por exposición directa al tráfico</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5">X</div>
                                <span className="text-lg"><strong>Fatiga Humana</strong> = Errores en sincronización de paso</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5">X</div>
                                <span className="text-lg">Costo de dotación, transporte y alimentación elevado</span>
                            </li>
                        </ul>
                    </div>

                    {/* IT VIAL Model */}
                    <div className="bg-gradient-dark-section p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="flex items-center gap-3 mb-6 text-primary">
                            <Zap className="w-8 h-8" />
                            <h3 className="font-display text-2xl font-bold">Modelo IT VIAL</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-lg text-white"><strong>1 Solo Operario</strong> (desde punto seguro)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-lg text-white"><strong>Cero Accidentes</strong> por atropellamiento en control</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-lg text-white"><strong>Operación 24/7</strong> perfecta y sin interrupciones</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-lg text-white font-bold text-green-400">Ahorro Operativo &gt; 60%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Manufacturing Process (How we generate it) */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-10">
                    <h2 className="font-display text-3xl font-bold mb-4">Ingeniería y Fabricación <span className="text-gradient-primary">Hierro Inteligente</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Nuestro proceso de tres capas garantiza que el hardware industrial y la inteligencia digital operen como una sola unidad.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {manufacturingProcess.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary/20 rounded-xl p-6 border border-white/5"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-display text-xl font-bold mb-4 text-center">{step.title}</h3>
                            <ul className="space-y-2">
                                {step.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground text-center">
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
                            Mitigación de Riesgos y Ahorro Operativo
                        </p>
                    </div>
                </motion.div>

                <div className="inline-block p-8 rounded-2xl bg-secondary/30 border border-border">
                    <h3 className="font-display text-2xl font-bold mb-4">¿Cuánto dinero puede ahorrar su concesión?</h3>
                    <p className="text-muted-foreground mb-6">
                        Contáctenos para agendar una demostración o piloto de estas tecnologías.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                        Solicitar Estudio de Ahorro <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
