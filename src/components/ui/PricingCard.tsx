import { Check } from "lucide-react";
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
        "card-base p-8 flex flex-col relative transition-all duration-300",
        highlighted && "border-primary ring-2 ring-primary/20 scale-[1.02]"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 right-4 px-4 py-1 rounded-full bg-green-500 text-white text-sm font-medium">
          Mais escolhida
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {name}
        </h3>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
              <Check className={cn("h-4 w-4", feature.isBonus ? "text-primary" : "text-primary")} />
            </div>
            <span className={cn("text-sm", feature.isBonus ? "text-foreground font-medium" : "text-foreground")}>
              {feature.text}
              {feature.limited !== undefined && (
                <span className={cn("ml-1", feature.limited ? "text-red-500" : "text-primary")}>
                  ({feature.limited ? "LIMITADO" : "ILIMITADO"})
                </span>
              )}
              {feature.isBonus && "*"}
            </span>
          </li>
        ))}
      </ul>

      {footnote && (
        <p className="text-xs text-muted-foreground mb-4 italic">{footnote}</p>
      )}

      <Button
        variant={highlighted ? "hero" : "outline"}
        size="lg"
        className="w-full"
        asChild
      >
        <Link to={ctaHref}>{ctaText}</Link>
      </Button>
    </div>
  );
}
