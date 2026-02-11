import { motion } from "framer-motion";
import { Target, Telescope, Shield, Users, Award, Wrench } from "lucide-react";

const timeline = [
  { year: "2008", text: "Fundación de IT VIAL SAS en Bogotá, Colombia" },
  { year: "2012", text: "Primeros proyectos de PMV y señalización inteligente" },
  { year: "2015", text: "Expansión a soluciones de peajes y túneles" },
  { year: "2018", text: "Lanzamiento de división Smart City y electromovilidad" },
  { year: "2021", text: "180+ parques recreativos construidos a nivel nacional" },
  { year: "2024", text: "Consolidación como líder en instrumentación vial" },
];

const values = [
  { icon: Shield, title: "Integridad", text: "Actuamos con transparencia y ética en cada proyecto." },
  { icon: Award, title: "Innovación", text: "Buscamos constantemente nuevas tecnologías y soluciones." },
  { icon: Users, title: "Trabajo en Equipo", text: "Fomentamos un ambiente colaborativo y proactivo." },
  { icon: Wrench, title: "Calidad", text: "Cumplimos los más altos estándares técnicos y normativos." },
];

export default function About() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Conózcanos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Más de 15 años diseñando y fabricando soluciones tecnológicas para la infraestructura vial de Colombia
          </p>
        </motion.div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofrecer soluciones que optimicen la seguridad y eficiencia en las concesiones viales, integrando tecnología de punta con un enfoque en la innovación constante y la satisfacción del cliente. Nos comprometemos con el desarrollo de la infraestructura vial colombiana.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Telescope className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconocidos como la empresa líder en Colombia en el diseño y fabricación de productos tecnológicos para infraestructura vial, creando soluciones en las ingenierías electrónica, civil y mecánica con un enfoque en la calidad y la eficiencia.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="font-display text-3xl font-bold text-center mb-10">
            Nuestros <span className="text-gradient-primary">Valores</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-xl p-6 text-center">
                <v.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-center mb-10">
            Nuestra <span className="text-gradient-accent">Trayectoria</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-4">
                <span className="font-display text-lg font-bold text-primary shrink-0 w-16">{item.year}</span>
                <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 glass-card rounded-xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">¿Por qué IT VIAL?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Fabricación 100% nacional — diseño y manufactura en Colombia</div>
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Integración tecnológica — Hardware + Software + IoT + IA</div>
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> 15+ años de experiencia comprobada en el sector</div>
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Soluciones a medida con capacidad de customización</div>
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Soporte local y servicio post-venta en Colombia</div>
            <div className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Cumplimiento de normas NTC, ASTM e ISO</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
