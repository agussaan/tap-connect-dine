import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tappealo-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
			<div className="container mx-auto flex items-center justify-between h-16 px-4">
				<a href="#" className="flex items-center gap-2">
					<img src={logo} alt="Tappealo" className="h-8 w-auto rounded" />
				</a>

				<div className="hidden md:flex items-center gap-8">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
						>
							{l.label}
						</a>
					))}
				</div>

				<div className="hidden md:block">
					<a href="https://w.app/fij1pn">
						<Button variant="hero" size="default">
							Solicitar demo
						</Button>
					</a>
				</div>

				<button
					className="md:hidden text-foreground"
					onClick={() => setOpen(!open)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{open && (
				<div className="md:hidden border-t border-border bg-background px-4 pb-4">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							onClick={() => setOpen(false)}
							className="block py-3 text-sm text-muted-foreground hover:text-foreground"
						>
							{l.label}
						</a>
					))}
					<a href="https://w.app/fij1pn">
						<Button variant="hero" size="default" className="w-full mt-2">
							Solicitar demo
						</Button>
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
