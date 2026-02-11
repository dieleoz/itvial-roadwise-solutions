import { motion } from "framer-motion";
import { Target, Telescope, Shield } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Nuestra Misión",
    text: "Ofrecer soluciones que optimicen la seguridad y eficiencia en las concesiones viales, con innovación constante y satisfacción del cliente.",
  },
  {
    icon: Telescope,
    title: "Nuestra Visión",
    text: "Crear productos en las ingenierías electrónica, civil y mecánica con un enfoque en la calidad y la eficiencia.",
  },
  {
    icon: Shield,
    title: "Nuestros Valores",
    text: "Integridad, Innovación y Trabajo en Equipo, fomentando un ambiente colaborativo y proactivo.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-dark-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Quiénes <span className="text-gradient-primary">Somos</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Más de 15 años liderando la innovación tecnológica para la infraestructura vial en Colombia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
