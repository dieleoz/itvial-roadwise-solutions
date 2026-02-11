import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrafficCone, Landmark, Mountain, Building2, Gauge, Puzzle,
  Monitor, Radio, Truck, Eye, DiscAlbum, ShieldAlert, TrafficCone as Semaforo,
  CreditCard, Radar, Wifi, SignpostBig,
  Flame, Wind, Lightbulb, AlertTriangle,
  Zap, ParkingSquare, Lock, Bus, DoorOpen,
  Ruler, Train, CarFront, MapPin, Wrench,
  TreePine, BatteryCharging, TowerControl
} from "lucide-react";

interface SubProduct {
  name: string;
  icon: typeof Monitor;
}

interface SolutionCategory {
  id: string;
  title: string;
  icon: typeof TrafficCone;
  description: string;
  products: SubProduct[];
}

const categories: SolutionCategory[] = [
  {
    id: "its",
    title: "ITS y Seguridad Vial",
    icon: TrafficCone,
    description: "Sistemas inteligentes de transporte y seguridad vial con tecnología IoT para proteger vidas en las carreteras colombianas.",
    products: [
      { name: "Paneles de Mensaje Variable (PMV Fijos y Móviles)", icon: Monitor },
      { name: "Radares Disuasivos", icon: Radar },
      { name: "Radares de Conteo y Categorización", icon: Radio },
      { name: "Estaciones Meteorológicas", icon: Wind },
      { name: "Gálibos y Señales Ocultas", icon: AlertTriangle },
      { name: "Sistemas SOS", icon: ShieldAlert },
      { name: "Estructuras Metálicas (Pórticos, Banderas, Gabinetes)", icon: TowerControl },
      { name: "Semaforización Convencional", icon: TrafficCone },
    ],
  },
  {
    id: "pavimentos",
    title: "Equipos para Pavimentos",
    icon: Truck,
    description: "Soluciones integrales para demarcación vial, sellado de fisuras y reciclaje de asfaltos con equipos de fabricación nacional.",
    products: [
      { name: "Equipos para Demarcación Vial", icon: Truck },
      { name: "Selladoras de Fisuras", icon: Wrench },
      { name: "Equipos de Reciclaje de Asfaltos", icon: TreePine },
    ],
  },
  {
    id: "instrumentos",
    title: "Instrumentos para las Vías",
    icon: Gauge,
    description: "Equipos de medición con tecnología IoT para control de calidad y cumplimiento normativo en señalización vial.",
    products: [
      { name: "Retroreflectómetros Horizontales", icon: Ruler },
      { name: "Retroreflectómetros Verticales", icon: Eye },
    ],
  },
  {
    id: "senalizacion",
    title: "Señalización Vial",
    icon: SignpostBig,
    description: "Diseño, fabricación e instalación de señalización vertical, horizontal y elevada cumpliendo normativa colombiana.",
    products: [
      { name: "Señalización Elevada", icon: TowerControl },
      { name: "Señalización Vertical", icon: SignpostBig },
      { name: "Demarcación Horizontal", icon: DiscAlbum },
    ],
  },
  {
    id: "ferroviario",
    title: "Soluciones Ferroviarias",
    icon: Train,
    description: "Equipos de medición y mantenimiento para vías férreas, desde inspección manual hasta sistemas de alta velocidad.",
    products: [
      { name: "Auscultador de Geometría de Vía Portátil", icon: Ruler },
      { name: "Carro de Medición del Perfil de Carril", icon: Gauge },
      { name: "Vehículos M10/M100/M1200", icon: Train },
      { name: "Conversión Hi-Rail", icon: Wrench },
    ],
  },
  {
    id: "auscultacion",
    title: "Auscultación de Pavimentos",
    icon: CarFront,
    description: "Equipos de última generación para caracterización estructural y funcional de carreteras.",
    products: [
      { name: "Deflectómetro FWD / FastFWD", icon: Gauge },
      { name: "Georradar GPR", icon: Radar },
      { name: "Perfilómetro Láser (IRI)", icon: Ruler },
      { name: "Sistema LCMS (Fisuras)", icon: Eye },
      { name: "SCRIM (Fricción)", icon: AlertTriangle },
      { name: "Sistemas WIM (Pesaje)", icon: Truck },
    ],
  },
  {
    id: "servicios",
    title: "Servicios Adicionales",
    icon: Puzzle,
    description: "Servicios especializados de alquiler de equipos y aplicación de marcas viales con personal técnico capacitado.",
    products: [
      { name: "Alquiler de Grúa de Canastilla", icon: CarFront },
      { name: "Aplicación de Marcas Viales", icon: Truck },
    ],
  },
];

export default function Solutions() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nuestras <span className="text-gradient-primary">Soluciones</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnología integral para cada aspecto de la infraestructura vial moderna
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <motion.section
              key={cat.id}
              id={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">{cat.title}</h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {cat.products.map((prod) => (
                  <div
                    key={prod.name}
                    className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors group cursor-pointer"
                  >
                    <prod.icon className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{prod.name}</h3>
                    <span className="text-xs text-muted-foreground mt-2 inline-block group-hover:text-primary/70 transition-colors">
                      Ver detalles →
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">¿Necesita una solución personalizada?</p>
          <Link to="/contact" className="inline-block px-8 py-4 text-base font-semibold rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary hover:opacity-90 transition-opacity">
            Solicitar Cotización
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
