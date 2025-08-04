import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Wifi, Shield, Zap } from "lucide-react";
import iotDevice from "@/assets/iot-device.jpg";
import smartHome from "@/assets/smart-home.jpg";
import industrial from "@/assets/industrial.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Dispositivos IoT",
      description: "Sistemas embarcados para Internet das Coisas com conectividade avançada e baixo consumo energético.",
      image: iotDevice,
      icon: <Wifi className="w-8 h-8" />,
      color: "tech-blue"
    },
    {
      title: "Automação Residencial",
      description: "Soluções inteligentes para residências com controle remoto e integração completa.",
      image: smartHome,
      icon: <Shield className="w-8 h-8" />,
      color: "primary"
    },
    {
      title: "Sistemas Industriais",
      description: "Hardware robusto para aplicações industriais com alta confiabilidade e performance.",
      image: industrial,
      icon: <Cpu className="w-8 h-8" />,
      color: "tech-purple"
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Microcontroladores",
      description: "Desenvolvimento com as mais avançadas arquiteturas ARM e RISC-V"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Conectividade",
      description: "WiFi, Bluetooth, LoRa, Zigbee e outras tecnologias de comunicação"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Segurança",
      description: "Criptografia avançada e protocolos seguros para proteção de dados"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Baixo Consumo",
      description: "Otimização energética para máxima autonomia e eficiência"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Eletrônicas
            <span className="text-primary"> Embarcadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Projeto, desenvolvimento e fabricação de soluções eletrônicas embarcadas, 
            compostas por hardware (placa eletrônica, displays, sensores, etc), firmware, 
            software, aplicativos e conectividade para controle e automação de produtos/equipamentos.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-${product.color}/10 text-${product.color}`}>
                  {product.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-background rounded-2xl p-8 shadow-card">
          <h3 className="text-3xl font-bold text-center mb-12">
            Tecnologia de <span className="text-primary">Ponta</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;