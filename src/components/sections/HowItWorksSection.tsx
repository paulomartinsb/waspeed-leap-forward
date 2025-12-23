import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "@/components/ui/StepCard";

const steps = [
  {
    number: 1,
    title: "Conecte seu WhatsApp",
    description: "Escaneie o QR Code e conecte seu WhatsApp Business em segundos.",
  },
  {
    number: 2,
    title: "Configure suas automações",
    description: "Crie funis de atendimento, mensagens automáticas e etiquetas.",
  },
  {
    number: 3,
    title: "Escale suas vendas",
    description: "Acompanhe métricas e veja suas conversões crescerem.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Como Funciona"
          title="Comece em 3 passos simples"
          description="Configure o WaSpeed em minutos e comece a automatizar seu atendimento hoje mesmo."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
