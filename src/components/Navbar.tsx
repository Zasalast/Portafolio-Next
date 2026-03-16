"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Blog", href: "#blog" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#inicio"
            className="text-xl font-bold gradient-text"
          >
            Zanoni Alfredo
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-accent-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-accent-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-primary ${
                  activeSection === item.href.slice(1)
                    ? "text-accent-primary"
                    : "text-text-secondary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
