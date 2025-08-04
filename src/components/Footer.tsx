import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Suporte ao Cliente": [
      "Suporte Técnico",
      "Assistência Técnica", 
      "Fórum",
      "Central de Downloads",
      "Conta EmbTech"
    ],
    "Fale Conosco": [
      "Fale Conosco",
      "Central de Atendimento",
      "Comercial",
      "Encontrar Revendedor",
      "Tour Virtual"
    ],
    "Sobre Nós": [
      "Quem Somos",
      "Trabalhe Conosco",
      "Notícias",
      "Responsabilidade Social",
      "Localização"
    ],
    "Conheça Também": [
      "Programa de Canais",
      "Investidores", 
      "Cursos EmbTech",
      "Loja EmbTech",
      "Newsletter"
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Você precisa de ajuda?</h3>
              <p className="text-primary-foreground/80">
                Receba atualizações sobre novos produtos e tecnologias
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail aqui"
                  className="px-4 py-3 rounded-l-lg text-foreground bg-background border border-border flex-1 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-primary-glow"
                />
                <Button 
                  variant="secondary" 
                  className="rounded-l-none px-6 hover:bg-secondary/90"
                >
                  <Mail size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-primary-glow">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-primary-glow">Nossas redes sociais</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm group"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-3 group-hover:bg-primary-glow/20 transition-colors">
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <img 
                src="/src/assets/logo-embtech-simple.svg" 
                alt="EmbTech" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-primary-foreground/60 text-sm">
                Copyright EmbTech {currentYear}. Todos os direitos reservados.
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Mapa do Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;