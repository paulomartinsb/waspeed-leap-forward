import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o período de teste?",
    answer: "Você tem 7 dias para testar todas as funcionalidades do WaSpeed gratuitamente. Não é necessário cartão de crédito para começar. Ao final do período, você pode escolher o plano que melhor atende suas necessidades.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Não temos fidelidade ou multa de cancelamento. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel. Seu acesso continua até o final do período pago.",
  },
  {
    question: "O WaSpeed é seguro? Posso ser banido?",
    answer: "O WaSpeed utiliza conexão oficial do WhatsApp Business API e implementa todas as melhores práticas de segurança. Seguimos as diretrizes do WhatsApp para evitar qualquer tipo de banimento.",
  },
  {
    question: "Quantos números de WhatsApp posso conectar?",
    answer: "Depende do seu plano. O plano Starter permite 1 número, o Profissional permite 3 números, e o Enterprise permite números ilimitados. Você pode fazer upgrade a qualquer momento.",
  },
  {
    question: "Vocês oferecem treinamento?",
    answer: "Sim! Oferecemos tutoriais em vídeo, documentação completa e webinars semanais para todos os clientes. Clientes Enterprise recebem treinamento personalizado para toda a equipe.",
  },
  {
    question: "Posso integrar com outras ferramentas?",
    answer: "Sim! O WaSpeed integra com CRMs populares, ERPs, e-commerce platforms e muito mais. Também oferecemos API completa para integrações personalizadas.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte por email para todos os planos, chat em tempo real para planos Profissional e Enterprise, e gerente de conta dedicado para Enterprise.",
  },
  {
    question: "Posso fazer upgrade ou downgrade do plano?",
    answer: "Sim! Você pode mudar de plano a qualquer momento. O valor é ajustado proporcionalmente no seu próximo ciclo de cobrança.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionHeader
          badge="FAQ"
          title="Perguntas Frequentes"
          description="Tire suas dúvidas sobre o WaSpeed."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-base px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
