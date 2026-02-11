import { motion } from "framer-motion";
import { ArrowRight, Download, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Líderes en Tecnología Vial en Colombia</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Soluciones Tecnológicas para la{" "}
              <span className="text-gradient-primary">Infraestructura Vial</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Diseñamos y fabricamos sistemas inteligentes de transporte (ITS), equipos para pavimentos,
              instrumentos de medición y señalización vial. <span className="text-foreground font-semibold">Más de 15 años</span> innovando
              en Colombia.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-all"
              >
                Ver Soluciones
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border text-foreground font-semibold hover:bg-secondary transition-all"
              >
                <Download className="h-5 w-5" />
                Descargar Catálogos
              </Link>
              <a
                href="tel:+5716940493"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent/10 border border-accent/20 text-accent font-semibold hover:bg-accent/20 transition-all"
              >
                <Phone className="h-5 w-5" />
                Llamar Ahora
              </a>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { value: "50+", label: "Proyectos Completados" },
                { value: "15+", label: "Años de Experiencia" },
                { value: "23", label: "Productos y Servicios" },
                { value: "98%", label: "Satisfacción Cliente" },
              ].map((stat, index) => (
                <div key={index} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
