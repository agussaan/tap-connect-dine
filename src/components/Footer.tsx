import logo from "@/assets/tappealo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Tappealo" className="h-10 rounded" />
            <span className="font-body text-sm text-muted-foreground">El sistema digital para restaurantes</span>
          </div>
          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Cómo funciona</a>
            <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#precios" className="hover:text-foreground transition-colors">Precios</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">© 2026 Tappealo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
