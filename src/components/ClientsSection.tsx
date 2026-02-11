import { motion } from "framer-motion";

const clients = [
    {
        name: "Concesión Neiva-Girardot",
        category: "Concesión Vial"
    },
    {
        name: "Concesión Pacífico Tres",
        category: "Concesión Vial"
    },
    {
        name: "Gobernación de Cundinamarca",
        category: "Gobierno Departamental"
    },
    {
        name: "Alcaldía de Bogotá",
        category: "Gobierno Municipal"
    },
    {
        name: "INVIAS",
        category: "Instituto Nacional de Vías"
    },
    {
        name: "ANI",
        category: "Agencia Nacional de Infraestructura"
    },
    {
        name: "Constructora Colpatria",
        category: "Sector Privado"
    },
    {
        name: "Odinsa",
        category: "Concesión Vial"
    }
];

export default function ClientsSection() {
    return (
        <section className="py-20 bg-gradient-dark-section overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Clientes que <span className="text-gradient-primary">Confían en Nosotros</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Trabajamos con las principales concesiones viales, entidades gubernamentales y empresas constructoras de Colombia
                    </p>
                </motion.div>

                {/* Scrolling Logos */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 pr-8"
                            animate={{
                                x: [0, -1920],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* First set */}
                            {clients.map((client, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex-shrink-0 w-64 glass-card rounded-xl p-6 hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="text-center">
                                        <div className="h-16 flex items-center justify-center mb-3">
                                            <h3 className="font-semibold text-lg">{client.name}</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{client.category}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Second set (duplicate for seamless loop) */}
                            {clients.map((client, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex-shrink-0 w-64 glass-card rounded-xl p-6 hover:bg-secondary/50 transition-colors"
                                >
                                    <div className="text-center">
                                        <div className="h-16 flex items-center justify-center mb-3">
                                            <h3 className="font-semibold text-lg">{client.name}</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{client.category}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 mt-16"
                >
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-gradient-primary mb-2">50+</div>
                        <div className="text-sm text-muted-foreground">Proyectos Completados</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-gradient-accent mb-2">15+</div>
                        <div className="text-sm text-muted-foreground">Departamentos Atendidos</div>
                    </div>
                    <div className="glass-card rounded-xl p-6 text-center">
                        <div className="text-4xl font-bold text-gradient-primary mb-2">98%</div>
                        <div className="text-sm text-muted-foreground">Satisfacción de Clientes</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
