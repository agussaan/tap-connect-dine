import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "¿Necesito conocimientos técnicos para usar Tappealo?", a: "No. Tappealo está diseñado para que cualquier persona pueda configurar su restaurante en minutos. Solo necesitás acceso a internet." },
  { q: "¿Puedo actualizar el menú en cualquier momento?", a: "Sí. Podés agregar, editar o eliminar platos desde el panel administrador en tiempo real. Los cambios se reflejan al instante en el menú digital." },
  { q: "¿Cómo funcionan los códigos QR?", a: "Cada mesa tiene un código QR único. Cuando un cliente lo escanea con su celular, se abre automáticamente el menú digital de tu restaurante." },
  { q: "¿Los clientes necesitan descargar alguna app?", a: "No. El menú se abre directamente en el navegador del celular. No se necesita ninguna descarga." },
  { q: "¿Puedo cargar mi menú desde un archivo Excel?", a: "Sí. Podés importar todos tus platos desde un archivo Excel para ahorrar tiempo en la carga inicial." },
  { q: "¿Qué pasa si necesito más mesas que las de mi plan?", a: "Podés actualizar tu plan en cualquier momento para agregar más mesas. El cambio es inmediato." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">Preguntas frecuentes</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-body font-medium text-foreground hover:bg-secondary/50 transition-colors"
              >
                {f.q}
                <ChevronDown size={18} className={`text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 font-body text-sm text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
