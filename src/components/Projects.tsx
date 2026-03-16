const projects = [
  {
    title: "Sistema IoT - Control de Temperatura",
    description: "Sistema IoT para regulación de temperatura en criadoras de pollos. Implementación integral Front-End y Back-End con arquitectura escalable.",
    tags: ["React", "Node.js", "MongoDB", "IoT"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
  {
    title: "Plataforma Web - Estudio y Agencia",
    description: "Plataforma completa para gestión de agencia con arquitectura de software y diseño UI/UX. Sistema escalable y modular.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
  {
    title: "API REST - Symfony/Laravel",
    description: "Desarrollo de APIs REST robustas con Laravel y Symfony. Autenticación JWT, documentación con Swagger y despliegue en producción.",
    tags: ["PHP", "Laravel", "Symfony", "JWT", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
  {
    title: "Aplicación Móvil - React Native",
    description: "Desarrollo de aplicaciones móviles multiplataforma con React Native. Consumo de APIs REST y gestión de estado avanzada.",
    tags: ["React Native", "TypeScript", "REST APIs", "Redux"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
  {
    title: "Dashboard Admin - Django + Vue.js",
    description: "Panel de administración con gráficos interactivos, gestión de usuarios y métricas en tiempo real. Backend con Django REST Framework.",
    tags: ["Python", "Django", "Vue.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
  {
    title: "E-commerce - WooCommerce/WordPress",
    description: "Tiendas en línea personalizadas con WooCommerce. Integración de pagos, inventario y gestión de pedidos.",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/zasalast",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card card-hover group"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 mb-4 flex items-center justify-center border border-border">
                <span className="text-4xl">💼</span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-background-tertiary text-text-secondary border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-primary hover:underline"
                >
                  Ver Demo →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
