import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Concesión Neiva-Girardot",
    description: "Suministro e instalación de PMV fijos y móviles, cámaras PTZ, fibra óptica, sistemas de gálibo y RFID para telepeaje.",
    results: "Reducción del 35% en accidentes • Mejora del 40% en tiempo de respuesta",
  },
  {
    title: "Concesión Pacífico Tres",
    description: "Implementación de sistemas inteligentes de tráfico y señalización dinámica para la concesión vial.",
    results: "Optimización del flujo vehicular • Monitoreo 24/7",
  },
  {
    title: "Red de Parques Recreativos",
    description: "Diseño y construcción de más de 180 parques recreativos, la red infantil más grande de Colombia.",
    results: "180+ parques construidos • Cobertura nacional",
  },
];

export default function ProjectsSection() {
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
            Casos de <span className="text-gradient-accent">Éxito</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Proyectos que demuestran nuestra capacidad y experiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 flex flex-col hover:border-accent/30 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="text-xs text-accent font-medium mb-4">
                {project.results}
              </div>
              <Link
                to="/projects"
                className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
              >
                Ver caso completo <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
