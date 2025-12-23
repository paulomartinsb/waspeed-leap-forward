import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote: "O WaSpeed transformou nosso atendimento. Aumentamos as conversões em 40% no primeiro mês. A automação é incrível!",
    author: "Maria Silva",
    role: "CEO",
    company: "Loja Fashion",
    rating: 5,
  },
  {
    quote: "Finalmente conseguimos organizar nosso WhatsApp comercial. O funil de vendas é perfeito para nossa equipe.",
    author: "Carlos Santos",
    role: "Gerente Comercial",
    company: "Auto Peças Express",
    rating: 5,
  },
  {
    quote: "A melhor ferramenta de automação que já usei. O suporte é excelente e a plataforma é muito intuitiva.",
    author: "Ana Oliveira",
    role: "Proprietária",
    company: "Clínica Estética Bella",
    rating: 5,
  },
  {
    quote: "Com o disparo em massa conseguimos reativar clientes antigos. Faturamento aumentou 25% em 3 meses.",
    author: "Roberto Lima",
    role: "Diretor",
    company: "Imobiliária Prime",
    rating: 5,
  },
  {
    quote: "Os relatórios me ajudam a entender o desempenho da equipe. Tomamos decisões muito mais assertivas agora.",
    author: "Fernanda Costa",
    role: "Supervisora",
    company: "Tech Solutions",
    rating: 5,
  },
  {
    quote: "O chatbot resolve 70% dos atendimentos automaticamente. Minha equipe agora foca no que realmente importa.",
    author: "Pedro Mendes",
    role: "Fundador",
    company: "Delivery Sabor",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeader
          badge="Depoimentos"
          title="O que nossos clientes dizem"
          description="Milhares de empresas já transformaram seu atendimento com o WaSpeed."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
