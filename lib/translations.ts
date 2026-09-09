export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      training: "Entrenamientos",
      tournaments: "Torneos",
      camps: "Camps y Eventos",
      cta: "RESERVAR CLASE GRATIS"
    },
    footer: {
      tagline:
        "El club referente de voley playa en El Masnou. Pasión, deporte y estilo de vida mediterráneo en cada entrenamiento.",
      explore: "Explorar",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con pasión en El Masnou"
    },
    languageSwitcher: {
      label: "Idioma",
      es: "Español",
      en: "English"
    },
    home: {
      eyebrow: "Premium Beach Life",
      titleLine1: "BEACH VOLLEY",
      titleHighlight: "EL MASNOU",
      subtitle:
        "Experimenta la energía de la alta competición en un entorno exclusivo frente al Mediterráneo. Formamos atletas, construimos comunidad.",
      ctaJoin: "ÚNETE AL CLUB",
      ctaSchedule: "VER HORARIOS",
      hookTitle: "Pista, Sol y Pasión",
      hookText:
        "Situado en el corazón de El Masnou, nuestro club ofrece instalaciones de primer nivel para jugadores de todos los niveles. Desde clases para principiantes hasta entrenamientos de alto rendimiento, fusionamos el espíritu competitivo del beach volley con un estilo de vida social inigualable.",
      collage: {
        eyebrow: "Momentos CBVEM",
        title: "Vive Cada Punto"
      },
      bento: {
        trainingTitle: "Entrenamientos",
        trainingText: "Sesiones personalizadas por niveles dirigidas por entrenadores profesionales.",
        trainingCta: "SABER MÁS",
        tournamentsTitle: "Torneos",
        tournamentsText: "Compite en nuestras ligas internas y torneos Open durante todo el año.",
        tournamentsCta: "CALENDARIO",
        campsTitle: "Camps & Eventos",
        campsText: "Experiencias inmersivas, clinics intensivos y eventos sociales exclusivos.",
        campsCta: "DESCUBRIR"
      },
      lead: {
        eyebrow: "Forma Parte de Nosotros",
        titleLine1: "SOLICITA TU",
        titleHighlight: "PRUEBA GRATIS",
        text: "Déjanos tus datos y un entrenador se pondrá en contacto contigo para asignarte el grupo que mejor se adapte a tu nivel.",
        bullet1: "Evaluación de nivel gratuita",
        bullet2: "Acceso a vestuarios y zona chill-out",
        bullet3: "Material técnico de alta gama incluido",
        whatsapp: "O escríbenos por WhatsApp"
      }
    },
    leadForm: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Ej. Marc Rovira",
      emailLabel: "Email",
      emailPlaceholder: "hola@ejemplo.com",
      phoneLabel: "Teléfono",
      levelLabel: "Selector de Nivel",
      levelBeginner: "Principiante (Cero)",
      levelStarter: "Iniciación (Sé jugar)",
      levelIntermediate: "Intermedio",
      levelAdvanced: "Avanzado / Pro",
      submit: "Enviar solicitud"
    },
    entrenamientos: {
      badge: "TEMPORADA 2026",
      heroTitleLine1: "ESCUELA Y GRUPOS DE",
      heroTitleLine2: "ENTRENAMIENTO",
      heroSubtitle:
        "Perfecciona tu técnica en las mejores playas con un sistema de entrenamiento adaptado a todos los niveles. Desde tus primeros pasos hasta la alta competición.",
      scheduleTitle: "Horarios Semanales",
      scheduleSubtitle: "Elige el horario que mejor se adapte a tu ritmo de vida.",
      ctaKnowLevel: "Contáctame para conocer tu nivel",
      levelBeginner: "Iniciación",
      levelIntermediate: "Intermedio",
      levelElite: "Élite",
      full: "Full",
      days: {
        monday: "Lunes",
        tuesday: "Martes",
        wednesday: "Miércoles",
        thursday: "Jueves",
        friday: "Viernes"
      },
      levelsTitle: "Nuestros Niveles",
      levels: {
        beginnerTitle: "Iniciación",
        beginnerText:
          "Aprende los fundamentos básicos: toque de dedos, antebrazos y saque. Perfecto para quienes nunca han jugado o llevan poco tiempo.",
        intermediateTitle: "Intermedio",
        intermediateText:
          "Mejora tu control de juego, táctica de campo y remate. Enfocado en jugadores con experiencia previa en pista o playa.",
        eliteTitle: "Avanzado / Élite",
        eliteText:
          "Entrenamiento de alto rendimiento. Preparación para torneos, sistemas defensivos complejos y perfeccionamiento técnico extremo."
      }
    },
    openTryouts: {
      badge: "Temporada 2027",
      title: "¡Abrimos plazas! Temporada 2027",
      subtitle: "Liga Nacional de Cataluña (Cat. Masculina y Femenina)",
      lookingFor: "¡Buscamos jugadores!",
      text: "Forma parte de los equipos de nuestro club y compite en la Liga Nacional.",
      requisitos: "Requisitos",
      req1: "Experiencia compitiendo",
      req2: "Compromiso",
      cta: "Quiero apuntarme",
      catTag: "(Cat. Masculina y Femenina)"
    },
    torneos: {
      badge: "TEMPORADA 2026",
      heroTitleLine1: "TORNEOS",
      heroTitleHighlight: "CBVEM",
      heroSubtitle:
        "La arena de El Masnou se convierte en el epicentro del voley playa nacional. Competición de alto nivel, música y el mejor ambiente de club.",
      ctaFullCalendar: "CALENDARIO COMPLETO",
      ctaRules: "REGLAMENTO",
      upcomingTitle: "Próximos Torneos",
      calendarCategory: "Calendario Competiciones",
      place: "Pista Central CBVEM",
      cta: "Inscribirse",
      names: {
        mixto: "MIXTO",
        mixtoBasico: "MIXTO BÁSICO",
        eliteFemenino: "ÉLITE FEMENINO",
        eliteMasculino: "ÉLITE MASCULINO"
      },
      winnersTitle: "Nuestros Ganadores",
      winnersSubtitle:
        "Celebramos el talento y el esfuerzo de los campeones de nuestras ligas y torneos pasados.",
      winners: {
        claudia: "CAMPEONAS ELITE OPEN MAYO",
        girona: "CAMPEONES 4X4 SPRING FEST",
        sergio: "MVP TEMPORADA INVIERNO",
        sandstorm: "CAMPEONES MIXTO INTERCLUB"
      },
      communityTitle: "Únete a la Comunidad",
      communityText:
        "Suscríbete para recibir notificaciones exclusivas de aperturas de inscripciones, torneos flash y eventos especiales en la playa.",
      newsletterPlaceholder: "TU EMAIL",
      newsletterButton: "SUSCRIBIRME"
    },
    eventosCamps: {
      badge: "EXPERIENCIAS PREMIUM",
      heroTitle: "CAMPS INTENSIVOS Y CLÍNICS",
      heroSubtitle:
        "Perfecciona tu técnica con entrenadores de élite en el entorno exclusivo de la costa del Maresme.",
      featuredBadge: "ÚLTIMAS 5 PLAZAS",
      featuredTitle: "CAMP TENERIFE 2027",
      featuredDate: "21 - 24 DE ENERO 2027",
      featuredText:
        "Inmersión total en Tenerife con doble sesión diaria, análisis de vídeo personalizado y preparación física específica para arena.",
      priceTriple: "/ habitación triple",
      priceDouble: "/ habitación doble",
      cta: "Apuntarse",
      clinicsTitle: "PRÓXIMOS CLÍNICS",
      clinicsSubtitle: "Sesiones intensivas con estrellas internacionales",
      viewFullCalendar: "VER CALENDARIO COMPLETO",
      clinic1Tag: "TÉCNICA DE ATAQUE",
      clinic1Title: "CLÍNIC CON JOAN FRANCESC",
      clinic1Text: "Domina el 'cut shot' y la potencia en red con el campeón nacional.",
      priceMembersLabel: "PRECIO SOCIOS",
      lastSpots: "ÚLTIMAS PLAZAS",
      clinic2Tag: "DEFENSA AVANZADA",
      clinic2Title: "BRAZILIAN DEFENSIVE STYLE",
      clinic2Text: "Aprende la lectura de juego y posicionamiento de la escuela brasileña.",
      dateLabel: "FECHA",
      clinic3Tag: "CAMP JUVENIL",
      clinic3Title: "ACADEMY WEEKEND",
      clinic3Text: "Fin de semana intensivo para jóvenes promesas (14-18 años).",
      priceLabel: "PRECIO",
      openRegistration: "INSCRIPCIÓN ABIERTA",
      whyTitle: "POR QUÉ NUESTROS CAMPS",
      why1Title: "Grupos reducidos",
      why1Text:
        "Trabajamos con grupos pequeños y organizados por nivel, para que cada jugador toque el balón muchas más veces, reciba correcciones individuales y progrese de verdad durante toda la semana.",
      why2Title: "Entrenadores profesionales",
      why2Text:
        "Nuestro equipo técnico está formado por entrenadores titulados y jugadores con recorrido real en competición, capaces de detectar el detalle que frena a cada jugador, corregirlo con cercanía y buen rollo.",
      why3Title: "Torneos, diversión y buen ambiente",
      why3Text:
        "Entre torneos internos, retos por equipos y juegos en la arena, cada día es distinto y muchos acaban llevándose, además de un mejor nivel, amigos y ganas de repetir.",
      ctaTitle: "¿QUIERES SER EL PRIMERO EN SABERLO?",
      ctaText:
        "Suscríbete para recibir notificaciones exclusivas sobre nuevos Camps, Clínics y ofertas de “Last Minute”.",
      newsletterPlaceholder: "TU CORREO ELECTRÓNICO",
      newsletterButton: "UNIRME A LA LISTA"
    }
  },
  en: {
    nav: {
      home: "Home",
      training: "Training",
      tournaments: "Tournaments",
      camps: "Camps & Events",
      cta: "BOOK A FREE CLASS"
    },
    footer: {
      tagline:
        "The go-to beach volleyball club in El Masnou. Passion, sport and Mediterranean lifestyle in every session.",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
      madeWith: "Made with passion in El Masnou"
    },
    languageSwitcher: {
      label: "Language",
      es: "Español",
      en: "English"
    },
    home: {
      eyebrow: "Premium Beach Life",
      titleLine1: "BEACH VOLLEY",
      titleHighlight: "EL MASNOU",
      subtitle:
        "Experience the energy of high-level competition in an exclusive setting by the Mediterranean. We build athletes, we build community.",
      ctaJoin: "JOIN THE CLUB",
      ctaSchedule: "VIEW SCHEDULE",
      hookTitle: "Court, Sun and Passion",
      hookText:
        "Located in the heart of El Masnou, our club offers first-class facilities for players of every level. From beginner classes to high-performance training, we blend the competitive spirit of beach volleyball with an unmatched social lifestyle.",
      collage: {
        eyebrow: "CBVEM Moments",
        title: "Live Every Point"
      },
      bento: {
        trainingTitle: "Training",
        trainingText: "Personalized sessions by level, led by professional coaches.",
        trainingCta: "LEARN MORE",
        tournamentsTitle: "Tournaments",
        tournamentsText: "Compete in our internal leagues and Open tournaments all year round.",
        tournamentsCta: "CALENDAR",
        campsTitle: "Camps & Events",
        campsText: "Immersive experiences, intensive clinics and exclusive social events.",
        campsCta: "DISCOVER"
      },
      lead: {
        eyebrow: "Become Part of Us",
        titleLine1: "REQUEST YOUR",
        titleHighlight: "FREE TRIAL",
        text: "Leave us your details and a coach will get in touch to place you in the group that best fits your level.",
        bullet1: "Free level assessment",
        bullet2: "Access to changing rooms and chill-out zone",
        bullet3: "High-end technical gear included",
        whatsapp: "Or message us on WhatsApp"
      }
    },
    leadForm: {
      nameLabel: "Full Name",
      namePlaceholder: "E.g. Marc Rovira",
      emailLabel: "Email",
      emailPlaceholder: "hello@example.com",
      phoneLabel: "Phone",
      levelLabel: "Level Selector",
      levelBeginner: "Beginner (None)",
      levelStarter: "Starter (I can play)",
      levelIntermediate: "Intermediate",
      levelAdvanced: "Advanced / Pro",
      submit: "Send request"
    },
    entrenamientos: {
      badge: "SEASON 2026",
      heroTitleLine1: "TRAINING SCHOOL AND",
      heroTitleLine2: "GROUP SESSIONS",
      heroSubtitle:
        "Perfect your technique on the best beaches with a training system adapted to every level. From your first steps to high-level competition.",
      scheduleTitle: "Weekly Schedule",
      scheduleSubtitle: "Choose the schedule that best fits your lifestyle.",
      ctaKnowLevel: "Contact me to find out your level",
      levelBeginner: "Beginner",
      levelIntermediate: "Intermediate",
      levelElite: "Elite",
      full: "Full",
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday"
      },
      levelsTitle: "Our Levels",
      levels: {
        beginnerTitle: "Beginner",
        beginnerText:
          "Learn the basics: finger sets, forearm passes and serving. Perfect for those who have never played or are just starting out.",
        intermediateTitle: "Intermediate",
        intermediateText:
          "Improve your ball control, court tactics and spiking. Aimed at players with prior indoor or beach experience.",
        eliteTitle: "Advanced / Elite",
        eliteText:
          "High-performance training. Tournament preparation, complex defensive systems and extreme technical refinement."
      }
    },
    openTryouts: {
      badge: "Season 2027",
      title: "Tryouts are open! Season 2027",
      subtitle: "Catalonia National League (Men's and Women's Cat.)",
      lookingFor: "We're looking for players!",
      text: "Become part of our club's teams and compete in the National League.",
      requisitos: "Requirements",
      req1: "Competitive experience",
      req2: "Commitment",
      cta: "I want to sign up",
      catTag: "(Men's and Women's Cat.)"
    },
    torneos: {
      badge: "SEASON 2026",
      heroTitleLine1: "TOURNAMENTS",
      heroTitleHighlight: "CBVEM",
      heroSubtitle:
        "The sand of El Masnou becomes the epicenter of national beach volleyball. Top-level competition, music and the best club atmosphere.",
      ctaFullCalendar: "FULL CALENDAR",
      ctaRules: "RULES",
      upcomingTitle: "Upcoming Tournaments",
      calendarCategory: "Competition Calendar",
      place: "CBVEM Central Court",
      cta: "Sign up",
      names: {
        mixto: "MIXED",
        mixtoBasico: "MIXED - BASIC",
        eliteFemenino: "WOMEN'S ELITE",
        eliteMasculino: "MEN'S ELITE"
      },
      winnersTitle: "Our Winners",
      winnersSubtitle: "We celebrate the talent and effort of the champions from our past leagues and tournaments.",
      winners: {
        claudia: "MAY ELITE OPEN CHAMPIONS",
        girona: "4X4 SPRING FEST CHAMPIONS",
        sergio: "WINTER SEASON MVP",
        sandstorm: "MIXED INTERCLUB CHAMPIONS"
      },
      communityTitle: "Join the Community",
      communityText:
        "Subscribe to receive exclusive notifications about registration openings, flash tournaments and special events on the beach.",
      newsletterPlaceholder: "YOUR EMAIL",
      newsletterButton: "SUBSCRIBE"
    },
    eventosCamps: {
      badge: "PREMIUM EXPERIENCES",
      heroTitle: "INTENSIVE CAMPS AND CLINICS",
      heroSubtitle: "Perfect your technique with elite coaches in the exclusive setting of the Maresme coast.",
      featuredBadge: "5 SPOTS LEFT",
      featuredTitle: "TENERIFE CAMP 2027",
      featuredDate: "JANUARY 21 - 24, 2027",
      featuredText:
        "Full immersion in Tenerife with two daily sessions, personalized video analysis and sand-specific physical preparation.",
      priceTriple: "/ triple room",
      priceDouble: "/ double room",
      cta: "Sign up",
      clinicsTitle: "UPCOMING CLINICS",
      clinicsSubtitle: "Intensive sessions with international stars",
      viewFullCalendar: "VIEW FULL CALENDAR",
      clinic1Tag: "ATTACK TECHNIQUE",
      clinic1Title: "CLINIC WITH JOAN FRANCESC",
      clinic1Text: "Master the cut shot and net power with the national champion.",
      priceMembersLabel: "MEMBER PRICE",
      lastSpots: "LAST SPOTS",
      clinic2Tag: "ADVANCED DEFENSE",
      clinic2Title: "BRAZILIAN DEFENSIVE STYLE",
      clinic2Text: "Learn game reading and positioning from the Brazilian school.",
      dateLabel: "DATE",
      clinic3Tag: "YOUTH CAMP",
      clinic3Title: "ACADEMY WEEKEND",
      clinic3Text: "Intensive weekend for young talent (ages 14-18).",
      priceLabel: "PRICE",
      openRegistration: "REGISTRATION OPEN",
      whyTitle: "WHY OUR CAMPS",
      why1Title: "SMALL GROUPS",
      why1Text: "A maximum of 6 students per court to guarantee individualized technical attention.",
      why2Title: "VIDEO ANALYSIS",
      why2Text: "Recorded sessions to correct technique in real time.",
      why3Title: "COMPLETE EXPERIENCE",
      why3Text: "Optional premium accommodation and healthy catering included.",
      ctaTitle: "WANT TO BE THE FIRST TO KNOW?",
      ctaText: "Subscribe to receive exclusive notifications about new Camps, Clinics and “Last Minute” offers.",
      newsletterPlaceholder: "YOUR EMAIL",
      newsletterButton: "JOIN THE LIST"
    }
  }
} as const;

export type TranslationTree = typeof translations.es;
