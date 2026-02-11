# IT VIAL SAS - Soluciones Tecnológicas para Infraestructura Vial

## 🚀 Estado del Proyecto

**Fase Actual:** Fase 4 - SEO y Optimización  
**Completitud General:** ✅ 95%  
**Deployment:** 🟢 Live en Vercel  
**Última Actualización:** 11 de Febrero, 2026

---

## 📋 Resumen Ejecutivo

Sitio web corporativo para **IT VIAL SAS**, empresa colombiana líder en soluciones tecnológicas para infraestructura vial. El proyecto incluye:

- ✅ **8 verticales de productos completas** cubriendo todo el portafolio de ingeniería
- ✅ **Lead Generation Especializado** para capturar requerimientos técnicos (B2B)
- ✅ **Arquitectura de 5 Capas** para robustez y mantenibilidad
- ✅ **SEO Técnico & Estructurado** (Sitemap, Robots, Meta tags, JSON-LD Schema)
- ✅ **Integración WhatsApp Contextual** según el producto/servicio
- 🔄 **En progreso:** Generación de multimedia final y auditoría de performance (Fase 2)

---

## 🎯 Contenido Implementado (Fase 1 - Completa)

### Páginas de Productos Detalladas

1.  **ITS y Seguridad Vial** (`/solutions/its`)
    -   8 productos con especificaciones completas
    -   PMV Fijos y Móviles, Radares, Estaciones Meteorológicas, Gálibos, SOS, Estructuras, Semáforos

2.  **Equipos para Pavimentos** (`/solutions/pavimentos`)
    -   3 categorías de equipos
    -   Demarcación (camiones, autopropulsadas, manuales), Selladoras, Reciclaje

3.  **Instrumentos para las Vías** (`/solutions/instrumentos`)
    -   2 productos IoT con conectividad
    -   Retroreflectómetros Horizontales y Verticales con app móvil

4.  **Señalización Vial** (`/solutions/senalizacion`)
    -   3 categorías con procesos completos
    -   Elevada (6 pasos), Vertical (3 tipos), Horizontal (3 materiales)

5.  **Servicios Adicionales** (`/solutions/servicios`)
    -   2 servicios con precios
    -   Alquiler de Grúa (3 planes tarifarios), Aplicación de Marcas Viales (4 tipos)

--- El sitio replica la estructura y diseño de https://www.deviteck.com.co/, adaptado a los productos y servicios específicos de IT VIAL.

---

## 🏢 Sobre IT VIAL

**IT VIAL SAS** es una empresa colombiana especializada en:
- Sistemas Inteligentes de Tráfico (ITS)
- Equipos para pavimentos y demarcación vial
- Instrumentos de medición vial
- Señalización vertical y horizontal
- Servicios de instalación y mantenimiento

## 🏗️ Arquitectura del Sistema (5 Capas)

El proyecto sigue una estructura modular diseñada para escalabilidad técnica:

1.  **Capa 1: UI Components (shadcn/ui + Framer Motion)**
    - Componentes atómicos y animaciones fluidas para experiencia premium.
2.  **Capa 2: Business Logic (Context API)**
    - Gestión de estado para WhatsApp dinámico y preferencias de usuario.
3.  **Capa 3: Routing & Navigation (React Router)**
    - Estructura de URLs amigable para SEO y navegación profunda en verticales.
4.  **Capa 4: Data Validation & Forms (Zod + React Hook Form)**
    - Captura precisa de metadata de proyectos (Ubicación, Normas, Alcance).
5.  **Capa 5: SEO & Analytics (Sitemap + Open Graph)**
    - Indexación optimizada para el mercado de ingeniería vial en Colombia.

---

## 📋 PROMPT COMPLETO DE IMPLEMENTACIÓN

### CONTEXTO
Ya existe una base del sitio web. Ahora necesitamos expandirlo con TODO el contenido del portafolio real de IT VIAL, manteniendo el diseño oscuro profesional estilo Deviteck.

---

## 📐 ESTRUCTURA DEL SITIO

### Navegación Principal
```
INICIO | CONÓZCANOS | SOLUCIONES ▾ | PROYECTOS | DESCARGABLES | CONTACTO
```

### Submenú "SOLUCIONES"

#### 1. ITS Y SEGURIDAD VIAL
- Paneles de Mensaje Variable (PMV Fijos y Móviles)
- Radares Disuasivos
- Radares de Conteo y Categorización
- Estaciones Meteorológicas
- Gálibos y Señales Ocultas
- Sistemas SOS
- Estructuras Metálicas (Pórticos, Banderas, Gabinetes)
- Semaforización Convencional

#### 2. EQUIPOS PARA PAVIMENTOS
- Equipos para Demarcación Vial
- Selladoras de Fisuras
- Equipos de Reciclaje de Asfaltos

#### 3. INSTRUMENTOS PARA LAS VÍAS
- Retroreflectómetros Horizontales
- Retroreflectómetros Verticales

#### 4. SEÑALIZACIÓN VIAL
- Señalización Elevada
- Señalización Vertical
- Demarcación Horizontal

#### 5. SERVICIOS ADICIONALES
- Alquiler de Grúa de Canastilla
- Aplicación de Marcas Viales

---

## 🎨 DISEÑO VISUAL

### Paleta de Colores
- **Principales:** Grises oscuros (#1a1a1a, #2d2d2d) y negros (#000000, #0d0d0d)
- **Acentos:** Azul tecnológico (#0066cc, #0080ff) y naranja energético (#ff6600, #ff8c00)
- **Fondo:** Negro/gris oscuro con secciones alternadas
- **Texto:** Blanco y grises claros sobre fondos oscuros

### Tipografía
- **Encabezados:** Space Grotesk, bold
  - H1: 48-64px
  - H2: 36-42px
  - H3: 28-32px
- **Cuerpo:** Inter, 16-18px
- **Espaciado:** Generoso, con márgenes amplios entre secciones

### Estilo General
- Diseño moderno tipo "dark mode" profesional
- Tarjetas con glassmorphism y bordes sutiles
- Efectos hover en botones y tarjetas
- Animaciones suaves con Framer Motion
- Imágenes de alta calidad con overlays oscuros
- Iconos modernos de Lucide React

---

## 📄 PÁGINAS PRINCIPALES

### 1. INICIO (Index)
- **Hero Section:** Video/imagen de autopista con overlay oscuro
- **Sección Quiénes Somos:** Misión, Visión, Valores (3 columnas)
- **Nuestros Números:** 4 estadísticas animadas
  - 15+ años de experiencia
  - 180+ parques recreativos
  - 50+ proyectos viales
  - 100% fabricación nacional
- **Grid de Soluciones:** 6 categorías principales
- **Casos de Éxito:** Proyectos destacados
- **CTA Final**

### 2. ITS Y SEGURIDAD VIAL
#### PMV Fijos
- Descripción completa
- Características técnicas
- Aplicaciones
- Imágenes del portafolio
- CTAs: Cotización + Ficha Técnica

#### PMV Móviles
- Especificaciones
- Ideal para obras temporales
- Autonomía energética

#### Radares Disuasivos
- Display "SU VELOCIDAD"
- Resultados comprobados
- Reducción de velocidad 15-25%

#### Radares de Conteo
- Aforo vehicular
- Clasificación automática
- Reportes IoT

#### Estaciones Meteorológicas
- Medición en tiempo real
- Integración con PMV

#### Gálibos
- Detección de sobredimensionados
- Protección de estructuras

#### Sistemas SOS
- Comunicación de emergencia
- Video, audio, GPS

#### Estructuras Metálicas
- Pórticos y banderas
- Diseño, fabricación, instalación
- Galvanizado en caliente

#### Semaforización
- LED de alta eficiencia
- Vehiculares y peatonales
- Cuenta regresiva

### 3. EQUIPOS PARA PAVIMENTOS
#### Camiones Demarcadores
- Líderes en Colombia
- Sistema IT-V4.0
- Cumplimiento NTC
- Clientes: Neiva-Girardot, Pacífico Tres

#### Máquinas Autopropulsadas
- Para parqueaderos y vías urbanas
- Operación por 1 persona

#### Equipos Manuales
- Portátiles
- Trabajos pequeños

#### Selladoras de Fisuras
- Prevención de daños
- Mantenimiento preventivo

#### Reciclaje de Asfaltos
- In situ o planta móvil
- Sostenibilidad
- Ahorro hasta 40%

### 4. INSTRUMENTOS PARA LAS VÍAS
#### Retroreflectómetro Horizontal (SAT-LUX)
- Medición según ASTM E1710
- Conectividad IoT
- App móvil RTH_IoT
- GPS + informes automáticos

#### Retroreflectómetro Vertical
- Evaluación de señales
- Mantenimiento predictivo
- Cumplimiento normativo

### 5. SEÑALIZACIÓN VIAL
#### Señalización Elevada
- Diseño, fabricación, instalación
- Pórticos y banderas
- Proyectos realizados

#### Señalización Vertical
- Reglamentarias, preventivas, informativas
- Láminas reflectivas Tipo I-IV
- Cumplimiento Manual de Señalización

#### Demarcación Horizontal
- Líneas, símbolos, pasos peatonales
- Pintura en frío y termoplástica
- Equipos propios

### 6. SERVICIOS ADICIONALES
#### Grúa de Canastilla
- Alcance 18 metros
- Operador certificado
- Disponibilidad 24/7

---

## 🛠️ TECNOLOGÍAS

### Stack Principal
- **Framework:** React 18.3.1
- **Lenguaje:** TypeScript
- **Build Tool:** Vite 5.4.19
- **Routing:** React Router DOM 6.30.1
- **Styling:** Tailwind CSS 3.4.17
- **UI Components:** shadcn/ui (Radix UI)
- **Animaciones:** Framer Motion 12.34.0
- **Iconos:** Lucide React 0.462.0
- **Validación:** Zod 3.25.76
- **State Management:** TanStack Query 5.83.0

### Herramientas de Desarrollo
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint 9.32.0
- **TypeScript:** 5.8.3

---

## 📱 FUNCIONALIDADES ESPECIALES

### 1. Botón WhatsApp Flotante
- Posición: Esquina inferior derecha
- Color: Verde WhatsApp (#25D366)
- Mensaje pre-configurado por producto

### 2. Formulario de Cotización Rápida
- Modal en productos
- Producto pre-seleccionado
- Validación con Zod

### 3. Buscador Inteligente
- Barra de búsqueda en header
- Búsqueda por:
  - Productos
  - Categorías
  - Casos de éxito
  - Documentos
- Resultados con preview

---

## 🎯 ELEMENTOS VISUALES CRÍTICOS

### Imágenes del Portafolio
- PMV nocturno con mensaje activo
- PMV móviles en plataforma
- Radar "SU VELOCIDAD"
- Estructuras metálicas en fabricación
- Instalación de pórticos
- Señales elevadas
- Camión demarcador en operación
- Controlador IT-V4.0
- Retroreflectómetros
- App RTH_IoT
- Demarcación vial terminada
- Grúa de canastilla

---

## 📊 SEO Y OPTIMIZACIÓN

### Keywords Principales
- Soluciones ITS Colombia
- Sistemas inteligentes de tráfico
- PMV Colombia
- Equipos auscultación de pavimentos
- Señalización vial Colombia
- Demarcación vial
- Retroreflectómetros

### Optimización
- Meta títulos y descripciones únicas
- URLs amigables
- Schema markup para productos
- Sitemap XML
- Lazy loading de imágenes
- Compresión WebP

---

## 🚀 SCRIPTS DISPONIBLES

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Tests
npm test
npm run test:watch

# Linting
npm run lint
```

---

## 📞 INFORMACIÓN DE CONTACTO

**Dirección:** Calle 75 #69h-33, Bogotá D.C., Colombia  
**Teléfono:** +57 (1) 6940493  
**Móvil:** +57 318 8200400  
**Email:** contactenos@itvial.com  

**Horarios:**
- Lunes a Viernes: 7:00 AM - 5:00 PM
- Sábados: 8:00 AM - 12:00 PM

---

## 📄 FOOTER ESTRUCTURA

```
[Logo IT VIAL]

SOBRE NOSOTROS          SOLUCIONES               CONTACTO
- Misión y Visión       • ITS                    📍 Dirección
- Historia              • Pavimentos             📞 Teléfonos
- Equipo                • Instrumentos           ✉️ Email
- Certificaciones       • Señalización

PROYECTOS              LEGAL
- Casos de Éxito       • Política de Privacidad
- Clientes             • Términos y Condiciones
- Galería              • PQRSDF

© 2025 IT VIAL SAS | Infraestructura y Tecnología Vial
"Las mejores vías hacia el futuro no solo se construyen, 
se iluminan con innovación."
```

---

## 📝 LICENCIA

© 2025 IT VIAL SAS. Todos los derechos reservados.

---

## 🤝 CONTRIBUCIÓN

Este proyecto es desarrollado y mantenido por IT VIAL SAS.

Para consultas técnicas o comerciales, contactar a: contactenos@itvial.com
