import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function CookiesPolicy() {
    return (
        <div className="pt-24 pb-24 min-h-screen">
            <SEO
                title="Política de Cookies | IT VIAL SAS"
                description="Información sobre el uso de cookies y tecnologías similares en el sitio web de IT VIAL SAS."
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <h1 className="text-4xl font-bold mb-8 text-gradient-primary">Política de Cookies</h1>
                    <p className="text-muted-foreground mb-6 text-sm italic">Última actualización: 11 de febrero de 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">¿Qué son las cookies?</h2>
                        <p>Una cookie es un pequeño archivo de texto que un sitio web almacena en su navegador. Se utilizan para que el sitio funcione mejor y para proporcionar información analítica a los propietarios.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Tipos de Cookies que utilizamos</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Esenciales:</strong> Necesarias para la navegación básica y funciones de seguridad. Sin ellas el sitio no funciona correctamente.</li>
                            <li><strong>Funcionales:</strong> Permiten recordar sus preferencias (como la cesta de cotizaciones) entre sesiones.</li>
                            <li><strong>Analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con el sitio (qué páginas visitan, tiempo de permanencia) para mejorar el servicio.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Control de Cookies</h2>
                        <p>Usted puede restringir, bloquear o borrar las cookies en cualquier momento modificando la configuración de su navegador:</p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>Google Chrome: Herramientas - Configuración - Privacidad y seguridad.</li>
                            <li>Firefox: Herramientas - Opciones - Privacidad y seguridad.</li>
                            <li>Edge/Internet Explorer: Herramientas - Opciones de Internet - Privacidad.</li>
                            <li>Safari: Preferencias - Seguridad.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Más información</h2>
                        <p>Para mayor información sobre nuestra política de cookies, puede contactarnos en <strong>contactenos@itvial.com</strong>.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
