import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrafficCone, Mountain, Building2, Gauge, Puzzle,
  Monitor, Radio, Truck, Eye, ShieldAlert,
  Radar, Wifi, SignpostBig,
  Wind, Lightbulb, AlertTriangle,
  Zap, ParkingSquare, Train, Wrench,
  TowerControl, Cable, Server, Cpu, Database, Network
} from "lucide-react";
import SEO from "@/components/SEO";

// Strategic Block Interfaces
interface StrategicItem {
  title: string;
  description: string;
  includes: string[];
  itvial_role: {
    fabrication?: string;
    installation?: string;
    integration?: string;
    data?: string;
  };
  key_message: string;
  link: string;
}

interface StrategicBlock {
  id: string;
  title: string;
  subtitle: string;
  items: StrategicItem[];
}

const strategicBlocks: StrategicBlock[] = [
  {
    id: "smart-infrastructure",
    title: "1. INFRAESTRUCTURA VIAL INTELIGENTE",
    subtitle: "Protección operativa y datos en tiempo real",
    items: [
      {
        title: "Zonas de Obra Inteligentes (Smart Work Zones)",
        description: "Servicio integral de protección y gestión inteligente para frentes de obra en concesiones viales y proyectos urbanos.",
        includes: ["Remolques ITS", "Paneles Mensaje Variable", "Radares Doppler", "Sistemas AFAD", "Sensores de cola", "Atenuadores TMA"],
        itvial_role: {
          fabrication: "Fabricación metálica",
          integration: "Integración de equipos ITS",
          installation: "Instalación en campo",
          data: "Entrega de API de estado y alertas"
        },
        key_message: "No vendemos señalización temporal. Entregamos seguridad operativa conectada.",
        link: "/solutions/its"
      },
      {
        title: "Control Dinámico de Carga – WIM",
        description: "Soluciones de pesaje dinámico para protección del pavimento y control de sobrecarga.",
        includes: ["Sensores WIM", "Cámaras ANPR", "Pórticos reforzados", "Gabinetes industriales"],
        itvial_role: {
          installation: "Instalación completa",
          integration: "Integración de hardware",
          data: "API de datos (placa + peso + ejes)"
        },
        key_message: "Protegemos la vida útil de la vía con datos confiables en tiempo real.",
        link: "/solutions/auscultacion"
      },
      {
        title: "Peajes Inteligentes & Free Flow",
        description: "Infraestructura física e integración tecnológica para recaudo electrónico y control vehicular.",
        includes: ["Pórticos metálicos", "Cámaras LPR", "Sensores detección", "Integración Backoffice"],
        itvial_role: {
          fabrication: "Infraestructura física",
          installation: "Instalación de sistemas",
          data: "Datos vía API",
          integration: "Integración con plataformas"
        },
        key_message: "Estructura sólida + Integración inteligente.",
        link: "/solutions/its"
      }
    ]
  },
  {
    id: "operational-integration",
    title: "2. INTEGRACIÓN OPERATIVA ITS",
    subtitle: "Conectando el campo con el centro de control",
    items: [
      {
        title: "Gateway & APIs ITS",
        description: "Integración de equipos ITS y entrega de datos abiertos para operación centralizada.",
        includes: ["Gateways industriales IT-V4.0", "Integración PMV/Radares", "Normalización protocolos"],
        itvial_role: {
          installation: "Instalación",
          integration: "Integración",
          data: "APIs abiertas"
        },
        key_message: "Conectamos infraestructura física con datos operativos.",
        link: "/solutions/its"
      }
    ]
  },
  {
    id: "specialized-infrastructure",
    title: "3. INFRAESTRUCTURA ESPECIALIZADA",
    subtitle: "Ingeniería aplicada a entornos críticos",
    items: [
      {
        title: "Túneles Inteligentes",
        description: "Integración electromecánica avanzada para operación segura de túneles.",
        includes: ["Ventilación", "Iluminación adaptativa", "Sensores ambientales", "Sistemas SOS"],
        itvial_role: {
          installation: "Montaje electromecánico",
          integration: "Integración de sistemas",
          data: "Datos para plataforma cliente"
        },
        key_message: "Un único integrador para sistemas críticos.",
        link: "/solutions/its"
      },
      {
        title: "Soluciones Ferroviarias",
        description: "Soporte tecnológico a la reactivación férrea nacional.",
        includes: ["Auscultación de vía", "Perfil de riel", "Hi-Rail", "Integración sensores"],
        itvial_role: {
          fabrication: "Adaptaciones Hi-Rail",
          integration: "Integración de sensores"
        },
        key_message: "Tecnología para la vía férrea moderna.",
        link: "/solutions/ferroviario"
      }
    ]
  },
  {
    id: "sustainable-mobility",
    title: "4. MOVILIDAD SOSTENIBLE",
    subtitle: "Infraestructura para la transición energética",
    items: [
      {
        title: "Electromovilidad",
        description: "Infraestructura de carga interoperable e integración energética.",
        includes: ["Cargadores", "Integración energética", "Instalación industrial", "Conectividad OCPI"],
        itvial_role: {
          installation: "Instalación industrial",
          integration: "Integración energética"
        },
        key_message: "Infraestructura lista para la transición energética.",
        link: "/solutions/electromovilidad"
      }
    ]
  }
];

export default function Solutions() {
  // Debug log to verify deployment version
  console.log("IT VIAL Solutions Page Loaded: v2.1 Strategic Blocks");

  return (
    <div className="pt-20 lg:pt-24 pb-24 bg-background">
      <SEO
        title="Soluciones de Infraestructura Inteligente | IT VIAL SAS"
        description="Integrador Industrial con Tecnología Conectada. Infraestructura con Inteligencia para carreteras, túneles y ciudades."
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            INTEGRADOR INDUSTRIAL + TECNOLOGÍA CONECTADA
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Infraestructura con <span className="text-gradient-primary">Inteligencia</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Hierro + Integración + Datos
          </p>
          <div className="p-6 bg-card/50 backdrop-blur border border-primary/20 rounded-2xl inline-block">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              "Integramos infraestructura física con inteligencia operativa."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Strategic Blocks */}
      <div className="container mx-auto px-4 space-y-24">
        {strategicBlocks.map((block, index) => (
          <section key={block.id} className="relative">
            {/* Block Header */}
            <div className="mb-12 border-b border-border/50 pb-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {block.title}
              </h2>
              <p className="text-xl text-primary/80 font-medium">
                {block.subtitle}
              </p>
            </div>

            {/* Block Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {block.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="group relative bg-card hover:bg-card/80 border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 flex flex-col h-full"
                >
                  <div className="p-6 md:p-8 flex-grow">
                    <div className="mb-6">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* What it includes */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        Incluye
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.includes.map((inc, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-xs border border-border/50">
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* IT VIAL Role */}
                    <div className="mb-6 p-4 rounded-xl bg-background/50 border border-border/50">
                      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Database className="w-3 h-3 text-primary" />
                        Rol IT VIAL
                      </h4>
                      <ul className="space-y-2">
                        {item.itvial_role.fabrication && (
                          <li className="text-sm flex items-start gap-2">
                            <Wrench className="w-4 h-4 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground"><strong className="text-foreground">Fabrica:</strong> {item.itvial_role.fabrication}</span>
                          </li>
                        )}
                        {item.itvial_role.installation && (
                          <li className="text-sm flex items-start gap-2">
                            <TowerControl className="w-4 h-4 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground"><strong className="text-foreground">Instala:</strong> {item.itvial_role.installation}</span>
                          </li>
                        )}
                        {item.itvial_role.integration && (
                          <li className="text-sm flex items-start gap-2">
                            <Cpu className="w-4 h-4 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground"><strong className="text-foreground">Integra:</strong> {item.itvial_role.integration}</span>
                          </li>
                        )}
                        {item.itvial_role.data && (
                          <li className="text-sm flex items-start gap-2">
                            <Network className="w-4 h-4 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground"><strong className="text-foreground">Entrega:</strong> {item.itvial_role.data}</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Key Message */}
                    <div className="mt-auto border-l-2 border-primary pl-4 py-1">
                      <p className="text-sm font-medium text-foreground italic">
                        "{item.key_message}"
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="p-4 border-t border-border/50 bg-secondary/20">
                    <Link
                      to={item.link}
                      className="flex items-center justify-between w-full text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver especificaciones técnicas
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center py-16 bg-gradient-dark-section rounded-3xl"
        >
          <h2 className="font-display text-3xl font-bold mb-6">¿Listo para modernizar su infraestructura?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Hablemos de ingeniería, integración y datos operativos.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 text-base font-semibold rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary hover:opacity-90 transition-opacity">
            Agendar Reunión Técnica
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
