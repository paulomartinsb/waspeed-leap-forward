import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Send, Layers, Tags, BarChart3, Users, Bot, MessageSquare, Zap, Shield, Globe } from "lucide-react";

const allFeatures = [
  {
    icon: Bot,
    title: "ChatBot Inteligente",
    description: "Automatize até 70% dos atendimentos com nosso chatbot que aprende e evolui. Configure fluxos de conversação, respostas automáticas e qualificação de leads 24 horas por dia.",
    benefits: [
      "Respostas instantâneas 24/7",
      "Qualificação automática de leads",
      "Fluxos de conversa personalizáveis",
      "Integração com IA",
    ],
  },
  {
    icon: Send,
    title: "Disparo em Massa",
    description: "Envie mensagens personalizadas para milhares de contatos de forma segura e dentro das diretrizes do WhatsApp. Segmente por etiquetas, comportamento e histórico.",
    benefits: [
      "Envio seguro anti-banimento",
      "Personalização com variáveis",
      "Segmentação avançada",
      "Agendamento de campanhas",
    ],
  },
  {
    icon: Layers,
    title: "Funil de Vendas",
    description: "Visualize todo o seu pipeline de vendas em um kanban intuitivo. Arraste e solte leads entre etapas, configure automações e nunca perca uma oportunidade.",
    benefits: [
      "Visualização em kanban",
      "Automações por etapa",
      "Alertas de oportunidades",
      "Previsão de vendas",
    ],
  },
  {
    icon: Users,
    title: "Multiatendentes",
    description: "Tenha toda sua equipe atendendo em um único número. Distribua conversas automaticamente, transfira atendimentos e monitore a produtividade em tempo real.",
    benefits: [
      "Distribuição automática",
      "Transferência entre atendentes",
      "Chat interno da equipe",
      "Monitoramento de performance",
    ],
  },
  {
    icon: Calendar,
    title: "Agendamento de Mensagens",
    description: "Programe mensagens para serem enviadas no momento ideal. Perfeito para follow-ups, lembretes de compromissos e campanhas programadas.",
    benefits: [
      "Agendamento por data/hora",
      "Follow-ups automáticos",
      "Lembretes recorrentes",
      "Fuso horário inteligente",
    ],
  },
  {
    icon: Tags,
    title: "Etiquetas e Organização",
    description: "Categorize seus contatos com etiquetas coloridas personalizadas. Filtre conversas, crie grupos dinâmicos e mantenha tudo organizado.",
    benefits: [
      "Etiquetas coloridas",
      "Filtros avançados",
      "Grupos dinâmicos",
      "Busca inteligente",
    ],
  },
  {
    icon: BarChart3,
    title: "Relatórios e Métricas",
    description: "Dashboard completo com todas as métricas que você precisa. Acompanhe atendimentos, tempo de resposta, conversões e performance da equipe.",
    benefits: [
      "Dashboard em tempo real",
      "Relatórios exportáveis",
      "Métricas de equipe",
      "Análise de conversões",
    ],
  },
  {
    icon: MessageSquare,
    title: "Respostas Rápidas",
    description: "Crie templates de mensagens para respostas frequentes. Inclua variáveis dinâmicas, anexos e agilize o atendimento da sua equipe.",
    benefits: [
      "Templates personalizados",
      "Variáveis dinâmicas",
      "Atalhos de teclado",
      "Biblioteca compartilhada",
    ],
  },
  {
    icon: Zap,
    title: "Integrações",
    description: "Conecte o WaSpeed com suas ferramentas favoritas. CRM, ERP, e-commerce e muito mais. API completa para integrações personalizadas.",
    benefits: [
      "Webhooks em tempo real",
      "API REST completa",
      "Integrações nativas",
      "Zapier e Make",
    ],
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Seus dados estão seguros conosco. Criptografia de ponta a ponta, backups automáticos e conformidade total com LGPD.",
    benefits: [
      "Criptografia de dados",
      "Backups automáticos",
      "Conformidade LGPD",
      "Acesso controlado",
    ],
  },
];

export default function RecursosPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Recursos"
            title="Tudo que você precisa para vender mais"
            description="Conheça todas as funcionalidades que tornam o WaSpeed a plataforma mais completa de automação para WhatsApp."
          />
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {allFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Media */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-card-lg border border-border/50">
                    <MediaPlaceholder
                      type="image"
                      aspectRatio="16:9"
                      label={`Preview: ${feature.title}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Teste todas as funcionalidades gratuitamente por 7 dias.
          </p>
          <Button
            size="xl"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link to="/contato">
              Começar Agora
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
