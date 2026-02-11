import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function TermsConditions() {
    return (
        <div className="pt-24 pb-24 min-h-screen">
            <SEO
                title="Términos y Condiciones | IT VIAL SAS"
                description="Términos y condiciones de uso del sitio web de IT VIAL SAS y avisos legales comerciales."
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    <h1 className="text-4xl font-bold mb-8 text-gradient-primary">Términos y Condiciones de Uso</h1>
                    <p className="text-muted-foreground mb-6 text-sm italic">Última actualización: 11 de febrero de 2026</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">1. Aceptación de Términos</h2>
                        <p>Al acceder y utilizar este sitio web, usted acepta estar vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte, le sugerimos no utilizar nuestros servicios digitales.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">2. Propiedad Intelectual</h2>
                        <p>Todo el contenido de este sitio (textos, gráficos, logotipos, imágenes, fichas técnicas y software) es propiedad de <strong>IT VIAL SAS</strong> o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual internacionales y nacionales.</p>
                        <p>Queda prohibida la reproducción total o parcial del material sin autorización expresa y por escrito.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">3. Uso del Contenido</h2>
                        <p>El uso del catálogo y descargables está permitido exclusivamente para fines informativos y de gestión comercial legítima. No se permite el uso del sitio con fines fraudulentos o para interferir en su correcto funcionamiento.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">4. Limitación de Responsabilidad</h2>
                        <p>IT VIAL SAS se esfuerza por mantener la información técnica actualizada. Sin embargo, las especificaciones de los productos pueden variar según avances tecnológicos o requerimientos específicos del cliente. Las imágenes son ilustrativas y pueden diferir del producto final.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">5. Enlaces a Terceros</h2>
                        <p>Nuestro sitio puede contener enlaces a sitios externos (ej. INVIAS, ANI). IT VIAL SAS no se hace responsable por el contenido o las políticas de privacidad de dichos sitios de terceros.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">6. Ley Aplicable y Jurisdicción</h2>
                        <p>Cualquier controversia relacionada con el uso de este sitio web será dirimida bajo las leyes de la República de Colombia y ante los tribunales competentes de la ciudad de Bogotá D.C.</p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
