import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Award } from "lucide-react";

const solutionLinks = [
  { name: "ITS y Seguridad Vial", path: "/solutions/its" },
  { name: "Equipos para Pavimentos", path: "/solutions/pavimentos" },
  { name: "Instrumentos para las Vías", path: "/solutions/instrumentos" },
  { name: "Señalización Vial", path: "/solutions/senalizacion" },
  { name: "Servicios Adicionales", path: "/solutions/servicios" },
];

const companyLinks = [
  { name: "Conózcanos", path: "/about" },
  { name: "Proyectos", path: "/projects" },
  { name: "Descargables", path: "/downloads" },
  { name: "Contacto", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-dark-section border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-gradient-primary">
              IT VIAL
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Soluciones tecnológicas para la infraestructura vial de Colombia. Más de 15 años diseñando y fabricando sistemas inteligentes.
            </p>

            {/* Certifications */}
            <div className="mt-6 flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-xs text-muted-foreground">ISO 9001:2015</span>
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Soluciones</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Calle 75 #69h-33, Bogotá D.C., Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+5716940493" className="hover:text-primary transition-colors">
                  +57 (1) 6940493
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:contactenos@itvial.com" className="hover:text-primary transition-colors">
                  contactenos@itvial.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Lun-Vie: 7:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} IT VIAL SAS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidad</Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
