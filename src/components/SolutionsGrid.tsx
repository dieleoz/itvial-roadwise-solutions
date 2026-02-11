import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrafficCone,
  Landmark,
  Mountain,
  Building2,
  Gauge,
  Puzzle,
} from "lucide-react";

const solutions = [
  {
    icon: TrafficCone,
    title: "ITS y Seguridad Vial",
    description: "Paneles de mensaje variable, sistemas inteligentes de tráfico, semaforización y más.",
  },
  {
    icon: Landmark,
    title: "Peajes",
    description: "Gestión de carriles, sensores, radares y plataformas de pago electrónico.",
  },
  {
    icon: Mountain,
    title: "Túneles",
    description: "Detección de incendios, sensores de atmósfera e iluminación de emergencia.",
  },
  {
    icon: Building2,
    title: "Smart City",
    description: "Electromovilidad, parking inteligente, control de acceso y movilidad urbana.",
  },
  {
    icon: Gauge,
    title: "Instrumentación y Medición",
    description: "Equipos de auscultación de pavimentos, ferroviarios y vehículos especializados.",
  },
  {
    icon: Puzzle,
    title: "Otras Soluciones",
    description: "Parques recreativos, infraestructura energética y torres de telecomunicaciones.",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-24 bg-gradient-dark-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Nuestras <span className="text-gradient-accent">Soluciones</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tecnología integral para cada aspecto de la infraestructura vial moderna
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/solutions"
                className="group block glass-card rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-glow-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                  <sol.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sol.description}
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Conocer más →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
