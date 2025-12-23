import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export function PricingCard({
  name,
  price,
  period = "/mês",
  description,
  features,
  highlighted = false,
  ctaText = "Começar agora",
  ctaHref = "/contato",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "card-base p-8 flex flex-col relative transition-all duration-300",
        highlighted && "border-primary ring-2 ring-primary/20 scale-[1.02]"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
          Mais Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

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
