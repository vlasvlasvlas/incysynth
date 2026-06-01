# In C / Mundo Real

In C / Mundo Real es una aplicación web interactiva que interpreta la obra musical "In C" de Terry Riley (1964) utilizando datos en tiempo real provenientes de diversas APIs públicas.

El sistema orquesta 53 patrones melódicos en tiempo real, donde las decisiones musicales (avanzar al siguiente patrón, retener, mutar o silenciar) son afectadas por variables externas del mundo real y por el propio comportamiento colectivo ("la sala").

## Fuentes de datos integradas

El sistema procesa y normaliza datos de las siguientes APIs (sin necesidad de claves de autenticación):

- **Clima (Open-Meteo)**: Monitorea la temperatura y el viento de una ciudad elegida. La magnitud afecta el avance y el viento provoca mutaciones en el timbre.
- **Mercado Financiero (CoinGecko)**: Sigue el precio de Bitcoin y Ethereum. Los cambios en las últimas 24hs determinan el avance, y la volatilidad incrementa las mutaciones.
- **Noticias (RSS Públicos)**: Analiza titulares y clasifica palabras clave por categorías semánticas (conflicto, clima, economía). Su impacto altera la velocidad de avance de los instrumentos asignados.
- **Lente País (World Bank)**: Provee indicadores macroeconómicos para calibrar el comportamiento base.

## Arquitectura y Lógica Musical

- **Tone.js**: Se encarga de la secuenciación y síntesis del audio en el navegador.
- **La Sala (Estado Colectivo)**: Implementa mecánicas de convivencia:
  - **Huella**: Los patrones repetidos dejan rastro atrayendo o repeliendo a los demás instrumentos.
  - **Momentum**: El avance simultáneo de varios instrumentos arrastra al resto.
  - **Convivencia**: Distancia permitida entre instrumentos antes de que se genere tensión.

## Requisitos previos

- Node.js (versión 18 o superior)
- npm

## Instalación y ejecución local

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible localmente en `http://localhost:5173/`.

3. Construir la versión estática de producción:
   ```bash
   npm run build
   ```
   Se generarán los archivos optimizados listos para su despliegue en la carpeta `dist/`.
