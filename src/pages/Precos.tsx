import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQSection } from "@/components/sections/FAQSection";

const plans = [
  {
    name: "Licença gratuita",
    features: [
      { text: "Envios em massa", limited: true },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", limited: true },
      { text: "Criação de funis automáticos em um clique", limited: true },
      { text: "Fluxo de chatbot", limited: true },
      { text: "Respostas automáticas simples e intuitivas", limited: true },
      { text: "Publicação automática de status", limited: true },
      { text: "Organização por etiquetas e marcações", limited: true },
      { text: "Agendamento de mensagens", limited: true },
      { text: "Atendimento de segunda a sábado" },
    ],
    highlighted: false,
    ctaText: "Testar agora",
    footnote: "* Uso limitado, apenas demonstração.",
  },
  {
    name: "Licença Ouro",
    icon: "🥇",
    features: [
      { text: "Envios em massa", limited: false },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", limited: false },
      { text: "Criação de funis automáticos em um clique", limited: false },
      { text: "Fluxo de chatbot", limited: false },
      { text: "Respostas automáticas simples e intuitivas", limited: false },
      { text: "Publicação automática de status", limited: false },
      { text: "Organização por etiquetas e marcações", limited: false },
      { text: "Agendamento de mensagens", limited: false },
      { text: "Atendimento de segunda a sábado" },
      { text: "Bônus 19 Scripts Prontos e Validados", isBonus: true },
      { text: "Bônus 19 Fluxos de Bot Prontos", isBonus: true },
      { text: "Bônus Todos os nossos E-books Exclusivos de Atendimento e Vendas", isBonus: true },
    ],
    highlighted: true,
    ctaText: "Comprar Agora",
    footnote: "* Os bônus são liberados automaticamente após o período de garantia de 7 dias, para proteção do conteúdo digital.",
  },
  {
    name: "Licença Prata",
    icon: "🥈",
    features: [
      { text: "Envios em massa", limited: false },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", limited: false },
      { text: "Criação de funis automáticos em um clique", limited: false },
      { text: "Fluxo de chatbot", limited: false },
      { text: "Respostas automáticas simples e intuitivas", limited: false },
      { text: "Publicação automática de status", limited: false },
      { text: "Organização por etiquetas e marcações", limited: false },
      { text: "Agendamento de mensagens", limited: false },
      { text: "Atendimento de segunda a sábado" },
    ],
    highlighted: false,
    ctaText: "Comprar Agora",
  },
];

export default function PrecosPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <SectionHeader
            badge="Preços"
            title="Planos que cabem no seu bolso"
            description="Escolha o plano ideal para o seu negócio. Todas as funcionalidades liberadas para teste."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                features={plan.features}
                highlighted={plan.highlighted}
                ctaText={plan.ctaText}
                footnote={plan.footnote}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </Layout>
  );
}
