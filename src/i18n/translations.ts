export type Lang = "en" | "es";

export type Dict = {
  nav: { why: string; plans: string; testimonials: string; b2b: string; download: string; cta: string };
  hero: {
    badge: string;
    title1: string; titleAccent: string; title2: string; title3: string;
    subtitle: string;
    ctaPrimary: string; ctaSecondary: string;
    metaRating: string; metaDevs: string; metaOffline: string;
  };
  problem: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    problemTitle: string; problemItems: string[];
    solutionTitle: string; solutionItems: string[];
  };
  plans: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    free: { tier: string; name: string; tagline: string; price: string; features: string[]; cta: string };
    pro: { tier: string; name: string; tagline: string; price: string; features: string[]; cta: string; popular: string };
    premium: { tier: string; name: string; tagline: string; price: string; features: string[]; cta: string };
  };
  testimonials: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  b2b: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    cards: { title: string; items: string[] }[];
  };
  cta: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    button: string;
    placeholder: string; submit: string; note: string;
    toastTitle: string; toastDesc: string;
  };
  footer: { tagline: string; privacy: string };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: { why: "Why AlPy", plans: "Plans", testimonials: "Testimonials", b2b: "B2B", download: "Download", cta: "Google Play" },
    hero: {
      badge: "Now launching · Android",
      title1: "Your ", titleAccent: "Python", title2: " studio.", title3: "Anywhere you go.",
      subtitle: "AlPy is the only mobile IDE that protects your productivity. Native Python 3.11, fully offline, with the entire data-science arsenal in your pocket.",
      ctaPrimary: "Get it on Google Play", ctaSecondary: "See plans",
      metaRating: "★ 4.8 on Play Store", metaDevs: "1,200+ developers", metaOffline: "100% offline",
    },
    problem: {
      eyebrow: "The only mobile IDE that protects your productivity",
      title1: "Built for devs who ", titleAccent: "don't settle", titleDot: ".",
      subtitle: "Coding on your phone is no longer a workaround. AlPy delivers professional power, offline and friction-free.",
      problemTitle: "The problem",
      problemItems: [
        "Tired of slow web IDEs?",
        "Frustrated by generic keyboards?",
        "You need a professional, offline and intelligent tool.",
      ],
      solutionTitle: "The AlPy solution",
      solutionItems: [
        "Elite offline power",
        "Smart Tab — intelligent autocomplete",
        "Unhackable security with Grace Token",
      ],
    },
    plans: {
      eyebrow: "Plans",
      title1: "Choose your level of ", titleAccent: "power", titleDot: ".",
      subtitle: "Start free. Upgrade when you need to. Cancel anytime.",
      free: {
        tier: "AlPy Free", name: "Your learning tool",
        tagline: "Start coding Python on Android with zero barriers.",
        price: "Free",
        features: [
          "Native Python 3.11 engine (offline)",
          "Async input (no lag)",
          "Free cloud sync",
          "Guest mode — use without an account, save locally",
          "Bonus: 30s ad for one premium run",
        ],
        cta: "Download free",
      },
      pro: {
        tier: "AlPy Pro", name: "The full data-science arsenal",
        tagline: "Everything a pro dev needs in their pocket.",
        price: "$.../mo",
        features: [
          "Everything in FREE, plus:",
          "10 heavy libraries offline: NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl, Faker",
          "3 network executions per day",
          "Priority support",
        ],
        cta: "Unlock your potential",
        popular: "Most popular",
      },
      premium: {
        tier: "AlPy Premium", name: "Unlimited experience. Maximum power.",
        tagline: "The ultimate studio — no ceiling, no friction.",
        price: "$.../mo",
        features: [
          "Everything in PRO, plus:",
          "UNLIMITED network usage",
          "AI code assistance",
          "Top-priority support",
        ],
        cta: "The ultimate studio",
      },
    },
    testimonials: {
      eyebrow: "Loved by builders",
      title1: "Real ", titleAccent: "progress", titleDot: ", real devs.",
      subtitle: "What people are building — and how their thinking has sharpened — with AlPy in their pocket.",
      items: [
        {
          quote: "I went from copy-pasting on a laptop to actually thinking in Python on the bus. My logic got sharper in two weeks.",
          name: "María Restrepo", role: "CS student · Medellín",
        },
        {
          quote: "Finally a mobile IDE that doesn't lie to me. Pandas runs offline and I ship small data scripts during commute.",
          name: "Daniel Ortega", role: "Data analyst · CDMX",
        },
        {
          quote: "I teach a bootcamp and AlPy unblocked the students who don't own a laptop. Their problem-solving improved fast.",
          name: "Lucía Fernández", role: "Bootcamp instructor · Madrid",
        },
      ],
    },
    b2b: {
      eyebrow: "B2B & academic licensing",
      title1: "AlPy for ", titleAccent: "teams and classrooms", titleDot: ".",
      subtitle: "Bulk packs for schools and bootcamps. Microtransactions to automate what your team repeats every week.",
      cards: [
        { title: "Bootcamps & schools", items: ["Bulk per-student licensing", "Usage and progress reports", "Guided onboarding"] },
        { title: "Data teams", items: ["Full Premium for your squad", "Optional SSO", "SLA and dedicated support"] },
        { title: "Microtransactions", items: ["Ready-to-use automation templates", "Internal store for common flows", "One-time payment, no subscription"] },
      ],
    },
    cta: {
      eyebrow: "Final call",
      title1: "Data science ", titleAccent: "in your pocket", titleDot: ".",
      subtitle: "Download AlPy today. Or subscribe to hear about new releases first.",
      button: "Get it on Google Play",
      placeholder: "you@email.dev", submit: "Notify me",
      note: "No spam. Only meaningful releases.",
      toastTitle: "You're in!", toastDesc: "We'll let you know as soon as there's AlPy news.",
    },
    footer: { tagline: "Your Python studio.", privacy: "Privacy" },
  },
  es: {
    nav: { why: "¿Por qué AlPy?", plans: "Planes", testimonials: "Testimonios", b2b: "B2B", download: "Descargar", cta: "Google Play" },
    hero: {
      badge: "Lanzamiento · Android",
      title1: "Tu estudio de ", titleAccent: "Python", title2: ".", title3: "En cualquier lugar.",
      subtitle: "AlPy es el único IDE móvil que blinda tu productividad. Motor Python 3.11 nativo, offline, con todo el arsenal de ciencia de datos en tu bolsillo.",
      ctaPrimary: "Descargar en Google Play", ctaSecondary: "Ver planes",
      metaRating: "★ 4.8 en Play Store", metaDevs: "+1.200 desarrolladores", metaOffline: "100% offline",
    },
    problem: {
      eyebrow: "El único IDE móvil que blinda tu productividad",
      title1: "Hecho para devs que ", titleAccent: "no se conforman", titleDot: ".",
      subtitle: "Programar en el celular dejó de ser un parche. AlPy trae potencia profesional, offline y a prueba de fricción.",
      problemTitle: "El problema",
      problemItems: [
        "¿Cansado de IDEs web lentos?",
        "¿Te frustras con teclados genéricos?",
        "Necesitas una herramienta profesional, offline e inteligente.",
      ],
      solutionTitle: "La solución AlPy",
      solutionItems: [
        "Potencia offline de élite",
        "Smart Tab — autocompletado inteligente",
        "Seguridad inhackeable con Token de Gracia",
      ],
    },
    plans: {
      eyebrow: "Planes",
      title1: "Elige tu nivel de ", titleAccent: "poder", titleDot: ".",
      subtitle: "Empieza gratis. Sube cuando lo necesites. Cancela cuando quieras.",
      free: {
        tier: "AlPy Free", name: "Tu herramienta de aprendizaje",
        tagline: "Empieza a programar Python en Android sin barreras.",
        price: "Gratis",
        features: [
          "Motor Python 3.11 nativo (offline)",
          "Async Input (sin lag)",
          "Sincronización en la nube libre",
          "Modo invitado: úsalo sin cuenta, guarda en local",
          "Bonus: anuncio de 30s para una ejecución premium",
        ],
        cta: "Descargar gratis",
      },
      pro: {
        tier: "AlPy Pro", name: "El arsenal completo de ciencia de datos",
        tagline: "Todo lo que un dev profesional necesita en su bolsillo.",
        price: "$.../mes",
        features: [
          "Todo en FREE, más:",
          "10 librerías pesadas offline: NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl, Faker",
          "3 ejecuciones de red al día",
          "Soporte prioritario",
        ],
        cta: "Desbloquea tu potencial",
        popular: "Más popular",
      },
      premium: {
        tier: "AlPy Premium", name: "Experiencia ilimitada. Máxima potencia.",
        tagline: "El estudio definitivo, sin techo ni fricciones.",
        price: "$.../mes",
        features: [
          "Todo en PRO, más:",
          "Usos de red ILIMITADOS",
          "IA de asistencia de código",
          "Máxima prioridad de soporte",
        ],
        cta: "El estudio definitivo",
      },
    },
    testimonials: {
      eyebrow: "Querido por quienes construyen",
      title1: "Progreso ", titleAccent: "real", titleDot: ", devs reales.",
      subtitle: "Lo que están construyendo — y cómo afilaron su pensamiento — con AlPy en el bolsillo.",
      items: [
        {
          quote: "Pasé de copiar y pegar en el laptop a pensar en Python en el bus. Mi lógica se afinó en dos semanas.",
          name: "María Restrepo", role: "Estudiante de CS · Medellín",
        },
        {
          quote: "Por fin un IDE móvil que no me miente. Pandas corre offline y publico scripts pequeños en el camino al trabajo.",
          name: "Daniel Ortega", role: "Analista de datos · CDMX",
        },
        {
          quote: "Doy un bootcamp y AlPy desbloqueó a quienes no tienen laptop. Su resolución de problemas mejoró rapidísimo.",
          name: "Lucía Fernández", role: "Instructora bootcamp · Madrid",
        },
      ],
    },
    b2b: {
      eyebrow: "B2B y licencias académicas",
      title1: "AlPy para ", titleAccent: "equipos y aulas", titleDot: ".",
      subtitle: "Paquetes masivos para escuelas y bootcamps. Microtransacciones para automatizar lo que tu equipo repite cada semana.",
      cards: [
        { title: "Bootcamps y escuelas", items: ["Licencias en bloque por estudiante", "Reportes de uso y avance", "Onboarding asistido"] },
        { title: "Equipos de datos", items: ["Premium completo para tu squad", "SSO opcional", "SLA y soporte dedicado"] },
        { title: "Microtransacciones", items: ["Plantillas de automatización listas", "Tienda interna para flujos comunes", "Pago único, sin suscripción"] },
      ],
    },
    cta: {
      eyebrow: "Llamada final",
      title1: "Ciencia de datos ", titleAccent: "en tu bolsillo", titleDot: ".",
      subtitle: "Descarga AlPy hoy. O suscríbete para enterarte primero de cada lanzamiento.",
      button: "Descargar en Google Play",
      placeholder: "tu@email.dev", submit: "Avísame",
      note: "Sin spam. Solo lanzamientos importantes.",
      toastTitle: "¡Listo!", toastDesc: "Te avisaremos en cuanto haya novedades de AlPy.",
    },
    footer: { tagline: "Tu estudio de Python.", privacy: "Privacidad" },
  },
};
