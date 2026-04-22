import { AlertTriangle, Sparkles } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { FeatureCard } from "../FeatureCard";

export const ProblemSolution = () => (
  <section id="por-que" className="py-24 lg:py-32 relative">
    <div className="container">
      <SectionHeading
        eyebrow="El único IDE móvil que blinda tu productividad"
        title={<>Hecho para devs que <span className="text-primary">no se conforman</span>.</>}
        subtitle="Programar en el celular dejó de ser un parche. ALPY trae potencia profesional, offline y a prueba de fricción."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <FeatureCard
          icon={AlertTriangle}
          title="El problema"
          items={[
            "¿Cansado de IDEs web lentos?",
            "¿Te frustras con teclados genéricos?",
            "Necesitas una herramienta profesional, offline e inteligente.",
          ]}
        />
        <FeatureCard
          icon={Sparkles}
          title="La solución ALPY"
          items={[
            "Potencia Offline de Élite",
            "Smart Tab (Autocomplete inteligente)",
            "Seguridad inhackeable (Token de Gracia)",
          ]}
          index={1}
        />
      </div>
    </div>
  </section>
);
