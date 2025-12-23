import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logoWaspeed from "@/assets/logo-waspeed.webp";

const footerLinks = {
  produto: [
    { label: "Recursos", href: "/recursos" },
    { label: "Preços", href: "/precos" },
    { label: "Integrações", href: "/recursos#integracoes" },
    { label: "Atualizações", href: "/blog" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
    { label: "Parceiros", href: "/parceiros" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "/ajuda" },
    { label: "Documentação", href: "/docs" },
    { label: "Status", href: "/status" },
    { label: "Comunidade", href: "/comunidade" },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Privacidade", href: "/privacidade" },
    { label: "Cookies", href: "/cookies" },
    { label: "LGPD", href: "/lgpd" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/waspeed", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/waspeed", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/waspeed", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/waspeed", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logoWaspeed} alt="WaSpeed" className="h-10" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Automatize seu atendimento via WhatsApp e aumente suas vendas com a plataforma mais completa do mercado.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@waspeed.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WaSpeed. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💙 no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
