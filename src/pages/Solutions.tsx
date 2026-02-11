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
    description: "Sistemas inteligentes de transporte y seguridad vial con tecnología de punta para proteger vidas en las carreteras colombianas.",
    products: [
      { name: "Paneles de Mensaje Variable (PMV)", icon: Monitor },
      { name: "Sistemas Inteligentes de Tráfico", icon: Radio },
      { name: "Vehículos Demarcadores", icon: Truck },
      { name: "Instrumentos de Retroreflectividad", icon: Eye },
      { name: "Delineadores Rebotables", icon: DiscAlbum },
      { name: "Atenuadores de Choque", icon: ShieldAlert },
      { name: "Semaforización", icon: Semaforo },
    ],
  },
  {
    id: "peajes",
    title: "Peajes",
    icon: Landmark,
    description: "Soluciones integrales de gestión de peajes con tecnología RFID, sensores y plataformas de pago electrónico.",
    products: [
      { name: "Sistemas de Gestión de Carriles", icon: CreditCard },
      { name: "Sensores y Radares", icon: Radar },
      { name: "Plataformas de Pago Electrónico", icon: Wifi },
      { name: "Vallas Tarifarias", icon: SignpostBig },
    ],
  },
  {
    id: "tuneles",
    title: "Túneles",
    icon: Mountain,
    description: "Sistemas de detección, monitoreo y seguridad especializados para túneles viales.",
    products: [
      { name: "Detección de Incendios", icon: Flame },
      { name: "Sensores de Atmósfera", icon: Wind },
      { name: "Iluminación de Emergencia", icon: Lightbulb },
      { name: "Señalización Específica", icon: AlertTriangle },
    ],
  },
  {
    id: "smart-city",
    title: "Smart City",
    icon: Building2,
    description: "Soluciones de ciudad inteligente: electromovilidad, parking, control de acceso y movilidad urbana.",
    products: [
      { name: "Electromovilidad (Cargadores EV)", icon: Zap },
      { name: "Parking Inteligente", icon: ParkingSquare },
      { name: "Control de Acceso", icon: Lock },
      { name: "Smart Bus y Movilidad", icon: Bus },
      { name: "Puertas Automáticas", icon: DoorOpen },
    ],
  },
  {
    id: "instrumentacion",
    title: "Instrumentación y Medición",
    icon: Gauge,
    description: "Equipos de auscultación de pavimentos y vías férreas, vehículos especializados y tecnología de medición avanzada.",
    products: [
      { name: "Equipos Auscultación de Pavimentos", icon: Ruler },
      { name: "Equipos Portátiles Ferroviarios", icon: Train },
      { name: "Vehículos de Auscultación", icon: CarFront },
      { name: "Equipos Auscultación Carreteras", icon: MapPin },
      { name: "Conversión Hi-Rail", icon: Wrench },
    ],
  },
  {
    id: "otras",
    title: "Otras Soluciones",
    icon: Puzzle,
    description: "Parques recreativos, infraestructura energética y torres de telecomunicaciones.",
    products: [
      { name: "Parques Recreativos", icon: TreePine },
      { name: "Infraestructura Energética", icon: BatteryCharging },
      { name: "Torres de Telecomunicaciones", icon: TowerControl },
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
