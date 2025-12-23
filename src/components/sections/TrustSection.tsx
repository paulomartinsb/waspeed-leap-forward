const trustLogos = [
  { name: "Empresa 1", placeholder: true },
  { name: "Empresa 2", placeholder: true },
  { name: "Empresa 3", placeholder: true },
  { name: "Empresa 4", placeholder: true },
  { name: "Empresa 5", placeholder: true },
  { name: "Empresa 6", placeholder: true },
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
            <div
              key={index}
              className="h-8 w-24 md:w-32 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
