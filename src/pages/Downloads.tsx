import { motion } from "framer-motion";
import { FileText, Download, FileCheck, BookOpen, Newspaper, Award } from "lucide-react";
import SEO from "@/components/SEO";

const categories = [
  {
    id: "catalogos",
    title: "Catálogos de Productos",
    icon: BookOpen,
    description: "Catálogos completos por categoría con especificaciones técnicas",
    documents: [
      {
        name: "Catálogo ITS y Seguridad Vial",
        description: "PMV, Radares, Estaciones Meteorológicas, Gálibos, SOS, Estructuras, Semáforos",
        size: "12.5 MB",
        pages: "48 páginas",
        format: "PDF"
      },
      {
        name: "Catálogo Equipos para Pavimentos",
        description: "Camiones demarcadores, máquinas autopropulsadas, selladoras, reciclaje",
        size: "8.3 MB",
        pages: "32 páginas",
        format: "PDF"
      },
      {
        name: "Catálogo Instrumentos de Medición",
        description: "Retroreflectómetros horizontales y verticales con IoT",
        size: "5.2 MB",
        pages: "16 páginas",
        format: "PDF"
      },
      {
        name: "Catálogo Señalización Vial",
        description: "Señalización elevada, vertical y demarcación horizontal",
        size: "10.1 MB",
        pages: "36 páginas",
        format: "PDF"
      },
      {
        name: "Catálogo Servicios Adicionales",
        description: "Alquiler de grúa y aplicación de marcas viales",
        size: "4.8 MB",
        pages: "12 páginas",
        format: "PDF"
      }
    ]
  },
  {
    id: "fichas",
    title: "Fichas Técnicas",
    icon: FileText,
    description: "Especificaciones detalladas por producto individual",
    documents: [
      {
        name: "Ficha Técnica - PMV Fijos",
        description: "Especificaciones completas de Paneles de Mensaje Variable fijos",
        size: "1.2 MB",
        pages: "4 páginas",
        format: "PDF"
      },
      {
        name: "Ficha Técnica - Camión Demarcador IT-V4.0",
        description: "Especificaciones del sistema de demarcación IT-V4.0",
        size: "1.5 MB",
        pages: "6 páginas",
        format: "PDF"
      },
      {
        name: "Ficha Técnica - Retroreflectómetro SAT-LUX",
        description: "Especificaciones del retroreflectómetro con IoT",
        size: "980 KB",
        pages: "4 páginas",
        format: "PDF"
      },
      {
        name: "Ficha Técnica - Sistema SOS",
        description: "Especificaciones de estaciones de emergencia SOS",
        size: "1.1 MB",
        pages: "5 páginas",
        format: "PDF"
      },
      {
        name: "Ficha Técnica - Grúa de Canastilla",
        description: "Especificaciones técnicas y de seguridad",
        size: "850 KB",
        pages: "3 páginas",
        format: "PDF"
      }
    ]
  },
  {
    id: "casos",
    title: "Casos de Éxito",
    icon: Award,
    description: "Estudios de caso de proyectos completados",
    documents: [
      {
        name: "Caso de Éxito - Concesión Neiva-Girardot",
        description: "Implementación de 15 PMV y 8 Estaciones SOS",
        size: "3.2 MB",
        pages: "8 páginas",
        format: "PDF"
      },
      {
        name: "Caso de Éxito - Concesión Pacífico Tres",
        description: "Demarcación de 120 km de vía con equipos IT VIAL",
        size: "4.5 MB",
        pages: "10 páginas",
        format: "PDF"
      },
      {
        name: "Caso de Éxito - Autopista al Mar",
        description: "Sistema integral de ITS y señalización",
        size: "5.8 MB",
        pages: "12 páginas",
        format: "PDF"
      }
    ]
  },
  {
    id: "certificaciones",
    title: "Certificaciones y Cumplimiento",
    icon: FileCheck,
    description: "Certificados de calidad y cumplimiento normativo",
    documents: [
      {
        name: "Certificado ISO 9001:2015",
        description: "Sistema de Gestión de Calidad",
        size: "450 KB",
        pages: "2 páginas",
        format: "PDF"
      },
      {
        name: "Cumplimiento Manual de Señalización Vial",
        description: "Certificación de cumplimiento normativo",
        size: "1.8 MB",
        pages: "6 páginas",
        format: "PDF"
      },
      {
        name: "Certificaciones INVIAS",
        description: "Certificados de productos aprobados por INVIAS",
        size: "2.1 MB",
        pages: "8 páginas",
        format: "PDF"
      },
      {
        name: "Certificado ASTM - Galvanizado",
        description: "Cumplimiento ASTM A123 para galvanizado en caliente",
        size: "680 KB",
        pages: "3 páginas",
        format: "PDF"
      }
    ]
  },
  {
    id: "noticias",
    title: "Boletines y Noticias",
    icon: Newspaper,
    description: "Actualizaciones, innovaciones y noticias del sector",
    documents: [
      {
        name: "Boletín Técnico - Enero 2026",
        description: "Novedades en tecnología ITS y demarcación vial",
        size: "2.3 MB",
        pages: "6 páginas",
        format: "PDF"
      },
      {
        name: "Innovación - Retroreflectómetro IoT",
        description: "Lanzamiento del SAT-LUX con conectividad IoT",
        size: "1.9 MB",
        pages: "4 páginas",
        format: "PDF"
      },
      {
        name: "Participación Feria Vial 2025",
        description: "Resumen de nuestra participación en eventos",
        size: "3.5 MB",
        pages: "8 páginas",
        format: "PDF"
      }
    ]
  }
];

export default function Downloads() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <SEO
        title="Centro de Descargables | IT VIAL SAS"
        description="Descargue catálogos, fichas técnicas y certificaciones de nuestros productos ITS, pavimentos y señalización vial."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark-section overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Centro de <span className="text-gradient-primary">Descargables</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Acceda a catálogos, fichas técnicas, casos de éxito y certificaciones de nuestros productos y servicios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 mt-16">
        <div className="space-y-20">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                {/* Category Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-3xl font-bold mb-3">{category.title}</h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.documents.map((doc, docIndex) => (
                    <motion.div
                      key={docIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: docIndex * 0.05 }}
                      className="glass-card rounded-xl p-6 hover:bg-secondary/50 transition-all duration-300 group cursor-pointer"
                    >
                      {/* Document Icon */}
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <FileText className="h-6 w-6 text-accent" />
                      </div>

                      {/* Document Info */}
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      {/* Document Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {doc.format}
                        </span>
                        <span>{doc.size}</span>
                        <span>{doc.pages}</span>
                      </div>

                      {/* Download Button */}
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                        <Download className="h-4 w-4" />
                        Descargar
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card rounded-2xl p-12 text-center"
        >
          <h3 className="font-display text-2xl font-bold mb-4">
            ¿No Encuentra lo que <span className="text-gradient-primary">Busca</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contáctenos y con gusto le enviaremos la información específica que necesita
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-accent text-accent-foreground font-semibold shadow-glow-accent hover:opacity-90 transition-opacity"
          >
            Solicitar Información
          </a>
        </motion.div>
      </div>
    </div>
  );
}
