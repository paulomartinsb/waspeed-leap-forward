import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "free",
    name: "Gratuita",
    description: "Para quem quer conhecer a plataforma e testar as funcionalidades.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { text: "Envios em massa", limited: true },
      { text: "Mensagens multimídia", limited: true },
      { text: "Funis automáticos", limited: true },
      { text: "Fluxo de chatbot", limited: true },
      { text: "Respostas automáticas", limited: true },
      { text: "Publicação de status", limited: true },
      { text: "Etiquetas e marcações", limited: true },
      { text: "Agendamento de mensagens", limited: true },
      { text: "Suporte de segunda a sábado" },
    ],
    ctaText: "Testar agora",
    ctaHref: "/contato",
    highlighted: false,
  },
  {
    id: "gold",
    name: "Ouro",
    icon: "🥇",
    description: "O plano completo com todos os recursos e bônus exclusivos.",
    monthlyPrice: 97,
    annualPrice: 67,
    features: [
      { text: "Envios em massa", limited: false },
      { text: "Mensagens multimídia", limited: false },
      { text: "Funis automáticos", limited: false },
      { text: "Fluxo de chatbot", limited: false },
      { text: "Respostas automáticas", limited: false },
      { text: "Publicação de status", limited: false },
      { text: "Etiquetas e marcações", limited: false },
      { text: "Agendamento de mensagens", limited: false },
      { text: "Suporte de segunda a sábado" },
      { text: "19 Scripts Prontos", isBonus: true },
      { text: "19 Fluxos de Bot Prontos", isBonus: true },
      { text: "E-books Exclusivos", isBonus: true },
    ],
    ctaText: "Comprar Agora",
    ctaHref: "/contato",
    highlighted: true,
    footnote: "* Bônus liberados após 7 dias de garantia.",
  },
  {
    id: "silver",
    name: "Prata",
    icon: "🥈",
    description: "Para profissionais que precisam de recursos ilimitados.",
    monthlyPrice: 67,
    annualPrice: 47,
    features: [
      { text: "Envios em massa", limited: false },
      { text: "Mensagens multimídia", limited: false },
      { text: "Funis automáticos", limited: false },
      { text: "Fluxo de chatbot", limited: false },
      { text: "Respostas automáticas", limited: false },
      { text: "Publicação de status", limited: false },
      { text: "Etiquetas e marcações", limited: false },
      { text: "Agendamento de mensagens", limited: false },
      { text: "Suporte de segunda a sábado" },
    ],
    ctaText: "Comprar Agora",
    ctaHref: "/contato",
    highlighted: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o Plano Ideal
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Opções flexíveis para atender cada necessidade do seu negócio.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setIsAnnual(false)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
              !isAnnual 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            Mensal
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
              isAnnual 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            Anual
          </button>
          {isAnnual && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              30% off no anual
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300",
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/25 scale-[1.02] md:scale-105 z-10"
                  : "bg-card border-border hover:border-primary/50 hover:shadow-xl"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-primary text-sm font-semibold shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Mais escolhida
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className={cn(
                  "text-lg font-semibold flex items-center gap-2",
                  plan.highlighted ? "text-primary-foreground" : "text-muted-foreground"
                )}>
                  {plan.icon && <span className="text-xl">{plan.icon}</span>}
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-4xl lg:text-5xl font-bold",
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {plan.monthlyPrice === 0 ? "Grátis" : (
                      <>
                        R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </>
                    )}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className={cn(
                      "text-sm",
                      plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>
                      /mês
                    </span>
                  )}
                </div>
                {plan.monthlyPrice > 0 && isAnnual && (
                  <p className={cn(
                    "text-xs mt-1",
                    plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}>
                    Cobrado anualmente
                  </p>
                )}
              </div>

              {/* Description */}
              <p className={cn(
                "text-sm mb-6",
                plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {plan.description}
              </p>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? "secondary" : "default"}
                size="lg"
                className={cn(
                  "w-full font-semibold mb-6",
                  plan.highlighted 
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg" 
                    : ""
                )}
                asChild
              >
                <Link to={plan.ctaHref}>
                  {plan.ctaText}
                </Link>
              </Button>

              {/* Features */}
              <div className="flex-1">
                <p className={cn(
                  "text-xs font-semibold uppercase tracking-wider mb-4",
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                )}>
                  O que está incluído:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5",
                        plan.highlighted 
                          ? "bg-white/20" 
                          : feature.isBonus 
                            ? "bg-primary/10" 
                            : "bg-primary/10"
                      )}>
                        <Check className={cn(
                          "h-3 w-3",
                          plan.highlighted ? "text-white" : "text-primary"
                        )} />
                      </div>
                      <span className={cn(
                        "text-sm leading-relaxed",
                        plan.highlighted 
                          ? feature.isBonus 
                            ? "text-primary-foreground font-medium" 
                            : "text-primary-foreground/90"
                          : feature.isBonus 
                            ? "text-foreground font-medium" 
                            : "text-muted-foreground"
                      )}>
                        {feature.text}
                        {feature.limited !== undefined && (
                          <span className={cn(
                            "ml-1 text-xs font-medium",
                            plan.highlighted 
                              ? feature.limited ? "text-red-200" : "text-green-200"
                              : feature.limited ? "text-red-500" : "text-primary"
                          )}>
                            ({feature.limited ? "LIMITADO" : "ILIMITADO"})
                          </span>
                        )}
                        {feature.isBonus && " ✨"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footnote */}
              {plan.footnote && (
                <p className={cn(
                  "text-xs mt-4 italic",
                  plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                )}>
                  {plan.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
