"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Inicio", href: "#inicio", isPage: false },
  { name: "Sobre Mí", href: "#sobre-mi", isPage: false },
  { name: "Proyectos", href: "#proyectos", isPage: false },
  { name: "Habilidades", href: "#habilidades", isPage: false },
  { name: "Certificaciones", href: "#certificaciones", isPage: false },
  { name: "Blog", href: "#blog", isPage: false },
  { name: "Servicios", href: "#servicios", isPage: false },
  { name: "Contacto", href: "#contacto", isPage: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const pathname = usePathname();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isCertificacionesPage = pathname === "/certificaciones";

  useEffect(() => {
    if (isCertificacionesPage) {
      setActiveSection("certificaciones");
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems
        .filter(item => !item.isPage)
        .map(item => item.href.slice(1));
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
  }, [isCertificacionesPage]);

  const renderNavLink = (item: typeof navItems[0], mobile = false) => {
    const isActive = item.isPage 
      ? pathname === item.href 
      : activeSection === item.href.slice(1);

    if (item.isPage) {
      return (
        <Link
          key={item.name}
          href={item.href}
          className={`text-sm font-medium transition-colors duration-200 hover:text-accent-primary ${
            isActive
              ? "text-accent-primary"
              : "text-text-secondary"
          }`}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`text-sm font-medium transition-colors duration-200 hover:text-accent-primary ${
          isActive
            ? "text-accent-primary"
            : "text-text-secondary"
        }`}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
      >
        {item.name}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border" : "bg-background-primary/80"
      }`}
    >
      <div className="container-custom mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#inicio"
            className="text-xl font-bold gradient-text"
          >
            Zanoni Alfredo
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => renderNavLink(item))}
          </div>

          <div className="flex items-center gap-2">
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
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => renderNavLink(item, true))}
          </div>
        )}
      </div>
    </nav>
  );
}
