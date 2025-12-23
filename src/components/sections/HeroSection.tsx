import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center mb-12">

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Automatize seu atendimento via{" "}
            <span className="gradient-text">WhatsApp</span> e aumente suas vendas
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            A plataforma mais completa para organizar, automatizar e escalar seu atendimento. 
            Disparo em massa, funis de vendas, multiatendentes e muito mais.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">
                Começar Gratuitamente
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="#demo">
                <Play className="h-5 w-5" />
                Ver Demonstração
              </Link>
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
            ✓ Teste grátis por 7 dias &nbsp;•&nbsp; ✓ Sem cartão de crédito &nbsp;•&nbsp; ✓ Cancele quando quiser
          </p>
        </div>

        {/* Product Preview */}
        <div className="relative max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <MediaPlaceholder
              type="image"
              aspectRatio="16:9"
              label="Preview do Sistema WaSpeed"
              className="rounded-2xl"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}
