/* ==========================================================================
   CENTRO PEDIÁTRICO · CONTENIDO DE LA LANDING
   --------------------------------------------------------------------------
   Este archivo es lo ÚNICO que necesitas tocar para cambiar textos
   o para AGREGAR SECCIONES nuevas a la página.

   Para agregar una sección:
     1. Copia una de las plantillas del final del archivo (ver PLANTILLAS).
     2. Pégala dentro del array SECCIONES, en la posición que quieras.
        El orden del array = el orden en que aparece en la página.
     3. Dale un "id" único (sin espacios ni acentos) y guarda.
        Si le pones "nav", aparece automáticamente en el menú de arriba.

   Campos comunes a TODAS las secciones:
     tipo   (obligatorio) el diseño que se usa: hero, tarjetas, edades,
            perfil, pasos, lista, horarios, testimonios, faq, cta,
            contacto, texto, aviso
     id     (obligatorio) ancla para el menú, ej: "servicios"
     nav    (opcional) texto en el menú superior. Si lo omites, no sale
     titulo / kicker / intro   (opcionales) encabezado de la sección
     fondo  (opcional) "crema" | "blanco" | "rosa" | "menta"  (default blanco)

   Los textos aceptan HTML simple (<b>, <em>, <a>, <br>).
   Iconos disponibles: corazon, estetoscopio, biberon, jeringa, escudo,
     reloj, calendario, chat, mapa, telefono, correo, sol, luna, hoja,
     estrella, alerta, check, bebe, nino, familia, libro, casa
   ========================================================================== */

/* --------------------------------------------------------------------------
   DATOS DEL CENTRO — se usan en el menú, el pie de página y los botones
   -------------------------------------------------------------------------- */
const SITIO = {
  nombre: "Centro Pediátrico",
  nombreDestacado: "Velasco",          // se muestra en cursiva rosa
  lema: "Pediatría cercana para cada etapa",
  medico: "Dr. Eduardo Velasco Sánchez",
  telefono: "+52 33 3641 6015",
  telefonoLink: "tel:+523336416015",
  whatsapp: "https://wa.me/523336416015",
  correo: "eduardovelasco@megared.net.mx",
  direccion: "Guadalajara, Jalisco, México",
  mapa: "https://maps.google.com/?q=Guadalajara+Jalisco",
  // Botón principal que aparece en la barra superior
  ctaMenu: { texto: "Agendar cita", href: "https://wa.me/523336416015" }
};

/* --------------------------------------------------------------------------
   SECCIONES DE LA PÁGINA — agrega, quita o reordena libremente
   -------------------------------------------------------------------------- */
const SECCIONES = [

  /* ---------- 1. Portada ---------- */
  {
    tipo: "hero",
    id: "inicio",
    kicker: "Pediatría & desarrollo infantil",
    titulo: "Cuidamos a tu hijo <em>en cada etapa</em>",
    intro: "Consulta pediátrica con tiempo, escucha y explicaciones claras. Del recién nacido al adolescente, con seguimiento cercano para toda la familia.",
    botones: [
      { texto: "Agendar por WhatsApp", href: "https://wa.me/523336416015", estilo: "primario" },
      { texto: "Ver servicios", href: "#servicios", estilo: "secundario" }
    ],
    datos: [
      { icono: "corazon", texto: "Trato cálido y sin prisas" },
      { icono: "estetoscopio", texto: "Pediatría general y del neonato" },
      { icono: "chat", texto: "Dudas resueltas entre consultas" }
    ]
  },

  /* ---------- 2. Servicios ---------- */
  {
    tipo: "tarjetas",
    id: "servicios",
    nav: "Servicios",
    fondo: "crema",
    kicker: "Lo que ofrecemos",
    titulo: "Servicios del centro",
    intro: "Atención integral para niñas y niños, con enfoque preventivo y acompañamiento a los papás.",
    items: [
      { icono: "estetoscopio", titulo: "Consulta pediátrica", texto: "Valoración de enfermedades agudas y crónicas, con diagnóstico y tratamiento explicados paso a paso." },
      { icono: "nino", titulo: "Control del niño sano", texto: "Seguimiento de crecimiento, desarrollo y conducta, con guía anticipada para cada edad." },
      { icono: "biberon", titulo: "Recién nacido y lactancia", texto: "Tamizajes, ictericia, peso, técnica de lactancia y resolución de dudas de las primeras semanas." },
      { icono: "jeringa", titulo: "Vacunación", texto: "Esquema nacional y vacunas adicionales, revisando la cartilla y poniendo al día lo que falte." },
      { icono: "hoja", titulo: "Nutrición infantil", texto: "Ablactación, alimentación selectiva, bajo peso y sobrepeso, con planes realistas para casa." },
      { icono: "luna", titulo: "Sueño y desarrollo", texto: "Rutinas de sueño seguro, despertares nocturnos y acompañamiento en hitos del desarrollo." }
    ]
  },

  /* ---------- 3. Etapas ---------- */
  {
    tipo: "edades",
    id: "etapas",
    nav: "Etapas",
    kicker: "Acompañamiento continuo",
    titulo: "Una atención distinta para cada edad",
    intro: "Cada etapa tiene sus propias preguntas. Adaptamos la consulta a lo que tu hijo necesita ahora.",
    items: [
      { edad: "0 – 28 días", titulo: "Recién nacido", texto: "Peso, ictericia, cordón, tamiz metabólico y auditivo, lactancia y sueño seguro." },
      { edad: "1 – 12 meses", titulo: "Lactante", texto: "Vacunas, ablactación, hitos del desarrollo, cólicos, reflujo e infecciones frecuentes." },
      { edad: "1 – 5 años", titulo: "Preescolar", texto: "Lenguaje, conducta, alimentación selectiva, control de esfínteres y primeras guarderías." },
      { edad: "6 – 11 años", titulo: "Escolar", texto: "Rendimiento escolar, peso saludable, alergias, deporte y salud visual y auditiva." },
      { edad: "12 – 18 años", titulo: "Adolescente", texto: "Pubertad, salud emocional, nutrición, vacunas de refuerzo y consulta con privacidad." }
    ]
  },

  /* ---------- 4. El pediatra ---------- */
  {
    tipo: "perfil",
    id: "pediatra",
    nav: "Pediatra",
    fondo: "crema",
    kicker: "Quién te atiende",
    titulo: "Dr. Eduardo Velasco Sánchez",
    subtitulo: "Médico Pediatra",
    texto: "Atiendo a niñas y niños desde el nacimiento hasta la adolescencia, con especial interés en el recién nacido, la lactancia materna y la reanimación neonatal. Creo en explicar con claridad, decidir junto con los papás y evitar tratamientos innecesarios.",
    credenciales: [
      "Médico Cirujano y Partero",
      "Especialidad en Pediatría",
      "Instructor de Reanimación Neonatal (NRP)",
      "Autor de LactoSegura, guía de lactancia y medicamentos"
    ],
    botones: [
      { texto: "Consultar LactoSegura", href: "index.html", estilo: "secundario" }
    ]
  },

  /* ---------- 5. Cómo agendar ---------- */
  {
    tipo: "pasos",
    id: "agendar",
    nav: "Citas",
    kicker: "Es sencillo",
    titulo: "Cómo agendar tu cita",
    items: [
      { titulo: "Escríbenos", texto: "Mándanos un WhatsApp con el nombre y la edad de tu hijo y el motivo de la consulta." },
      { titulo: "Elegimos horario", texto: "Te proponemos las opciones disponibles más cercanas, incluida la atención el mismo día si es urgente." },
      { titulo: "Prepara lo necesario", texto: "Trae la cartilla de vacunación, estudios previos y la lista de medicamentos que esté tomando." },
      { titulo: "Tu consulta", texto: "Revisión completa, plan por escrito y un canal abierto para dudas de seguimiento." }
    ]
  },

  /* ---------- 6. Señales de alarma ---------- */
  {
    tipo: "lista",
    id: "alarma",
    nav: "Urgencias",
    fondo: "rosa",
    tono: "alerta",
    kicker: "Acude de inmediato",
    titulo: "Cuándo no hay que esperar",
    intro: "Si tu hijo presenta cualquiera de estos signos, busca atención médica urgente sin esperar la cita.",
    items: [
      "Fiebre en un bebé menor de 3 meses.",
      "Dificultad para respirar: se le hunden las costillas, respira muy rápido o se le ponen morados los labios.",
      "Decaimiento marcado, no despierta bien o llanto inconsolable.",
      "Manchas rojas o moradas en la piel que no desaparecen al presionarlas.",
      "Vómito persistente, vómito verde o sangre en heces.",
      "Signos de deshidratación: boca seca, llora sin lágrimas o no orina en 6–8 horas.",
      "Convulsión, aunque haya cedido sola.",
      "Dolor abdominal intenso o que no cede."
    ],
    nota: "Ante la duda, siempre es preferible una valoración de más. Esta lista es orientativa y no sustituye el criterio médico."
  },

  /* ---------- 7. Horarios y ubicación ---------- */
  {
    tipo: "horarios",
    id: "horarios",
    nav: "Horarios",
    kicker: "Cuándo y dónde",
    titulo: "Horarios y ubicación",
    intro: "Consulta con cita previa. Los casos urgentes se valoran el mismo día según disponibilidad.",
    horario: [
      { dia: "Lunes a viernes", horas: "9:00 – 14:00 y 16:00 – 20:00" },
      { dia: "Sábado", horas: "9:00 – 14:00" },
      { dia: "Domingo", horas: "Solo urgencias, previa llamada" }
    ],
    lugar: {
      titulo: "Consultorio",
      direccion: "Guadalajara, Jalisco, México",
      detalle: "Estacionamiento disponible · Acceso para carriolas",
      mapa: "https://maps.google.com/?q=Guadalajara+Jalisco"
    }
  },

  /* ---------- 8. Testimonios ---------- */
  {
    tipo: "testimonios",
    id: "familias",
    // nav: "Familias",   // quita el // para mostrarlo también en el menú
    fondo: "crema",
    kicker: "Lo que dicen los papás",
    titulo: "Familias que ya nos acompañan",
    items: [
      { texto: "Nos explicó todo con calma y por primera vez salimos de una consulta entendiendo qué tenía nuestro bebé.", autor: "Mariana G.", detalle: "Mamá de Emilia, 4 meses" },
      { texto: "Contestó nuestras dudas de lactancia a los pocos días de nacer. Ese acompañamiento nos cambió el arranque.", autor: "Daniel y Paty", detalle: "Papás de Tomás, recién nacido" },
      { texto: "Lleva el control de mis dos hijos desde que nacieron. Nunca receta de más y siempre da opciones.", autor: "Claudia R.", detalle: "Mamá de dos escolares" }
    ]
  },

  /* ---------- 9. Preguntas frecuentes ---------- */
  {
    tipo: "faq",
    id: "preguntas",
    nav: "Preguntas",
    kicker: "Antes de venir",
    titulo: "Preguntas frecuentes",
    items: [
      { p: "¿Cada cuándo debe venir mi hijo a control?", r: "En el primer año los controles son frecuentes: a los pocos días del nacimiento, al mes y luego cada uno a dos meses. De 1 a 4 años suelen ser cada 6 meses y a partir de los 5 años, una vez al año." },
      { p: "¿Atienden urgencias?", r: "Valoramos casos urgentes el mismo día según disponibilidad. Si hay signos de alarma, acude directo a un servicio de urgencias y avísanos para dar seguimiento." },
      { p: "¿Qué llevo a la primera consulta?", r: "La cartilla de vacunación, estudios o recetas previas, y si es recién nacido, la hoja de alta del hospital y los resultados del tamiz." },
      { p: "¿Puedo preguntar dudas después de la consulta?", r: "Sí. Queda un canal abierto por mensaje para dudas de seguimiento del mismo motivo de consulta. Los casos nuevos requieren una valoración." },
      { p: "¿Manejan seguros médicos o facturación?", r: "Se entrega comprobante para trámite de reembolso y podemos emitir factura. Consúltanos por WhatsApp los detalles de tu aseguradora." }
    ]
  },

  /* ---------- 10. Llamado final ---------- */
  {
    tipo: "cta",
    id: "cita",
    fondo: "menta",
    titulo: "¿Listos para agendar?",
    texto: "Escríbenos y te respondemos con los horarios disponibles más cercanos.",
    botones: [
      { texto: "Escribir por WhatsApp", href: "https://wa.me/523336416015", estilo: "primario" },
      { texto: "Llamar al consultorio", href: "tel:+523336416015", estilo: "secundario" }
    ]
  },

  /* ---------- 11. Contacto ---------- */
  {
    tipo: "contacto",
    id: "contacto",
    nav: "Contacto",
    kicker: "Estamos cerca",
    titulo: "Contacto",
    intro: "Respondemos en horario de consulta. Si es una urgencia, llama directamente.",
    items: [
      { icono: "chat", titulo: "WhatsApp", texto: "+52 33 3641 6015", href: "https://wa.me/523336416015" },
      { icono: "telefono", titulo: "Teléfono", texto: "+52 33 3641 6015", href: "tel:+523336416015" },
      { icono: "correo", titulo: "Correo", texto: "eduardovelasco@megared.net.mx", href: "mailto:eduardovelasco@megared.net.mx" },
      { icono: "mapa", titulo: "Ubicación", texto: "Guadalajara, Jalisco, México", href: "https://maps.google.com/?q=Guadalajara+Jalisco" }
    ]
  },

  /* ---------- 12. Aviso ---------- */
  {
    tipo: "aviso",
    id: "aviso",
    texto: "La información de este sitio es <b>educativa e informativa</b> y no sustituye la valoración médica presencial. Ante una urgencia, acude al servicio de urgencias más cercano."
  }

];

/* ==========================================================================
   PLANTILLAS — copia el bloque que necesites dentro de SECCIONES
   --------------------------------------------------------------------------

   // Texto libre (acepta HTML)
   {
     tipo: "texto", id: "nuevo", nav: "Nuevo",
     kicker: "Opcional", titulo: "Título de la sección",
     intro: "Párrafo de entrada, opcional.",
     cuerpo: "<p>Aquí va el contenido en HTML.</p><p>Otro párrafo.</p>"
   },

   // Rejilla de tarjetas con icono
   {
     tipo: "tarjetas", id: "nuevo", titulo: "Título",
     items: [ { icono: "corazon", titulo: "Tarjeta", texto: "Descripción." } ]
   },

   // Etapas o categorías con etiqueta
   {
     tipo: "edades", id: "nuevo", titulo: "Título",
     items: [ { edad: "0 – 2 años", titulo: "Etapa", texto: "Descripción." } ]
   },

   // Pasos numerados
   {
     tipo: "pasos", id: "nuevo", titulo: "Título",
     items: [ { titulo: "Paso", texto: "Descripción." } ]
   },

   // Lista con palomitas (tono: "normal" o "alerta")
   {
     tipo: "lista", id: "nuevo", titulo: "Título", tono: "normal",
     items: [ "Primer punto.", "Segundo punto." ],
     nota: "Texto al pie, opcional."
   },

   // Perfil de una persona
   {
     tipo: "perfil", id: "nuevo", titulo: "Nombre", subtitulo: "Cargo",
     texto: "Semblanza.",
     credenciales: [ "Credencial 1", "Credencial 2" ],
     botones: [ { texto: "Más información", href: "#", estilo: "secundario" } ]
   },

   // Horarios y lugar
   {
     tipo: "horarios", id: "nuevo", titulo: "Título",
     horario: [ { dia: "Lunes a viernes", horas: "9:00 – 14:00" } ],
     lugar: { titulo: "Sede", direccion: "Calle 123", detalle: "Referencia", mapa: "https://maps.google.com/?q=..." }
   },

   // Testimonios
   {
     tipo: "testimonios", id: "nuevo", titulo: "Título",
     items: [ { texto: "Cita textual.", autor: "Nombre", detalle: "Contexto" } ]
   },

   // Preguntas frecuentes (acordeón)
   {
     tipo: "faq", id: "nuevo", titulo: "Título",
     items: [ { p: "¿Pregunta?", r: "Respuesta." } ]
   },

   // Banner de llamado a la acción
   {
     tipo: "cta", id: "nuevo", titulo: "Título", texto: "Frase corta.",
     botones: [ { texto: "Botón", href: "#", estilo: "primario" } ]
   },

   // Datos de contacto
   {
     tipo: "contacto", id: "nuevo", titulo: "Título",
     items: [ { icono: "telefono", titulo: "Teléfono", texto: "+52 ...", href: "tel:+52..." } ]
   },

   // Franja de aviso
   { tipo: "aviso", id: "nuevo", texto: "Mensaje breve en <b>HTML</b>." },

   ========================================================================== */
