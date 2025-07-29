import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      category: "Segurança",
      color: "success",
      items: [
        "Criptografia AES-256",
        "Secure Boot",
        "Hardware Security Module",
        "Certificados digitais",
        "Proteção contra ataques"
      ]
    },
    {
      category: "Conectividade", 
      color: "tech-blue",
      items: [
        "WiFi 6/6E",
        "Bluetooth 5.3",
        "LoRaWAN",
        "Cellular 4G/5G",
        "Ethernet Gigabit"
      ]
    },
    {
      category: "Energia",
      color: "tech-orange", 
      items: [
        "Ultra baixo consumo",
        "Gerenciamento inteligente",
        "Sleep modes avançados",
        "Energy harvesting",
        "Baterias de longa duração"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Inovação Tecnológica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa tecnologia vai
            <span className="block text-primary">te surpreender em:</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos as mais avançadas tecnologias de hardware e software para 
            criar soluções que superam expectativas e definem novos padrões no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5 border-primary/20"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{tech.category}</h3>
                
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group/item">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Projetos Concluídos" },
            { number: "98%", label: "Satisfação do Cliente" },
            { number: "10+", label: "Anos de Experiência" },
            { number: "24/7", label: "Suporte Técnico" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;