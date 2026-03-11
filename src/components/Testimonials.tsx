import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Dueña de Restaurante La Esquina",
    text: "Tappealo transformó la manera en que gestionamos nuestro restaurante. Los clientes aman poder ver el menú desde su celular.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Parrilla Don Carlos",
    text: "Implementar el sistema fue super sencillo. En una tarde ya teníamos todo funcionando con los QR en cada mesa.",
  },
  {
    name: "Ana Martínez",
    role: "Encargada de Café Central",
    text: "La comunicación directa con los clientes mejoró mucho nuestro servicio. Menos esperas, más satisfacción.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">Testimonios</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-background rounded-2xl border border-border p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                <p className="font-body text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
