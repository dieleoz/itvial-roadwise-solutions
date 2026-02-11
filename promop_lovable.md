# Prompt de Generación Multimedia: Fase 2 (IT VIAL)

> **🤖 PARA EL AGENTE LOVABLE / EXTENSION:**  
> Este archivo contiene tu **Misión Principal**. Usa los prompts detallados a continuación para generar los activos visuales faltantes y completar la Fase 2 del Roadmap.

Este documento sirve como guía para la generación de activos visuales faltantes del proyecto IT VIAL, asegurando consistencia estética y técnica con la arquitectura actual de la plataforma (React + Tailwind + Glassmorphism).

## 🛠️ Arquitectura de la Fase Multimedia (Fase 2)

1. **Ubicación de Activos**: 
   - Las imágenes de productos y soluciones deben guardarse en `public/images/solutions/[categoria]/`.
   - Las imágenes de proyectos deben guardarse en `public/images/projects/`.
2. **Formato Técnico**:
   - Formato: WebP para máxima optimización.
   - Ratio: 16:9 para hero sections y 4:3 para tarjetas de producto.
   - Resolución: Mínimo 1200px de ancho.
3. **Estética Visual**:
   - Estilo: Fotografía profesional de ingeniería civil/infraestructura.
   - Iluminación: Diurna clara o nocturna con énfasis en la iluminación LED/Retroreflectividad.
   - Tonos: Coherentes con la paleta de IT VIAL (Azul #0080ff y Naranja #ff6600).

## 📸 Lista de Imágenes Requeridas

### ITS y Seguridad Vial
- **Nombre**: `pmv-nocturno.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Panel de Mensaje Variable (PMV) activo durante la noche en una autopista colombiana, mostrando texto ámbar claro.
- **Nombre**: `pmv-movil.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: PMV montado sobre remolque naranja en una zona de obra, con paneles solares desplegados.
- **Nombre**: `radar-su-velocidad.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Radar disuasivo instalado en poste cerca de una zona escolar, mostrando "45 km/h" en verde.
- **Nombre**: `controlador-itv4.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Primer plano técnico de un controlador de tráfico IT-V4.0 dentro de un gabinete de acero inoxidable.

### Equipos para Pavimentos
- **Nombre**: `camion-demarcador-operando.webp`
  - **Ubicación**: `public/images/solutions/pavimentos/`
  - **Descripción**: Camión de demarcación vial de IT VIAL aplicando pintura termoplástica blanca en una carretera de doble calzada.
- **Nombre**: `selladora-fisuras.webp`
  - **Ubicación**: `public/images/solutions/pavimentos/`
  - **Descripción**: Equipo sellador de fisuras aplicando material asfáltico caliente sobre una grieta en el pavimento.

### Señalización y Otros
- **Nombre**: `senale-elevada-portico.webp`
  - **Ubicación**: `public/images/solutions/senalizacion/`
  - **Descripción**: Estructura tipo pórtico metálico cruzando la vía con señales de destino grandes y claras.
- **Nombre**: `retroreflectometros.webp`
  - **Ubicación**: `public/images/solutions/instrumentos/`
  - **Descripción**: Los dos modelos de retroreflectómetros SAT-LUX (uno amarillo y otro naranja) sobre el asfalto.
- **Nombre**: `app-rth-iot.webp`
  - **Ubicación**: `public/images/solutions/instrumentos/`
  - **Descripción**: Smartphone mostrando la interfaz de la aplicación RTH_IoT con gráficos de medición de retroreflectividad.

### Infraestructura y Servicios
- **Nombre**: `grua-canastilla.webp`
  - **Ubicación**: `public/images/solutions/servicios/`
  - **Descripción**: Grúa de canastilla de IT VIAL realizando mantenimiento a una luminaria o cámara ITS a 12 metros de altura.
- [ ] **Nombre**: `taller-fabricacion.webp`
   - **Ubicación**: `public/images/about/`
   - **Descripción**: Vista panorámica del taller de IT VIAL con soldadores trabajando en estructuras de pórticos.

### Nuevos Conceptos Estratégicos (Rediseño Soluciones)
- **Nombre**: `smart-work-zone-concept.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Concepto de "Zona de Obra Inteligente" mostrando una carretera con conos conectados, PMV móvil y un radar, todo enviando datos a una nube esquemática.
- **Nombre**: `centro-control-its.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Sala de control moderna con videowall mostrando mapas de tráfico y datos en tiempo real (para ilustrar "Integración Operativa").
- **Nombre**: `tunel-inteligente.webp`
  - **Ubicación**: `public/images/solutions/its/`
  - **Descripción**: Interior de un túnel moderno con iluminación LED, ventiladores jet-fans y señalización electrónica de carril.
- **Nombre**: `electrolinera-publica.webp`
  - **Ubicación**: `public/images/solutions/electromovilidad/`
  - **Descripción**: Estación de carga para vehículos eléctricos moderna en un espacio público, con branding sutil de IT VIAL.

## 🚀 Instrucciones de Implementación

Una vez generadas, estas imágenes deben ser reemplazadas en los componentes respectivos:
- `ITSPage.tsx`: Reemplazar placeholders en secciones de PMV y Radares.
- `PavimentosPage.tsx`: Actualizar secciones de Camiones y Selladoras.
- `AuscultacionPage.tsx`: (Pendiente imágenes de IRI/FWD).
- `Projects.tsx`: Asignar imágenes reales a los 8 casos de éxito documentados.

---
*Prompt generado por Antigravity para la fase de finalización multimedia de IT VIAL.*
