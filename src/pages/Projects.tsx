import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Concesión Neiva-Girardot",
    client: "Autovía Neiva-Girardot",
    year: "2022",
    region: "Huila - Cundinamarca",
    category: "ITS y Seguridad Vial",
    description: "Suministro e instalación de PMV fijos y móviles, cámaras PTZ, fibra óptica, sistemas de gálibo y RFID para telepeaje.",
    scope: [
      "12 PMV fijos en puntos estratégicos",
      "4 PMV móviles para zonas de obra",
      "30 cámaras PTZ con visión nocturna",
      "150 km de fibra óptica",
      "6 sistemas de gálibo",
      "Sistema RFID para telepeaje en 8 cabinas",
    ],
    results: [
      "Reducción del 35% en accidentes",
      "Mejora del 40% en tiempo de respuesta",
      "Incremento del 25% en uso de telepeaje",
    ],
  },
  {
    title: "Concesión Pacífico Tres",
    client: "Concesión Pacífico Tres",
    year: "2021",
    region: "Antioquia - Risaralda",
    category: "Peajes",
    description: "Implementación de sistemas inteligentes de tráfico y señalización dinámica para la concesión vial del Pacífico colombiano.",
    scope: [
      "Sistemas de gestión de carriles en peajes",
      "Sensores de clasificación vehicular",
      "Señalización dinámica LED",
      "Integración con centro de control",
    ],
    results: [
      "Optimización del flujo vehicular",
      "Monitoreo 24/7 del corredor vial",
      "Reducción de tiempos de espera en peajes",
    ],
  },
  {
    title: "Red de Parques Recreativos",
    client: "Múltiples municipios",
    year: "2010-2024",
    region: "Nacional",
    category: "Otras Soluciones",
    description: "Diseño y construcción de más de 180 parques recreativos a nivel nacional, incluyendo la red infantil más grande de Colombia.",
    scope: [
      "180+ parques recreativos construidos",
      "Juegos infantiles certificados",
      "Gimnasios al aire libre",
      "Mobiliario urbano personalizado",
    ],
    results: [
      "Red infantil más grande de Colombia",
      "Cobertura en múltiples departamentos",
      "Impacto en miles de familias",
    ],
  },
];

export default function Projects() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-gradient-accent">Éxito</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proyectos que demuestran nuestra capacidad técnica y experiencia en infraestructura vial
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">{project.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{project.year}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{project.region}</span>
              </div>

              <h2 className="font-display text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-1">Cliente: {project.client}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-semibold text-sm mb-3 text-primary">Alcance</h3>
                  <ul className="space-y-2">
                    {project.scope.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-3 text-accent">Resultados</h3>
                  <ul className="space-y-2">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">¿Quiere conocer más sobre nuestros proyectos?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-gradient-accent text-accent-foreground shadow-glow-accent hover:opacity-90 transition-opacity">
            Contáctenos <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
