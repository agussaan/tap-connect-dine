import { Printer as PrinterOff, Zap, Users, Smartphone, Puzzle, TrendingUp } from "lucide-react";

const benefits = [
  { icon: PrinterOff, title: "Eliminación de menús impresos", desc: "Ahorrá costos y actualizá tu menú al instante." },
  { icon: Zap, title: "Servicio más rápido", desc: "Los clientes piden sin esperar, el servicio fluye mejor." },
  { icon: Users, title: "Mejor organización del personal", desc: "Cada solicitud llega al panel, sin confusiones." },
  { icon: Smartphone, title: "Experiencia moderna", desc: "Tus clientes acceden al menú desde su propio celular." },
  { icon: Puzzle, title: "Implementación simple", desc: "Configurá todo en minutos, sin conocimientos técnicos." },
  { icon: TrendingUp, title: "Escalable", desc: "Desde un café hasta una cadena de restaurantes." },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">Beneficios</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">¿Por qué elegir Tappealo?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent shrink-0">
                <b.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-foreground mb-1">{b.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
