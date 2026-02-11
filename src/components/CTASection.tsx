import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-dark-alt relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar su infraestructura vial?
          </h2>
          <p className="text-muted-foreground mb-10">
            Contáctenos y descubra cómo nuestras soluciones tecnológicas pueden optimizar la seguridad y eficiencia de sus proyectos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 text-base font-semibold rounded-lg bg-gradient-accent text-accent-foreground shadow-glow-accent hover:opacity-90 transition-opacity"
            >
              Contactar Asesor
            </Link>
            <Link
              to="/downloads"
              className="px-8 py-4 text-base font-semibold rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            >
              Ver Catálogos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
