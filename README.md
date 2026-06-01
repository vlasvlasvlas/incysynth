# In C / Mundo Real

Sistema web interactivo basado en la obra musical "In C" de Terry Riley. La aplicación utiliza datos del mundo real (como clima, mercado financiero y otras fuentes) para controlar e interpretar los 53 patrones melódicos de la composición en tiempo real.

## Tecnologías

- JavaScript (ES6+)
- [Tone.js](https://tonejs.github.io/) para la síntesis y secuenciación de audio.
- [Vite](https://vitejs.dev/) como entorno de desarrollo y construcción.

## Requisitos previos

- Node.js (versión 16 o superior recomendada)
- npm (Node Package Manager)

## Instalación y configuración

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible localmente (por defecto en `http://localhost:5173/`).

3. Para construir la versión de producción:
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en el directorio `dist/`.

4. Para previsualizar la versión de producción:
   ```bash
   npm run preview
   ```

## Estructura del proyecto

- `/src`: Contiene el código fuente de la aplicación.
  - `/audio`: Lógica de síntesis de sonido y reproducción (Tone.js).
  - `/data-sources`: Adaptadores para la obtención de datos en tiempo real (clima, criptomonedas, etc.).
  - `/data`: Archivos de configuración estáticos y patrones musicales.
  - `/logic`: Lógica de estado y orquestación general.
  - `/ui`: Componentes de interfaz gráfica de usuario.
