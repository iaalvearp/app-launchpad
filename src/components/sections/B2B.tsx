import { GraduationCap, Building2, Zap } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { FeatureCard } from "../FeatureCard";

export const B2B = () => (
  <section id="b2b" className="py-24 lg:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="B2B & Licencias académicas"
        title={<>ALPY para <span className="text-primary">equipos y aulas</span>.</>}
        subtitle="Paquetes masivos para escuelas y bootcamps. Microtransacciones para automatizar lo que tu equipo repite cada semana."
      />

      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <FeatureCard
          icon={GraduationCap}
          title="Bootcamps & Escuelas"
          items={[
            "Licencias en bloque por estudiante",
            "Reportes de uso y avance",
            "Onboarding asistido",
          ]}
        />
        <FeatureCard
          icon={Building2}
          title="Equipos de datos"
          items={[
            "Todo el plan Premium para tu squad",
            "SSO opcional",
            "SLA y soporte dedicado",
          ]}
          index={1}
        />
        <FeatureCard
          icon={Zap}
          title="Microtransacciones"
          items={[
            "Plantillas de automatización listas",
            "Tienda interna para flujos comunes",
            "Pago una sola vez, sin suscripción",
          ]}
          index={2}
        />
      </div>
    </div>
  </section>
);
