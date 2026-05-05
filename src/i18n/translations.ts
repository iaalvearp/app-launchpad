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
    blog: string; contact: string; cta: string;
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
];

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home", how: "How it works", plans: "Pricing", useCases: "Use cases",
      blog: "Blog", contact: "Contact", cta: "Google Play",
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
      blog: "Blog", contact: "Contacto", cta: "Google Play",
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
      title1: "Del install al primer script en ", titleAccent: "60 segundos", titleDot: ".",
      subtitle: "Sin ceremonias de setup. Sin entornos rotos. Abres la app y corres Python real.",
      steps: [
        { step: "01", title: "Instala desde Google Play", desc: "Un tap. ~40 MB. Cero cuentas para empezar en modo invitado." },
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
    seo: {
      home: { title: "AlPy · IDE de Python offline para Android | Programa donde sea", description: "AlPy es el único IDE móvil que blinda tu productividad. Python 3.11 nativo offline con NumPy, Pandas y Matplotlib. Gratis en Google Play." },
      how: { title: "Cómo funciona AlPy · Del install al primer script en 60s", description: "Mira cómo AlPy convierte tu Android en un estudio Python real en cuatro pasos — sin setup, sin internet." },
      plans: { title: "Precios AlPy · Planes Free, Pro y Premium", description: "Empieza gratis con Python 3.11 nativo. Sube a Pro por las librerías de ciencia de datos offline o a Premium por red ilimitada e IA." },
      useCases: { title: "Casos de uso AlPy · Estudiantes, analistas, founders, bootcamps", description: "Flujos reales con AlPy — desde aprender Python en el bus hasta prototipar MVPs sin laptop." },
      blog: { title: "Blog AlPy · Insights de desarrollo mobile-first", description: "Playbooks para lanzar MVPs desde el celular, errores que evitar y cuánto cuesta de verdad el software en 2026." },
      contact: { title: "Contacto AlPy · Ventas, B2B y soporte", description: "Contacta al equipo AlPy para ventas, licencias académicas, prensa o feedback. Respuesta en menos de 24h." },
    },
  },
};
