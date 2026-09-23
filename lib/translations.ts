export type Locale = "es" | "en" | "ca";

export const DEFAULT_LOCALE: Locale = "es";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      training: "Entrenamientos",
      tournaments: "Torneos",
      camps: "Camps y Eventos",
      cta: "RESERVAR CLASE GRATIS",
      bookingBarText: "Primera clase gratis",
      bookingBarCta: "RESERVAR",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
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
      en: "English",
      ca: "Català"
    },
    home: {
      eyebrow: "Premium Beach Life",
      mobileEyebrow: "Club de vóley playa · Maresme",
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
        whatsapp: "Escríbenos por WhatsApp"
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
      mobileHeroLine1: "ESCUELA Y",
      mobileHeroLine2: "GRUPOS DE",
      mobileHeroLine3: "ENTRENAMIENTO",
      heroSubtitle:
        "Perfecciona tu técnica en las mejores playas con un sistema de entrenamiento adaptado a todos los niveles. Desde tus primeros pasos hasta la alta competición.",
      scheduleTitle: "Horarios Semanales",
      scheduleSubtitle: "Elige el horario que mejor se adapte a tu ritmo de vida.",
      ctaKnowLevel: "Contáctame para conocer tu nivel",
      levelIniciacion: "Iniciación",
      levelIntermedio: "Intermedio",
      levelAvanzado: "Avanzado",
      levelCompeticion: "Competición",
      levelSub17: "Sub-17",
      onlyAvailable: "Solo con plaza",
      freeShort: "libres",
      filterAll: "Todos",
      emptyDayFiltered: "No hay grupos con ese filtro este día.",
      spotsComplete: "Completo",
      spotsAvailable: "Hay sitio",
      spotsUnitSingular: "plaza",
      spotsUnitPlural: "plazas",
      categoryFemenino: "Femenino",
      categoryMasculino: "Masculino",
      categoryMixto: "Mixto",
      categoryJuvenil: "Juvenil",
      days: {
        monday: "Lunes",
        tuesday: "Martes",
        wednesday: "Miércoles",
        thursday: "Jueves",
        friday: "Viernes"
      },
      daysShort: {
        monday: "Lun",
        tuesday: "Mar",
        wednesday: "Mié",
        thursday: "Jue",
        friday: "Vie"
      },
      levelsTitle: "Nuestros Niveles",
      levels: {
        iniciacionTitle: "Iniciación",
        iniciacionText:
          "Aprende los fundamentos básicos: toque de dedos, antebrazos y saque. Perfecto para quienes nunca han jugado o llevan poco tiempo.",
        intermedioTitle: "Intermedio",
        intermedioText:
          "Mejora tu control de juego, táctica de campo y remate. Enfocado en jugadores con experiencia previa en pista o playa.",
        avanzadoTitle: "Avanzado",
        avanzadoText:
          "Ritmo competitivo, táctica situacional y ajustes por pareja. Para jugadores consolidados que buscan dar el salto de calidad.",
        competicionTitle: "Competición",
        competicionText:
          "Entrenamiento de alto rendimiento. Preparación para torneos, sistemas defensivos complejos y perfeccionamiento técnico extremo.",
        sub17Title: "Sub-17",
        sub17Text:
          "Grupo juvenil para jugadores de hasta 17 años, con una progresión técnica y física adaptada a su edad."
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
      comingSoon: "PRÓXIMAMENTE",
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
      coachesTitle: "Nuestros Entrenadores",
      coachesSubtitle: "El equipo que forma a nuestros jugadores dentro y fuera de la arena.",
      coaches: {
        davidRole: "Socio - Entrenador",
        oscarRole: "Entrenador"
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
      featuredBadge: "ÚLTIMOS DÍAS DE EARLY BIRD",
      featuredTitle: "CAMP TENERIFE 2027",
      featuredDate: "21 - 24 DE ENERO 2027",
      featuredText:
        "Inmersión total en Tenerife con doble sesión diaria, análisis de vídeo personalizado y preparación física específica para arena.",
      priceTriple: "/ habitación triple",
      priceDouble: "/ habitación doble",
      cta: "Apuntarse",
      clinicsTitle: "PRÓXIMOS CLÍNICS",
      clinicsSubtitle: "Sesiones intensivas con estrellas internacionales",
      clinicsCtaText: "¿Quieres hacer tu camp o clínic en la sede de BVM?",
      clinicsCtaButton: "Hablemos",
      dateLabel: "FECHA",
      julianTitle: "CLÍNIC CON JULIAN",
      julianText: "Próximamente abriremos las inscripciones para este clínic.",
      julianDate: "20 JUNIO",
      comingSoon: "PRÓXIMAMENTE",
      tbaTitle: "POR ANUNCIAR",
      tbaText: "Estamos cerrando la fecha y el formador de este clínic.",
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
      cta: "BOOK A FREE CLASS",
      bookingBarText: "Free first class",
      bookingBarCta: "BOOK",
      openMenu: "Open menu",
      closeMenu: "Close menu"
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
      en: "English",
      ca: "Català"
    },
    home: {
      eyebrow: "Premium Beach Life",
      mobileEyebrow: "Beach volley club · Maresme",
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
        whatsapp: "Message us on WhatsApp"
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
      mobileHeroLine1: "TRAINING",
      mobileHeroLine2: "SCHOOL AND",
      mobileHeroLine3: "GROUP SESSIONS",
      heroSubtitle:
        "Perfect your technique on the best beaches with a training system adapted to every level. From your first steps to high-level competition.",
      scheduleTitle: "Weekly Schedule",
      scheduleSubtitle: "Choose the schedule that best fits your lifestyle.",
      ctaKnowLevel: "Contact me to find out your level",
      levelIniciacion: "Beginner",
      levelIntermedio: "Intermediate",
      levelAvanzado: "Advanced",
      levelCompeticion: "Competition",
      levelSub17: "U-17",
      onlyAvailable: "Open spots only",
      freeShort: "free",
      filterAll: "All",
      emptyDayFiltered: "No groups match this filter today.",
      spotsComplete: "Full",
      spotsAvailable: "Open spot",
      spotsUnitSingular: "spot",
      spotsUnitPlural: "spots",
      categoryFemenino: "Women's",
      categoryMasculino: "Men's",
      categoryMixto: "Mixed",
      categoryJuvenil: "Youth",
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday"
      },
      daysShort: {
        monday: "Mon",
        tuesday: "Tue",
        wednesday: "Wed",
        thursday: "Thu",
        friday: "Fri"
      },
      levelsTitle: "Our Levels",
      levels: {
        iniciacionTitle: "Beginner",
        iniciacionText:
          "Learn the basics: finger sets, forearm passes and serving. Perfect for those who have never played or are just starting out.",
        intermedioTitle: "Intermediate",
        intermedioText:
          "Improve your ball control, court tactics and spiking. Aimed at players with prior indoor or beach experience.",
        avanzadoTitle: "Advanced",
        avanzadoText:
          "Competitive pace, situational tactics and pair-specific adjustments. For consolidated players looking to level up.",
        competicionTitle: "Competition",
        competicionText:
          "High-performance training. Tournament preparation, complex defensive systems and extreme technical refinement.",
        sub17Title: "U-17",
        sub17Text: "Youth group for players up to 17, with a technical and physical progression adapted to their age."
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
      comingSoon: "COMING SOON",
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
      coachesTitle: "Our Coaches",
      coachesSubtitle: "The team that shapes our players on and off the sand.",
      coaches: {
        davidRole: "Partner - Coach",
        oscarRole: "Coach"
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
      featuredBadge: "LAST DAYS OF EARLY BIRD",
      featuredTitle: "TENERIFE CAMP 2027",
      featuredDate: "JANUARY 21 - 24, 2027",
      featuredText:
        "Full immersion in Tenerife with two daily sessions, personalized video analysis and sand-specific physical preparation.",
      priceTriple: "/ triple room",
      priceDouble: "/ double room",
      cta: "Sign up",
      clinicsTitle: "UPCOMING CLINICS",
      clinicsSubtitle: "Intensive sessions with international stars",
      clinicsCtaText: "Want to host your camp or clinic at the BVM venue?",
      clinicsCtaButton: "Let's talk",
      dateLabel: "DATE",
      julianTitle: "CLINIC WITH JULIAN",
      julianText: "Registration for this clinic will open soon.",
      julianDate: "JUNE 20",
      comingSoon: "COMING SOON",
      tbaTitle: "TO BE ANNOUNCED",
      tbaText: "We're finalizing the date and coach for this clinic.",
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
  },
  ca: {
    nav: {
      home: "Inici",
      training: "Entrenaments",
      tournaments: "Torneigs",
      camps: "Camps i Esdeveniments",
      cta: "RESERVA CLASSE GRATUÏTA",
      bookingBarText: "Primera classe gratuïta",
      bookingBarCta: "RESERVA",
      openMenu: "Obrir menú",
      closeMenu: "Tancar menú"
    },
    footer: {
      tagline:
        "El club referent de vòlei platja a El Masnou. Passió, esport i estil de vida mediterrani a cada entrenament.",
      explore: "Explora",
      contact: "Contacte",
      rights: "Tots els drets reservats.",
      madeWith: "Fet amb passió a El Masnou"
    },
    languageSwitcher: {
      label: "Idioma",
      es: "Español",
      en: "English",
      ca: "Català"
    },
    home: {
      eyebrow: "Premium Beach Life",
      mobileEyebrow: "Club de vòlei platja · Maresme",
      titleLine1: "BEACH VOLLEY",
      titleHighlight: "EL MASNOU",
      subtitle:
        "Viu l'energia de la competició d'alt nivell en un entorn exclusiu davant del Mediterrani. Formem atletes, construïm comunitat.",
      ctaJoin: "UNEIX-TE AL CLUB",
      ctaSchedule: "VEURE HORARIS",
      hookTitle: "Pista, Sol i Passió",
      hookText:
        "Situat al cor d'El Masnou, el nostre club ofereix instal·lacions de primer nivell per a jugadors de tots els nivells. Des de classes per a principiants fins a entrenaments d'alt rendiment, fusionem l'esperit competitiu del vòlei platja amb un estil de vida social inigualable.",
      collage: {
        eyebrow: "Moments CBVEM",
        title: "Viu Cada Punt"
      },
      bento: {
        trainingTitle: "Entrenaments",
        trainingText: "Sessions personalitzades per nivells dirigides per entrenadors professionals.",
        trainingCta: "SABER-NE MÉS",
        tournamentsTitle: "Torneigs",
        tournamentsText: "Competeix a les nostres lligues internes i torneigs Open durant tot l'any.",
        tournamentsCta: "CALENDARI",
        campsTitle: "Camps i Esdeveniments",
        campsText: "Experiències immersives, clínics intensius i esdeveniments socials exclusius.",
        campsCta: "DESCOBRIR"
      },
      lead: {
        eyebrow: "Forma Part de Nosaltres",
        titleLine1: "SOL·LICITA LA TEVA",
        titleHighlight: "PROVA GRATUÏTA",
        text: "Deixa'ns les teves dades i un entrenador es posarà en contacte amb tu per assignar-te el grup que millor s'adapti al teu nivell.",
        bullet1: "Avaluació de nivell gratuïta",
        bullet2: "Accés a vestidors i zona chill-out",
        bullet3: "Material tècnic d'alta gamma inclòs",
        whatsapp: "Escriu-nos per WhatsApp"
      }
    },
    leadForm: {
      nameLabel: "Nom Complet",
      namePlaceholder: "Ex. Marc Rovira",
      emailLabel: "Email",
      emailPlaceholder: "hola@exemple.com",
      phoneLabel: "Telèfon",
      levelLabel: "Selector de Nivell",
      levelBeginner: "Principiant (Zero)",
      levelStarter: "Iniciació (Sé jugar)",
      levelIntermediate: "Intermedi",
      levelAdvanced: "Avançat / Pro",
      submit: "Enviar sol·licitud"
    },
    entrenamientos: {
      badge: "TEMPORADA 2026",
      heroTitleLine1: "ESCOLA I GRUPS DE",
      heroTitleLine2: "ENTRENAMENT",
      mobileHeroLine1: "ESCOLA I",
      mobileHeroLine2: "GRUPS DE",
      mobileHeroLine3: "ENTRENAMENT",
      heroSubtitle:
        "Perfecciona la teva tècnica a les millors platges amb un sistema d'entrenament adaptat a tots els nivells. Des dels teus primers passos fins a l'alta competició.",
      scheduleTitle: "Horaris Setmanals",
      scheduleSubtitle: "Tria l'horari que millor s'adapti al teu ritme de vida.",
      ctaKnowLevel: "Contacta'm per conèixer el teu nivell",
      levelIniciacion: "Iniciació",
      levelIntermedio: "Intermedi",
      levelAvanzado: "Avançat",
      levelCompeticion: "Competició",
      levelSub17: "Sub-17",
      onlyAvailable: "Només amb plaça",
      freeShort: "lliures",
      filterAll: "Tots",
      emptyDayFiltered: "No hi ha grups amb aquest filtre aquest dia.",
      spotsComplete: "Complet",
      spotsAvailable: "Hi ha lloc",
      spotsUnitSingular: "plaça",
      spotsUnitPlural: "places",
      categoryFemenino: "Femení",
      categoryMasculino: "Masculí",
      categoryMixto: "Mixt",
      categoryJuvenil: "Juvenil",
      days: {
        monday: "Dilluns",
        tuesday: "Dimarts",
        wednesday: "Dimecres",
        thursday: "Dijous",
        friday: "Divendres"
      },
      daysShort: {
        monday: "Dl",
        tuesday: "Dt",
        wednesday: "Dc",
        thursday: "Dj",
        friday: "Dv"
      },
      levelsTitle: "Els Nostres Nivells",
      levels: {
        iniciacionTitle: "Iniciació",
        iniciacionText:
          "Aprèn els fonaments bàsics: toc de dits, avantbraços i servei. Perfecte per a qui mai ha jugat o porta poc temps.",
        intermedioTitle: "Intermedi",
        intermedioText:
          "Millora el teu control de joc, tàctica de camp i rematada. Enfocat a jugadors amb experiència prèvia en pista o platja.",
        avanzadoTitle: "Avançat",
        avanzadoText:
          "Ritme competitiu, tàctica situacional i ajustos per parella. Per a jugadors consolidats que busquen fer el salt de qualitat.",
        competicionTitle: "Competició",
        competicionText:
          "Entrenament d'alt rendiment. Preparació per a torneigs, sistemes defensius complexos i perfeccionament tècnic extrem.",
        sub17Title: "Sub-17",
        sub17Text:
          "Grup juvenil per a jugadors fins a 17 anys, amb una progressió tècnica i física adaptada a la seva edat."
      }
    },
    openTryouts: {
      badge: "Temporada 2027",
      title: "Obrim places! Temporada 2027",
      subtitle: "Lliga Nacional de Catalunya (Cat. Masculina i Femenina)",
      lookingFor: "Busquem jugadors!",
      text: "Forma part dels equips del nostre club i competeix a la Lliga Nacional.",
      requisitos: "Requisits",
      req1: "Experiència competint",
      req2: "Compromís",
      cta: "Vull apuntar-me",
      catTag: "(Cat. Masculina i Femenina)"
    },
    torneos: {
      badge: "TEMPORADA 2026",
      heroTitleLine1: "TORNEIGS",
      heroTitleHighlight: "CBVEM",
      heroSubtitle:
        "La sorra d'El Masnou es converteix en l'epicentre del vòlei platja nacional. Competició d'alt nivell, música i el millor ambient de club.",
      ctaFullCalendar: "CALENDARI COMPLET",
      ctaRules: "REGLAMENT",
      upcomingTitle: "Pròxims Torneigs",
      comingSoon: "PRÒXIMAMENT",
      calendarCategory: "Calendari Competicions",
      place: "Pista Central CBVEM",
      cta: "Inscriure's",
      names: {
        mixto: "MIXT",
        mixtoBasico: "MIXT BÀSIC",
        eliteFemenino: "ÈLITE FEMENINA",
        eliteMasculino: "ÈLITE MASCULINA"
      },
      winnersTitle: "Els Nostres Guanyadors",
      winnersSubtitle:
        "Celebrem el talent i l'esforç dels campions de les nostres lligues i torneigs passats.",
      winners: {
        claudia: "CAMPIONES ELITE OPEN MAIG",
        girona: "CAMPIONS 4X4 SPRING FEST",
        sergio: "MVP TEMPORADA HIVERN",
        sandstorm: "CAMPIONS MIXT INTERCLUB"
      },
      coachesTitle: "Els Nostres Entrenadors",
      coachesSubtitle: "L'equip que forma els nostres jugadors dins i fora de la sorra.",
      coaches: {
        davidRole: "Soci - Entrenador",
        oscarRole: "Entrenador"
      },
      communityTitle: "Uneix-te a la Comunitat",
      communityText:
        "Subscriu-te per rebre notificacions exclusives d'obertures d'inscripcions, torneigs flash i esdeveniments especials a la platja.",
      newsletterPlaceholder: "EL TEU EMAIL",
      newsletterButton: "SUBSCRIURE'M"
    },
    eventosCamps: {
      badge: "EXPERIÈNCIES PREMIUM",
      heroTitle: "CAMPS INTENSIUS I CLÍNICS",
      heroSubtitle:
        "Perfecciona la teva tècnica amb entrenadors d'elit a l'entorn exclusiu de la costa del Maresme.",
      featuredBadge: "ÚLTIMS DIES D'EARLY BIRD",
      featuredTitle: "CAMP TENERIFE 2027",
      featuredDate: "21 - 24 DE GENER 2027",
      featuredText:
        "Immersió total a Tenerife amb doble sessió diària, anàlisi de vídeo personalitzat i preparació física específica per a sorra.",
      priceTriple: "/ habitació triple",
      priceDouble: "/ habitació doble",
      cta: "Apuntar-se",
      clinicsTitle: "PRÒXIMS CLÍNICS",
      clinicsSubtitle: "Sessions intensives amb estrelles internacionals",
      clinicsCtaText: "Vols fer el teu camp o clínic a la seu de BVM?",
      clinicsCtaButton: "Parlem",
      dateLabel: "DATA",
      julianTitle: "CLÍNIC AMB JULIAN",
      julianText: "Properament obrirem les inscripcions per a aquest clínic.",
      julianDate: "20 DE JUNY",
      comingSoon: "PROPERAMENT",
      tbaTitle: "PER ANUNCIAR",
      tbaText: "Estem tancant la data i el formador d'aquest clínic.",
      whyTitle: "PER QUÈ ELS NOSTRES CAMPS",
      why1Title: "Grups reduïts",
      why1Text:
        "Treballem amb grups petits i organitzats per nivell, perquè cada jugador toqui la pilota moltes més vegades, rebi correccions individuals i progressi de veritat durant tota la setmana.",
      why2Title: "Entrenadors professionals",
      why2Text:
        "El nostre equip tècnic està format per entrenadors titulats i jugadors amb recorregut real en competició, capaços de detectar el detall que frena cada jugador, corregir-lo amb proximitat i bon rotllo.",
      why3Title: "Torneigs, diversió i bon ambient",
      why3Text:
        "Entre torneigs interns, reptes per equips i jocs a la sorra, cada dia és diferent i molts acaben emportant-se, a més d'un millor nivell, amics i ganes de repetir.",
      ctaTitle: "VOLS SER EL PRIMER A SABER-HO?",
      ctaText:
        "Subscriu-te per rebre notificacions exclusives sobre nous Camps, Clínics i ofertes de \"Last Minute\".",
      newsletterPlaceholder: "EL TEU CORREU ELECTRÒNIC",
      newsletterButton: "UNIR-ME A LA LLISTA"
    }
  }
} as const;

export type TranslationTree = typeof translations.es;
