import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Newspaper } from "lucide-react";

interface DownloadItem {
  title: string;
  description: string;
  type: string;
}

const catalogs: DownloadItem[] = [
  { title: "Catálogo ITS y Seguridad Vial", description: "PMV, sistemas de tráfico, semaforización y más", type: "PDF" },
  { title: "Catálogo de Peajes", description: "Gestión de carriles, sensores y pago electrónico", type: "PDF" },
  { title: "Catálogo de Túneles", description: "Detección de incendios, sensores y señalización", type: "PDF" },
  { title: "Catálogo Smart City y Electromovilidad", description: "Cargadores EV, parking y control de acceso", type: "PDF" },
  { title: "Catálogo Instrumentación y Medición", description: "Equipos de auscultación y medición vial", type: "PDF" },
  { title: "Catálogo Ferroviario", description: "Equipos portátiles y vehículos de auscultación", type: "PDF" },
];

const techSheets: DownloadItem[] = [
  { title: "Ficha Técnica - PMV Fijo", description: "Especificaciones, dimensiones y normativa", type: "PDF" },
  { title: "Ficha Técnica - PMV Móvil", description: "Características del remolque y panel", type: "PDF" },
  { title: "Ficha Técnica - Atenuador Scorpion", description: "Cumplimiento MASH TL-3", type: "PDF" },
  { title: "Ficha Técnica - Cargadores EV", description: "Modelos eHome, eNext y eVolve", type: "PDF" },
  { title: "Ficha Técnica - Semáforos Giotto", description: "Serie completa de semaforización", type: "PDF" },
  { title: "Ficha Técnica - Retroreflectómetros", description: "Horizontal y vertical con IoT", type: "PDF" },
];

const caseStudies: DownloadItem[] = [
  { title: "Caso de Estudio - Neiva-Girardot", description: "Análisis completo del proyecto de concesión", type: "PDF" },
  { title: "Caso de Estudio - Pacífico Tres", description: "Implementación de sistemas de peaje", type: "PDF" },
  { title: "Caso de Estudio - Red de Parques", description: "180+ parques recreativos a nivel nacional", type: "PDF" },
];

function DownloadCard({ item }: { item: DownloadItem }) {
  return (
    <div className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-colors group cursor-pointer">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-muted-foreground">{item.type}</span>
        <Download className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, items }: { icon: typeof FileText; title: string; items: DownloadItem[] }) {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="font-display text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <DownloadCard key={item.title} item={item} />
        ))}
      </div>
    </motion.section>
  );
}

export default function Downloads() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Descargables</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Acceda a nuestros catálogos, fichas técnicas y casos de estudio
          </p>
        </motion.div>

        <div className="space-y-16">
          <Section icon={Download} title="Catálogos" items={catalogs} />
          <Section icon={BookOpen} title="Fichas Técnicas" items={techSheets} />
          <Section icon={Newspaper} title="Casos de Estudio" items={caseStudies} />
        </div>
      </div>
    </div>
  );
}
