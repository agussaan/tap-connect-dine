import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Básico",
    price: "119",
    desc: "Hasta 10 mesas",
    features: ["Menú digital con QR", "Hasta 10 mesas", "Panel administrador", "Página propia", "Soporte por email"],
    highlighted: false,
  },
  {
    name: "Plan Pro",
    price: "249",
    desc: "Hasta 20 mesas",
    features: ["Todo del Plan Básico", "Hasta 20 mesas", "Carga con Excel", "Comunicación cliente", "Soporte prioritario"],
    highlighted: true,
  },
  {
    name: "Plan Premium",
    price: "379",
    desc: "Más de 20 mesas",
    features: ["Todo del Plan Pro", "Mesas ilimitadas", "Funciones avanzadas", "Soporte dedicado", "Personalización"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
		<section id="precios" className="py-20 md:py-28 bg-card">
			<div className="container mx-auto px-4">
				<div className="text-center mb-6">
					<p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">
						Precios
					</p>
					<h2 className="text-3xl md:text-5xl font-display text-foreground">
						Planes para cada restaurante
					</h2>
				</div>

				<div className="flex items-center justify-center gap-2 mb-16">
					<Sparkles size={18} className="text-accent" />
					<p className="text-sm font-body text-accent font-semibold">
						Lanzamiento: Plan Premium al precio del Básico + 15 días de prueba
						gratis
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
					{plans.map((p, i) => (
						<div
							key={i}
							className={`rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
								p.highlighted
									? "bg-gradient-warm text-primary-foreground border-transparent shadow-elevated scale-[1.02]"
									: "bg-card border-border hover:shadow-card"
							}`}
						>
							<p
								className={`text-sm font-body font-semibold mb-1 ${
									p.highlighted
										? "text-primary-foreground/80"
										: "text-muted-foreground"
								}`}
							>
								{p.name}
							</p>
							<div className="flex items-baseline gap-1 mb-1">
								<span className="text-4xl font-display">${p.price}</span>
								<span
									className={`text-sm font-body ${
										p.highlighted
											? "text-primary-foreground/70"
											: "text-muted-foreground"
									}`}
								>
									USD/mes
								</span>
							</div>
							<p
								className={`text-sm font-body mb-6 ${
									p.highlighted
										? "text-primary-foreground/80"
										: "text-muted-foreground"
								}`}
							>
								{p.desc}
							</p>

							<ul className="space-y-3 mb-8 flex-1">
								{p.features.map((f, j) => (
									<li
										key={j}
										className="flex items-center gap-2 text-sm font-body"
									>
										<Check
											size={16}
											className={
												p.highlighted
													? "text-primary-foreground"
													: "text-accent"
											}
										/>
										{f}
									</li>
								))}
							</ul>
              <a href="https://w.app/fij1pn">
							<Button
								variant={p.highlighted ? "heroOutline" : "hero"}
								size="lg"
								className={
									p.highlighted
										? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
										: ""
								}
							>
								Solicitar demo
							</Button>
              </a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
