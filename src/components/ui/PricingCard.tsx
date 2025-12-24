import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PricingFeature {
  text: string;
  limited?: boolean;
  isBonus?: boolean;
}

interface PricingCardProps {
  name: string;
  icon?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
  footnote?: string;
}

export function PricingCard({
  name,
  icon,
  features,
  highlighted = false,
  ctaText = "Começar agora",
  ctaHref = "/contato",
  footnote,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 lg:p-8 transition-all duration-300",
        highlighted 
          ? "border-primary shadow-xl shadow-primary/10 scale-[1.02] md:scale-105 z-10" 
          : "border-border hover:border-primary/50 hover:shadow-lg"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
          Mais escolhida
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}
          {name}
        </h3>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5",
              feature.isBonus ? "bg-primary/10" : "bg-accent"
            )}>
              <Check className={cn(
                "h-3 w-3",
                feature.isBonus ? "text-primary" : "text-primary"
              )} />
            </div>
            <span className={cn(
              "text-sm leading-relaxed",
              feature.isBonus ? "text-foreground font-medium" : "text-muted-foreground"
            )}>
              {feature.text}
              {feature.limited !== undefined && (
                <span className={cn(
                  "ml-1 font-medium",
                  feature.limited ? "text-red-500" : "text-primary"
                )}>
                  ({feature.limited ? "LIMITADO" : "ILIMITADO"})
                </span>
              )}
              {feature.isBonus && "*"}
            </span>
          </li>
        ))}
      </ul>

      {/* Footnote */}
      {footnote && (
        <p className="text-xs text-muted-foreground mb-4 italic leading-relaxed">{footnote}</p>
      )}

      {/* CTA */}
      <Button
        variant={highlighted ? "hero" : "outline"}
        size="lg"
        className={cn(
          "w-full font-semibold",
          highlighted && "shadow-lg shadow-primary/25"
        )}
        asChild
      >
        <Link to={ctaHref}>{ctaText}</Link>
      </Button>
    </div>
  );
}
