import trustLogo1 from "@/assets/trust-logo-1.png";
import trustLogo2 from "@/assets/trust-logo-2.png";
import trustLogo3 from "@/assets/trust-logo-3.png";
import trustLogo4 from "@/assets/trust-logo-4.png";
import trustLogo5 from "@/assets/trust-logo-5.png";
import trustLogo6 from "@/assets/trust-logo-6.png";

const trustLogos = [
  { name: "Empresa 1", src: trustLogo1 },
  { name: "Empresa 2", src: trustLogo2 },
  { name: "Empresa 3", src: trustLogo3 },
  { name: "Empresa 4", src: trustLogo4 },
  { name: "Empresa 5", src: trustLogo5 },
  { name: "Empresa 6", src: trustLogo6 },
];

export function TrustSection() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/50">
      <div className="container-custom">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Mais de <strong className="text-foreground">30.000 empresas</strong> confiam no WaSpeed
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
