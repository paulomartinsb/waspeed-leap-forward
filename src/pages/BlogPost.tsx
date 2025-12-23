import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from "lucide-react";

// Mock blog post content
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "como-aumentar-vendas-whatsapp": {
    title: "Como Aumentar suas Vendas pelo WhatsApp em 2024",
    excerpt: "Descubra as melhores estratégias para transformar seu WhatsApp em uma máquina de vendas.",
    author: "Equipe WaSpeed",
    date: "20 Dez 2024",
    category: "Vendas",
    readTime: "5 min",
    content: `
## Introdução

O WhatsApp se tornou uma das principais ferramentas de vendas para empresas de todos os tamanhos. Com mais de 120 milhões de usuários no Brasil, é impossível ignorar o potencial dessa plataforma.

## 1. Organize seus Contatos

O primeiro passo para vender mais pelo WhatsApp é ter uma organização impecável. Use etiquetas para categorizar seus contatos por:

- Estágio do funil
- Interesse no produto
- Origem do lead
- Perfil do cliente

## 2. Automatize sem Perder a Humanização

A automação é essencial para escalar, mas não pode parecer robótica. Configure:

- Mensagens de boas-vindas personalizadas
- Respostas rápidas para perguntas frequentes
- Follow-ups automáticos estratégicos

## 3. Use um Funil de Vendas Estruturado

Crie etapas claras no seu processo de vendas:

1. **Primeiro Contato**: Qualificação inicial
2. **Apresentação**: Mostrar sua solução
3. **Negociação**: Discutir condições
4. **Fechamento**: Converter em venda

## 4. Acompanhe suas Métricas

Não é possível melhorar o que não se mede. Monitore:

- Taxa de resposta
- Tempo médio de atendimento
- Taxa de conversão
- Ticket médio

## Conclusão

Com as ferramentas certas e uma estratégia bem definida, o WhatsApp pode se tornar seu principal canal de vendas. O WaSpeed oferece todas essas funcionalidades em uma única plataforma.
    `,
  },
  "automacao-atendimento-chatbot": {
    title: "Automatização de Atendimento: O Guia Completo sobre ChatBots",
    excerpt: "Aprenda como implementar um chatbot eficiente que atende seus clientes 24/7.",
    author: "Equipe WaSpeed",
    date: "18 Dez 2024",
    category: "Automação",
    readTime: "8 min",
    content: `
## O que é um ChatBot?

Um chatbot é um programa que simula uma conversa humana, respondendo automaticamente às mensagens dos seus clientes.

## Benefícios de usar ChatBots

- Atendimento 24 horas
- Respostas instantâneas
- Redução de custos
- Qualificação automática de leads
- Escalabilidade

## Como Criar um ChatBot Eficiente

### 1. Mapeie as Perguntas Frequentes

Identifique as dúvidas mais comuns dos seus clientes e crie respostas claras e objetivas.

### 2. Crie Fluxos de Conversação

Estruture conversas que guiem o cliente até a solução, seja uma venda ou um suporte.

### 3. Humanize as Respostas

Use uma linguagem natural e evite respostas muito robóticas.

### 4. Defina Quando Transferir para Humanos

Configure gatilhos para encaminhar conversas complexas para sua equipe.

## Métricas para Acompanhar

- Taxa de resolução automática
- Satisfação do cliente
- Tempo de atendimento
- Taxa de transferência para humanos

## Conclusão

Um chatbot bem configurado pode resolver até 70% dos atendimentos automaticamente, liberando sua equipe para casos mais complexos.
    `,
  },
};

const relatedPosts = [
  {
    slug: "funil-vendas-whatsapp",
    title: "Como Criar um Funil de Vendas Eficiente no WhatsApp",
    category: "Vendas",
  },
  {
    slug: "disparo-massa-seguro",
    title: "Disparo em Massa: Como Fazer de Forma Segura",
    category: "Marketing",
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Button asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>

          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} de leitura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Placeholder */}
      <section className="container-custom -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center border border-border">
            <span className="text-muted-foreground">Imagem de Destaque do Post</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-muted-foreground ml-4">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.match(/^\d+\. /)) {
                  return <li key={index} className="text-muted-foreground ml-4">{paragraph.replace(/^\d+\. /, '')}</li>;
                }
                if (paragraph.trim()) {
                  return <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>;
                }
                return null;
              })}
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Gostou do conteúdo? Compartilhe!</p>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 card-base p-8 text-center bg-accent/50">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Pronto para automatizar seu WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-6">
                Teste o WaSpeed gratuitamente por 7 dias e veja a diferença.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">
                  Começar Agora
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="group card-base p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-medium">
                  {relatedPost.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-3 group-hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
