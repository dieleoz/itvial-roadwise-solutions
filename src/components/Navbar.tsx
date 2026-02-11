import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutionsMenu = [
  {
    title: "ITS y Seguridad Vial",
    items: [
      "Paneles de Mensaje Variable (PMV)",
      "Sistemas Inteligentes de Tráfico",
      "Vehículos Demarcadores",
      "Instrumentos de Retroreflectividad",
      "Delineadores Rebotables",
      "Atenuadores de Choque",
      "Semaforización",
    ],
  },
  {
    title: "Peajes",
    items: [
      "Sistemas de Gestión de Carriles",
      "Sensores y Radares",
      "Plataformas de Pago Electrónico",
      "Vallas Tarifarias",
    ],
  },
  {
    title: "Túneles",
    items: [
      "Detección de Incendios",
      "Sensores de Atmósfera",
      "Iluminación de Emergencia",
      "Señalización Específica",
    ],
  },
  {
    title: "Smart City",
    items: [
      "Electromovilidad (Cargadores EV)",
      "Parking Inteligente",
      "Control de Acceso",
      "Smart Bus y Movilidad",
      "Puertas Automáticas",
    ],
  },
  {
    title: "Instrumentación y Medición",
    items: [
      "Equipos Auscultación de Pavimentos",
      "Equipos Portátiles Ferroviarios",
      "Vehículos de Auscultación",
      "Equipos Auscultación Carreteras",
      "Conversión Hi-Rail",
    ],
  },
  {
    title: "Otras Soluciones",
    items: [
      "Parques Recreativos",
      "Infraestructura Energética",
      "Torres de Telecomunicaciones",
    ],
  },
];

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Conózcanos", path: "/about" },
  { name: "Soluciones", path: "/solutions", hasMega: true },
  { name: "Proyectos", path: "/projects" },
  { name: "Descargables", path: "/downloads" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient-primary">
            IT VIAL
          </span>
          <span className="text-xs text-muted-foreground hidden sm:block">SAS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasMega && setMegaOpen(true)}
              onMouseLeave={() => link.hasMega && setMegaOpen(false)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {link.hasMega && <ChevronDown className="h-3 w-3" />}
              </Link>

              {/* Mega Menu */}
              {link.hasMega && megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-2 p-6 bg-card border border-border rounded-xl shadow-2xl"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {solutionsMenu.map((category) => (
                      <div key={category.title}>
                        <h4 className="font-display font-semibold text-sm text-primary mb-2">
                          {category.title}
                        </h4>
                        <ul className="space-y-1">
                          {category.items.map((item) => (
                            <li key={item}>
                              <Link
                                to="/solutions"
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary hover:opacity-90 transition-opacity"
          >
            Solicitar Cotización
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 px-5 py-3 text-center text-sm font-semibold rounded-lg bg-gradient-primary text-primary-foreground"
              >
                Solicitar Cotización
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
