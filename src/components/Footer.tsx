const footerLinks = {
  navigation: [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Blog", href: "#blog" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ],
  social: [
    { name: "GitHub", url: "https://github.com/zasalast" },
    { name: "LinkedIn", url: "#" },
    { name: "Sitio Web", url: "https://zasalastobon.com" },
    { name: "Email", url: "mailto:zasalastobon@gmail.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary/30">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              Zanoni Alfredo Salas Tobón
            </h3>
            <p className="text-text-secondary text-sm">
              Desarrollador Full Stack especializado en crear experiencias web 
              modernas, eficientes y escalables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Zanoni Alfredo Salas Tobón. Todos los derechos reservados.
          </p>
          <p className="text-sm text-text-muted">
            Construido con{" "}
            <span className="text-accent-primary">Next.js</span> y{" "}
            <span className="text-accent-primary">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
