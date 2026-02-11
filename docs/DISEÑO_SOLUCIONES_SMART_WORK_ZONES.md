# DISEÑO DE SOLUCIONES: SMART WORK ZONES (Zonas de Obra Inteligentes)
**Documento Maestro de Diseño Vertical: IT VIAL INTELIGENTE™**
**Versión:** 1.0
**Fecha:** 11 de Febrero de 2026

## 🎯 ESTRATEGIA DE VERTICAL
**Concepto:** "Zonas de Obra Inteligentes" (Smart Work Zones)
**Sub-marca:** IT VIAL INTELIGENTE™
**Propuesta de Valor:** Evolucionar el control de obra tradicional (señalización pasiva) hacia un modelo activo de monitoreo, detección y alerta basado en datos (IoT).

**Diferenciadores Clave:**
1.  **Sin desarrollo de software complejo:** API abierta para integración directa.
2.  **Hardware agnóstico:** Se integra con infraestructura existente (conos, señales).
3.  **Enfoque legal:** Herramientas para cumplimiento de PMT (Plan de Manejo de Tráfico) y defensa ante demandas.

---

## 🛠️ PORTAFOLIO DE PRODUCTOS (DEFINICIÓN TÉCNICA)

### 1️⃣ VIGÍA VIAL™ (Sensor Inteligente para Señalización)
**Slogan:** "Tu señalización, auditada en tiempo real."

**🔹 Qué es:**
Dispositivo IoT diseñado para convertir una señal temporal convencional en un activo inteligente con monitoreo de ubicación, estabilidad y estado operativo.

**🔹 Qué hace:**
*   Monitoreo GPS en tiempo real de la señal.
*   Detección de caída (acelerómetro), desplazamiento o manipulación no autorizada.
*   Registro de eventos con fecha y hora para auditoría.
*   Transmisión de datos vía 4G/5G o LoRaWAN.
*   Reporte automático de cumplimiento del PMT.

**🔹 Qué instala IT VIAL:**
*   Señal vertical reglamentaria con estructura metálica certificada (trípode o poste).
*   Soporte mecánico reforzado antivibración.
*   Módulo VIGÍA VIAL™ integrado y sellado (IP67).
*   Gateway de comunicaciones (si aplica).

**🔹 Qué entrega (API):**
*   **Endpoint:** `GET /api/v1/devices/{id}/status`
*   **Datos:**
    *   Ubicación (Lat/Long).
    *   Estado: `ACTIVE` | `FALLEN` | `MOVING`.
    *   Nivel de batería (%).
    *   Historial de eventos (Log de caídas).

**🔹 Problema que resuelve:**
*   **Multas:** Evita sanciones por incumplimiento de señalización en obra.
*   **Costos operativos:** Reduce la necesidad de inspecciones visuales manuales constantes.
*   **Riesgo Legal:** Genera evidencia digital (trazabilidad) ante la ANI o interventoría en caso de incidentes.

### 2️⃣ CONO ALERTA PRO™ (Protección Activa de Cuadrillas)
**Slogan:** "Un segundo par de ojos cuidando a tu equipo."

**🔹 Qué es:**
Sistema autónomo de detección temprana de vehículos en aproximación para protección de cuadrillas en zona de obra, integrado en un cono industrial.

**🔹 Qué hace:**
*   Radar Doppler integrado de corto/medio alcance (~150m).
*   Detección de velocidad y tasa de aproximación de vehículos.
*   Alerta sonora (sirena) y visual (estrobos LED) inmediata ante intrusión o riesgo de atropello.
*   Comunicación inalámbrica (Mesh) entre conos para alertas en cadena.

**🔹 Qué instala IT VIAL:**
*   Cono de alta resistencia grado vial (norma NTC/Manual 2015).
*   Módulo de radar y control integrado en la base o tope.
*   Sistema de alerta LED 360° de alta intensidad.

**🔹 Qué entrega (API):**
*   **Endpoint:** `GET /api/v1/zones/{id}/traffic`
*   **Datos:**
    *   Velocidad promedio de flujo vehicular.
    *   Conteo vehicular (aforo básico).
    *   Eventos de intrusión (Near-misses).
    *   Fecha, hora y ubicación de alertas generadas.

**🔹 Problema que resuelve:**
*   **Seguridad Vital:** Reduce drásticamente el riesgo de atropellamientos a paleteros y operarios.
*   **Conciencia Situacional:** Alerta al personal antes de que el vehículo llegue a la zona de trabajo.
*   **Justificación Técnica:** Permite validar si los límites de velocidad de obra son respetados.

---

## 📌 PROMPT PARA AGENTE DE IMPLEMENTACIÓN (WEB)
*(Copiar y pegar este bloque en el prompt del agente encargado de construir la sección web)*

```markdown
### INSTRUCCIONES DE DISEÑO - NUEVOS PRODUCTOS SMART WORK ZONES
**Ubicación:** Dentro de la sección `/solutions/zonas-de-obra-inteligentes`
**Sub-marca:** Usar identidad "IT VIAL INTELIGENTE™" (Estilo tecnológico, colores cyan/negro/naranja seguridad).

**PRODUCTOS A IMPLEMENTAR:**

**1. VIGÍA VIAL™**
- **Título:** VIGÍA VIAL™
- **Subtítulo:** Sensor inteligente para señalización temporal.
- **Enfoque:** Cumplimiento PMT y monitoreo remoto.
- **Instalación:** Señal metálica certificada + módulo IoT.
- **Entregable:** API REST con ubicación, estado y eventos.
- **Cliente objetivo:** Concesiones 4G/5G, interventorías, alcaldías.

**2. CONO ALERTA PRO™**
- **Título:** CONO ALERTA PRO™
- **Subtítulo:** Cono inteligente con radar de aproximación.
- **Enfoque:** Protección activa de cuadrillas.
- **Instalación:** Cono industrial + módulo radar + LED 360°.
- **Entregable:** API con datos de velocidad, conteo e intrusión.
- **Cliente objetivo:** Constructoras, concesiones, obras urbanas.

**CARACTERÍSTICAS COMUNES A DESTACAR:**
- Fabricación e integración nacional (Colombia).
- Modelo de servicio: Venta, Instalación, Puesta en marcha.
- API Abierta: "No te vendemos software cerrado, te entregamos tus datos".
- Modelo opcional: Renta + Operación + Mantenimiento.

**ESTILO DE COPY:**
- Técnico, directo y orientado a ROI (Retorno de Inversión).
- Evitar lenguaje de marketing vacío ("increíble", "fantástico"). Usar términos de ingeniería ("detección", "latencia", "IP67", "normativa").
```

---

## 📊 RELEVANCIA PARA EL MERCADO COLOMBIANO
*   **Evolución Real:** Pasa del modelo "colocar señal y olvidar" a "colocar, medir y gestionar".
*   **Tendencia Global:** Alineado con estándares internacionales de Smart Work Zones (SWZ).
*   **Integración Simple:** Al entregar API y no exigir una plataforma propietaria compleja, se facilita la venta a concesionarios que ya tienen sus propios centros de control.
*   **Oferta Integral:** IT VIAL no solo vende el sensor importado; fabrica la estructura, certifica la instalación y garantiza el dato. Esto es un servicio llave en mano atractivo para el sector público y privado.
