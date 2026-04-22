import { Unlock, Shield, Cpu } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { PlanCard, PlanCardProps } from "../PlanCard";

const PLANS: PlanCardProps[] = [
  {
    icon: Unlock,
    tier: "ALPY Free",
    name: "Tu herramienta de aprendizaje",
    tagline: "Empieza a programar Python en Android sin barreras.",
    price: "Gratis",
    features: [
      "Motor Python 3.11 Nativo (sin conexión)",
      "Async Input (sin lag)",
      "Sincronización Nube Libre",
      "Modo Invitado: úsalo sin cuenta, guarda localmente",
      "Bonus: anuncio de 30s para 1 ejecución premium",
    ],
    ctaLabel: "Descargar gratis",
    ctaHref: "enlace_real_aquí",
  },
  {
    icon: Shield,
    tier: "ALPY Pro",
    name: "El arsenal completo de ciencia de datos",
    tagline: "Todo lo que un dev profesional necesita en su bolsillo.",
    price: "$.../mes",
    features: [
      "Todo en FREE, más:",
      "10 librerías pesadas offline: NumPy, Pandas, Matplotlib, Seaborn, Sympy, Pillow, Openpyxl, Faker",
      "3 ejecuciones de red al día",
      "Soporte prioritario",
    ],
    ctaLabel: "Desbloquea tu potencial",
    ctaHref: "enlace_real_aquí",
    highlighted: true,
  },
  {
    icon: Cpu,
    tier: "ALPY Premium",
    name: "Experiencia ilimitada. Máxima potencia.",
    tagline: "El estudio definitivo, sin techo ni fricciones.",
    price: "$.../mes",
    features: [
      "Todo en PRO, más:",
      "Usos de red ILIMITADOS",
      "IA de asistencia de código",
      "Máxima prioridad de soporte",
    ],
    ctaLabel: "El estudio definitivo",
    ctaHref: "enlace_real_aquí",
  },
];

export const Plans = () => (
  <section id="planes" className="py-24 lg:py-32 relative">
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-primary/5 blur-3xl pointer-events-none" />
    <div className="container relative">
      <SectionHeading
        eyebrow="Planes"
        title={<>Elige tu nivel de <span className="text-primary">poder</span>.</>}
        subtitle="Empieza gratis. Sube cuando lo necesites. Cancela cuando quieras."
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
        {PLANS.map((plan, i) => (
          <PlanCard key={plan.tier} {...plan} index={i} />
        ))}
      </div>
    </div>
  </section>
);
