import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

interface Project {
  title: string;
  client: string;
  year: string;
  region: string;
  category: string;
  description: string;
  scope: string[];
  results: string[];
  investment?: string;
  duration?: string;
  featured?: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Autopista al Mar 1",
    client: "Concesión Autopista al Mar",
    year: "2023-2024",
    region: "Antioquia",
    category: "ITS y Seguridad Vial",
    description: "Implementación integral de sistemas inteligentes de transporte en uno de los corredores viales más importantes de Colombia, conectando Medellín con el Urabá antioqueño.",
    investment: "$2.8M USD",
    duration: "14 meses",
    featured: true,
    scope: [
      "15 PMV fijos en puntos estratégicos del corredor",
      "8 PMV móviles para gestión de obras y emergencias",
      "12 radares disuasivos 'SU VELOCIDAD'",
      "20 estaciones SOS con comunicación satelital",
      "8 estaciones meteorológicas con sensores de visibilidad",
      "6 pórticos metálicos para señalización elevada",
      "Sistema de gestión centralizada en centro de control",
    ],
    results: [
      "Reducción del 30% en accidentes de tránsito",
      "Mejora del 45% en tiempo de respuesta a emergencias",
      "Cobertura de 120 km de corredor vial",
      "Monitoreo 24/7 de condiciones meteorológicas",
      "Satisfacción del 95% en encuestas a usuarios",
    ],
    image: "/images/solutions/its/pmv-nocturno.webp"
  },
  {
    title: "Concesión Ruta del Sol - Sector 2",
    client: "Concesión Ruta del Sol",
    year: "2022-2023",
    region: "Santander - Cesar",
    category: "ITS y Señalización",
    description: "Modernización de la señalización vial y sistemas ITS en el corredor que conecta el interior del país con la Costa Atlántica, uno de los más transitados de Colombia.",
    investment: "$1.9M USD",
    duration: "10 meses",
    featured: true,
    scope: [
      "10 PMV fijos para información en tiempo real",
      "15 radares de conteo y categorización vehicular",
      "500+ señales verticales elevadas y laterales",
      "80 km de demarcación vial termoplástica",
      "4 pórticos metálicos tipo bandera",
      "Sistema de gálibos inteligentes en 8 puntos",
    ],
    results: [
      "Reducción del 25% en accidentes por exceso de velocidad",
      "Mejora del 40% en visibilidad nocturna",
      "Datos de tráfico en tiempo real para planificación",
      "Cumplimiento 100% normativa INVIAS",
    ],
    image: "/images/solutions/its/radar-su-velocidad.webp"
  },
  {
    title: "Vía Bogotá - Villavicencio",
    client: "INVIAS",
    year: "2021-2022",
    region: "Cundinamarca - Meta",
    category: "Demarcación y Señalización",
    description: "Renovación integral de la demarcación vial y señalización en la vía que conecta Bogotá con los Llanos Orientales, incluyendo el túnel de Buenavista.",
    investment: "$850K USD",
    duration: "8 meses",
    scope: [
      "120 km de demarcación vial con pintura termoplástica",
      "Tachas reflectivas bidireccionales cada 12 metros",
      "300+ señales verticales retrorreflectivas",
      "Señalización especial para túnel de Buenavista",
      "Demarcación de zonas de adelantamiento prohibido",
      "Aplicación de marcas viales elevadas en curvas",
    ],
    results: [
      "Mejora del 50% en retroreflectividad de líneas",
      "Reducción del 20% en accidentes nocturnos",
      "Durabilidad estimada de 3+ años",
      "Certificación de calidad INVIAS",
    ],
    image: "/images/solutions/pavimentos/camion-demarcador-operando.webp"
  },
  {
    title: "Gobernación de Cundinamarca - Red Vial Departamental",
    client: "Gobernación de Cundinamarca",
    year: "2023",
    region: "Cundinamarca",
    category: "Equipos para Pavimentos",
    description: "Programa de mantenimiento y mejoramiento de la red vial departamental, incluyendo demarcación, sellado de fisuras y señalización en múltiples municipios.",
    investment: "$1.2M USD",
    duration: "12 meses",
    scope: [
      "250 km de demarcación vial en 15 municipios",
      "Sellado de fisuras en 180 km de vías",
      "400+ señales verticales instaladas",
      "Demarcación de pasos peatonales en zonas urbanas",
      "Capacitación a personal de mantenimiento vial",
    ],
    results: [
      "Mejora en seguridad vial en 15 municipios",
      "Extensión de vida útil del pavimento en 2-3 años",
      "Generación de 45 empleos directos",
      "Impacto en 200,000+ habitantes",
    ],
  },
  {
    title: "Alcaldía de Bogotá - Semaforización Inteligente",
    client: "Secretaría de Movilidad de Bogotá",
    year: "2020-2021",
    region: "Bogotá D.C.",
    category: "Semaforización",
    description: "Modernización de intersecciones semaforizadas en localidades de Suba y Engativá, con tecnología LED y controladores inteligentes IT-V4.0.",
    investment: "$680K USD",
    duration: "6 meses",
    scope: [
      "25 intersecciones semaforizadas modernizadas",
      "Controladores IT-V4.0 con comunicación remota",
      "Semáforos vehiculares LED de alta eficiencia",
      "Semáforos peatonales con cuenta regresiva",
      "Sistema de gestión centralizada",
      "Cableado subterráneo y protecciones",
    ],
    results: [
      "Reducción del 60% en consumo energético",
      "Mejora del 30% en flujo vehicular",
      "Reducción del 15% en accidentes peatonales",
      "Mantenimiento remoto y diagnóstico en tiempo real",
    ],
  },
  {
    title: "Gobernación de Antioquia - Vías Terciarias",
    client: "Gobernación de Antioquia",
    year: "2022",
    region: "Antioquia",
    category: "Señalización Vial",
    description: "Programa de señalización vial en vías terciarias del departamento, mejorando la seguridad en zonas rurales y de difícil acceso.",
    investment: "$420K USD",
    duration: "5 meses",
    scope: [
      "600+ señales verticales preventivas e informativas",
      "Señalización de curvas peligrosas con chevrones",
      "Demarcación de bordes de calzada en 80 km",
      "Señalización de puentes y obras de arte",
      "Señales de límite de velocidad en zonas escolares",
    ],
    results: [
      "Cobertura en 12 municipios del departamento",
      "Mejora en seguridad vial en zonas rurales",
      "Reducción de accidentes en curvas peligrosas",
      "Cumplimiento normativa Manual de Señalización 2015",
    ],
  },
  {
    title: "Concesión Neiva-Girardot",
    client: "Autovía Neiva-Girardot",
    year: "2022",
    region: "Huila - Cundinamarca",
    category: "ITS y Seguridad Vial",
    description: "Suministro e instalación de sistemas ITS completos para la concesión vial, incluyendo PMV, cámaras, fibra óptica y sistemas de telepeaje.",
    investment: "$3.2M USD",
    duration: "16 meses",
    featured: true,
    scope: [
      "12 PMV fijos en puntos estratégicos",
      "4 PMV móviles para zonas de obra",
      "30 cámaras PTZ con visión nocturna",
      "150 km de fibra óptica",
      "6 sistemas de gálibo inteligentes",
      "Sistema RFID para telepeaje en 8 cabinas",
      "Centro de control y monitoreo 24/7",
    ],
    results: [
      "Reducción del 35% en accidentes",
      "Mejora del 40% en tiempo de respuesta a emergencias",
      "Incremento del 25% en uso de telepeaje",
      "Monitoreo en tiempo real de 180 km de corredor",
    ],
    image: "/images/solutions/its/centro-control-its.webp"
  },
  {
    title: "Alcaldía de Medellín - Túneles de Oriente",
    client: "Alcaldía de Medellín",
    year: "2021",
    region: "Antioquia",
    category: "ITS y Señalización",
    description: "Implementación de sistemas de seguridad y señalización en los túneles de la conexión vial Aburrá-Oriente, garantizando operación segura 24/7.",
    investment: "$1.5M USD",
    duration: "9 meses",
    scope: [
      "Señalización LED dinámica en portales de túneles",
      "Sistema de detección de incidentes",
      "Cámaras de seguridad cada 50 metros",
      "Señalización de carriles y límites de velocidad",
      "Sistema de ventilación y detección de humo",
      "Comunicación de emergencia cada 100 metros",
    ],
    results: [
      "Operación segura de 4 túneles principales",
      "Detección automática de incidentes en menos de 30 segundos",
      "Reducción del 90% en tiempos de respuesta a emergencias",
      "Certificación de seguridad internacional",
    ],
    image: "/images/solutions/its/tunel-inteligente.webp"
  },
];

const categories = ["Todos", "ITS y Seguridad Vial", "Demarcación y Señalización", "Equipos para Pavimentos", "Semaforización", "Señalización Vial"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { label: "Proyectos Completados", value: "50+", icon: Award },
    { label: "Inversión Total", value: "$15M+", icon: TrendingUp },
    { label: "Clientes Satisfechos", value: "30+", icon: Users },
  ];

  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <SEO
        title="Proyectos y Casos de Éxito | IT VIAL SAS"
        description="Conozca nuestros proyectos de infraestructura vial en Colombia: ITS, señalización, demarcación y semaforización en las principales carreteras del país."
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-gradient-accent">Éxito</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proyectos que demuestran nuestra capacidad técnica y experiencia en infraestructura vial colombiana
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass-card rounded-xl p-6 text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat
                ? "bg-primary text-primary-foreground shadow-glow-primary"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-xl overflow-hidden ${project.featured ? "border-2 border-primary/30" : ""}`}
            >
              {project.image && (
                <div className="w-full h-48 md:h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              )}

              <div className="p-8 md:p-10 relative">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                      ⭐ Destacado
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {project.region}
                  </span>
                </div>

                {/* Title and Client */}
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-1">Cliente: <span className="text-foreground font-medium">{project.client}</span></p>

                {/* Investment and Duration */}
                {(project.investment || project.duration) && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    {project.investment && (
                      <span className="text-muted-foreground">
                        Inversión: <span className="text-primary font-semibold">{project.investment}</span>
                      </span>
                    )}
                    {project.duration && (
                      <span className="text-muted-foreground">
                        Duración: <span className="text-foreground font-medium">{project.duration}</span>
                      </span>
                    )}
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

                {/* Scope and Results */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-4 text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Alcance del Proyecto
                    </h3>
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
                    <h3 className="font-display font-semibold text-sm mb-4 text-accent flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Resultados Obtenidos
                    </h3>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            ¿Quiere que su proyecto sea el próximo caso de éxito?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-gradient-accent text-accent-foreground shadow-glow-accent hover:opacity-90 transition-opacity"
          >
            Contáctenos <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
