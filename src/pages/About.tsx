import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Telescope, Shield, Users, Award, Wrench, Building2, Factory, Globe2, CheckCircle2, FlaskConical, ArrowRight } from "lucide-react";

const timeline = [
  {
    year: "2008",
    title: "Fundación",
    text: "Nace IT VIAL SAS en Bogotá, con el objetivo de revolucionar la señalización vial en Colombia.",
    icon: Building2
  },
  {
    year: "2012",
    title: "Innovación ITS",
    text: "Desarrollo de los primeros Paneles de Mensaje Variable (PMV) de fabricación nacional.",
    icon: Factory
  },
  {
    year: "2015",
    title: "Expansión Crítica",
    text: "Implementación de soluciones integrales para grandes concesiones y túneles (ITS + Peajes).",
    icon: Globe2
  },
  {
    year: "2019",
    title: "Liderazgo en Instrumentación",
    text: "Lanzamiento de la línea de retroreflectómetros con integración IoT y almacenamiento en la nube.",
    icon: Award
  },
  {
    year: "2022",
    title: "Auscultación Ferroviaria",
    text: "Incursión en el sector ferroviario con equipos de medición de alta precisión.",
    icon: Target
  },
  {
    year: "2024",
    title: "Referente Nacional",
    text: "Consolidación como el principal proveedor de tecnología vial fabricada en Colombia.",
    icon: Shield
  },
];

const values = [
  { icon: Shield, title: "Integridad", text: "Transparencia y honestidad en cada compromiso adquirido." },
  { icon: Award, title: "Excelencia", text: "Búsqueda constante de la perfección técnica en nuestros desarrollos." },
  { icon: Globe2, title: "Compromiso", text: "Dedicación total al desarrollo de la infraestructura del país." },
  { icon: Factory, title: "Soberanía Tecnológica", text: "Orgullo de fabricar soluciones 100% colombianas para el mundo." },
];

const certifications = [
  { name: "ISO 9001:2015", provider: "Certificación de Calidad", desc: "Gestión de calidad en diseño, fabricación y comercialización." },
  { name: "Manual de Señalización", provider: "Ajuste Normativo", desc: "Cumplimiento estricto de la Resolución 1885 de 2015 (INVIAS)." },
  { name: "Normas ASTM / NTC", provider: "Estándares Técnicos", desc: "Garantía de calidad en materiales y procesos de fabricación." },
];

export default function About() {
  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Trayectoria y Confianza</span>
          </motion.div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Liderando la <span className="text-gradient-primary">Innovación Vial</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Fusionamos la ingeniería civil, electrónica y mecánica para crear ecosistemas
            tecnológicos que protegen vidas en las carreteras de Colombia y la región.
          </p>
        </motion.div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 border-l-4 border-l-primary"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-5">Misión</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Transformar la seguridad vial mediante el diseño y fabricación de soluciones tecnológicas innovadoras,
              proporcionando herramientas de alta precisión que permitan a las concesiones y entidades gubernamentales
              gestionar la infraestructura de manera inteligente y eficiente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-10 border-l-4 border-l-accent"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Telescope className="h-7 w-7 text-accent" />
            </div>
            <h2 className="font-display text-3xl font-bold mb-5">Visión</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Consolidarnos para el 2030 como el principal referente regional en tecnología aplicada a la infraestructura,
              siendo pioneros en la integración de Inteligencia Artificial e IoT en sistemas de transporte y auscultación,
              con presencia activa en el mercado latinoamericano.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Nuestros Pilares</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card rounded-2xl p-8 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities / Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6">Infraestructura Propia y Talento Nacional</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Contamos con una planta de fabricación especializada en Bogotá, equipada con tecnología de punta
              para el desarrollo electrónico, corte láser, ensamble mecánico y laboratorios de pruebas.
            </p>
            <div className="space-y-4">
              {[
                { icon: Factory, label: "Planta de fabricación en Bogotá (1,200m²)" },
                { icon: Users, label: "Equipo multidisciplinario de ingenieros expertos" },
                { icon: FlaskConical, label: "Laboratorio de I+D y desarrollo de software" },
                { icon: CheckCircle2, label: "Capacidad de mantenimiento y soporte en sitio" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden glass-card p-2"
          >
            <div className="absolute inset-0 bg-cover bg-center rounded-xl opacity-20" style={{ backgroundImage: "url('/placeholder.svg')" }} />
            <div className="relative z-10 w-full h-full flex items-center justify-center border-2 border-dashed border-border rounded-xl">
              <span className="text-muted-foreground italic text-sm text-center px-6">
                Espacio reservado para foto de la planta IT VIAL / Equipo de trabajo
              </span>
            </div>
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-lg text-xs font-bold text-primary">
              BOGOTÁ, COLOMBIA
            </div>
          </motion.div>
        </div>

        {/* Enhanced Timeline */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground max-w-xl mx-auto italic">Generando confianza a través de los años</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-20 hidden md:block" />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:flex flex-1 justify-center">
                    <div className={`p-6 glass-card rounded-2xl max-w-sm ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-3xl font-bold text-gradient-primary block mb-1">{item.year}</span>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>

                  {/* Icon Point */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center shrink-0 shadow-glow-primary">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1 md:hidden">
                    <div className="p-5 glass-card rounded-xl">
                      <span className="text-2xl font-bold text-gradient-primary block">{item.year}</span>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="glass-card rounded-3xl p-10 md:p-16 border-t-2 border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-display text-4xl font-bold mb-6">Calidad Certificada</h2>
              <p className="text-muted-foreground mb-8">
                Nuestros procesos están respaldados por estándares internacionales y nacionales que garantizan
                la durabilidad y confiabilidad de cada equipo.
              </p>
              <div className="p-6 bg-background/50 rounded-2xl border border-primary/20 backdrop-blur-sm text-center">
                <div className="w-16 h-16 rounded-full bg-white mx-auto mb-4 p-2 flex items-center justify-center shadow-lg">
                  <img src="/placeholder.svg" alt="ISO 9001 Logo" className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold mb-1">ISO 9001:2015</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Sistemas de Gestión de Calidad</p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/40 transition-colors">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                  <p className="text-xs text-primary font-semibold mb-4">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
                </div>
              ))}
              <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col justify-center text-center sm:col-span-2 md:col-span-1">
                <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Soporte Técnico Especializado</h4>
                <p className="text-sm text-muted-foreground">Personal certificado para instalación y mantenimiento en toda Colombia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">¿Listo para modernizar su infraestructura?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-bold shadow-glow-primary hover:opacity-90 transition-all flex items-center gap-2"
            >
              Hablemos de su proyecto
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border text-foreground font-bold hover:bg-secondary transition-all"
            >
              Explorar Soluciones
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
