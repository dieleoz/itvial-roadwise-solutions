import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  label: string;
  hash: string;
}

interface SolutionMenuCategory {
  title: string;
  path: string;
  items: MenuItem[];
  badge?: string;
}

const solutionsMenu: SolutionMenuCategory[] = [
  {
    title: "ITS y Seguridad Vial",
    path: "/solutions/its",
    items: [
      { label: "Paneles de Mensaje Variable (PMV)", hash: "pmv" },
      { label: "Radares Disuasivos", hash: "radares-disuasivos" },
      { label: "Radares de Conteo", hash: "radares-conteo" },
      { label: "Estaciones Meteorologicas", hash: "estaciones-meteo" },
      { label: "Galibos y Senales Ocultas", hash: "galibos" },
      { label: "Sistemas SOS", hash: "sos" },
      { label: "Estructuras Metalicas", hash: "estructuras" },
      { label: "Semaforizacion", hash: "semaforos" },
    ],
  },
  {
    title: "Equipos para Pavimentos",
    path: "/solutions/pavimentos",
    items: [
      { label: "Equipos para Demarcacion Vial", hash: "demarcacion" },
      { label: "Selladoras de Fisuras", hash: "selladoras" },
      { label: "Equipos de Reciclaje de Asfaltos", hash: "reciclaje" },
    ],
  },
  {
    title: "Instrumentos para las Vias",
    path: "/solutions/instrumentos",
    items: [
      { label: "Retroreflectometros Horizontales", hash: "horizontal" },
      { label: "Retroreflectometros Verticales", hash: "vertical" },
    ],
  },
  {
    title: "Senalizacion Vial",
    path: "/solutions/senalizacion",
    items: [
      { label: "Senalizacion Elevada", hash: "elevada" },
      { label: "Senalizacion Vertical", hash: "vertical" },
      { label: "Demarcacion Horizontal", hash: "horizontal" },
    ],
  },
  {
    title: "Soluciones Ferroviarias",
    path: "/solutions/ferroviario",
    items: [
      { label: "Equipos Portatiles", hash: "equipos" },
      { label: "Vehiculos M10/M100/M1200", hash: "vehiculos" },
    ],
    badge: "NUEVO"
  },
  {
    title: "Auscultacion de Pavimentos",
    path: "/solutions/auscultacion",
    items: [
      { label: "Equipos Estructurales (FWD, GPR)", hash: "estructural" },
      { label: "Equipos Funcionales (IRI, LCMS, SCRIM)", hash: "funcional" },
    ],
    badge: "NUEVO"
  },
  {
    title: "Servicios Adicionales",
    path: "/solutions/servicios",
    items: [
      { label: "Alquiler de Grua de Canastilla", hash: "grua" },
      { label: "Aplicacion de Marcas Viales", hash: "demarcacion-servicio" },
    ],
  },
  {
    title: "Electromovilidad",
    path: "/solutions/electromovilidad",
    items: [
      { label: "Cargadores para Vehiculos Electricos", hash: "cargadores-ev" },
      { label: "Infraestructura de Carga", hash: "infraestructura-carga" },
      { label: "Estaciones de Carga Solar", hash: "estaciones-solares" },
    ],
    badge: "NUEVO"
  },
  {
    title: "Seguridad en Zona de Trabajo",
    path: "/solutions/delineadores",
    items: [
      { label: "Delineadores Rebotables", hash: "delineador-flexible" },
      { label: "Atenuadores de Impacto", hash: "" },
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
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${location.pathname === link.path
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
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] mt-2 p-6 bg-card border border-border rounded-xl shadow-2xl"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {solutionsMenu.map((category, idx) => (
                      <div key={idx} className="space-y-3">
                        <Link
                          to={category.path}
                          className="font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          {category.title}
                          {category.badge && (
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                              {category.badge}
                            </span>
                          )}
                        </Link>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.hash ? `${category.path}#${item.hash}` : category.path}
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {item.label}
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
            Solicitar Asesoría Técnica
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
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
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
                Solicitar Asesoría Técnica
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
