# BITÁCORA DEL PROYECTO — In C / Mundo Real

> Composición abierta donde el mundo es el intérprete y el usuario es el convocante.

**Inicio**: 30 de mayo de 2026
**Estado**: Fase conceptual — diseño de sistema

---

## PARTE 1 — Contexto: ¿Qué es "In C" de Terry Riley?

### La obra original (1964)

"In C" es una composición de Terry Riley de 1964. Es una de las obras más exitosas de un compositor estadounidense y un ejemplo seminal del minimalismo. La partitura dirige a cualquier número de músicos a repetir una serie de 53 fragmentos melódicos en una improvisación guiada.

### Datos de la obra (Wikipedia)

- **Compuesta**: Marzo 1964
- **Estrenada**: 4 de noviembre de 1964, San Francisco Tape Music Center
- **Tonalidad**: Do mayor (C major)
- **Forma**: Abierta
- **Instrumentación**: Abierta (cualquier instrumento, cualquier número de músicos)
- **Duración estimada**: 45–90 minutos (Riley). Puede ser más.
- **Grabación de 1968**: Columbia Records, 43 minutos. Añadida al National Recording Registry de la Library of Congress en 2022.

### Los 53 módulos — detalles técnicos

- Son 53 fragmentos melódicos cortos notados en clave de sol, sin indicación de tempo.
- Cada módulo tiene signos de repetición — se repite a voluntad del intérprete.
- Usa **9 clases de altura** (omite C#/Db, D#/Eb, G#/Ab del cromático).
- La duración total escrita es solo **521 corcheas**.
- El módulo más corto: 1 corchea.
- El más largo (#35): **64 corcheas**, 7 alturas diferentes, abarca octava y media. Actúa como punto de inflexión — simetría informal tipo ABA.
- Tres módulos se repiten: Nos. 10=41, 11=36, 18=28.
- **No indica tempo, instrumentación, ni dinámica.**
- Los módulos están fuertemente interrelacionados — raramente uno no tiene relación clara con el anterior.
- Viaje tonal implícito:
  - Diatónico hasta módulo 14 (aparece F#)
  - F# prevalece hasta módulo 31 (vuelve F♮)
  - Aparece Bb en módulo 35
  - Desde módulo 49 hasta el final: Bb se mantiene

### Las reglas de performance

1. **Cualquier número de músicos, cualquier instrumento.**
2. **Los 53 patrones se tocan en orden.**
3. **Cada músico decide cuántas veces repite cada patrón.**
4. **Los patrones pueden transponerse por octavas.**
5. **Se puede omitir un motivo difícil o augmentar su ritmo.**
6. **Los músicos deben permanecer dentro de 2-3 patrones entre sí** (instrucción posterior; antes era 4-5).
7. **Riley recomienda coalescencia en unísono** en algún punto.
8. **La pieza termina cuando todos llegan al patrón 53.** Se van deteniendo individualmente.

### El pulso — historia real

- **NO es parte de la partitura original.**
- Fue sugerido por **Steve Reich** para coordinar al ensemble durante los ensayos.
- Riley originalmente imaginó la pieza **sin ritmo dominante**.
- El pulso: corcheas constantes en los dos Do más agudos del piano.
- En las instrucciones de 2005, Riley lo hace **explícitamente opcional**: "The ensemble can be aided by the means of an eighth note pulse played on the high C's of a piano or mallet instrument."
- Riley dijo: **"I don't like The Pulse, as is sometimes used, 'out in front,' where it becomes very annoying. That wasn't my intention of the piece at all."**
- En la performance del 20º aniversario en Hartford, Connecticut, **no se usó pulso**.

### Sobre la escucha — citas de Riley

> "Don't be in a hurry to move from figure to figure. Stay on your part and keep repeating it, listening for how it is relating to what the rest of the ensemble is playing."

> "It is important to think of patterns periodically so that when you are resting you are conscious of the larger periodic composite accents that are sounding, and when you re-enter you are aware of what effect your entrance will have on the music's flow." (1989)

> "It is very important that performers listen very carefully to one another and this means to occasionally drop out and listen...One of the joys of playing In C is the interaction of the players in polyrhythmic combinations that spontaneously arise among patterns. Some quite fantastic shapes will arise and disintegrate as the ensemble progresses through the piece." (2005)

### La intención de Riley

> "I was never concerned with minimalism, but I was very concerned with psychedelia and the psychedelic movement of the sixties as an opening toward consciousness. [...] music was also able to transport us suddenly out of one reality into another. Transport us so that we would almost be having visions as we were playing. So that's what I was thinking about before I wrote In C. I believe music, shamanism, and magic are all connected, and when it's used that way it creates the most beautiful use of music."

### Dato salvaje

Riley concibió una versión donde **cada patrón durara una semana** y el patrón final se tocara en año nuevo.

---

## PARTE 2 — El concepto del proyecto

### Documento fundacional

```text
nacimientos -> ENTRA -> mallets
```

Los mallets entran con pequeñas apariciones agudas. No representan cada nacimiento con una nota, sino una presión de aparición.

```text
muertes -> ENTRA -> drone
```

El drone aparece como sustracción, peso o pérdida de armónicos. No como golpe dramático.

```text
guerras -> ENTRA -> percusión
```

La percusión entra con interrupciones, cortes o inestabilidad.

### Condiciones de avance

En "In C", el intérprete decide cuándo dejar de repetir y pasar al siguiente patrón.

En esta versión, el usuario decide qué dato se vuelve intérprete de ese avance.

Ejemplos:

```text
migración -> AVANZA -> voces
```

Las voces repiten el patrón actual hasta que la señal de migración o desplazamiento cambia. Cuando cambia, pueden avanzar.

```text
clima -> AVANZA -> cuerdas
```

Las cuerdas avanzan cuando cambian temperatura, viento, humedad o presión. Un día estable produce permanencia. Un día inestable produce movimiento.

```text
bolsa -> AVANZA -> percusión
```

La percusión avanza con volatilidad. Si el mercado está quieto, insiste. Si se mueve bruscamente, se acelera, pero el sistema puede convertir exceso de movimiento en timbre para evitar caos.

```text
índice país -> AVANZA -> instrumento elegido
```

Un índice país puede afectar la facilidad de avance: movilidad, conflicto, desigualdad, riesgo climático, acceso, deuda, libertad de prensa o poder de pasaporte.

### Condiciones de mutación

`MUTA` no decide si el instrumento toca, sino cómo suena.

Ejemplos:

- temperatura modifica brillo
- humedad modifica reverb
- viento modifica paneo o vibrato
- volatilidad modifica jitter rítmico
- guerras modifican cortes e interrupciones
- migración modifica espacialidad y delay
- muertes reducen capas o apagan armónicos
- nacimientos generan entradas pequeñas y registros agudos
- palabras dominantes modifican familias tímbricas
- latencia de red deforma el pulso

### Mapeos por origen

#### Noticias y palabras del día

No conviene leer titulares como texto principal. Mejor usarlos como presión semántica.

Palabras dominantes pueden elegir familias tímbricas:

- guerra, ataque, frontera: ruido rasgado, ataques cortos, interrupciones
- migración, asilo, refugio: voces filtradas, delays, desplazamiento estéreo
- economía, inflación, mercado: metales, clicks, pulsos secos
- clima, calor, lluvia, incendio: filtros, respiración, granulación
- nacimiento, infancia, población: motivos pequeños, registros agudos
- muerte, naufragio, pérdida: huecos, graves, sustracción

También se puede usar ausencia:

> Si ciertas palabras casi no aparecen, su ausencia activa voces periféricas o patrones fantasma.

#### Clima

El clima no debería sonar como imitación literal.

Posibles controles:

- temperatura: brillo, filtro, registro
- humedad: reverb, cola, densidad
- viento: modulación, paneo, vibrato
- presión: compresión, peso, estabilidad
- alerta climática: interrupción o cambio abrupto

#### Bolsa y mercados

La bolsa puede controlar nerviosismo, no melodía literal.

Posibles controles:

- volatilidad: jitter rítmico
- subas: brillo o insistencia
- bajas: caída de registro, dropout o pérdida de energía
- cambios bruscos: cortes o avances repentinos

#### Guerras y conflictos

No debería sonar "bélico" en sentido obvio. Mejor que controle:

- fricción
- imposibilidad de sincronizar
- interrupciones
- patrones trabados
- degradación
- saturación

#### Migración y desplazamiento

Puede controlar espacialidad y permiso de avance.

Posibles efectos:

- voces que entran desde el borde
- delays de llegada
- patrones retenidos
- cruces entre canales
- distancia entre instrumentos
- volumen periférico
- espera

#### Nacimientos y muertes

No usar la cuenta literal como metrónomo moral.

Nacimientos:

- aparición de voces nuevas
- pequeñas entradas
- registros agudos
- capas breves que intentan instalarse

Muertes:

- sustracción
- silencios parciales
- pérdida de capas
- apagado de armónicos
- permanencia pesada

#### Índice país

Un país puede actuar como condición de audibilidad. No se trata de hacer "país pobre igual sonido feo". La idea es mostrar condiciones desiguales de movimiento y escucha.

Índices posibles:

- desigualdad
- conflicto
- movilidad
- riesgo climático
- poder de pasaporte
- libertad de prensa
- deuda
- acceso a salud
- desplazamiento forzado

Estos índices pueden afectar:

- probabilidad de avanzar
- volumen
- filtrado
- latencia
- fragilidad
- distancia espacial
- derecho a permanecer en el centro

### Estados de cada instrumento

Cada instrumento puede tener estados claros:

- `dormido`: no tiene fuente de entrada
- `armado`: tiene una fuente conectada y espera condición
- `sonando`: entró y está repitiendo un patrón
- `retenido`: quiere avanzar, pero su regla no lo permite
- `descansando`: está en silencio sin perder su lugar
- `desbordado`: tiene demasiadas fuentes y pierde definición
- `periférico`: suena filtrado, lejos o incompleto

---

## PARTE 3 — Comité de Expertos, Primera Ronda (10 iteraciones)

### Los expertos

- 🎼 **AURORA** — Compositora de música algorítmica. Trabaja con sistemas generativos y partitura abierta.
- 🖥️ **KAITO** — Diseñador de UX/UI para instalaciones interactivas y arte sonoro.
- 📊 **DARIA** — Investigadora de datos complejos. Piensa en cómo los datos tienen narrativa y cuerpo.
- 🧠 **IBRAHIM** — Teórico de medios y arte conceptual. Piensa en las implicaciones políticas y poéticas de los sistemas.
- 🎮 **LENA** — Game designer. Diseñadora de sistemas con reglas, estados y agencia del usuario.

---

### ITERACIÓN 1 — El problema central

**AURORA:** "In C" no es una obra sobre datos. Es una obra sobre *escucha colectiva*. Los músicos se escuchan entre sí para decidir cuándo avanzar. Si reemplazamos esa escucha por un feed de datos externos, ¿qué perdemos? ¿Y qué ganamos que no teníamos?

**IBRAHIM:** Lo que perdemos es la sala. Lo que ganamos es el mundo. La pregunta no es si el sistema es fiel a Riley, sino si puede ser fiel a algo igualmente verdadero. Riley escuchaba San Francisco en 1964. ¿Qué escucha este sistema?

**DARIA:** El mundo tiene demasiada granularidad. Necesitamos saber qué nivel de abstracción es musicalizable sin volverse ruido sin sentido.

**LENA:** La solución es reducir el estado del sistema a un conjunto finito de condiciones legibles. No "el mundo entero", sino: el mundo tiene estados.

**KAITO:** Y la GUI tiene que mostrar eso: no datos en bruto, sino *estados del mundo*. No "27.3°C y humedad 68%". Sino: *el clima está en tensión*.

---

### ITERACIÓN 2 — La metáfora del músico

**AURORA:** Un músico en "In C" es un ser con memoria, cuerpo y decisión. Si aquí un músico es un instrumento + un origen de datos, el músico no *decide* — el músico *obedece*. Eso cambia todo.

**IBRAHIM:** ¿O el músico *es* ese dato? No que las voces "representen" nacimientos — sino que los nacimientos *son* una voz. El dato no controla al músico. El dato *es* el músico. Eso es otra cosa.

**LENA:** El usuario no está "configurando un sintetizador con datos". Está eligiendo qué partes del mundo van a tocar en su orquesta hoy.

**DARIA:** Entonces el usuario necesita tener una forma de *invitar* a esos músicos-mundo. Hay un gesto de convocatoria.

**KAITO:** Convocar no es igual que activar. Hay diferencia visual entre un toggle on/off y un gesto de invitación.

---

### ITERACIÓN 3 — El pulso como ancla

**AURORA:** El pulso de corcheas en Do es el único elemento fijo. Si el pulso también se corrompe con datos externos, perdemos el suelo.

**IBRAHIM:** A menos que el suelo *también* sea variable. Que el pulso sea afectado por la latencia de red, por ejemplo. No como falla técnica, sino como condición real.

**LENA:** Peligroso. El pulso es el contrato. Propongo: el pulso existe siempre, pero puede ser *degradado* por ciertas condiciones, sin desaparecer.

**AURORA:** Como un corazón con arritmia. No para, pero titubea.

**DARIA:** Cuando hay alta volatilidad financiera, cuando hay conflicto activo, el pulso tiene jitter. Pero sigue presente. No puede morir — solo enfermarse.

**KAITO:** Visualmente, el pulso tiene que ser siempre visible en la GUI. Como el horizonte en un mapa. Puede temblar, pero no puede desaparecer de pantalla.

---

### ITERACIÓN 4 — El problema del didactismo

**IBRAHIM:** Riesgo: que el sistema suene "bonito cuando todo va bien y feo cuando hay guerras". Eso sería reducir el mundo a una moraleja.

**AURORA:** Riley nunca hizo eso. "In C" no tiene significado narrativo — tiene *presencia*.

**DARIA:** Se resuelve desconectando la valencia. Un número alto de nacimientos no es "alegre". Es *presión de aparición*. Una alta volatilidad no es "mala" — es *inestabilidad rítmica*. El dato controla parámetros formales, no emociones.

**LENA:** La GUI no puede tener íconos de calaveras para muertes ni caritas felices para nacimientos. El lenguaje visual tiene que ser igual de formal que el musical.

---

### ITERACIÓN 5 — Los 53 patrones como espacio, no secuencia

**AURORA:** "In C" es más un *campo* que una secuencia. Algunos músicos están en el patrón 7, otros en el 22, otros en el 50. El espacio entre ellos es la textura.

**IBRAHIM:** La GUI debería mostrar ese campo. No "el instrumento está en el patrón 31 de 53". Sino: *dónde están todos en este momento*, y qué distancia existe entre ellos.

**LENA:** Es como un juego de estrategia en tiempo real donde puedes ver las unidades dispersas en el mapa. La dispersión es información. La concentración es información.

**DARIA:** Los datos del mundo afectan si esa dispersión se expande o se colapsa. Un mundo con mucha migración produce instrumentos más dispersos. Un mundo con alta estabilidad climática produce convergencia.

**KAITO:** Visualmente: un plano 2D donde el eje horizontal es la posición en los 53 patrones. Los instrumentos son puntos o formas que se mueven. El usuario puede leer la topografía de la interpretación en tiempo real.

---

### ITERACIÓN 6 — La agencia del usuario

**LENA:** Espectro: el usuario como *autor* (elige todo), como *curador* (elige qué fuentes entran), como *testigo* (solo escucha).

**AURORA:** Propongo que el usuario sea un *convocante*. No controla cómo suenan los datos. Pero sí decide qué fuentes entran, y ese acto de elección ya es político.

**DARIA:** Esa elección puede tener consecuencias que el usuario no anticipó. Si convocas "guerras + bolsa + muertes", suena de cierta manera. Si convocas "clima + migración + nacimientos", suena de otra. El usuario aprende a través de la escucha.

**LENA:** Agencia limitada pero significativa. Sus elecciones importan pero no lo controlan todo.

**KAITO:** El usuario arrastra fuentes hacia instrumentos. Hay un momento claro de "ensamblar la orquesta antes del concierto".

---

### ITERACIÓN 7 — El tiempo como problema real

**DARIA:** Los datos del mundo tienen ritmos completamente distintos. La bolsa cambia cada segundo. El índice de desplazamiento forzado cambia mensualmente. ¿Cómo coexisten?

**AURORA:** En música se resuelve con capas de tempo. El dato de alta frecuencia controla microparámetros, el de baja frecuencia controla macroparámetros.

**LENA:** La bolsa controla el jitter de momento a momento. El índice de movilidad controla la probabilidad de avanzar en escala de días o semanas. Cada fuente opera en su propia escala temporal y afecta un nivel diferente de la estructura musical.

**IBRAHIM:** Eso es verdad sobre el mundo: hay fenómenos de alta frecuencia que sentimos minuto a minuto, y fenómenos de muy baja frecuencia que apenas percibimos como cambio. El sistema puede hacer audible esa diferencia de escala.

**KAITO:** Tal vez hay un "zoom temporal" — puedes escuchar el sistema en tiempo real, o puedes escuchar una simulación acelerada de cómo sonaría si corrieras los datos de un año entero.

---

### ITERACIÓN 8 — El concepto de "derecho a permanecer en el centro"

**IBRAHIM:** La idea de que el origen del dato afecta su audibilidad es profundamente política. Un dato de un país con alta deuda, bajo índice de pasaporte y conflicto activo suena filtrado, periférico, con latencia.

**DARIA:** Eso es un enunciado sobre la desigualdad de la escucha en el mundo.

**AURORA:** La espacialidad como privilegio. Los instrumentos de ciertos orígenes suenan desde el centro del espacio estéreo. Otros desde los bordes.

**LENA:** Si quieres que un instrumento periférico suene desde el centro, ¿puedes hacerlo? Podría ser una tensión interesante — el usuario puede *intentar* centrar algo que el sistema periferiza.

**KAITO:** La GUI puede mostrar esa espacialidad literalmente: un campo de escucha donde las posiciones reflejan condiciones de audibilidad en el mundo.

---

### ITERACIÓN 9 — Ausencia como voz

**AURORA:** Concepto radical: la *ausencia activa*. Si ciertas palabras no aparecen en las noticias del día, esa ausencia activa patrones fantasma. ¿Cómo se diseña?

**DARIA:** La ausencia de datos es un dato. Si "paz" no aparece en los titulares del día, eso dice algo.

**IBRAHIM:** Lo que no se nombra existe en el silencio. La obra puede activar voces que representan lo que el mundo no está diciendo.

**LENA:** Cada fuente tiene un "valor cero" que no es simplemente silencio. Cuando una fuente está ausente, activa un estado especial: el "patrón fantasma".

**KAITO:** Los patrones fantasma podrían aparecer como formas traslúcidas, o con puntillado. Presencias de ausencias.

---

### ITERACIÓN 10 — La interfaz como partitura

**KAITO:** Idea radical: la GUI *es* la partitura. No es una herramienta para configurar la partitura. La disposición de los elementos en pantalla, las conexiones entre fuentes e instrumentos, el campo de posiciones — todo eso *es* la notación de la pieza.

**AURORA:** En "In C", la partitura tiene 53 fragmentos en una página. Esta partitura tiene dimensiones, estados, conexiones, temporalidades. Es una partitura viva.

**IBRAHIM:** El usuario no "usa" la interfaz — *escribe en ella*. Cada conexión que hace es un acto de composición. Podría guardarse y compartirse como una partitura: "esta es mi versión de In C con el mundo de hoy".

**DARIA:** ¿Cómo sonaba el mundo el 30 de mayo de 2026 con *esta* configuración? Se puede guardar, reproducir, comparar.

**LENA:** Alguien hace su versión, la exporta como partitura-configuración, y otra persona puede escuchar el mismo momento del mundo con sus propias decisiones de convocatoria.

---

## PARTE 4 — Comité de Expertos, Segunda Ronda (10 iteraciones profundas)

### Los expertos (refinados)

- 🎼 **AURORA** — Compositora algorítmica. Escéptica de la sonificación de datos. Defiende la música como sistema autónomo, no ilustración.
- 🖥️ **KAITO** — Diseñador UX/UI para instalaciones. Desconfía de las interfaces bonitas que no dicen nada. Pregunta siempre: *¿el usuario entiende lo que está haciendo?*
- 📊 **DARIA** — Científica de datos. Detesta los mapeos ingenuos de dato-a-sonido. Pregunta siempre: *¿qué dato real existe, con qué frecuencia, con qué granularidad?*
- 🧠 **IBRAHIM** — Teórico de medios. Pregunta siempre: *¿qué estamos diciendo sin querer?*
- 🎮 **LENA** — Diseñadora de sistemas. Pregunta siempre: *¿el sistema se sostiene cuando escala?*

---

### ITERACIÓN 1 — Los tres verbos: ¿son los primitivos correctos?

**LENA:** El documento propone tres verbos: ENTRA, AVANZA, MUTA. ¿Cubren el espacio de posibilidades o hay huecos?

**AURORA:** Falta SALE. ¿Qué pasa cuando un instrumento deja de sonar?

**DARIA:** Falta RETIENE. La retención es una fuerza, no una ausencia de fuerza.

**IBRAHIM:** Hay una asimetría filosófica. ENTRA y AVANZA son verbos de movimiento. MUTA es de transformación. Pero el documento describe fenómenos de *resistencia*, *pérdida*, *bloqueo*. Esas fuerzas no tienen verbo propio.

**LENA:** Propuesta ampliada — cinco verbos:

```
ENTRA   — una fuente activa un instrumento
AVANZA  — una fuente permite que un instrumento pase al siguiente patrón
RETIENE — una fuente impide o dificulta el avance
MUTA    — una fuente modifica cómo suena el instrumento
SALE    — una fuente causa que un instrumento abandone o se desvanezca
```

ENTRA y SALE son opuestos. AVANZA y RETIENE son opuestos. MUTA opera perpendicular a los otros cuatro. Simetría formal.

**KAITO:** Cinco verbos × N fuentes × M instrumentos = matriz enorme. ¿El usuario tiene que asignar cada combinación?

**LENA:** No. El sistema define defaults razonables. El usuario *puede* reasignar, pero no *tiene que*.

**DARIA:** Los defaults **son** decisiones políticas. Si por defecto "guerras = RETIENE", estamos diciendo que la guerra impide avanzar. ¿Es eso cierto? Los defaults no son neutros.

**IBRAHIM:** Y eso está bien. Que no sean neutros es honesto. Lo deshonesto sería pretender que son objetivos. Que se documenten, que el usuario sepa que son decisiones de diseño, no verdades.

---

### ITERACIÓN 2 — ¿Qué son los 53 patrones en este contexto?

**AURORA:** ¿Usamos los patrones de Riley tal cual? ¿Creamos nuevos? ¿Se generan algorítmicamente?

**Resolución del usuario:** Los 53 patrones son los de Riley. Son parte de la obra. Se usan tal cual.

**Notas técnicas de la partitura (Wikipedia):**
- Primer módulo: tres negras Mi ornamentadas con apoyaturas Do (contorno de tercera mayor)
- Último módulo: tercera menor Sol-Sib en semicorcheas
- Módulo 14: introduce F# (cuarta aumentada)
- Módulo 31: vuelve a F♮
- Módulo 35: último F# + aparece Bb. Es el más largo (64 corcheas). Punto de inflexión.
- Módulo 49-53: Bb se mantiene hasta el final

**LENA:** Los patrones como grados de complejidad se prestan a interpolación. No saltas del 7 al 8 como notas discretas — puedes *deslizarte* entre grados.

**AURORA:** Pero en Riley, el avance es discreto y claro. La granularidad del "momento de decisión" importa.

**LENA:** El dato que cambia bruscamente (bolsa) produce avance discreto. El dato que cambia gradualmente (clima) podría producir deslizamiento continuo.

---

### ITERACIÓN 3 — El problema de la percepción

**KAITO:** Si tengo 7 instrumentos, cada uno en un patrón diferente, cada uno mutado por 3 fuentes... ¿qué escucho?

**DARIA:** El oído humano puede distinguir entre 3 y 5 flujos de información simultáneos. Más allá = masa.

**LENA:** Tope práctico: no más de 4 o 5 instrumentos activos simultáneamente para escucha diferenciable. Los demás son textura de fondo.

**IBRAHIM:** ¿Quién decide cuáles son los 4 que se escuchan?

**KAITO:** Mesa de mezcla implícita. El usuario puede hacer *focus* — acercarlo, ampliarlo, escucharlo solo. Los demás siguen sonando pero pasan a segundo plano.

**AURORA:** Cuando haces *focus* en uno, los demás se filtran. El acto de atención tiene un costo: para escuchar a uno, dejas de escuchar a otros.

**IBRAHIM:** Metáfora perfecta de la atención mediática. El sistema puede hacer audible esa economía de la atención.

**DARIA:** Si el usuario controla el focus, siempre elegirá lo que suena "mejor". Eso reproduce el sesgo mediático. ¿Debería haber momentos en que el sistema *force* el focus?

**LENA:** Sí. El sistema puede tener eventos que reclaman atención — una alerta climática real, un pico de conflicto — que interrumpen el focus del usuario. No como castigo, sino como condición del mundo.

---

### ITERACIÓN 4 — La realidad de los datos

**DARIA:** Inventario de datos reales:

| Fuente | ¿Tiempo real? | Latencia real | Granularidad |
|---|---|---|---|
| Clima | Sí (OpenWeather, etc.) | Minutos | Por ciudad, cada 10min |
| Bolsa | Sí (Yahoo Finance, etc.) | Segundos-minutos | Por ticker |
| Guerras | **No** | Días-semanas | ACLED semanal |
| Nacimientos | **No** | Meses | Por país |
| Muertes | **No** | Meses | Por país |
| Migración | **No** | Semanas-meses | Por corredor |
| Noticias/palabras | Sí (RSS, APIs) | Minutos | Por titular |
| Índice país | **No** | Anual | Por país |

De 8 fuentes principales, **solo 3 tienen datos en tiempo real**. Las otras 5 son datos lentos.

**AURORA:** Los datos lentos *no pueden* controlar microparámetros porque literalmente no cambian a esa velocidad. No es elección estética — es restricción material.

**LENA:** Capa de interpolación: si el último dato de nacimientos es de hace 3 meses, el sistema lo mantiene como fuerza constante.

**IBRAHIM:** Los fenómenos lentos del mundo *son* así. La desigualdad no cambia cada segundo. Que el sistema la trate como constante es honesto.

**KAITO:** Los datos lentos no deberían tener indicadores de "actualización en tiempo real". Deberían mostrarse como **condiciones de fondo** — el color del cielo en la interfaz.

**DARIA:** Algunos datos pueden derivarse de los de tiempo real. No tengo "guerras en tiempo real", pero puedo analizar titulares y extraer frecuencia de palabras asociadas a conflicto. No es lo mismo que un registro verificado, pero es señal en tiempo real derivada.

**AURORA:** Mejor que los datos originales. No es "la guerra" cuantificada — es *la presencia discursiva de la guerra*. Eso sí cambia minuto a minuto.

---

### ITERACIÓN 5 — El anti-didactismo como problema de diseño

**IBRAHIM:** Si muerte reduce armónicos y nacimiento agrega registros agudos, el sistema tiene una ecuación implícita:

```
muerte = sustracción = menos = oscuro
nacimiento = adición = más = brillante
```

Eso **es** didactismo sofisticado. Sigue siendo una moraleja.

**AURORA:** No se resuelve "eligiendo mejor los mapeos". Se resuelve haciendo que los mapeos no sean fijos. Si muerte a veces sustrae, a veces densifica, a veces silencia, a veces genera un armónico inesperado... entonces el sistema no dice una cosa sobre la muerte.

**DARIA:** Mapeos que sean *distribuciones de probabilidad*, no funciones determinísticas. Muerte: 60% sustraer, 20% densificar en graves, 15% silencio largo, 5% motivo nuevo.

**LENA:** Si los mapeos no son determinísticos, el usuario no puede predecir qué produce qué. ¿Problema?

**KAITO:** Si es un instrumento, el usuario necesita predictibilidad. Si es una obra contemplativa, la impredecibilidad es virtud.

**IBRAHIM:** Es lo segundo. El usuario no toca, no controla, no juega. Convoca: decide qué voces del mundo entran, y luego escucha lo que esas voces producen juntas.

**AURORA:** Los mapeos estocásticos son correctos, pero las distribuciones deben ser cuidadosamente calibradas, no arbitrarias.

---

### ITERACIÓN 6 — El problema del enrutamiento

**LENA:** Una fuente puede producir múltiples efectos. Migración puede ENTRA voces, AVANZA voces, y MUTA la espacialidad. ¿Cómo?

**DARIA:** La señal cruda tiene múltiples dimensiones: magnitud, dirección, velocidad de cambio, tendencia, volatilidad. Cada dimensión puede enrutar a un verbo diferente.

```
migración.magnitud     → ENTRA voces (si supera umbral)
migración.cambio       → AVANZA voces (si hay cambio significativo)
migración.dirección    → MUTA espacialidad (desplazamiento estéreo)
migración.volatilidad  → MUTA delay/fragmentación
```

**LENA:** No es "migración → voces". Es "las dimensiones de migración se distribuyen entre los verbos del instrumento".

**IBRAHIM:** El usuario ve la conexión simple. Las dimensiones internas son el diseño compositivo del sistema. El usuario convoca; el sistema interpreta. Igual que un director no le dice al violinista qué dedo usar.

**KAITO:** Dos capas: la capa de **convocatoria** (simple, poética) y la capa de **ingeniería** (oculta por defecto, accesible).

---

### ITERACIÓN 7 — El tiempo como material, no como eje

**AURORA:** ¿A qué velocidad suena la obra? Si corre en tiempo real, un día entero podría sonar casi idéntico. El clima no cambia mucho entre las 3pm y las 5pm.

**LENA:** Filosóficamente correcto pero letalmente malo para la experiencia del usuario. Si durante 10 minutos no pasa nada, cierra la app.

**KAITO:** Modos:
- **Modo real**: 1:1 con el mundo. Lento, contemplativo, horas. Versión "instalación".
- **Modo concentrado**: se acumula un periodo y se interpreta en 10-15 minutos. Versión "recital".

**DARIA:** El modo concentrado es técnicamente viable: datos históricos reproducidos acelerados.

**AURORA:** Son dos experiencias legítimas. La instalación y el recital. Una es el río. La otra es la fotografía del río.

**IBRAHIM:** Pero no son equivalentes. El modo concentrado es una *edición*. Comprimir 24 horas en 10 minutos implica decisiones editoriales.

**LENA:** Configurable: "dame las últimas 24 horas en 8 minutos, priorizando cambios climáticos". Otra capa de agencia.

---

### ITERACIÓN 8 — La máquina de estados del instrumento

**LENA:** Formalización de transiciones:

```
DORMIDO ──(fuente conectada)──▶ ARMADO
ARMADO ──(condición ENTRA)──▶ SONANDO
SONANDO ──(AVANZA exitoso)──▶ SONANDO (siguiente patrón)
SONANDO ──(RETIENE)──▶ SONANDO (repite)
SONANDO ──(silencio temporal)──▶ DESCANSANDO
DESCANSANDO ──(se activa de nuevo)──▶ SONANDO
SONANDO ──(muchas fuentes simultáneas)──▶ DESBORDADO
SONANDO ──(SALE activa o índice país bajo)──▶ PERIFÉRICO
PERIFÉRICO ──(índice mejora)──▶ SONANDO
PERIFÉRICO ──(fuente se desconecta)──▶ DORMIDO
SONANDO ──(patrón 53 completado)──▶ DORMIDO
```

**AURORA:** DESBORDADO: el sonido se vuelve saturado, los contornos se pierden. No suena mal — suena *confuso*.

**IBRAHIM:** Metáfora de la sobrecarga informativa. Un país con guerra + migración + crisis climática + colapso económico simultáneo suena *irreconocible*.

**DARIA:** Desbordado se activa cuando un instrumento tiene más de N fuentes conectadas (¿3? ¿4?). Los parámetros de MUTA compiten entre sí.

**KAITO:** Visualmente, un instrumento desbordado: temblor, parpadeo, bordes difusos.

---

### ITERACIÓN 9 — La GUI: ¿instrumento, partitura o mapa?

**KAITO:** Tres modelos:

- **Modelo A — Instrumento**: perillas, faders, cables. Como sintetizador modular.
- **Modelo B — Partitura**: disposición de los 53 patrones, posiciones, conexiones. Notación contemporánea.
- **Modelo C — Mapa**: territorio, instrumentos moviéndose, condiciones del terreno. Ecosistema.

**LENA:** No son excluyentes. Dos fases:

- **Fase 1 — Ensamblaje** (antes de sonar): el usuario compone la partitura. Interfaz = instrumento-partitura.
- **Fase 2 — Ejecución** (mientras suena): la pieza corre. Interfaz = mapa-partitura.

**AURORA:** ¿Y si las fases no están separadas? ¿Si puedes reconectar fuentes mientras suena?

**IBRAHIM:** Si todo es editable en todo momento, no hay compromiso. Parte de la fuerza es que *elegiste* escuchar esto, y ahora tienes que vivir con las consecuencias.

**KAITO:** Compromiso: puedes reconectar durante la ejecución, pero cada reconexión tiene un *costo temporal*. El instrumento vuelve a ARMADO. No puedes cambiar instantáneamente.

**DARIA:** Como cambiar de instrumento en medio de un concierto. Puedes hacerlo, pero hay un silencio mientras preparas el nuevo.

---

### ITERACIÓN 10 — ¿Qué es esto, finalmente?

**IBRAHIM:** ¿Es sonificación de datos? ¿Obra generativa? ¿Instalación? ¿Instrumento? ¿Juego? ¿Plataforma de composición?

**AURORA:** No es sonificación. No busca que *entiendas* los datos — busca que *coexistas* con ellos.

**DARIA:** No es un instrumento porque el usuario no controla el resultado sonoro con suficiente granularidad.

**LENA:** No es un juego porque no hay objetivo, no hay ganar ni perder.

**KAITO:** No es solo instalación porque el usuario tiene agencia real.

**IBRAHIM:** Definición: **una composición abierta donde el mundo es el intérprete y el usuario es el convocante**. El usuario no toca, no controla, no juega. Convoca.

**AURORA:** La interfaz no debe sentirse como un *panel de control*. Debe sentirse como una *mesa de invocación*.

**LENA:** El sistema no es un motor de audio — es un *ecosistema*. Los instrumentos responden a un entorno.

**DARIA:** Lo que produce no es música en el sentido de una pieza que suena bien. Es un *espacio acústico* que refleja condiciones reales del mundo. A veces es bello. A veces es opresivo. A veces es monótono. Igual que el mundo.

---

## PARTE 5 — Conclusiones del comité (ambas rondas)

### 1. Definición

> **Es una composición abierta donde el mundo es el intérprete y el usuario es el convocante.**

No es sonificación. No es instrumento. No es juego. Es un ecosistema acústico alimentado por el mundo real, donde el usuario decide qué escuchar pero no cómo suena.

### 2. Cinco verbos, no tres

| Verbo | Efecto | Ejemplo |
|---|---|---|
| **ENTRA** | Una fuente activa un instrumento | Nacimientos → mallets comienzan |
| **AVANZA** | Una fuente permite pasar al siguiente patrón | Clima cambia → cuerdas avanzan |
| **RETIENE** | Una fuente impide o dificulta el avance | Conflicto → patrones trabados |
| **MUTA** | Una fuente modifica cómo suena | Temperatura → brillo del filtro |
| **SALE** | Una fuente causa desvanecimiento | Muertes → capas desaparecen |

### 3. Los 53 patrones son los de Riley

Se usan tal cual. Son parte de la obra. Se codifican como secuencias de notas con duración. Cada instrumento los interpreta en su propio timbre y registro.

### 4. Las fuentes tienen anatomía

Cada fuente de datos no es un número — es un objeto con dimensiones (magnitud, cambio, tendencia, volatilidad, dirección). Cada dimensión puede enrutar a un verbo diferente. El usuario ve la conexión simple; el sistema interpreta las dimensiones internamente.

### 5. Mapeos estocásticos, no determinísticos

Los mapeos son distribuciones de probabilidad, no funciones fijas. Evita didactismo sin perder coherencia.

### 6. Dos modos temporales

- **Modo real** (instalación): 1:1 con el mundo. Lento, horas.
- **Modo concentrado** (recital): se comprime un periodo en minutos.

### 7. Dos capas de interfaz

- **Capa de convocatoria**: simple, poética, gestual.
- **Capa de ingeniería**: oculta por defecto. Mapeos internos, probabilidades, enrutamiento.

### 8. Economía de la atención como mecánica

Focus en un instrumento atenúa los demás. El sistema puede forzar el focus en momentos de crisis. La atención es recurso finito.

### 9. Siete estados del instrumento con transiciones definidas

`DORMIDO → ARMADO → SONANDO → (RETENIDO / DESCANSANDO / DESBORDADO / PERIFÉRICO) → DORMIDO`

### 10. Lo que cambia la investigación de Wikipedia

| Asunción previa | Riley dice | Consecuencia |
|---|---|---|
| Pulso obligatorio | **Opcional**, no lo quiere "al frente" | Puede existir suave, degradarse, o no existir |
| Músicos siguen el pulso | **Se escuchan entre sí** | Instrumentos virtuales deben "escucharse" |
| Tempo fijo | **No hay tempo indicado** | Tempo como parámetro que datos afectan |
| Distancia fija (2-3) | Sugerencia, obra es abierta | Distancia como parámetro variable |
| Instrumento fijo | Cualquier instrumento | Timbres elegidos son válidos |

---

## PARTE 6 — "La Sala": cómo se escuchan entre sí

### El problema

Si cada instrumento solo obedece a su API, no hay sala. Hay 5 radios tocando al mismo tiempo sin saber que las otras existen. Eso **no es In C**.

En Riley, los músicos escuchan **la sala** — la densidad, los huecos, el momentum, quién avanzó, quién se quedó — y deciden basándose en eso.

### La solución: "La Sala" como capa intermedia

```
                    ┌─────────────────────────┐
                    │                         │
                    │       LA SALA           │
                    │                         │
                    │  densidad por patrón    │
                    │  momentum colectivo     │
                    │  mapa de huecos         │
                    │  energía total          │
                    │  distancia entre todos  │
                    │                         │
                    └────────┬────────────────┘
                             │
              ┌──────────────┼──────────────────┐
              │              │                  │
              ▼              ▼                  ▼
         instrumento 1  instrumento 2      instrumento N
              │              │                  │
              ▼              ▼                  ▼
           API clima     API noticias      API bolsa
```

Cada instrumento tiene **dos oídos**:

- **Oído externo**: su API (el mundo)
- **Oído interno**: la Sala (qué están haciendo los otros)

La decisión de avanzar, quedarse, o descansar es función de ambos.

### Qué mide La Sala en cada momento

| Propiedad | Qué significa | Cómo se calcula |
|---|---|---|
| **Densidad local** | Cuántos instrumentos están en el mismo patrón o cerca | Contar instrumentos en patrón ±2 |
| **Huecos** | Zonas donde no hay nadie | Patrones sin instrumento entre el más atrasado y el más adelantado |
| **Momentum** | ¿El grupo se está moviendo o está quieto? | Promedio de avances recientes en los últimos N ciclos |
| **Centro de masa** | ¿Dónde está "el grupo" en promedio? | Promedio ponderado de posiciones |
| **Distancia máxima** | ¿Cuán dispersos están? | Diferencia entre el más adelantado y el más atrasado |
| **Energía total** | ¿Cuánta actividad hay? | Suma de amplitudes, cambios, movimiento |

### La decisión de cada instrumento en cada ciclo

```
¿AVANZO?

  mi_api_dice         = señal de mi fuente de datos (0 a 1)
                        (ej: la temperatura cambió → 0.7)

  la_sala_dice:
    densidad_aquí     = mucha gente en mi patrón → presión para irme (+)
    hueco_adelante    = nadie adelante → atracción (+)
    estoy_muy_lejos   = estoy 4+ patrones adelante del grupo → freno (−)
    estoy_atrás       = estoy detrás del centro → empuje (+)
    momentum          = otros acaban de avanzar → corriente (+)
    silencio_aquí     = soy el único aquí → necesidad de quedarme (−)

  PROBABILIDAD = f(mi_api_dice, la_sala_dice)

  si probabilidad > umbral → AVANZO al patrón siguiente
  si no                    → REPITO el patrón actual
```

### Gradientes de permiso (los "semáforos orgánicos")

```
🟢 VERDE PLENO
   Mi API empuja + la sala tiene hueco + el grupo se mueve
   → Avanzo con confianza

🟢 VERDE TENUE
   Mi API empuja + la sala está neutra
   → Avanzo pero suave, bajo volumen

🟡 AMARILLO
   Mi API empuja PERO estoy muy adelantado del grupo
   → Me quedo, pero aumento tensión (timbre cambia, vibrato sube)
   → La RETENCIÓN se vuelve audible

🟠 NARANJA
   Mi API está quieta + el grupo se mueve
   → Presión de arrastre: el grupo me tira pero mi dato no me deja
   → Sonido "trabado", repetitivo, insistente

🔴 ROJO
   Mi API está quieta + la sala está quieta
   → Todos repitiendo, nadie avanza
   → Zona de insistencia colectiva
```

### Modelos teóricos que informan el diseño

#### 1. Boids (Craig Reynolds, 1986) — bandadas

```
SEPARACIÓN  →  No te amontones en el mismo patrón que los demás
ALINEACIÓN  →  Movete en la dirección que se mueven los cercanos
COHESIÓN    →  No te alejes demasiado del centro del grupo
```

Esto es **exactamente** lo que Riley pide: mantené 2-3 patrones de distancia, escuchá a los demás, no te apures.

#### 2. Stigmergy (hormigas) — coordinación indirecta

Cada instrumento al tocar un patrón deja una marca. Las marcas se acumulan y decaen con el tiempo.

```
patrón 12:  ████████  (muy tocado → "gastado")
patrón 13:  ██        (poco tocado → "fresco")
patrón 14:  ░         (casi virgen → "atractivo")
```

Los instrumentos se sienten atraídos por patrones frescos y repelidos por patrones gastados.

#### 3. Campos de potencial — física de partículas

Cada instrumento es una partícula en un campo 1D. Fuerzas que actúan:

```
F_api      →  empuje de la fuente de datos (hacia adelante)
F_cohesión →  atracción hacia el centro de masa del grupo
F_repulsión → repulsión de instrumentos demasiado cercanos
F_inercia  →  resistencia al cambio (tendencia a repetir)
F_momentum →  arrastre del movimiento colectivo reciente
```

### Propuesta: combinar los tres modelos

```
CAPA 1: STIGMERGY (el terreno)
  Cada patrón tiene un nivel de "desgaste"
  Los instrumentos dejan huella al tocar
  Las huellas decaen con el tiempo

CAPA 2: BOIDS (la bandada)
  Separación: no amontonarse
  Alineación: moverse con los cercanos
  Cohesión: no alejarse del grupo

CAPA 3: CAMPO DE FUERZA (la física)
  Cada API inyecta energía en su instrumento
  La energía acumulada empuja hacia adelante
  El grupo ejerce gravedad hacia el centro

RESULTADO: probabilidad de avance por instrumento
  que emerge de las tres capas + la señal de la API
```

### Ejemplo de avance colectivo espontáneo

```
Ciclo 100: todos quietos, repitiendo.
Ciclo 101: la bolsa salta → percusión acumula energía
Ciclo 102: percusión avanza → momentum sube de 0 a 0.3
Ciclo 103: momentum arrastra a las cuerdas, que ya tenían
           energía del clima → cuerdas avanzan
Ciclo 104: 2 de 4 avanzaron → momentum sube a 0.6
Ciclo 105: las voces sienten el arrastre → avanzan también
Ciclo 106: los mallets estaban solos atrás → cohesión
           los empuja → avanzan para no quedarse aislados
Ciclo 107: AVANCE GRUPAL COMPLETO → nueva zona de patrones
           → todos empiezan a repetir → calma
```

Eso es exactamente lo que pasa en una interpretación real de In C. Y emergió del sistema, no fue programado como evento.

### Visualización de La Sala en la GUI

```
Patrones:  1····10····20····30····40····50··53

Terreno:   ░░░░▓▓▓▓██████▓▓▓▓░░░░░░░░░░░░░░░
           desgastado → fresco

Instrumentos:        ●  ● ●    ●
                     ↑  ↑ ↑    ↑
                  cuerdas voces  perc   mallets

Momentum:  ──────────►  (el grupo se mueve →)

Fuerzas:   ←cohesión──●──api→  (tensión visible por instrumento)
```

---

## PARTE 7 — Stack técnico propuesto (demo)

```
Síntesis        →  Tone.js (sobre Web Audio API)
Datos clima     →  OpenWeather API (gratis, cada 10 min)
Datos noticias  →  RSS feeds o NewsAPI (cada minuto)
Datos bolsa     →  Yahoo Finance / API gratuita
Interfaz        →  HTML + CSS + JS vanilla
Patrones        →  JSON con los 53 fragmentos codificados
                   como arrays de { nota, duración, velocidad }
```

### Orden de construcción propuesto

```
Paso 1  → El pulso. Do agudo en corcheas. Suena siempre.
Paso 2  → Los 53 patrones como datos JSON.
Paso 3  → Un instrumento que recorre patrones con timer fijo.
Paso 4  → Conectar datos reales (clima primero).
Paso 5  → El dato controla el avance.
Paso 6  → Agregar MUTA: el dato modifica el filtro.
Paso 7  → Segundo instrumento con segunda fuente.
Paso 8  → Tercer instrumento con tercera fuente.
Paso 9  → GUI con el campo de patrones y posiciones.
Paso 10 → Pulido: estados, animaciones, espacialidad.
```

---

## PARTE 8 — Preguntas abiertas

1. **Motor de síntesis**: ¿Tone.js alcanza para este nivel de complejidad? ¿SuperCollider vía WebSocket? ¿Motores nativos con interfaz web?
2. **Datos iniciales**: Arrancar solo con clima + noticias + bolsa (los tres en tiempo real) y agregar datos lentos como condiciones de fondo.
3. **Partitura exportable**: ¿Se puede guardar y compartir una "partitura-configuración"? Archivo que capture: fuentes elegidas, instrumentos activos, conexiones, momento temporal, datos del mundo en ese instante.
4. **Nombre del proyecto**: Pendiente. Candidatos discutidos: "World in C", "In C / Real Time", "The World at Pattern [n]".
5. **La Sala como sistema**: ¿Qué pesos tienen las tres capas (stigmergy, boids, campo de fuerza)? ¿Son configurables? ¿Son fijos?
6. **Calibración musical**: Los 53 patrones de Riley necesitan codificarse nota por nota, con duraciones precisas. ¿Fuente de la partitura?

---

---

## PARTE 9 — Los colores de La Sala

### Principio

Cada fuente de datos no solo tiene un sonido — tiene un **color**. No arbitrario. Un color que viene de la naturaleza del dato. Los instrumentos emiten color cuando suenan. Los colores se depositan en La Sala, se expanden, se mezclan, se desvanecen. El usuario no ve "datos" — ve un paisaje cromático vivo que respira.

### Identidad cromática de cada fuente

| Fuente | Color | Lógica |
|---|---|---|
| Clima | Azules, blancos, grises | Cielo, agua, presión. Frío = azul profundo, calor = blanco incandescente |
| Noticias | Amarillos, naranjas | Alerta, atención, urgencia. Suave = ámbar tenue, violento = naranja saturado |
| Bolsa | Verdes, rojos | Convención existente, pero no moral: verde = movimiento, rojo = fricción |
| Nacimientos | Blancos luminosos, pasteles | Aparición, primera luz |
| Muertes | Violetas oscuros, negros translúcidos | No negro total — negro que deja ver algo detrás |
| Guerras | Rojos oxidados, marrones | No rojo sangre — rojo tierra, herrumbre |
| Migración | Azules desfasados, turquesas fantasma | Desplazamiento, agua, tránsito |
| Índice país | **No tiene color propio** | Modifica la OPACIDAD y NITIDEZ de los colores de los demás |

### Las tres capas como tres comportamientos del color

#### CAPA 1: STIGMERGY — El color como huella

El color que un instrumento deposita **no desaparece cuando avanza**. Queda como rastro. Como pintura húmeda que se va secando.

```
Momento 1: cuerdas en patrón 8
  ░░░░░░░████░░░░░░░░░░░░░░░░
         AZUL VIVO

Momento 2: cuerdas avanzan al patrón 12
  ░░░░░░░▓▓▓▓░░░████░░░░░░░░░
         azul     AZUL VIVO
         pálido   (posición actual)
         (huella)

Momento 3: cuerdas avanzan al patrón 16
  ░░░░░░░░▒▒░░░▓▓▓▓░░████░░░░
         azul   azul   AZUL
         casi   pálido VIVO
         ido    (huella)(actual)
```

El terreno guarda memoria. Los patrones ya tocados tienen color residual. Los patrones nunca tocados están limpios. El usuario puede ver el recorrido como un rastro que se evapora.

Cuando muchos instrumentos pasan por la misma zona, los colores se acumulan y mezclan — esa zona tiene **historia visible**. Las zonas limpias adelante son territorio virgen.

#### CAPA 2: BOIDS — El color como bandada

Los colores **se influyen mutuamente** según las tres reglas:

**SEPARACIÓN**: instrumentos muy cerca → sus colores vibran, generan moiré, se interfieren. Es presión visual para separarse.

**ALINEACIÓN**: instrumentos moviéndose juntos → sus colores crean un gradiente coherente, una banda de color que fluye.

**COHESIÓN**: instrumento lejos del grupo → su color se desatura, se vuelve gris. Solo recupera saturación al acercarse al grupo.

#### CAPA 3: CAMPO DE FUERZA — El color como energía

Cada API inyecta **intensidad luminosa**:

- Dato fuerte = color brillante, denso, expandido (el color se derrama a patrones vecinos)
- Dato quieto = color tenue, contraído, casi transparente (apenas un punto)

Las fuerzas entre instrumentos son visibles como **gradientes de tensión** — líneas de fuerza entre el grupo y los instrumentos aislados.

### Mezcla como emergencia

Nadie diseña los colores de La Sala. Emergen de la interacción:

```
STIGMERGY dice:    esta zona tiene mucho residuo azul + verde
                   → el fondo es cyan turbio

BOIDS dice:        los instrumentos están separados
                   → los colores no vibran, están en calma

CAMPO dice:        la bolsa acaba de saltar
                   → el verde se intensifica y se expande

RESULTADO:         zona cyan turbia con una explosión
                   de verde brillante que se come al azul
                   por un momento, y luego se calma
```

### Índice país como modificador de visibilidad

El índice país modifica la **capacidad de los colores de existir**:

- Índice alto (bienestar, movilidad): colores nítidos, saturados, centrados.
- Índice bajo (conflicto, desigualdad, deuda): colores translúcidos, borrosos, desplazados a los bordes. No desaparecen — se vuelven difíciles de ver.

Eso es "derecho a permanecer en el centro" expresado como color.

---

## PARTE 10 — Índice país como constructor de lentes

### Principio

El índice país no es un valor fijo. Es un **constructor**: el usuario elige INDICADOR × PAÍS y crea una lente específica. Cada lente modifica un instrumento de manera distinta. El usuario puede tener múltiples lentes activas simultáneamente.

### Familias de indicadores

Agrupados por concepto (no por código técnico):

- **Vida**: pobreza, expectativa de vida, mortalidad infantil, salud, natalidad
- **Economía**: GINI, deuda externa, PIB, inflación, desempleo
- **Conflicto**: refugiados, homicidios, gasto militar, desplazados
- **Acceso**: agua potable, electricidad, internet, educación
- **Ambiente**: CO2 per cápita, deforestación, riesgo climático, renovables
- **Libertad**: prensa, pasaporte, corrupción, democracia

### Fuente de datos: World Bank API

Gratuita, sin API key, cientos de indicadores, casi todos los países.

```
URL: https://api.worldbank.org/v2/country/{PAÍS}/indicator/{INDICADOR}?format=json
```

Indicadores clave con códigos:

| Indicador | Código |
|---|---|
| Pobreza extrema | `SI.POV.DDAY` |
| GINI | `SI.POV.GINI` |
| Expectativa de vida | `SP.DYN.LE00.IN` |
| Mortalidad infantil | `SP.DYN.IMRT.IN` |
| Refugiados (origen) | `SM.POP.REFG.OR` |
| Homicidios | `VC.IHR.PSRC.P5` |
| Gasto militar (% PIB) | `MS.MIL.XPND.GD.ZS` |
| Gasto salud per cápita | `SH.XPD.CHEX.PC.CD` |
| Alfabetización | `SE.ADT.LITR.ZS` |
| Acceso agua potable | `SH.H2O.SMDW.ZS` |
| CO2 per cápita | `EN.ATM.CO2E.PC` |
| Energía renovable % | `EG.FEC.RNEW.ZS` |
| Crecimiento PIB | `NY.GDP.MKTP.KD.ZG` |
| Deuda externa % PIB | `DT.DOD.DECT.GN.ZS` |
| Desempleo | `SL.UEM.TOTL.ZS` |
| Usuarios internet % | `IT.NET.USER.ZS` |

### Temporalidad

Datos anuales, con lag de 1-2 años. Son las **constantes gravitatorias** del sistema — no cambian minuto a minuto. Son la condición estructural del mundo: lenta, pesada, persistente.

### Cómo la lente modifica el instrumento

Cada lente no suena — modifica cómo suena otro. Es un filtro, una condición, un peso gravitatorio.

- **Valor favorable** (ej: pobreza baja): instrumento nítido, centrado, avance fluido
- **Valor desfavorable** (ej: pobreza alta): instrumento filtrado, periférico, con latencia de avance

### Idea radical: comparar dos países

Dos lentes del mismo indicador, distintos países, sobre el mismo instrumento:

```
Cuerdas con:
  Pobreza × Argentina  (25%)
  Pobreza × Noruega    (0.5%)
```

No se promedian. Se manifiestan alternadamente. El instrumento oscila entre dos modos de existencia. La velocidad de oscilación depende de la DIFERENCIA entre valores. Mayor diferencia = más fricción.

Hace audible la desigualdad no como número, sino como oscilación, inestabilidad, imposibilidad de estar cómodo en ninguno de los dos estados.

### Ejemplo de configuración del usuario

```
MIS LENTES ACTIVAS:

  ① Pobreza × Argentina      → modifica cuerdas
  ② GINI × Brasil            → modifica percusión
  ③ Refugiados × Siria       → modifica voces
  ④ CO2 × Estados Unidos     → modifica drone
```

---

## PARTE 11 — Orígenes de datos (APIs reales)

Para alimentar el sistema de lentes y los verbos, utilizaremos el ecosistema de APIs de datos abiertos globales.

### 1. World Bank Open Data API
- **Acceso:** 100% libre, sin autenticación estricta, sin límites severos. Devuelve JSON.
- **Qué tiene:** Pobreza, desigualdad (GINI), expectativa de vida, emisiones de CO2, gasto militar, desempleo, etc. (miles de indicadores anuales).
- **Rol en el sistema:** Las lentes "pesadas". Constituyen la gravedad y el "suelo" de La Sala.

### 2. WHO Global Health Observatory (GHO) API
- **Acceso:** Libre, formato JSON/OData.
- **Qué tiene:** Estadísticas hiperdetalladas de salud, mortalidad, enfermedades crónicas, acceso a saneamiento y agua potable.
- **Rol en el sistema:** Alimentan las lentes de vida y mortalidad con extrema precisión médica y social.

### 3. ACLED (Armed Conflict Location & Event Data Project)
- **Acceso:** Gratis para uso no comercial (arte/investigación), requiere registro simple para obtener una API key.
- **Qué tiene:** Base de datos en tiempo casi real (lag de días/semanas) sobre eventos violentos, conflictos, guerras y protestas.
- **Rol en el sistema:** Lente de velocidad "media" para Guerras y Conflictos. En lugar de un índice anual estático, permite reaccionar a la fricción geopolítica reciente.

### 4. UNdata y UNDP APIs (Naciones Unidas)
- **Acceso:** Abierto (suele usar el estándar SDMX, aunque algunos endpoints soportan JSON).
- **Qué tiene:** Progreso de Objetivos de Desarrollo Sostenible (ODS), datos de ACNUR (refugiados), Índice de Desarrollo Humano (IDH).
- **Rol en el sistema:** Las condiciones absolutas de migración, desplazamiento humano y desarrollo a nivel macro.

### 5. Alternativa Técnica: Statistics of the World (Agregador)
- **Acceso:** Libre (API REST JSON amigable para desarrolladores).
- **Qué tiene:** Agrupa y unifica en un solo lugar los datos del FMI, Banco Mundial, OMS y ONU.
- **Rol en el sistema:** Un excelente atajo técnico para la demo inicial. Permite consultar múltiples instituciones sin lidiar con los formatos diferentes (como SDMX vs JSON) de cada API.

### Frecuencias temporales combinadas
El sistema final mezclará tres ritmos vitales de datos:
1. **Lentes rápidas (Minutos/Horas):** Clima (OpenWeather), Bolsa (Yahoo), Noticias. Generan el "jitter" o nerviosismo inmediato.
2. **Lentes medias (Días/Semanas):** Conflictos (ACLED). Generan trabas, retenciones y fricciones estructurales recientes.
3. **Lentes pesadas (Anuales):** Banco Mundial, OMS. Son las constantes gravitatorias que definen si un instrumento es nítido, central, o si está desplazado y filtrado.

---

*Última actualización: 30 de mayo de 2026, 17:18 -03:00*

---

## PARTE 12 — Comité de análisis del plan de implementación

*Sesión: 30 de mayo de 2026*

### Los tres expertos

- 🎼 **AURORA** — Compositora algorítmica. Escéptica de la sonificación naíf.
- 🎮 **LENA** — Diseñadora de sistemas. Pregunta: ¿las abstracciones elegidas permiten crecer?
- 📊 **DARIA** — Científica de datos. Pregunta: ¿qué dato real existe, con qué granularidad?

### Hallazgos del comité (5 iteraciones)

**Iteración 1 — Scope:** El plan de Gemini implementa AVANZA/REPITE pero el BITACORA ya resolvió 5 verbos. Las abstracciones de `Instrumento.js` binarias no son extensibles sin reescritura.

**Iteración 2 — Fuentes:** `indice_pais` en la demo es decorativo si la GUI no muestra su efecto. Recomendación: 3 fuentes con variación temporal visible para v1.

**Iteración 3 — La Sala subdefinida:** `LaSala.js` implementaba 2 de 6 propiedades. La stigmergy se computaba pero no afectaba ninguna decisión — completamente desconectada.

**Iteración 4 — Los mocks mienten:** El mock de Gemini aplicaba el mismo ruido blanco a todas las fuentes ignorando el `tipo` declarado en `config.json`. `clima` y `bolsa` eran estadísticamente idénticos.

**Iteración 5 — Cuatro ausencias críticas:**
1. El pulso como oscilador fijo, no degradable.
2. `Instrumento.js` sin máquina de estados formal.
3. Interfaz mock/API no unificada (cambiar a APIs reales = reescritura).
4. Tablero sin gesto de convocatoria — demo de Tone.js, no del concepto.

### Evaluación de GPT-5.5 (mismo día)

Diagnóstico correcto en recomendaciones (DataSourceAdapter, mapeos estocásticos, máquina de estados), pero su lectura del repo reportó "2 archivos" cuando había 9. Las specs convergieron con las del comité.

---

## PARTE 13 — Specs técnicas resueltas antes de codificar

### SPEC 1 — Anatomía de la señal (DataSourceAdapter)

Todo dato que entra al sistema tiene esta forma. Mocks y APIs reales implementan la misma interfaz.

```js
{
  magnitud:    number,  // 0-1, intensidad actual normalizada
  cambio:      number,  // -1 a +1, variación este tick
  tendencia:   number,  // -1 a +1, dirección media últimos N ticks
  volatilidad: number,  // 0-1, varianza / impredecibilidad
  tick():      void,
  getVerb(verbo, mapeo): number  // presión 0-1 sobre ese verbo
}
```

### SPEC 2 — Mocks con carácter estadístico

| Mock | Modelo | Carácter |
|---|---|---|
| `ClimaMock` | Caminata lenta, media-reversa a 0.5 (σ=0.03, atracción=0.04) | Gradual, estable |
| `BolsaMock` | Caminata normal + spikes Poisson 10% (σ spike=0.55) | Volátil, impredecible |
| `IndicioPaisMock` | Constante configurable, sin variación | Gravitacional, pesado |

### SPEC 3 — Función de probabilidad de avance

```
p = (señal.getVerb('AVANZA', mapeo) * pesos.api)
  + (sala.terreno[pos]              * pesos.stigmergy)
  + (cohesion_boids                 * pesos.cohesion)
  + (separacion_boids               * pesos.separacion)
  + (sala.getMomentum()             * pesos.momentum)
  - freno_distancia
```

Pesos por defecto en `mappings.json`: api=0.30, stigmergy=0.20, cohesion=0.20, separacion=0.15, momentum=0.15.

### SPEC 4 — Máquina de estados (7 estados)

```
DORMIDO    → ARMADO       : fuente conectada
ARMADO     → SONANDO      : señal.magnitud > 0.30
SONANDO    → RETENIDO     : getVerb('RETIENE') > 0.65
RETENIDO   → SONANDO      : getVerb('RETIENE') < 0.30
SONANDO    → DESCANSANDO  : señal.magnitud < 0.10 por > 5 ciclos
DESCANSANDO→ SONANDO      : señal.magnitud > 0.30
SONANDO    → DESBORDADO   : num_fuentes > 3
SONANDO    → PERIFERICO   : indice_pais < 0.30
PERIFERICO → SONANDO      : indice_pais ≥ 0.30
CUALQUIERA → DORMIDO      : posicion ≥ 53
```

### SPEC 5 — Pulso degradable

```js
triggerAt(time) {
  const pDropout = Math.pow(degradacion, 2) * 0.12;
  if (Math.random() < pDropout) return; // silence
  const jitter = (Math.random() - 0.5) * degradacion * 0.12;
  synth.triggerAttackRelease("C6", "32n", time + jitter);
}
```
`degradacion` = `max(volatilidad)` de todas las fuentes conectadas.

### SPEC 6 — Sistema de color (capas 0, 1, 2)

- **Capa 0 (índice país):** Modifica posición vertical del dot, opacidad, y blur CSS.
  - `magnitud > 0.7` → central, opacidad 1.0, sin blur
  - `0.3-0.7` → borde, opacidad 0.7
  - `< 0.3` → lejos, opacidad 0.4, blur 0.8px

- **Capa 1 (stigmergy):** `sala.terreno[i]` es la opacidad de la huella de color del instrumento en esa columna. Decae 0.04 por pulso, se recarga 0.18 cuando el instrumento está en esa posición.

- **Capa 2 (boids/saturación):** Cuando la distancia al centro de masa supera 2 patrones, el color del dot se desatura linealmente hacia `#888`.

### SPEC 7 — Tablero de Invocación (dos fases → simplificado a flujo directo)

Decisión post-implementación: se eliminó el sistema de dos fases (ensamblaje/ejecución) con clicks. Se reemplazó por:

- Cada instrumento tiene un `<select>` dropdown para elegir su fuente directamente.
- Los datos en vivo (magnitud, volatilidad, cambio) se muestran en la tarjeta del instrumento en tiempo real.
- El estado del instrumento es visible como badge con color semántico.
- Volumen individual por instrumento (slider -40 a 0 dB).
- Botón INVOCAR inicia el audio sin cambiar la interfaz.

**Razón del cambio:** El sistema de click-click original era confuso para el usuario. La conexión directa por dropdown es más clara y mantiene la intención de "convocar" sin fricción innecesaria.

### SPEC 8 — Índice país como constructor de lentes

Implementado con 10 países × 10 indicadores con valores reales normalizados:

**Países:** Argentina, Brasil, Chile, Estados Unidos, Noruega, Países Bajos, Siria, Congo (RD), India, China.

**Indicadores:** GINI, Pobreza extrema, CO₂ per cápita, Mortalidad infantil, Expectativa de vida, Acceso agua potable, Gasto militar, Refugiados (origen), Alfabetización, Usuarios internet.

**Normalización:** Cada indicador se normaliza 0-1. Los indicadores negativos (GINI, mortalidad, etc.) se invierten para que 1 = condición favorable y 0 = condición desfavorable. El valor resultante afecta posición, opacidad y blur del instrumento en La Sala.

### SPEC 9 — mappings.json como documento político

El archivo `src/data/mappings.json` contiene los defaults de enrutamiento verbo→dimensión de señal, pesos de La Sala y umbrales. Se documentó explícitamente como "decisiones de diseño no neutras":

```json
{
  "fuentes": { "clima": {...}, "bolsa": {...}, "indice_pais": {...} },
  "pesos_sala": { "api":0.30, "stigmergy":0.20, "cohesion":0.20, "separacion":0.15, "momentum":0.15 },
  "umbrales": { "entrada":0.30, "avance":0.52, "retiene":0.65, ... }
}
```

---

## PARTE 14 — Los 53 patrones: transcripción

### Estado del archivo original

`patterns.json` de Gemini tenía 53 entradas en cantidad pero con contenido fabricado: notas fuera del rango real de la obra (C6, B5, A5, F#5 que no existen en la partitura de Riley), y el patrón 35 reducido a 3 notas.

### Transcripción desde la partitura

Se transcribieron los 53 patrones desde el PDF de Third Coast Percussion (Celestial Harmonies, 1989). Fuente visual: imagen de la partitura, una página con todos los patrones.

**Criterios de verificación:**
- Patrones idénticos confirmados: 10=41 (G4-B4), 11=36 (G4-A4-G4-E4), 18=28 (F#4-G4-A4-G4-F#4-G4)
- Patrón 14: introduce F#4
- Patrón 31: vuelve a F natural, aparece D4
- Patrón 35: el más largo — ~56 corcheas, usa 7 alturas (E4, F4, F#4, G4, A4, Bb4, C5), introduce Bb4
- Patrones 49-53: Bb4 mantenida hasta el final
- Patrón 53 (final): G4-Bb4 en semicorcheas — la tercera menor conclusiva

**Rango:** C4 a C5 (aproximadamente), sin notas por encima del Do central + octava.

**Duraciones usadas:** 16n, 8n, 8n., 4n, 4n., 2n, 2n.

---

## PARTE 15 — Arquitectura de archivos implementada

```
src/
  data/
    config.json       → 3 instrumentos con color_hex
    patterns.json     → 53 patrones de Riley transcritos
    mappings.json     → verbos, pesos de La Sala, umbrales (las decisiones políticas)
    paises.json       → 10 países × 10 indicadores normalizados

  data-sources/
    DataSourceAdapter.js   → contrato base: magnitud, cambio, tendencia, volatilidad, getVerb()
    ClimaMock.js           → caminata lenta media-reversa
    BolsaMock.js           → caminata + spikes Poisson 10%
    IndicioPaisMock.js     → constante configurable, sin tick

  logic/
    StateMachine.js   → 7 estados, tabla de transiciones declarativa
    LaSala.js         → 6 propiedades + función de probabilidad (3 capas físicas)
    Instrumento.js    → 5 verbos, máquina de estados, señal anatómica, audibilidad

  audio/
    Pulse.js          → pulso degradable por volatilidad (dropout + jitter)
    Engine.js         → scheduling recursivo, MUTA → filtro, volúmenes por estado

  ui/
    ColorSystem.js    → capas 0 (país), 1 (stigmergy), 2 (boids/saturación)
    SalaView.js       → campo de 53 patrones, dots con estado, huellas de color
    Tablero.js        → dropdowns directos, datos en vivo, lente país con selectors

  main.js             → init, ticks de fuentes cada 800ms, render loop, audio engine
  styles.css          → estética partitura × paper científico × terminal clínica
```

---

## PARTE 16 — Estado de la demo al 30 de mayo de 2026

### Lo que funciona

- Los 53 patrones de Riley se reproducen en Tone.js con scheduling recursivo.
- Tres instrumentos (cuerdas/PolySynth, percusión/MembraneSynth, mallets/Synth) con timbres diferenciados.
- La Sala calcula las 6 propiedades y la función de probabilidad combina señal + stigmergy + boids + campo de fuerza.
- Los 7 estados de instrumento existen con máquina de transiciones formal.
- El pulso se degrada con la volatilidad de las fuentes conectadas.
- Mocks con carácter estadístico diferenciado (clima gradual ≠ bolsa volátil ≠ índice constante).
- Sistema de color en La Sala: huellas de stigmergy en color por instrumento, saturación según distancia al grupo.
- Índice país: 10 países × 10 indicadores normalizados afectan posición vertical, opacidad y blur de los dots.
- Datos en vivo visibles en cada tarjeta de instrumento: magnitud, volatilidad, cambio con flecha.
- Volumen individual por instrumento (slider -40 a 0 dB).

### Lo que falta para la siguiente iteración

- **Patrones fantasma**: ausencia de señal activa patrón translúcido (conceptualmente definido, no implementado).
- **Modo concentrado**: replay acelerado de datos históricos (definido, no implementado).
- **Economía de atención / focus**: click en instrumento para escucharlo en solitario.
- **APIs reales**: conectar OpenWeather, Yahoo Finance, NewsAPI usando la interfaz DataSourceAdapter ya definida.
- **Exportar partitura-configuración**: guardar el estado (fuentes, conexiones, momento temporal, país+indicador) como JSON compartible.
- **Más de 3 fuentes simultáneas** y prueba del estado DESBORDADO.
- **La Sala en modo scroll**: para ver los 53 patrones en resolución más alta.

### Preguntas abiertas que quedan del comité

1. **Stigmergy por instrumento vs. global**: ¿el terreno es uno solo o cada instrumento deja su propia huella de color? (Actualmente: color por instrumento, pero el `terreno` es un array único de La Sala).
2. **Peso del índice país en el avance**: actualmente solo afecta audibilidad visual. ¿Debería también afectar la probabilidad de avanzar (PERIFERICO = latencia de avance)?
3. **Momentum decay**: ¿el historial de 8 ciclos es la ventana correcta para capturar el "avance colectivo espontáneo"?
4. **Partitura de Riley**: la transcripción es fiel a la imagen de la partitura pero no ha sido verificada nota por nota contra edición impresa. El patrón 35 es la transcripción más incierta (longitud y ritmos internos).

---

## PARTE 17 — Visualización Explicativa de la Teoría (Actualización Interactiva)

Para resolver el problema de que el sistema se sentía "poco interesante" y demasiado abstracto, se rediseñó la UI para que la teoría y los datos sean inmediatamente legibles y explícitos. La interfaz dejó de ser pasiva y se convirtió en un mapa analítico.

### 1. Canvas Superpuesto: Las Fuerzas Hechas Visibles
Se agregó una capa interactiva de `<canvas>` sobre la grilla de La Sala que procesa y dibuja a 60 fps las variables matemáticas del sistema generativo:
- **Líneas de Cohesión (Boids):** Cuando dos instrumentos se encuentran a una distancia menor a 3 patrones, se dibuja un rayo de opacidad variable conectándolos. Esto explica visualmente que la cercanía espacial atrae a los músicos a avanzar juntos ("se contagian").
- **Ripples de Separación (Boids):** Cuando la densidad es máxima (colisión en el mismo compás), el canvas emite rizos rojos expansivos. Visibilizan la fricción o rechazo del algoritmo ante aglomeraciones.

### 2. Payloads Descriptivos: "Qué Viaja en la API"
- Se modificó la arquitectura básica de `DataSourceAdapter` para devolver un `payloadText` junto al número abstracto 0-1.
- `BolsaMock` ahora dispara textos como `"NASDAQ +2.10%"` y `ClimaMock` textos como `"Temp: 14.5°C ↓"`.
- Estos payloads descriptivos son emitidos como partículas flotantes (`Floating Text`) desde el dot del instrumento en el instante preciso en que toma la decisión de avanzar, conectando el impulso físico/rítmico con el dato semántico.

### 3. Exposición de la Ecuación Probabilística
En el *Tablero de Invocación*, cada tarjeta de instrumento incorporó un desglose matemático en tiempo real. 
La suma abstracta de `LaSala.js` fue extraída en la nueva función `calcularProbabilidadBreakdown` y ahora se expone en la UI así:
`API: 0.12 | Stig: 0.35 | Boids: 0.20 | Freno: -0.60 = P(7%)`

Esto democratiza la "caja negra" del sistema generativo. El observador puede comprobar cómo la teoría de stigmergy y los boids están dictando activamente el resultado final.

---

*Última actualización: 30 de mayo de 2026, 18:45 -03:00*

---

## PARTE 18 — Mejoras Implementadas (30 de mayo de 2026, 19:28 -03:00)

Esta sección documenta los cambios aplicados para alinear mejor la demo con la arquitectura conceptual (5 verbos, estado DESBORDADO real, convocatoria multi-fuente, y coherencia de runtime).

### 1) Corrección de raíz: doble tick en fuentes

**Problema detectado:** las fuentes se estaban actualizando por dos caminos:
- tick global cada 800ms (en `main.js`)
- tick por instrumento en cada ciclo de patrón (en `Instrumento.tick`)

Esto rompía la temporalidad de señal y hacía no comparables los instrumentos.

**Implementación:**
- Se eliminó el `tick` por instrumento.
- Se dejó un único reloj global de fuentes.
- `Instrumento.tick()` ahora solo reconstruye señal compuesta y transiciona estado.

**Archivos:**
- `src/logic/Instrumento.js`

### 2) Multi-fuente por instrumento (A/B/C) y señal compuesta

**Problema detectado:** cada instrumento aceptaba una sola fuente. Con eso, `DESBORDADO` era casi inalcanzable y la capa de convocatoria era demasiado limitada.

**Implementación:**
- Cada instrumento ahora puede tener hasta 3 fuentes simultáneas (`FUENTE A`, `FUENTE B`, `FUENTE C`).
- Se agregó composición interna de señal:
  - `magnitud`, `cambio`, `tendencia`: promedio de fuentes activas.
  - `volatilidad`: máximo entre fuentes.
  - `payloadText`: combinación resumida de payloads activos.
  - `getVerb(verbo)`: promedio de presión verbo por fuente (cada una con su mapeo).
- `numFuentes` se deriva de conexiones reales.

**Archivos:**
- `src/ui/Tablero.js`
- `src/logic/Instrumento.js`
- `src/main.js` (inyección de `mappings` al tablero)

### 3) Verbo SALE operativo en la máquina de estados

**Problema detectado:** `SALE` existía en `DataSourceAdapter`, pero no tenía efecto en transiciones reales.

**Implementación:**
- Se agregaron transiciones por `SALE` hacia `DORMIDO` desde:
  - `SONANDO`
  - `RETENIDO`
  - `DESCANSANDO`
  - `PERIFERICO`
- Condición: `getVerb('SALE') > umbral.sale` + compuerta probabilística.

**Archivos:**
- `src/logic/StateMachine.js`

### 4) DESBORDADO ahora alcanzable

**Problema detectado:** condición antigua requería `numFuentes > desbordado_n`, y con límite práctico de entradas era difícil o imposible.

**Implementación:**
- Ajuste de condición:
  - entra a `DESBORDADO` con `numFuentes >= desbordado_n`
  - sale cuando `numFuentes < desbordado_n`

**Archivo:**
- `src/logic/StateMachine.js`

### 5) Slider de volumen conectado al audio real

**Problema detectado:** el slider de volumen actualizaba `inst._volumenDb`, pero el motor no lo usaba.

**Implementación:**
- `AudioEngine` usa `inst._volumenDb` como base de volumen por instrumento.
- Los efectos de audibilidad por lente y estados (`DESBORDADO`, `DESCANSANDO`, `PERIFERICO`) ahora son offsets sobre ese volumen base, no reemplazos fijos.

**Archivo:**
- `src/audio/Engine.js`

### 6) Nueva fuente efectiva: NoticiasMock

**Problema detectado:** `mappings.json` declaraba `noticias`, pero runtime no tenía fuente `noticias`.

**Implementación:**
- Se creó `NoticiasMock` con carácter estadístico propio:
  - variación suave + eventos semánticos abruptos
  - payload textual de tópico/intensidad
- Se registró en `main.js` como fuente disponible.

**Archivos:**
- `src/data-sources/NoticiasMock.js` (nuevo)
- `src/main.js`

### 7) Ajuste de degradación del pulso con multi-fuente

**Implementación:**
- El cálculo de degradación del pulso ahora usa la volatilidad global de cada instrumento (señal compuesta), no una sola fuente puntual.
- Se agregó API auxiliar `getVolatilidadGlobal()` en `Instrumento`.

**Archivos:**
- `src/logic/Instrumento.js`
- `src/audio/Engine.js`

### 8) Validación técnica posterior a cambios

**Comando ejecutado:**
```bash
npm run build
```

**Resultado:**
- Build OK (`vite build` completado sin errores).
- Bundle generado correctamente en `dist/`.

### 9) Estado posterior

Después de estas mejoras:
- la demo conserva su estructura original de módulos;
- la capa de convocatoria gana expresividad real (multi-fuente);
- los 5 verbos ya no están solo en discurso (SALE activo);
- la temporalidad de datos es más coherente (sin doble tick);
- el control de volumen en UI ahora impacta el audio realmente.

### 10) Deuda técnica que permanece abierta

No resuelto en esta iteración:
- Integración con APIs reales (todavía mocks).
- Exportar/importar partitura-configuración.
- Modo concentrado histórico.
- Patrón fantasma por ausencia de señal.
- Revisión musicológica nota-a-nota de `patterns.json` contra edición crítica de partitura.

---

*Última actualización: 30 de mayo de 2026, 19:28 -03:00*
