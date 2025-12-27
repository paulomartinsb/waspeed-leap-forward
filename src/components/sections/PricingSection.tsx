import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const plans = [
  {
    id: "free",
    name: "Licença gratuita",
    features: [
      { text: "Envios em massa", tag: "LIMITADO" },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", tag: "LIMITADO" },
      { text: "Criação de funis automáticos em um clique", tag: "LIMITADO" },
      { text: "Fluxo de chatbot", tag: "LIMITADO" },
      { text: "Respostas automáticas simples e intuitivas", tag: "LIMITADO" },
      { text: "Publicação automática de status", tag: "LIMITADO" },
      { text: "Organização por etiquetas e marcações", tag: "LIMITADO" },
      { text: "Agendamento de mensagens", tag: "LIMITADO" },
      { text: "Atendimento de segunda a sábado" },
    ],
    ctaText: "Testar agora",
    ctaHref: "/contato",
    highlighted: false,
    footnote: "* Uso limitado, apenas demonstração.",
  },
  {
    id: "silver",
    name: "Licença Prata",
    icon: "🥈",
    features: [
      { text: "Envios em massa", tag: "ILIMITADO" },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", tag: "ILIMITADO" },
      { text: "Criação de funis automáticos em um clique", tag: "ILIMITADO" },
      { text: "Fluxo de chatbot", tag: "ILIMITADO" },
      { text: "Respostas automáticas simples e intuitivas", tag: "ILIMITADO" },
      { text: "Publicação automática de status", tag: "ILIMITADO" },
      { text: "Organização por etiquetas e marcações", tag: "ILIMITADO" },
      { text: "Agendamento de mensagens", tag: "ILIMITADO" },
      { text: "Atendimento de segunda a sábado" },
      { text: "Bônus 19 Scripts Prontos e Validados", isBonus: true },
      { text: "Bônus 19 Fluxos de Bot Prontos", isBonus: true },
      { text: "Bônus Todos os nossos E-books Exclusivos de Atendimento e Vendas", isBonus: true },
    ],
    ctaText: "Comprar Agora",
    ctaHref: "/contato",
    highlighted: false,
  },
  {
    id: "gold",
    name: "Licença Ouro",
    icon: "🥇",
    features: [
      { text: "Envios em massa", tag: "ILIMITADO" },
      { text: "Envio de mensagens em texto, áudio, imagem, vídeo e documentos", tag: "ILIMITADO" },
      { text: "Criação de funis automáticos em um clique", tag: "ILIMITADO" },
      { text: "Fluxo de chatbot", tag: "ILIMITADO" },
      { text: "Respostas automáticas simples e intuitivas", tag: "ILIMITADO" },
      { text: "Publicação automática de status", tag: "ILIMITADO" },
      { text: "Organização por etiquetas e marcações", tag: "ILIMITADO" },
      { text: "Agendamento de mensagens", tag: "ILIMITADO" },
      { text: "Atendimento de segunda a sábado" },
      { text: "Bônus 19 Scripts Prontos e Validados*", isBonus: true },
      { text: "Bônus 19 Fluxos de Bot Prontos*", isBonus: true },
      { text: "Bônus Todos os nossos E-books Exclusivos de Atendimento e Vendas*", isBonus: true },
    ],
    ctaText: "Comprar Agora",
    ctaHref: "/contato",
    highlighted: true,
    footnote: "* Os bônus são liberados automaticamente após o período de garantia de 7 dias, para proteção do conteúdo digital.",
  },
];

export function PricingSection() {
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-6 lg:p-8 transition-all duration-300",
                plan.highlighted
                  ? "border-primary shadow-2xl shadow-primary/10"
                  : "border-border hover:border-primary/50 hover:shadow-xl"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-semibold">
                  Mais escolhida
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  {plan.icon && <span className="text-xl">{plan.icon}</span>}
                  {plan.name}
                </h3>
              </div>

              {/* Features */}
              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className={cn(
                        "text-sm leading-relaxed",
                        feature.isBonus 
                          ? "text-foreground font-semibold" 
                          : "text-muted-foreground"
                      )}>
                        {feature.text}
                        {feature.tag && (
                          <span className={cn(
                            "ml-1 text-xs font-semibold",
                            feature.tag === "LIMITADO" ? "text-red-500" : "text-primary"
                          )}>
                            ({feature.tag})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footnote */}
              {plan.footnote && (
                <p className={cn(
                  "text-xs mb-4 italic",
                  plan.highlighted ? "text-red-500" : "text-muted-foreground"
                )}>
                  {plan.footnote}
                </p>
              )}

              {/* CTA */}
              <Button
                variant="default"
                size="lg"
                className="w-full font-semibold"
                asChild
              >
                <Link to={plan.ctaHref}>
                  {plan.ctaText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
