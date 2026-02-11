import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Layers, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const suggestedLinks = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Soluciones", path: "/solutions", icon: Layers },
  { name: "Contacto", path: "/contact", icon: Phone },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="pt-20 lg:pt-24 pb-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-display text-2xl font-bold text-gradient-primary block mb-6">
            IT VIAL
          </span>
          <h1 className="font-display text-8xl md:text-9xl font-bold text-gradient-accent mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Página No Encontrada
          </h2>
          <p className="text-muted-foreground mb-2">
            La página que busca no existe o ha sido movida.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            Ruta solicitada: <code className="px-2 py-1 rounded bg-secondary text-xs">{location.pathname}</code>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {suggestedLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:border-primary/40 transition-all font-medium text-sm"
              >
                <link.icon className="h-4 w-4 text-primary" />
                {link.name}
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-primary hover:opacity-90 transition-opacity"
          >
            Volver al Inicio <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
