import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import SEO from "@/components/SEO";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nombre requerido").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(20).optional(),
  queryType: z.string().min(1, "Seleccione un tipo de consulta"),
  message: z.string().trim().min(1, "Mensaje requerido").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const queryTypes = [
  "Cotización de productos",
  "Información técnica",
  "Oportunidades de negocio",
  "Soporte técnico",
  "Otro",
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const update = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="pt-20 lg:pt-24 pb-24">
      <SEO
        title="Contáctenos | IT VIAL SAS"
        description="Estamos listos para asesorarlo en sus proyectos de infraestructura vial. Sede principal en Bogotá y cobertura nacional."
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Contáctenos</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estamos listos para ayudarle con sus proyectos de infraestructura vial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Dirección", value: "Calle 75 #69h-33, Bogotá D.C., Colombia" },
              { icon: Phone, label: "Teléfono", value: "+57 (1) 6940493" },
              { icon: Mail, label: "Email", value: "contactenos@itvial.com" },
              { icon: Clock, label: "Horario", value: "Lun-Vie: 7:00 AM - 5:00 PM\nSáb: 8:00 AM - 12:00 PM" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">¡Mensaje Enviado!</h3>
                <p className="text-muted-foreground">Nos pondremos en contacto con usted pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Nombre completo *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Empresa</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Correo electrónico *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Teléfono</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tipo de consulta *</label>
                  <select
                    value={form.queryType}
                    onChange={(e) => update("queryType", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seleccionar...</option>
                    {queryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.queryType && <p className="text-xs text-destructive mt-1">{errors.queryType}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Mensaje *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-base font-semibold rounded-lg bg-gradient-primary text-primary-foreground shadow-glow-primary hover:opacity-90 transition-opacity"
                >
                  Enviar Consulta
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-primary/20 h-[450px]">
            <iframe
              title="Ubicación IT VIAL SAS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5458694435!2d-74.08865672403683!3d4.674722895300063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba931c81e3d%3A0x8e8e78e1c6e6e6e6!2sCl.%2075%20%2369h-33%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) brightness(90%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Sede Principal Bogotá: Calle 75 #69h-33, Barrios Unidos</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
