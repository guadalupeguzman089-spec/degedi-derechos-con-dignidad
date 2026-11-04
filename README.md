# Degedi Derechos Con Dignidad

Actúa como diseñador/a web y desarrollador/a front-end con experiencia en sitios accesibles para organizaciones de la sociedad civil. Crea el sitio web de DEGEDI A.C. (Grupo de Estudios sobre Derechos, Géneros y Diversidades A.C.), una asociación civil de la Ciudad de México fundada en 2014 que da talleres, capacitaciones y acompañamiento sobre sexualidad, género, diversidad sexual, Interrupción Legal del Embarazo (ILE), derechos humanos y bienestar social.

## FORMATO DE ENTREGA
- Un solo archivo index.html con CSS y JavaScript incluidos. Sin frameworks, sin librerías externas, sin CDN, sin imágenes externas.
- Mobile-first: la mayoría de las visitas serán desde celular. Idioma: es-MX. Incluye viewport con viewport-fit=cover.
- Fuentes del sistema (system-ui). Nada de Google Fonts ni servicios externos.
- Tema claro y oscuro: define los colores como variables CSS en :root y redefínelas en modo oscuro con prefers-color-scheme.
- Responde solo con el código y, al final, una lista breve de los supuestos que hiciste.

## IDENTIDAD VISUAL
- Estilo: cálido, cercano, humano y profesional. Fondo beige muy claro (#fbf9f5), tarjetas blancas con esquinas redondeadas y sombra suave, texto gris carbón (#212121), texto secundario #555. Sin estética corporativa fría, sin fotos de stock, sin íconos genéricos.
- El degradé coral (#df6d62) → durazno (#f4a261) → amarillo (#e9c46a) → azul (#457b9d) se usa SOLO como acento: línea bajo los títulos h2, divisor ondulado entre el encabezado y el contenido, y el logo. Nunca como color de texto ni como fondo de botones.
- Logo: usa exactamente este SVG, centrado en el encabezado, con ancho máximo de 260 px y sin recuadro de fondo. El texto "DEGEDI" debe usar fill="currentColor" para que se lea también en modo oscuro:
<svg viewBox="0 0 300 130" role="img" aria-label="Logotipo de DEGEDI: una línea ondulada en degradé de coral a azul con puntos como personas en camino, sobre el nombre DEGEDI"><defs><linearGradient id="hg" x1="0" x2="1"><stop offset="0" stop-color="#df6d62"/><stop offset=".35" stop-color="#f4a261"/><stop offset=".7" stop-color="#e9c46a"/><stop offset="1" stop-color="#457b9d"/></linearGradient></defs><path d="M 20 65 Q 85 20, 150 65 Q 215 110, 280 65" fill="none" stroke="url(#hg)" stroke-width="4.5" stroke-linecap="round"/><circle cx="50" cy="45" r="4" fill="#df6d62"/><circle cx="95" cy="30" r="3.5" fill="#f4a261"/><circle cx="150" cy="18" r="4.5" fill="#e9c46a"/><circle cx="225" cy="85" r="4" fill="#457b9d"/><text x="150" y="112" font-family="system-ui,sans-serif" font-weight="800" font-size="34" fill="currentColor" letter-spacing="3.5" text-anchor="middle">DEGEDI</text></svg>
  Debajo del logo, en texto: GRUPO DE ESTUDIOS SOBRE DERECHOS, GÉNEROS Y DIVERSIDADES A.C.
- Colores de botones (todos con texto blanco, ya validados para contraste): WhatsApp #2e7d32, correo #3a6a8a, Instagram #a8235a, Facebook #1565c0. Botón principal de la portada: fondo del color del texto y letra del color del fondo; el secundario, con borde y fondo transparente.
- Color del texto en h3 y detalles azules: #3a6a8a en modo claro, #8fbbd9 en oscuro. Coral para texto: #b94a40 en claro, #f0958a en oscuro.

## PÚBLICOS Y ESTRUCTURA
Hay dos públicos principales: (1) personas que buscan acompañamiento y pueden estar en una situación delicada; (2) escuelas e instituciones que quieren contratar talleres. La portada ofrece dos entradas claras:
- "Necesito acompañamiento" → lleva a la sección Beleguí.
- "Quiero un taller para mi escuela o institución" → lleva a Talleres.
Orden: encabezado con logo · menú de navegación · divisor ondulado · Portada · Beleguí · Talleres · Quiénes somos · Misión y visión · Acompañamiento comunitario y proyectos · Contacto · pie de página.
- Menú: Inicio, Beleguí, Talleres, Quiénes somos, Misión y visión, Proyectos, Contacto. Debe quedar fijo (sticky) SOLO en pantallas de 700 px o más; en celular, que sea estático para no ocupar pantalla.
- Misión y visión van en dos tarjetas lado a lado en pantallas grandes y apiladas en celular.
- Cada sección es una tarjeta con título h2 y una pequeña línea de degradé debajo.

## PRIVACIDAD Y SEGURIDAD (obligatorio)
- Sin formularios, sin pedir datos personales, sin cookies, sin analítica, sin rastreadores ni contenido de terceros (ni iframes, ni widgets, ni fuentes externas).
- Botón fijo de "Salida rápida" en una barra superior, siempre visible, con altura mínima de 44 px y letra legible, gris sobrio (#555) con texto blanco. Con un clic, o presionando Esc dos veces en menos de 500 ms, ejecuta window.location.replace("https://www.google.com") para que la página no quede en el historial de regreso. Dentro del botón muestra "Salida rápida" y, en letra más chica, "(Esc Esc)".
- En la sección Beleguí: un recuadro destacado (rojo sobrio, con buen contraste en ambos temas) que diga "Si estás en peligro inmediato, llama al 911." con enlace tel:911, y debajo, centrado y pequeño: "Si compartes este dispositivo, considera borrar el historial de navegación."

## CONTACTO (dos canales separados)
- Acompañamiento (Beleguí): botón de WhatsApp con enlace https://wa.me/525541350708?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Belegu%C3%AD (target="_blank" rel="noopener noreferrer"). Agrega un comentario HTML recordando verificar este enlace antes de publicar. Beleguí se atiende SOLO por mensaje: no pongas enlaces tel: ni frases como "llámanos" para ese número.
- Talleres: botón mailto:degediac@gmail.com con asunto prellenado "Información de taller" (codificado en URL). No uses WhatsApp para esto. La palabra "cotizar" no debe aparecer en el sitio: los botones dicen "Agendar un taller" y "Escribir para agendar un taller".
- Redes: botón de Instagram a https://instagram.com/degediac y botón de Facebook a https://www.facebook.com/grupodegedi (ambos con target="_blank" rel="noopener noreferrer").
- Ubicación: solo "Ciudad de México", sin dirección.

## ACCESIBILIDAD
HTML semántico (header, nav, main, section, footer), jerarquía de encabezados correcta, navegación completa por teclado, foco visible (outline de 3 px), letra base de 17 px, botones con altura mínima de 44 px, contraste WCAG AA en ambos temas, y respeto a prefers-reduced-motion (sin scroll suave ni transiciones cuando el usuario lo pide). El lenguaje inclusivo ya viene redactado sin "x" ni "@": no lo cambies.

## REGLAS DE CONTENIDO
- Usa EXACTAMENTE los textos de abajo. Puedes decidir la maquetación, pero no reescribas ni agregues contenido propio.
- NO inventes testimonios, cifras, nombres de instituciones aliadas, fotografías, horarios, precios ni servicios. No agregues datos que no estén aquí.
- Las ilustraciones decorativas de las secciones (src/assets/*.asset.json, prefijo portada-/belegui-/talleres-/quienes-/mision-/vision-/proyectos-) son ilustraciones generadas, no fotografías de actividades reales: no las presentes como documentación. Las fotografías reales solo van en la galería.
- No uses comillas ni apóstrofes rectos dentro del texto visible; usa tipografía correcta.

## TEXTOS

[PORTADA]
Título: Te damos la bienvenida a DEGEDI A.C.
Desde 2014, tejemos redes de apoyo, educación popular y defensa social en la Ciudad de México con perspectiva de género y derechos humanos.
¿Qué necesitas hoy?

[BELEGUÍ]
Título: Beleguí, una línea para acompañarte
Si vives violencia de género, tienes dudas sobre tu sexualidad, necesitas acompañamiento para una Interrupción Legal del Embarazo (ILE) o quieres hablar de diversidad sexual, en Beleguí encontrarás escucha, orientación y acompañamiento. Escríbenos por WhatsApp al 55 4135 0708.
Información de atención: servicio gratuito, confidencial, abierto las 24 horas y atendido exclusivamente por mensaje.
Botón: Escribir por WhatsApp a Beleguí

[TALLERES Y FORMACIÓN]
Título: Formación para la autonomía y el tejido social
Compartimos saberes porque creemos que el conocimiento es una herramienta de libertad y de cuidado mutuo. Diseñamos e impartimos talleres, conferencias y capacitaciones para colectivos, instituciones, escuelas, juventudes y público en general, de forma presencial o en línea, sobre sexualidad, género, diversidad sexual, ILE, derechos humanos y bienestar social.
- Diversidad sexual y de género: reflexión crítica y práctica para cuestionar mandatos, reconocer las disidencias y construir espacios libres de LGBTfobia.
- Interrupción Legal del Embarazo (ILE): talleres informativos, con perspectiva de derechos y sin estigmas, centrados en la autonomía corporal, la salud y el derecho a decidir sobre nuestros cuerpos.
- Género y derechos humanos: herramientas conceptuales y metodológicas para identificar desigualdades estructurales e incorporar la perspectiva de género en la vida cotidiana y profesional.
¿Quieres llevar un taller a tu escuela, comunidad o espacio de trabajo? Escríbenos a degediac@gmail.com y armamos una propuesta a la medida.
Los temarios, la duración y el tamaño del grupo se acuerdan por correo.
Botón: Agendar un taller

[QUIÉNES SOMOS]
Título: Hacemos comunidad desde los derechos
DEGEDI A.C. nació en 2014 con una convicción: defender los derechos humanos de las mujeres y de las diversidades sexo-genéricas. Desde entonces, hace más de diez años, tejemos redes de apoyo, aprendizaje y resistencia en la Ciudad de México.
No somos una institución distante: somos personas trabajando con personas. Creemos que el cambio social se construye en el encuentro cotidiano, el diálogo entre iguales y la educación popular.
Cada taller, conferencia y espacio de diálogo tiene un propósito: enfrentar las violencias estructurales, abrazar la pluralidad y crear entornos donde todas las personas podamos vivir con dignidad.

[MISIÓN Y VISIÓN]
Título de sección: Misión y visión
Misión: Impulsamos procesos de formación, investigación y divulgación desde la perspectiva de género, los derechos humanos y la interseccionalidad, para promover una cultura de derechos, la equidad de género y sociedades libres de discriminación.
Visión: Ser un referente de cercanía y rigor en la educación comunitaria y la defensa social, y fortalecer redes de empatía y autonomía donde el respeto a las diversidades y a los derechos de las mujeres sea la base de la vida en común.

[ACOMPAÑAMIENTO COMUNITARIO Y PROYECTOS]
Título: Acompañar y caminar en comunidad
El activismo se sostiene en el cuidado mutuo. En DEGEDI no solo teorizamos: acompañamos procesos sociales y comunitarios en los que personas y grupos encuentran escucha, orientación y herramientas para defender sus derechos.
También impulsamos proyectos de investigación situada y divulgación, porque creemos que la ciencia, las humanidades y el activismo deben dialogar con la realidad de las calles y generar datos y narrativas útiles para la justicia social.

[CONTACTO]
Título: Escríbenos
¿Tienes una duda, quieres sumarte a un taller o proponernos una colaboración? Las puertas de DEGEDI están abiertas.
Acompañamiento (Beleguí): WhatsApp 55 4135 0708 (gratuito, confidencial, 24 horas, solo por mensaje). Botón: Contactar a Beleguí por WhatsApp.
Talleres y otros asuntos: degediac@gmail.com. Botón: Escribir para agendar un taller.
Ubicación: Ciudad de México.
Redes sociales: botones de Instagram @degediac y Facebook DEGEDI.

[PIE DE PÁGINA]
Aviso de privacidad breve: este sitio no usa cookies, analíticas, rastreadores ni servicios de terceros, y no te pide datos personales.
© 2014-2026 DEGEDI A.C. Todos los derechos reservados.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://degedi-derechos-con-dignidad.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/af1ef1b0-ad48-4d00-9945-2c33128ecce1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
