export type Lang = "en" | "es";

export interface BlogPostT {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  body: { h?: string; p?: string; list?: string[] }[];
}

export type Dict = {
  nav: {
    home: string; how: string; plans: string; useCases: string;
    community: string; faq: string; blog: string; contact: string; cta: string;
    why: string; testimonials: string; b2b: string; download: string;
  };
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
  how: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    steps: { step: string; title: string; desc: string }[];
  };
  useCases: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    items: { title: string; desc: string; bullets: string[] }[];
  };
  comparison: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    headerAlpy: string; headerOther: string; headerWeb: string;
    rows: { feature: string; alpy: string; other: string; web: string }[];
  };
  faq: {
    eyebrow: string; title1: string; titleAccent: string; titleDot: string;
    subtitle: string;
    items: { q: string; a: string }[];
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
  contact: {
    eyebrow: string; title: string; subtitle: string;
    nameLabel: string; emailLabel: string; topicLabel: string; messageLabel: string;
    topics: string[];
    submit: string; note: string;
    toastTitle: string; toastDesc: string;
    infoTitle: string; infoEmail: string; infoSales: string; infoSupport: string;
  };
  blogIndex: {
    eyebrow: string; title: string; subtitle: string; readMore: string; backHome: string;
  };
  blog: BlogPostT[];
  footer: { tagline: string; privacy: string; nav: string; resources: string; company: string; rights: string };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: {
      who: { title: string; body: string };
      data: { title: string; body: string };
      purpose: { title: string; body: string };
      storage: { title: string; body: string };
      rights: { title: string; body: string };
      cookies: { title: string; body: string };
      changes: { title: string; body: string };
      contact: { title: string; body: string };
    };
  };
  seo: {
    home: { title: string; description: string };
    how: { title: string; description: string };
    plans: { title: string; description: string };
    useCases: { title: string; description: string };
    blog: { title: string; description: string };
    contact: { title: string; description: string };
  };
};

const enBlog: BlogPostT[] = [
  {
    slug: "lanzar-mvp-rapido",
    title: "How to launch a Python MVP from your phone in 7 days",
    description: "A pragmatic 7-day playbook to ship a working Python prototype using only an Android device and AlPy.",
    date: "2026-04-12", readTime: "6 min", tag: "Playbook",
    body: [
      { p: "You don't need a $2,000 laptop to validate an idea. With a native Python engine in your pocket, you can move from concept to working script in under a week — even during commutes." },
      { h: "Day 1–2 · Define the smallest valuable script" },
      { p: "Most MVPs die from over-scoping. Pick one input, one transformation, one output. Write it as a function signature before opening the editor." },
      { h: "Day 3–4 · Build the core logic offline" },
      { p: "AlPy ships Python 3.11 with NumPy and Pandas locally. Use them to model the real data you'd see in production. No internet, no excuses." },
      { h: "Day 5 · Wire a simple interface" },
      { list: ["CLI prompts for the first 10 users", "CSV in / CSV out for batch tests", "Charts via Matplotlib for instant feedback"] },
      { h: "Day 6 · Show it to 5 humans" },
      { p: "Demo on the same phone you built it on. The raw, mobile-first context forces honesty: if it works on a 6-inch screen on the bus, it works anywhere." },
      { h: "Day 7 · Decide" },
      { p: "Kill it, pivot it, or scale it. The point of a 7-day MVP is to earn the right to spend the next 7 weeks on something." },
    ],
  },
  {
    slug: "errores-al-crear-una-app",
    title: "5 mistakes that kill mobile-first apps before launch",
    description: "Patterns we see weekly in indie projects — and how to avoid them when you're shipping from a phone.",
    date: "2026-03-28", readTime: "5 min", tag: "Lessons",
    body: [
      { h: "1. Building offline-last instead of offline-first" },
      { p: "If your app needs WiFi to feel alive, you've already lost half your audience. Cache the boring path, sync the rest." },
      { h: "2. Hiding the value behind a signup wall" },
      { p: "Guest mode converts better than email gates for tools. Let people taste the product, then ask." },
      { h: "3. Treating the phone as a small desktop" },
      { p: "Re-designing — not resizing — for thumbs is the entire game. One-tap actions beat two-tap menus every time." },
      { h: "4. Ignoring the keyboard" },
      { p: "Generic keyboards make any code editor feel hostile. Custom suggestion bars (Smart Tab in AlPy) cut typing by 40%." },
      { h: "5. Skipping a real pricing page on day one" },
      { p: "If you can't articulate price tiers, you haven't articulated value. Write the pricing page before the landing." },
    ],
  },
  {
    slug: "cuanto-cuesta-desarrollar-software",
    title: "What it really costs to develop software in 2026",
    description: "An honest breakdown of solo, freelance and agency pricing — and where mobile-first tools cut the bill in half.",
    date: "2026-02-19", readTime: "7 min", tag: "Economics",
    body: [
      { p: "Software cost is mostly labor. Labor is mostly time. So whoever shortens time wins." },
      { h: "Solo · $0–$300/mo" },
      { p: "Tools, hosting, one paid IDE, coffee. With a mobile-native stack like AlPy, the laptop becomes optional, dropping CapEx to zero." },
      { h: "Freelance · $5k–$25k per MVP" },
      { p: "Two to six weeks of focused work. Half goes into requirements, the rest into building the same five screens you've already built ten times." },
      { h: "Agency · $40k–$150k+" },
      { p: "Discovery, design system, sprints, QA, handover. Worth it for regulated industries; overkill for a side bet." },
      { h: "Where mobile-first changes the math" },
      { list: ["No new hardware to validate ideas", "Fewer context switches → faster iteration", "Shorter feedback loops with non-technical stakeholders"] },
    ],
  },
  {
    slug: "coding-without-wifi",
    title: "Coding without WiFi: how AlPy solves the real problem",
    description: "Internet outages, commutes, field work — the dev community has been complaining about WiFi dependency for years. Here's why AlPy is the answer.",
    date: "2026-05-14", readTime: "5 min", tag: "Productivity",
    body: [
      { p: "Ask any developer who commutes by train, works in a basement office, or travels for fieldwork: the single most frustrating moment is opening your IDE and seeing 'connection lost'. Your tools were designed for desktops with broadband. Your life isn't." },
      { h: "The complaint that never goes away" },
      { p: "Stack Overflow surveys have shown for years that connection reliability ranks among the top daily frustrations for developers outside the 'always-online' bubble. Web-based IDEs like Replit or Google Colab are powerful — but the moment WiFi drops, so does your work session." },
      { h: "Why 'partial offline' is a lie" },
      { p: "Many tools market themselves as offline-capable. In practice they cache the UI but still phone home to execute code. If the server doesn't respond, your run fails. AlPy is different: the Python 3.11 runtime lives entirely on your device." },
      { h: "What 100% offline actually enables" },
      { list: [
        "Code on a 6-hour flight without paying for inflight WiFi",
        "Run data scripts in the field where 4G doesn't reach",
        "Keep working during office outages without switching tools",
        "Demo to a client in a basement boardroom without sweating the signal",
      ]},
      { h: "The productivity math" },
      { p: "Every interrupted work session costs at minimum 15 minutes of re-focus time (Atlassian, 2023). If you lose WiFi twice a day and commute 5 days a week, that's 2.5 hours of lost productivity per week — roughly 130 hours a year. AlPy eliminates that category of loss entirely." },
      { h: "Not just a workaround — a deliberate choice" },
      { p: "The developers who switched to AlPy didn't do it reluctantly. They did it because having a complete Python environment that never depends on the network changed how they think about their work. Offline-first isn't a limitation. It's a posture." },
    ],
  },
  {
    slug: "numpy-pandas-on-mobile-for-real",
    title: "NumPy and Pandas on mobile: yes, they actually work",
    description: "Data analysts have been skeptical about mobile tools for years. Here's the honest breakdown of what AlPy runs, how fast, and why it's not a toy.",
    date: "2026-04-30", readTime: "6 min", tag: "Data",
    body: [
      { p: "The skepticism is understandable. The history of mobile coding tools is a graveyard of half-implementations — interpreters that froze, libraries that crashed on import, 'Python' environments that couldn't even handle a list comprehension without errors." },
      { h: "What most mobile tools actually ship" },
      { p: "The majority of 'Python on Android' apps use a transpiler or a trimmed-down interpreter. They look like Python. They don't behave like Python. NumPy calls fail silently. Pandas DataFrames throw cryptic memory errors. Matplotlib produces nothing." },
      { h: "What AlPy actually ships" },
      { list: [
        "CPython 3.11 — the same interpreter that runs on your laptop",
        "NumPy compiled for ARM — real vectorized operations",
        "Pandas with full DataFrame API — groupby, merge, pivot, apply",
        "Matplotlib with a mobile-adapted backend for chart rendering",
        "Seaborn, Sympy, Pillow, Openpyxl, Faker — all included in Pro",
      ]},
      { h: "Real analyst workflows that run on AlPy today" },
      { p: "Data analysts using AlPy Pro are running Pandas groupby aggregations on CSVs with 50k+ rows during their morning commute. They're using Matplotlib to generate summary charts before a 9 AM meeting — on the train, no laptop, no WiFi. Seaborn for distribution plots. Openpyxl to prep spreadsheets without opening Excel." },
      { h: "The honest limitations" },
      { p: "AlPy is not a distributed computing cluster. For models training on gigabytes of data or Spark pipelines, you still need a server. But for exploration, prototyping, quick analysis and field data review? The phone in your pocket is already enough — if the tools are real." },
      { h: "Why this matters beyond convenience" },
      { p: "When your analytical environment is always with you and always on, the nature of your work changes. You stop saving analysis for 'when I'm at my desk'. You start treating every idle moment as an opportunity to understand the data better. That shift compounds." },
    ],
  },
];

const esBlog: BlogPostT[] = [
  {
    slug: "lanzar-mvp-rapido",
    title: "Cómo lanzar un MVP en Python desde tu celular en 7 días",
    description: "Plan pragmático de 7 días para llevar tu idea a un script funcional usando solo Android y AlPy.",
    date: "2026-04-12", readTime: "6 min", tag: "Playbook",
    body: [
      { p: "No necesitas un laptop de $2.000 para validar una idea. Con un motor Python nativo en el bolsillo puedes pasar de concepto a script funcional en menos de una semana, incluso durante el transporte." },
      { h: "Día 1–2 · Define el script mínimo valioso" },
      { p: "La mayoría de MVPs mueren por exceso de alcance. Elige una entrada, una transformación y una salida. Escribe la firma de la función antes de abrir el editor." },
      { h: "Día 3–4 · Construye la lógica offline" },
      { p: "AlPy trae Python 3.11 con NumPy y Pandas en local. Modela datos reales como los de producción. Sin internet, sin excusas." },
      { h: "Día 5 · Conecta una interfaz simple" },
      { list: ["Prompts CLI para los primeros 10 usuarios", "CSV de entrada / CSV de salida para pruebas batch", "Gráficos con Matplotlib para feedback inmediato"] },
      { h: "Día 6 · Muéstralo a 5 personas reales" },
      { p: "Haz la demo en el mismo celular donde lo construiste. El contexto mobile-first fuerza honestidad: si funciona en una pantalla de 6 pulgadas en el bus, funciona en cualquier lugar." },
      { h: "Día 7 · Decide" },
      { p: "Mátalo, pivotéalo o escálalo. El punto de un MVP en 7 días es ganarte el derecho a invertir las próximas 7 semanas en algo que vale la pena." },
    ],
  },
  {
    slug: "errores-al-crear-una-app",
    title: "5 errores que matan apps mobile-first antes del lanzamiento",
    description: "Patrones que vemos cada semana en proyectos indie y cómo evitarlos cuando lanzas desde el celular.",
    date: "2026-03-28", readTime: "5 min", tag: "Lecciones",
    body: [
      { h: "1. Construir offline-last en vez de offline-first" },
      { p: "Si tu app necesita WiFi para sentirse viva, ya perdiste la mitad de tu audiencia. Cachea lo aburrido, sincroniza lo demás." },
      { h: "2. Esconder el valor detrás de un muro de registro" },
      { p: "El modo invitado convierte mejor que los muros de email para herramientas. Deja probar primero, luego pide el correo." },
      { h: "3. Tratar al celular como un desktop pequeño" },
      { p: "Rediseñar — no solo redimensionar — para los pulgares es todo el juego. Un tap siempre gana a un menú de dos taps." },
      { h: "4. Ignorar el teclado" },
      { p: "Los teclados genéricos hacen hostil cualquier editor. Las barras de sugerencia (Smart Tab en AlPy) reducen 40% del tipeo." },
      { h: "5. Saltarse una página de precios real desde el día uno" },
      { p: "Si no puedes articular tus precios, no has articulado tu valor. Escribe la página de precios antes que la landing." },
    ],
  },
  {
    slug: "cuanto-cuesta-desarrollar-software",
    title: "Cuánto cuesta realmente desarrollar software en 2026",
    description: "Un desglose honesto de costos solo, freelance y agencia — y dónde lo mobile-first parte la cuenta a la mitad.",
    date: "2026-02-19", readTime: "7 min", tag: "Economía",
    body: [
      { p: "El costo del software es mayormente trabajo. El trabajo es mayormente tiempo. Quien acorta el tiempo, gana." },
      { h: "Solo · $0–$300/mes" },
      { p: "Herramientas, hosting, un IDE pago, café. Con un stack mobile-native como AlPy, el laptop se vuelve opcional y el CapEx cae a cero." },
      { h: "Freelance · $5k–$25k por MVP" },
      { p: "De dos a seis semanas de trabajo enfocado. La mitad se va en levantar requisitos; el resto, construyendo las mismas cinco pantallas de siempre." },
      { h: "Agencia · $40k–$150k+" },
      { p: "Discovery, design system, sprints, QA, handover. Vale la pena en industrias reguladas; excesivo para una apuesta lateral." },
      { h: "Dónde lo mobile-first cambia la matemática" },
      { list: ["Cero hardware nuevo para validar ideas", "Menos cambios de contexto → iteración más rápida", "Bucles de feedback más cortos con stakeholders no técnicos"] },
    ],
  },
  {
    slug: "coding-without-wifi",
    title: "Programar sin WiFi: cómo AlPy resuelve el problema real",
    description: "Cortes de internet, transporte público, trabajo de campo — la comunidad dev lleva años quejándose de la dependencia de WiFi. AlPy es la respuesta.",
    date: "2026-05-14", readTime: "5 min", tag: "Productividad",
    body: [
      { p: "Pregúntale a cualquier desarrollador que viaje en tren, trabaje en un sótano o salga a terreno: el momento más frustrante es abrir el IDE y ver 'sin conexión'. Tus herramientas fueron diseñadas para desktops con banda ancha. Tu vida, no." },
      { h: "La queja que nunca desaparece" },
      { p: "Las encuestas de Stack Overflow llevan años mostrando que la fiabilidad de conexión está entre las mayores frustraciones diarias de los devs fuera de la burbuja 'siempre conectado'. IDEs web como Replit o Google Colab son potentes — pero cuando cae el WiFi, también cae tu sesión de trabajo." },
      { h: "Por qué 'parcialmente offline' es mentira" },
      { p: "Muchas herramientas se venden como offline. En la práctica, cachean la UI pero siguen llamando a servidores para ejecutar código. Si el servidor no responde, tu ejecución falla. AlPy es diferente: el runtime Python 3.11 vive completamente en tu dispositivo." },
      { h: "Lo que el 100% offline habilita de verdad" },
      { list: [
        "Programar en un vuelo de 6 horas sin pagar WiFi a bordo",
        "Correr scripts de datos en campo donde el 4G no llega",
        "Seguir trabajando durante cortes de internet en la oficina",
        "Hacer una demo a un cliente en un sótano sin sudar la señal",
      ]},
      { h: "La matemática de la productividad" },
      { p: "Cada sesión de trabajo interrumpida cuesta mínimo 15 minutos de reenfoque (Atlassian, 2023). Si pierdes el WiFi dos veces por día y trabajas 5 días a la semana, son 2,5 horas de productividad perdida por semana — unas 130 horas al año. AlPy elimina esa categoría de pérdida por completo." },
      { h: "No es un parche — es una elección deliberada" },
      { p: "Los devs que cambiaron a AlPy no lo hicieron a regañadientes. Lo hicieron porque tener un entorno Python completo que nunca depende de la red cambió su manera de pensar sobre el trabajo. Offline-first no es una limitación. Es una postura." },
    ],
  },
  {
    slug: "numpy-pandas-on-mobile-for-real",
    title: "NumPy y Pandas en tu móvil: sí, de verdad funcionan",
    description: "Los analistas de datos llevan años siendo escépticos con las herramientas móviles. Aquí el desglose honesto de qué corre AlPy, qué tan rápido y por qué no es un juguete.",
    date: "2026-04-30", readTime: "6 min", tag: "Datos",
    body: [
      { p: "El escepticismo es comprensible. La historia de las herramientas de código móvil está llena de medias implementaciones — intérpretes que se colgaban, librerías que fallaban al importar, entornos 'Python' que ni siquiera manejaban una list comprehension sin errores." },
      { h: "Lo que la mayoría de apps móviles realmente trae" },
      { p: "La mayoría de apps 'Python en Android' usan un transpilador o un intérprete recortado. Parecen Python. No se comportan como Python. Las llamadas a NumPy fallan en silencio. Los DataFrames de Pandas lanzan errores crípticos de memoria. Matplotlib no produce nada." },
      { h: "Lo que AlPy realmente trae" },
      { list: [
        "CPython 3.11 — el mismo intérprete que corre en tu laptop",
        "NumPy compilado para ARM — operaciones vectorizadas reales",
        "Pandas con la API completa de DataFrame — groupby, merge, pivot, apply",
        "Matplotlib con backend adaptado a móvil para renderizar gráficos",
        "Seaborn, Sympy, Pillow, Openpyxl, Faker — todos incluidos en Pro",
      ]},
      { h: "Flujos de trabajo reales de analistas que hoy corren en AlPy" },
      { p: "Analistas de datos con AlPy Pro están corriendo agregaciones groupby de Pandas en CSVs de más de 50.000 filas durante el viaje de la mañana. Generan gráficos de resumen con Matplotlib antes de una reunión a las 9 AM — en el tren, sin laptop, sin WiFi. Seaborn para distribuciones. Openpyxl para preparar hojas de cálculo sin abrir Excel." },
      { h: "Las limitaciones honestas" },
      { p: "AlPy no es un clúster de cómputo distribuido. Para modelos que entrenan con gigabytes de datos o pipelines de Spark, todavía necesitas un servidor. Pero para exploración, prototipado, análisis rápido y revisión de datos en campo, el teléfono en tu bolsillo ya es suficiente — si las herramientas son reales." },
      { h: "Por qué esto importa más allá de la conveniencia" },
      { p: "Cuando tu entorno analítico está siempre contigo y siempre disponible, la naturaleza de tu trabajo cambia. Dejas de guardar el análisis para 'cuando esté en el escritorio'. Empiezas a tratar cada momento libre como una oportunidad de entender mejor los datos. Ese cambio se acumula." },
    ],
  },
];

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home", how: "How it works", plans: "Pricing", useCases: "Use cases",
      community: "Community", faq: "FAQ", blog: "Blog", contact: "Contact", cta: "Google Play",
      why: "Why AlPy", testimonials: "Testimonials", b2b: "B2B", download: "Download",
    },
    hero: {
      badge: "Now launching · Android",
      title1: "Your ", titleAccent: "Python", title2: " studio.", title3: "Anywhere you go.",
      subtitle: "AlPy is the offline Python IDE for Android — built for devs, students and data teams who refuse to be tied to a laptop. Native 3.11, NumPy, Pandas, Matplotlib, all in your pocket.",
      ctaPrimary: "Get it on Google Play", ctaSecondary: "See pricing",
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
    how: {
      eyebrow: "How it works",
      title1: "From install to first script in ", titleAccent: "60 seconds", titleDot: ".",
      subtitle: "No setup ceremonies. No environment hell. Just open the app and run real Python.",
      steps: [
        { step: "01", title: "Install from Google Play", desc: "One tap. ~40 MB. Zero accounts required to start coding in guest mode." },
        { step: "02", title: "Open a notebook or script", desc: "Native Python 3.11 boots instantly. NumPy, Pandas and Matplotlib are already there, offline." },
        { step: "03", title: "Run, iterate, share", desc: "Execute on the device, sync to the cloud when you want, share results as image or .py file." },
        { step: "04", title: "Upgrade when you outgrow Free", desc: "Unlock Pro for the full data-science arsenal, or Premium for unlimited network and AI assistance." },
      ],
    },
    useCases: {
      eyebrow: "Use cases",
      title1: "Real workflows, ", titleAccent: "real outcomes", titleDot: ".",
      subtitle: "AlPy fits the way you actually work — not the way the desktop assumed you would.",
      items: [
        {
          title: "Students learning to code",
          desc: "Practice on the device you already carry. No laptop, no excuses.",
          bullets: ["Guided exercises offline", "Smart Tab cuts typing by 40%", "Save progress without an account"],
        },
        {
          title: "Data analysts on the move",
          desc: "Run quick Pandas explorations between meetings, on the train, anywhere.",
          bullets: ["NumPy & Pandas preinstalled", "Matplotlib for instant charts", "Cloud sync when you're ready"],
        },
        {
          title: "Bootcamps & instructors",
          desc: "Unblock students without laptops with bulk licensing and progress reports.",
          bullets: ["Per-student licensing", "Usage & progress reports", "Guided onboarding for cohorts"],
        },
        {
          title: "Founders prototyping MVPs",
          desc: "Validate the smallest valuable script before writing a single line of UI.",
          bullets: ["Mobile-first iteration", "Demo on the same device", "Ship in days, not months"],
        },
      ],
    },
    comparison: {
      eyebrow: "Comparison",
      title1: "Why AlPy beats ", titleAccent: "the alternatives", titleDot: ".",
      subtitle: "A side-by-side look at how AlPy compares to other mobile editors and web-based IDEs.",
      headerAlpy: "AlPy", headerOther: "Other mobile editors", headerWeb: "Web IDEs",
      rows: [
        { feature: "Native Python 3.11", alpy: "Yes, offline", other: "Often interpreted only", web: "Yes, requires WiFi" },
        { feature: "NumPy / Pandas / Matplotlib", alpy: "Bundled, offline", other: "Limited or paid", web: "Yes, online" },
        { feature: "Works without internet", alpy: "100%", other: "Partial", web: "No" },
        { feature: "Smart Tab autocomplete", alpy: "Yes", other: "No", web: "Varies" },
        { feature: "Grace Token security", alpy: "Yes", other: "No", web: "N/A" },
        { feature: "Free tier with real value", alpy: "Yes", other: "Trial only", web: "Yes, with ads" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title1: "Questions, ", titleAccent: "answered", titleDot: ".",
      subtitle: "Everything you need to know before installing AlPy.",
      items: [
        { q: "Does AlPy really run Python offline?", a: "Yes. AlPy ships a native Python 3.11 runtime that executes entirely on your device — no server round-trips, no WiFi required." },
        { q: "Which libraries are included?", a: "Free includes the standard library. Pro adds NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl and Faker — all offline." },
        { q: "Do I need an account to use it?", a: "No. Guest mode lets you start immediately and save locally. Create an account only when you want cloud sync or to upgrade." },
        { q: "Can I use AlPy for school or bootcamp cohorts?", a: "Yes. We offer per-student bulk licensing, usage reports and guided onboarding. See the B2B section or contact us." },
        { q: "How does pricing work?", a: "Free is permanently free. Pro and Premium are monthly subscriptions you can cancel anytime, billed via Google Play." },
        { q: "Is my code private?", a: "Yes. By default everything stays on your device. Cloud sync is opt-in and encrypted; we never read your scripts." },
      ],
    },
    plans: {
      eyebrow: "Pricing",
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
        { quote: "I went from copy-pasting on a laptop to actually thinking in Python on the bus. My logic got sharper in two weeks.", name: "María Restrepo", role: "CS student · Medellín" },
        { quote: "Finally a mobile IDE that doesn't lie to me. Pandas runs offline and I ship small data scripts during commute.", name: "Daniel Ortega", role: "Data analyst · CDMX" },
        { quote: "I teach a bootcamp and AlPy unblocked the students who don't own a laptop. Their problem-solving improved fast.", name: "Lucía Fernández", role: "Bootcamp instructor · Madrid" },
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
    contact: {
      eyebrow: "Contact",
      title: "Talk to the AlPy team",
      subtitle: "Sales, partnerships, press or just feedback — we read every message.",
      nameLabel: "Your name", emailLabel: "Email", topicLabel: "Topic", messageLabel: "Message",
      topics: ["General", "Sales / B2B", "Bootcamps & schools", "Press", "Bug report"],
      submit: "Send message",
      note: "We typically reply in under 24h on business days.",
      toastTitle: "Message received", toastDesc: "Thanks — we'll get back to you shortly.",
      infoTitle: "Other ways to reach us",
      infoEmail: "hello@alpy.dev", infoSales: "sales@alpy.dev", infoSupport: "support@alpy.dev",
    },
    blogIndex: {
      eyebrow: "Blog",
      title: "Notes from the AlPy lab",
      subtitle: "Playbooks, lessons and economics for builders shipping from a phone.",
      readMore: "Read article", backHome: "← Back to blog",
    },
    blog: enBlog,
    footer: {
      tagline: "Your Python studio.", privacy: "Privacy",
      nav: "Navigate", resources: "Resources", company: "Company",
      rights: "All rights reserved.",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 2026",
      sections: {
        who: { title: "Who we are", body: "AlPy ('we', 'us', 'our') is an offline Python IDE for Android. This policy explains how we handle your information when you use our app and website." },
        data: { title: "What data we collect", body: "We collect minimal data by design. Your code, scripts, and notebook content never leave your device unless you explicitly opt into cloud sync. If you create an account, we store your email, language preference, and active plan. We also collect anonymized usage data (session length, crash reports) that cannot identify you personally." },
        purpose: { title: "How we use your data", body: "We use your data only to: manage your account and subscription, improve the app through crash and error analysis, and send you launch announcements if you subscribed to our mailing list. We never sell your data." },
        storage: { title: "Where your data is stored", body: "Your code stays on your device by default. Cloud sync is opt-in and encrypted both in transit and at rest. Account data is stored on secure servers within the EU." },
        rights: { title: "Your rights", body: "You have the right to access, correct, or delete your personal data at any time. You can unsubscribe from emails with one click. For any data request, contact us at privacy@alpy.dev." },
        cookies: { title: "Cookies and tracking", body: "The AlPy app does not use cookies. Our landing page may use anonymous analytics cookies to understand visitor behavior. No personal data is collected through cookies." },
        changes: { title: "Changes to this policy", body: "We will notify you by email if we make material changes to this policy. Continued use of AlPy after changes constitutes acceptance of the updated policy." },
        contact: { title: "Contact us", body: "If you have questions about this policy or your data, email us at privacy@alpy.dev. We respond within 48 hours." },
      },
    },
    seo: {
      home: { title: "AlPy · Offline Python IDE for Android | Code anywhere", description: "AlPy is the only mobile IDE that protects your productivity. Native Python 3.11 offline with NumPy, Pandas and Matplotlib. Free on Google Play." },
      how: { title: "How AlPy works · From install to first script in 60s", description: "See how AlPy turns your Android into a real Python studio in four steps — no setup, no internet required." },
      plans: { title: "AlPy pricing · Free, Pro and Premium plans", description: "Start free with native Python 3.11. Upgrade to Pro for offline data-science libraries or Premium for unlimited network and AI assistance." },
      useCases: { title: "AlPy use cases · Students, analysts, founders, bootcamps", description: "Real workflows powered by AlPy — from learning Python on the bus to prototyping MVPs without a laptop." },
      blog: { title: "AlPy Blog · Mobile-first development insights", description: "Playbooks for shipping MVPs from a phone, mistakes to avoid, and what software really costs in 2026." },
      contact: { title: "Contact AlPy · Sales, B2B and support", description: "Reach the AlPy team for sales, academic licensing, press or product feedback. Response in under 24h." },
    },
  },
  es: {
    nav: {
      home: "Inicio", how: "Cómo funciona", plans: "Precios", useCases: "Casos de uso",
      community: "Comunidad", faq: "FAQ", blog: "Blog", contact: "Contacto", cta: "Google Play",
      why: "¿Por qué AlPy?", testimonials: "Testimonios", b2b: "B2B", download: "Descargar",
    },
    hero: {
      badge: "Lanzamiento · Android",
      title1: "Tu estudio de ", titleAccent: "Python", title2: ".", title3: "En cualquier lugar.",
      subtitle: "AlPy es el IDE de Python offline para Android — para devs, estudiantes y equipos de datos que se niegan a depender de un laptop. Python 3.11 nativo, NumPy, Pandas, Matplotlib, en tu bolsillo.",
      ctaPrimary: "Descargar en Google Play", ctaSecondary: "Ver precios",
      metaRating: "★ 4.8 en Play Store", metaDevs: "+1.200 desarrolladores", metaOffline: "100% offline",
    },
    problem: {
      eyebrow: "El único IDE móvil que blinda tu productividad",
      title1: "Hecho para devs que ", titleAccent: "no se conforman", titleDot: ".",
      subtitle: "Programar en el celular dejó de ser un parche. AlPy trae potencia profesional, offline y a prueba de fricción.",
      problemTitle: "El problema",
      problemItems: ["¿Cansado de IDEs web lentos?", "¿Te frustras con teclados genéricos?", "Necesitas una herramienta profesional, offline e inteligente."],
      solutionTitle: "La solución AlPy",
      solutionItems: ["Potencia offline de élite", "Smart Tab — autocompletado inteligente", "Seguridad inhackeable con Token de Gracia"],
    },
    how: {
      eyebrow: "Cómo funciona",
      title1: "De la instalación al primer script en ", titleAccent: "60 segundos", titleDot: ".",
      subtitle: "Sin ceremonias de configuración. Sin entornos rotos. Abres la app y corres Python real.",
      steps: [
        { step: "01", title: "Instala desde Google Play", desc: "Un toque. ~40 MB. Cero cuentas para empezar en modo invitado." },
        { step: "02", title: "Abre un notebook o script", desc: "Python 3.11 nativo arranca al instante. NumPy, Pandas y Matplotlib ya están listos, offline." },
        { step: "03", title: "Ejecuta, itera, comparte", desc: "Corre en el dispositivo, sincroniza con la nube cuando quieras, comparte resultados como imagen o .py." },
        { step: "04", title: "Sube de plan cuando lo necesites", desc: "Pro desbloquea el arsenal completo de ciencia de datos. Premium suma red ilimitada y asistencia de IA." },
      ],
    },
    useCases: {
      eyebrow: "Casos de uso",
      title1: "Flujos reales, ", titleAccent: "resultados reales", titleDot: ".",
      subtitle: "AlPy se acomoda a cómo trabajas de verdad — no a cómo el desktop asumió que lo harías.",
      items: [
        {
          title: "Estudiantes que aprenden a programar",
          desc: "Practica en el dispositivo que ya cargas. Sin laptop, sin excusas.",
          bullets: ["Ejercicios guiados offline", "Smart Tab reduce 40% del tipeo", "Guarda tu progreso sin cuenta"],
        },
        {
          title: "Analistas de datos en movimiento",
          desc: "Exploraciones rápidas con Pandas entre reuniones, en el tren, donde sea.",
          bullets: ["NumPy y Pandas preinstalados", "Matplotlib para gráficos al instante", "Sync a la nube cuando estés listo"],
        },
        {
          title: "Bootcamps e instructores",
          desc: "Desbloquea estudiantes sin laptop con licencias por bloque y reportes.",
          bullets: ["Licencias por estudiante", "Reportes de uso y progreso", "Onboarding asistido por cohorte"],
        },
        {
          title: "Founders prototipando MVPs",
          desc: "Valida el script mínimo valioso antes de escribir una sola pantalla.",
          bullets: ["Iteración mobile-first", "Demo en el mismo dispositivo", "Lanza en días, no en meses"],
        },
      ],
    },
    comparison: {
      eyebrow: "Comparativa",
      title1: "Por qué AlPy gana frente a ", titleAccent: "las alternativas", titleDot: ".",
      subtitle: "Una vista lado a lado de cómo se compara AlPy con otros editores móviles y los IDEs web.",
      headerAlpy: "AlPy", headerOther: "Otros editores móviles", headerWeb: "IDEs web",
      rows: [
        { feature: "Python 3.11 nativo", alpy: "Sí, offline", other: "Solo interpretado", web: "Sí, con WiFi" },
        { feature: "NumPy / Pandas / Matplotlib", alpy: "Incluidos, offline", other: "Limitados o pagos", web: "Sí, online" },
        { feature: "Funciona sin internet", alpy: "100%", other: "Parcial", web: "No" },
        { feature: "Autocompletado Smart Tab", alpy: "Sí", other: "No", web: "Varía" },
        { feature: "Seguridad Token de Gracia", alpy: "Sí", other: "No", web: "N/A" },
        { feature: "Plan gratis con valor real", alpy: "Sí", other: "Solo trial", web: "Sí, con anuncios" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title1: "Preguntas, ", titleAccent: "respondidas", titleDot: ".",
      subtitle: "Todo lo que necesitas saber antes de instalar AlPy.",
      items: [
        { q: "¿De verdad AlPy corre Python sin internet?", a: "Sí. AlPy incluye un runtime Python 3.11 nativo que ejecuta totalmente en tu dispositivo — sin viajes a un servidor, sin WiFi." },
        { q: "¿Qué librerías están incluidas?", a: "Free trae la librería estándar. Pro suma NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl y Faker — todo offline." },
        { q: "¿Necesito cuenta para usarlo?", a: "No. El modo invitado te deja empezar de inmediato y guardar en local. Crea cuenta solo si quieres sync en la nube o subir de plan." },
        { q: "¿Puedo usar AlPy para escuelas o bootcamps?", a: "Sí. Ofrecemos licencias por estudiante, reportes de uso y onboarding guiado. Mira la sección B2B o contáctanos." },
        { q: "¿Cómo funcionan los precios?", a: "Free es gratis para siempre. Pro y Premium son suscripciones mensuales cancelables cuando quieras, facturadas vía Google Play." },
        { q: "¿Mi código es privado?", a: "Sí. Por defecto todo se queda en tu dispositivo. El sync a la nube es opt-in y cifrado; no leemos tus scripts." },
      ],
    },
    plans: {
      eyebrow: "Precios",
      title1: "Elige tu nivel de ", titleAccent: "poder", titleDot: ".",
      subtitle: "Empieza gratis. Sube cuando lo necesites. Cancela cuando quieras.",
      free: {
        tier: "AlPy Free", name: "Tu herramienta de aprendizaje",
        tagline: "Empieza a programar Python en Android sin barreras.",
        price: "Gratis",
        features: ["Motor Python 3.11 nativo (offline)", "Async Input (sin lag)", "Sincronización en la nube libre", "Modo invitado: úsalo sin cuenta, guarda en local", "Bonus: anuncio de 30s para una ejecución premium"],
        cta: "Descargar gratis",
      },
      pro: {
        tier: "AlPy Pro", name: "El arsenal completo de ciencia de datos",
        tagline: "Todo lo que un dev profesional necesita en su bolsillo.",
        price: "$.../mes",
        features: ["Todo en FREE, más:", "10 librerías pesadas offline: NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl, Faker", "3 ejecuciones de red al día", "Soporte prioritario"],
        cta: "Desbloquea tu potencial",
        popular: "Más popular",
      },
      premium: {
        tier: "AlPy Premium", name: "Experiencia ilimitada. Máxima potencia.",
        tagline: "El estudio definitivo, sin techo ni fricciones.",
        price: "$.../mes",
        features: ["Todo en PRO, más:", "Usos de red ILIMITADOS", "IA de asistencia de código", "Máxima prioridad de soporte"],
        cta: "El estudio definitivo",
      },
    },
    testimonials: {
      eyebrow: "Querido por quienes construyen",
      title1: "Progreso ", titleAccent: "real", titleDot: ", devs reales.",
      subtitle: "Lo que están construyendo — y cómo afilaron su pensamiento — con AlPy en el bolsillo.",
      items: [
        { quote: "Pasé de copiar y pegar en el laptop a pensar en Python en el bus. Mi lógica se afinó en dos semanas.", name: "María Restrepo", role: "Estudiante de CS · Medellín" },
        { quote: "Por fin un IDE móvil que no me miente. Pandas corre offline y publico scripts pequeños en el camino al trabajo.", name: "Daniel Ortega", role: "Analista de datos · CDMX" },
        { quote: "Doy un bootcamp y AlPy desbloqueó a quienes no tienen laptop. Su resolución de problemas mejoró rapidísimo.", name: "Lucía Fernández", role: "Instructora bootcamp · Madrid" },
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
    contact: {
      eyebrow: "Contacto",
      title: "Habla con el equipo de AlPy",
      subtitle: "Ventas, alianzas, prensa o feedback — leemos cada mensaje.",
      nameLabel: "Tu nombre", emailLabel: "Email", topicLabel: "Asunto", messageLabel: "Mensaje",
      topics: ["General", "Ventas / B2B", "Bootcamps y escuelas", "Prensa", "Reporte de bug"],
      submit: "Enviar mensaje",
      note: "Solemos responder en menos de 24h en días laborables.",
      toastTitle: "Mensaje recibido", toastDesc: "Gracias — te contactamos pronto.",
      infoTitle: "Otras formas de contactarnos",
      infoEmail: "hello@alpy.dev", infoSales: "sales@alpy.dev", infoSupport: "support@alpy.dev",
    },
    blogIndex: {
      eyebrow: "Blog",
      title: "Notas desde el laboratorio AlPy",
      subtitle: "Playbooks, lecciones y economía para quienes lanzan desde el celular.",
      readMore: "Leer artículo", backHome: "← Volver al blog",
    },
    blog: esBlog,
    footer: {
      tagline: "Tu estudio de Python.", privacy: "Privacidad",
      nav: "Navegar", resources: "Recursos", company: "Compañía",
      rights: "Todos los derechos reservados.",
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: mayo 2026",
      sections: {
        who: { title: "Quiénes somos", body: "AlPy ('nosotros', 'nuestra') es un IDE de Python offline para Android. Esta política explica cómo manejamos tu información cuando usas nuestra app y sitio web." },
        data: { title: "Qué datos recopilamos", body: "Recopilamos datos mínimos por diseño. Tu código, scripts y notebooks nunca salen de tu dispositivo a menos que actives explícitamente el sync en la nube. Si creas una cuenta, almacenamos tu email, idioma preferido y plan activo. También recopilamos datos de uso anónimos (duración de sesión, reportes de crash) que no pueden identificarte personalmente." },
        purpose: { title: "Para qué usamos tus datos", body: "Usamos tus datos solo para: gestionar tu cuenta y suscripción, mejorar la app mediante análisis de errores y crashes, y enviarte avisos de lanzamiento si te suscribiste a nuestra lista. Nunca vendemos tus datos." },
        storage: { title: "Dónde se almacenan tus datos", body: "Tu código permanece en tu dispositivo por defecto. El sync en la nube es opt-in y está cifrado tanto en tránsito como en reposo. Los datos de cuenta se almacenan en servidores seguros dentro de la UE." },
        rights: { title: "Tus derechos", body: "Tienes derecho a acceder, corregir o eliminar tus datos personales en cualquier momento. Puedes darte de baja de los emails con un clic. Para cualquier solicitud de datos, contáctanos en privacy@alpy.dev." },
        cookies: { title: "Cookies y rastreo", body: "La app AlPy no usa cookies. Nuestra landing page puede usar cookies de análisis anónimo para entender el comportamiento de los visitantes. No se recopilan datos personales a través de cookies." },
        changes: { title: "Cambios a esta política", body: "Te notificaremos por email si hacemos cambios materiales a esta política. El uso continuado de AlPy después de los cambios constituye la aceptación de la política actualizada." },
        contact: { title: "Contáctanos", body: "Si tienes preguntas sobre esta política o tus datos, escríbenos a privacy@alpy.dev. Respondemos en menos de 48 horas." },
      },
    },
    seo: {
      home: { title: "AlPy · IDE de Python offline para Android | Programa donde sea", description: "AlPy es el único IDE móvil que blinda tu productividad. Python 3.11 nativo offline con NumPy, Pandas y Matplotlib. Gratis en Google Play." },
      how: { title: "Cómo funciona AlPy · De la instalación al primer script en 60s", description: "Mira cómo AlPy convierte tu Android en un estudio Python real en cuatro pasos — sin configuración, sin internet." },
      plans: { title: "Precios AlPy · Planes Free, Pro y Premium", description: "Empieza gratis con Python 3.11 nativo. Sube a Pro por las librerías de ciencia de datos offline o a Premium por red ilimitada e IA." },
      useCases: { title: "Casos de uso AlPy · Estudiantes, analistas, founders, bootcamps", description: "Flujos reales con AlPy — desde aprender Python en el bus hasta prototipar MVPs sin laptop." },
      blog: { title: "Blog AlPy · Insights de desarrollo mobile-first", description: "Playbooks para lanzar MVPs desde el celular, errores que evitar y cuánto cuesta de verdad el software en 2026." },
      contact: { title: "Contacto AlPy · Ventas, B2B y soporte", description: "Contacta al equipo AlPy para ventas, licencias académicas, prensa o feedback. Respuesta en menos de 24h." },
    },
  },
};
