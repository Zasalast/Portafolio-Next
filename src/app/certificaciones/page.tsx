"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Certification {
  id: string;
  name: string;
  provider: string;
  category: string;
  date: string;
  status: "completed" | "pending";
}

const certifications: Certification[] = [
  { id: "itil-1", name: "ITIL 4 Fundamentals", provider: "AXELOS", category: "ITIL", date: "2025", status: "pending" },
  { id: "dev-1", name: "Profesional de Git y GitHub", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "dev-2", name: "API REST con Javascript", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "dev-3", name: "Docker", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "dev-4", name: "Fundamentos de Entity Framework", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "dev-5", name: "React Native: Listas y APIs", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "dev-6", name: "PHP con Composer y JavaScript", provider: "Platzi", category: "Desarrollo Software", date: "2024", status: "completed" },
  { id: "fs-1", name: "Symfony 6: API REST", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-2", name: "Bases de Datos en Symfony", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-3", name: "APIs con .NET", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-4", name: "Ciberseguridad y Privacidad para Empresas", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-5", name: "Curso de PHP con Laravel", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-6", name: "Creacion de Tiendas con Woocommerce", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fs-7", name: "Creacion de Blogs con WordPress", provider: "Platzi", category: "Full Stack", date: "2024", status: "completed" },
  { id: "fe-1", name: "Profesional de Reactjs y Redux", provider: "Platzi", category: "Front-End", date: "2024", status: "completed" },
  { id: "fe-2", name: "Fundamentos de Angular", provider: "Platzi", category: "Front-End", date: "2024", status: "completed" },
  { id: "fe-3", name: "Angular Router y Lazy Loading", provider: "Platzi", category: "Front-End", date: "2024", status: "completed" },
  { id: "fe-4", name: "Reactividad con Vue.js 3", provider: "Platzi", category: "Front-End", date: "2024", status: "completed" },
  { id: "fe-5", name: "Fundamentos de UI y UX", provider: "Platzi", category: "Front-End", date: "2024", status: "completed" },
  { id: "be-1", name: "NestJS: TypeORM y MongoDB", provider: "Platzi", category: "Back-End", date: "2024", status: "completed" },
  { id: "be-2", name: "NestJS: Autenticacion con JWT", provider: "Platzi", category: "Back-End", date: "2024", status: "completed" },
  { id: "log-1", name: "Pensamiento Logico Algoritmico", provider: "Platzi", category: "Logica", date: "2024", status: "completed" },
  { id: "log-2", name: "Diagramas de Flujo", provider: "Platzi", category: "Logica", date: "2024", status: "completed" },
  { id: "log-3", name: "Funciones y Estructuras de Control", provider: "Platzi", category: "Logica", date: "2024", status: "completed" },
  { id: "log-4", name: "Manejo de Datos y Estructuras", provider: "Platzi", category: "Logica", date: "2024", status: "completed" },
  { id: "test-1", name: "Automatizacion con Puppeteer", provider: "Platzi", category: "Pruebas", date: "2024", status: "completed" },
  { id: "test-2", name: "Test con Playwright", provider: "Platzi", category: "Pruebas", date: "2024", status: "completed" },
  { id: "test-3", name: "UI con Cypress", provider: "Platzi", category: "Pruebas", date: "2024", status: "completed" },
  { id: "test-4", name: "Backend con Cypress", provider: "Platzi", category: "Pruebas", date: "2024", status: "completed" },
  { id: "mkt-1", name: "Atencion al Cliente y Soporte", provider: "Platzi", category: "Marketing", date: "2024", status: "completed" },
  { id: "mkt-2", name: "Empezar a Vender por Internet", provider: "Platzi", category: "Marketing", date: "2024", status: "completed" },
  { id: "soft-1", name: "Profesional de Scrum", provider: "Platzi", category: "Habilidades Blandas", date: "2024", status: "completed" },
  { id: "soft-2", name: "Scrum Master", provider: "Platzi", category: "Habilidades Blandas", date: "2024", status: "completed" },
  { id: "soft-3", name: "Historias de Usuario en Scrum", provider: "Platzi", category: "Habilidades Blandas", date: "2024", status: "completed" },
  { id: "soft-4", name: "Oratoria y Hablar en Publico", provider: "Platzi", category: "Habilidades Blandas", date: "2024", status: "completed" },
  { id: "soft-5", name: "Productividad y Organizacion", provider: "Platzi", category: "Habilidades Blandas", date: "2024", status: "completed" },
  { id: "extra-1", name: "App de Tareas con Django", provider: "Codigofacilito", category: "Talleres", date: "2024", status: "completed" },
  { id: "extra-2", name: "Fundamentos de UX para programadores", provider: "Codigofacilito", category: "Talleres", date: "2024", status: "completed" },
  { id: "extra-3", name: "Fundamentos Cloud", provider: "Codigofacilito", category: "Talleres", date: "2024", status: "completed" },
  { id: "extra-4", name: "Deploy con Laravel", provider: "Codigofacilito", category: "Talleres", date: "2024", status: "completed" },
];

const categories = [
  "Todas",
  "ITIL",
  "Desarrollo Software",
  "Full Stack",
  "Front-End",
  "Back-End",
  "Logica",
  "Pruebas",
  "Marketing",
  "Habilidades Blandas",
  "Talleres",
];

export default function CertificacionesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesSearch = 
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todas" || cert.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const completedCount = certifications.filter(c => c.status === "completed").length;
  const pendingCount = certifications.filter(c => c.status === "pending").length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-12">
        <div className="container-custom mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mis <span className="gradient-text">Certificaciones</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Cursos, certificaciones y formaciones continuas en tecnologias y habilidades blandas.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">{completedCount} Completadas</span>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm">{pendingCount} Pendientes</span>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent-primary"></div>
              <span className="text-sm">{certifications.length} Total</span>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar certificacion..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-accent-primary text-white"
                      : "bg-card border border-border text-text-secondary hover:text-text-primary hover:border-accent-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {cert.status === "completed" ? "Completado" : "Pendiente"}
                  </span>
                  <span className="text-text-secondary text-sm">{cert.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{cert.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">{cert.provider}</span>
                  <span className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded">
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">
                No se encontraron certificaciones con los filtros seleccionados.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
