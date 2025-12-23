import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Tags,
  Send,
  Bot,
  Layers,
} from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "ChatBot Inteligente",
    description: "Automatize respostas frequentes e qualifique leads automaticamente 24/7.",
  },
  {
    icon: Send,
    title: "Disparo em Massa",
    description: "Envie mensagens para milhares de contatos de forma segura e personalizada.",
  },
  {
    icon: Users,
    title: "Multiatendentes",
    description: "Gerencie múltiplos atendentes em um único número de WhatsApp.",
  },
  {
    icon: Layers,
    title: "Funil de Vendas",
    description: "Organize seus leads em etapas e nunca perca uma oportunidade.",
  },
  {
    icon: Tags,
    title: "Etiquetas e Organização",
    description: "Categorize contatos com etiquetas personalizadas para melhor gestão.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Acompanhe métricas de atendimento e vendas em tempo real.",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Programe mensagens para serem enviadas no momento ideal.",
  },
  {
    icon: MessageSquare,
    title: "Respostas Rápidas",
    description: "Crie templates de mensagens para agilizar o atendimento.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeader
          badge="Benefícios"
          title="Tudo que você precisa para escalar"
          description="Recursos poderosos para automatizar e organizar seu atendimento via WhatsApp."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
