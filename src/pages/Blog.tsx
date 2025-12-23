import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";

// Mock blog posts data
const blogPosts = [
  {
    slug: "como-aumentar-vendas-whatsapp",
    title: "Como Aumentar suas Vendas pelo WhatsApp em 2024",
    excerpt: "Descubra as melhores estratégias para transformar seu WhatsApp em uma máquina de vendas. Dicas práticas e cases de sucesso.",
    author: "Equipe WaSpeed",
    date: "20 Dez 2024",
    category: "Vendas",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "automacao-atendimento-chatbot",
    title: "Automatização de Atendimento: O Guia Completo sobre ChatBots",
    excerpt: "Aprenda como implementar um chatbot eficiente que atende seus clientes 24/7 sem perder a humanização.",
    author: "Equipe WaSpeed",
    date: "18 Dez 2024",
    category: "Automação",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "funil-vendas-whatsapp",
    title: "Como Criar um Funil de Vendas Eficiente no WhatsApp",
    excerpt: "Passo a passo para estruturar seu funil de vendas e converter mais leads em clientes.",
    author: "Equipe WaSpeed",
    date: "15 Dez 2024",
    category: "Vendas",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "disparo-massa-seguro",
    title: "Disparo em Massa: Como Fazer de Forma Segura e Eficiente",
    excerpt: "Guia completo para enviar mensagens em massa sem risco de banimento e com alta taxa de entrega.",
    author: "Equipe WaSpeed",
    date: "12 Dez 2024",
    category: "Marketing",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "atendimento-multiagentes",
    title: "Gestão de Equipe: Multiatendentes em um Único Número",
    excerpt: "Como organizar sua equipe de atendimento para máxima eficiência usando um único número de WhatsApp.",
    author: "Equipe WaSpeed",
    date: "10 Dez 2024",
    category: "Gestão",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "metricas-atendimento-whatsapp",
    title: "Métricas de Atendimento: O Que Medir e Como Melhorar",
    excerpt: "Conheça as principais métricas de atendimento via WhatsApp e como usá-las para melhorar seus resultados.",
    author: "Equipe WaSpeed",
    date: "8 Dez 2024",
    category: "Métricas",
    readTime: "6 min",
    featured: false,
  },
];

const categories = ["Todos", "Vendas", "Automação", "Marketing", "Gestão", "Métricas"];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeader
            badge="Blog"
            title="Dicas e Estratégias para Vender Mais"
            description="Artigos, tutoriais e cases para você dominar o atendimento via WhatsApp."
          />

          {/* Search */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar artigos..."
                className="pl-12 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8">Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group card-base overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Imagem do Post</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime} de leitura</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8">Todos os Artigos</h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum artigo encontrado.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group card-base overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Imagem do Post</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-base p-8 md:p-12 text-center bg-accent/50">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Receba conteúdos exclusivos
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cadastre-se na nossa newsletter e receba dicas, estratégias e novidades direto no seu email.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1"
              />
              <Button variant="hero">Inscrever-se</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
