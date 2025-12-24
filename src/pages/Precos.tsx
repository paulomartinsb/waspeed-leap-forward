import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { Check, X } from "lucide-react";

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

const comparisonFeatures = [
  { name: "Envios em massa", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Envio de mensagens multimídia", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Funis automáticos", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Fluxo de chatbot", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Respostas automáticas", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Publicação de status", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Etiquetas e marcações", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Agendamento de mensagens", starter: "Limitado", pro: "Ilimitado", enterprise: "Ilimitado" },
  { name: "Bônus Scripts e Fluxos", starter: false, pro: true, enterprise: false },
  { name: "Bônus E-books Exclusivos", starter: false, pro: true, enterprise: false },
  { name: "Suporte", starter: "Segunda a sábado", pro: "Segunda a sábado", enterprise: "Segunda a sábado" },
];

function ComparisonValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-primary mx-auto" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

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

      {/* Comparison Table */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            title="Compare os planos"
            description="Veja em detalhes o que cada plano oferece."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">Funcionalidade</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Gratuita</th>
                  <th className="text-center py-4 px-4 font-medium text-primary">Ouro</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Prata</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-card" : ""}>
                    <td className="py-4 px-4 text-sm text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      <ComparisonValue value={feature.starter} />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      <ComparisonValue value={feature.pro} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <ComparisonValue value={feature.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection />
    </Layout>
  );
}
