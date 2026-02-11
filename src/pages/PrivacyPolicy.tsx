import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-24 min-h-screen">
            <SEO
                title="Política de Privacidad | IT VIAL SAS"
                description="Conozca cómo IT VIAL SAS protege y trata sus datos personales de acuerdo con la Ley 1581 de 2012."
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <h1 className="text-4xl font-bold mb-8 text-gradient-primary">Política de Tratamiento de Datos Personales</h1>
                    <p className="text-muted-foreground mb-6 text-sm italic">Última actualización: 11 de febrero de 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">1. Identidad del Responsable</h2>
                        <p><strong>IT VIAL SAS</strong>, con domicilio en Calle 75 #69h-33, Bogotá D.C., Colombia, correo electrónico <strong>contactenos@itvial.com</strong> y teléfono <strong>+57 (1) 6940493</strong>, es el responsable del tratamiento de sus datos personales.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">2. Marco Legal</h2>
                        <p>Esta política se rige bajo la Constitución Política de Colombia, la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas que las modifiquen o adicionen (Habeas Data).</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">3. Finalidades del Tratamiento</h2>
                        <p>Los datos capturados a través de nuestro sitio web, formularios de contacto y sistema de cotizaciones serán utilizados para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Envío de cotizaciones y propuestas comerciales de equipos viales.</li>
                            <li>Asesoría técnica personalizada sobre sistemas ITS y pavimentos.</li>
                            <li>Envío de boletines técnicos y noticias del sector (previa autorización).</li>
                            <li>Gestión administrativa, contable y comercial de la relación contractual.</li>
                            <li>Cumplimiento de obligaciones legales ante autoridades estatales.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">4. Derechos del Titular</h2>
                        <p>Usted, como titular de los datos, tiene derecho a:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Conocer, actualizar y rectificar sus datos personales.</li>
                            <li>Solicitar prueba de la autorización otorgada.</li>
                            <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
                            <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                            <li>Acceder en forma gratuita a sus datos personales objeto de tratamiento.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">5. Canales de Atención</h2>
                        <p>Para ejercer sus derechos, puede enviar una solicitud escrita al correo <strong>contactenos@itvial.com</strong> indicando en el asunto "Consulta/Reclamo Habeas Data". Su solicitud será atendida en un plazo máximo de quince (15) días hábiles.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">6. Seguridad de la Información</h2>
                        <p>IT VIAL SAS implementa medidas técnicas y administrativas de seguridad para evitar la pérdida, acceso no autorizado o manipulación de la información recolectada.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
