import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-highway.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Soluciones Tecnológicas para la{" "}
            <span className="text-gradient-primary">Infraestructura Vial</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Diseñamos y fabricamos sistemas inteligentes que optimizan la seguridad y eficiencia en las vías de Colombia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/solutions"
            className="px-8 py-4 text-base font-semibold rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary hover:opacity-90 transition-opacity"
          >
            Explorar Soluciones
          </Link>
          <Link
            to="/projects"
            className="px-8 py-4 text-base font-semibold rounded-lg border border-foreground/30 text-foreground hover:bg-foreground/10 transition-colors"
          >
            Ver Proyectos
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
