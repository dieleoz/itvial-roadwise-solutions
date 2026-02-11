import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    schema?: object;
}

export default function SEO({
    title = "IT VIAL SAS - Soluciones Tecnológicas para Infraestructura Vial",
    description = "Diseñamos y fabricamos sistemas inteligentes de transporte (ITS), equipos para pavimentos, instrumentos de medición, señalización vial y servicios especializados para la infraestructura vial de Colombia.",
    keywords = "ITS Colombia, sistemas inteligentes transporte, PMV, paneles mensaje variable, equipos demarcación vial, retroreflectómetro, señalización vial, IT VIAL, infraestructura vial Colombia",
    ogImage = "/og-image.jpg",
    schema
}: SEOProps) {
    const fullTitle = title.includes("IT VIAL") ? title : `${title} | IT VIAL SAS`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Spanish" />
            <meta name="author" content="IT VIAL SAS" />
            <link rel="canonical" href={typeof window !== "undefined" ? window.location.origin + window.location.pathname : ""} />

            {/* Structured Data (Schema.org) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
