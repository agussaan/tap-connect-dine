import { ScanLine, BookOpen, LayoutGrid, MessageCircle, Settings } from "lucide-react";

const steps = [
  { icon: ScanLine, title: "Escanea el QR", desc: "El cliente escanea el código QR de la mesa" },
  { icon: BookOpen, title: "Menú digital", desc: "Se abre el menú digital automáticamente" },
  { icon: LayoutGrid, title: "Explora el menú", desc: "El cliente puede ver categorías y platos" },
  { icon: MessageCircle, title: "Comunicación", desc: "El cliente puede comunicarse con el restaurante" },
  { icon: Settings, title: "Panel admin", desc: "El restaurante gestiona todo desde el panel administrador" },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">Cómo funciona</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">Simple, rápido y efectivo</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                  <step.icon size={24} />
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
              </div>
              <div className="pt-3">
                <h3 className="text-lg font-display text-foreground mb-1">{step.title}</h3>
                <p className="font-body text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
