import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-body text-muted-foreground mb-6">
            🚀 Plataforma digital para restaurantes
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-bold leading-tight mb-6 text-foreground">
            Digitalizá tu restaurante con{" "}
            <span className="text-gradient">Tappealo</span>
          </h1>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Un sistema completo que permite a los restaurantes gestionar su menú digital, mesas y comunicación con los clientes mediante códigos QR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button variant="hero" size="xl">
              Solicitar demo
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-1" />
              Ver cómo funciona
            </Button>
          </div>
          <p className="text-sm font-body text-muted-foreground">
            Tappealo ayuda a los restaurantes a mejorar la experiencia del cliente, acelerar el servicio y organizar mejor la operación diaria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
