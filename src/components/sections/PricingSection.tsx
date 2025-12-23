import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";

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
      "API completa",
      "Integrações avançadas",
      "Gerente de conta dedicado",
      "SLA garantido",
      "Treinamento da equipe",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Preços"
          title="Escolha o plano ideal para você"
          description="Planos flexíveis que crescem com o seu negócio. Teste grátis por 7 dias."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
}
