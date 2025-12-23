import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Calendar, Send, Layers, Tags, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento de Mensagens",
    description: "Programe mensagens para serem enviadas automaticamente no momento ideal. Ideal para follow-ups, lembretes e campanhas programadas.",
    reverse: false,
  },
  {
    icon: Send,
    title: "Disparo em Massa",
    description: "Envie mensagens personalizadas para milhares de contatos de forma segura, sem risco de banimento. Segmente por etiquetas e comportamento.",
    reverse: true,
  },
  {
    icon: Layers,
    title: "Funil de Atendimento",
    description: "Organize seus leads em etapas do funil de vendas. Visualize o pipeline e nunca mais perca uma oportunidade de conversão.",
    reverse: false,
  },
  {
    icon: Tags,
    title: "Etiquetas e Organização",
    description: "Categorize seus contatos com etiquetas coloridas personalizadas. Filtre e encontre conversas importantes rapidamente.",
    reverse: true,
  },
  {
    icon: BarChart3,
    title: "Relatórios e Métricas",
    description: "Dashboard completo com métricas de atendimento, tempo de resposta, conversões e performance da equipe em tempo real.",
    reverse: false,
  },
  {
    icon: Users,
    title: "Multiatendentes",
    description: "Múltiplos atendentes em um único número. Distribua conversas, transfira atendimentos e monitore a produtividade da equipe.",
    reverse: true,
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Funcionalidades"
          title="Recursos que impulsionam suas vendas"
          description="Conheça todas as funcionalidades que tornam o WaSpeed a ferramenta mais completa do mercado."
        />

        <div className="mt-16 space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Media */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-card-lg border border-border/50">
                  <MediaPlaceholder
                    type="image"
                    aspectRatio="16:9"
                    label={`Preview: ${feature.title}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
