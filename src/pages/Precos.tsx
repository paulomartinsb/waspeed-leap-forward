import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    description: "Ideal para quem está começando",
    features: [
      "1 número de WhatsApp",
      "2 atendentes",
      "1.000 mensagens/mês",
      "ChatBot básico",
      "Etiquetas ilimitadas",
      "Respostas rápidas",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 197",
    description: "Para empresas em crescimento",
    features: [
      "3 números de WhatsApp",
      "10 atendentes",
      "10.000 mensagens/mês",
      "ChatBot avançado com IA",
      "Funil de vendas completo",
      "Disparo em massa",
      "Relatórios avançados",
      "Integrações via API",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "R$ 397",
    description: "Para grandes operações",
    features: [
      "Números ilimitados",
      "Atendentes ilimitados",
      "Mensagens ilimitadas",
      "Todas as funcionalidades",
      "API completa",
      "Webhooks em tempo real",
      "Gerente de conta dedicado",
      "SLA garantido 99.9%",
      "Treinamento da equipe",
      "Suporte 24/7",
    ],
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Números de WhatsApp", starter: "1", pro: "3", enterprise: "Ilimitado" },
  { name: "Atendentes", starter: "2", pro: "10", enterprise: "Ilimitado" },
  { name: "Mensagens/mês", starter: "1.000", pro: "10.000", enterprise: "Ilimitado" },
  { name: "ChatBot", starter: "Básico", pro: "Avançado com IA", enterprise: "Avançado com IA" },
  { name: "Funil de vendas", starter: false, pro: true, enterprise: true },
  { name: "Disparo em massa", starter: false, pro: true, enterprise: true },
  { name: "Relatórios avançados", starter: false, pro: true, enterprise: true },
  { name: "API e Webhooks", starter: false, pro: true, enterprise: true },
  { name: "Integrações nativas", starter: false, pro: true, enterprise: true },
  { name: "Gerente de conta", starter: false, pro: false, enterprise: true },
  { name: "SLA garantido", starter: false, pro: false, enterprise: true },
  { name: "Suporte", starter: "Email", pro: "Prioritário", enterprise: "24/7" },
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
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Preços"
            title="Planos que cabem no seu bolso"
            description="Escolha o plano ideal para o seu negócio. Todos incluem teste grátis de 7 dias."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
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
                  <th className="text-center py-4 px-4 font-medium text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-medium text-primary">Profissional</th>
                  <th className="text-center py-4 px-4 font-medium text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-card" : ""}>
                    <td className="py-4 px-4 text-sm text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      <ComparisonValue value={feature.starter} />
                    </td>
                    <td className="py-4 px-4 text-center bg-accent/30">
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
