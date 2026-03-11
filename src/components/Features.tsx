import { QrCode, Table2, MessageSquare, LayoutDashboard, FileSpreadsheet, Globe } from "lucide-react";
import phoneMockup from "@/assets/qr-phone-mockup.png";

const features = [
{
  icon: QrCode,
  title: "Menú digital con QR",
  desc: "Creá un menú digital completo accesible desde un código QR. Platos ilimitados, categorías, imágenes y edición instantánea.",
  bullets: ["Platos ilimitados", "Categorías de menú", "Imágenes de cada plato", "Actualización sin reimprimir"]
},
{
  icon: Table2,
  title: "Gestión de mesas",
  desc: "Gestioná las mesas del restaurante digitalmente con QR único para cada mesa.",
  bullets: ["QR único por mesa", "Gestión de múltiples mesas", "Identificación por mesa", "Organización del flujo"]
},
{
  icon: MessageSquare,
  title: "Comunicación cliente – restaurante",
  desc: "Los clientes se comunican directamente con el personal. Llamar al mozo, pedir la cuenta o enviar mensajes.",
  bullets: ["Servicio más rápido", "Mejor experiencia", "Menos confusión para el personal"]
},
{
  icon: LayoutDashboard,
  title: "Panel administrador",
  desc: "Cada restaurante tiene un panel de control completo para administrar menú, platos, categorías e imágenes.",
  bullets: ["Gestionar menú", "Subir imágenes", "Configurar datos", "Ver solicitudes"]
},
{
  icon: FileSpreadsheet,
  title: "Carga de menú con Excel",
  desc: "Subí tu menú mediante un archivo Excel. Importá platos automáticamente y cargá el menú completo en minutos.",
  bullets: ["Importar automáticamente", "Menú completo en minutos", "Ahorra horas de trabajo"]
},
{
  icon: Globe,
  title: "Página propia para cada restaurante",
  desc: "Cada restaurante tiene su propia página: tappealo.com/nombre-del-restaurante.",
  bullets: ["URL personalizada", "Acceso por link o QR", "Presencia digital propia"]
}];


const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">Funcionalidades</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">Todo lo que tu restaurante necesita</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) =>
          <div key={i} className="group bg-card rounded-2xl border border-border p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-accent mb-4 group-hover:bg-gradient-warm group-hover:text-primary-foreground transition-all duration-300">
                <f.icon size={22} />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">{f.title}</h3>
              <p className="text-sm font-body text-muted-foreground mb-4">{f.desc}</p>
              <ul className="space-y-1.5">
                {f.bullets.map((b, j) =>
              <li key={j} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">La experiencia del cliente, reinventada</h3>
            <p className="font-body text-muted-foreground mb-4">
              Tus clientes escanean el QR desde su mesa y acceden al menú completo en segundos. Sin descargas, sin esperas, sin complicaciones.
            </p>
            <p className="font-body text-muted-foreground">
              Pueden explorar categorías, ver imágenes de cada plato y comunicarse con el personal, todo desde su propio celular.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default Features;