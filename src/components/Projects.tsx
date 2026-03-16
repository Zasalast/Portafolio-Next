const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    tags: ["Next.js", "TypeScript", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de análisis en tiempo real con gráficos interactivos, métricas personalizadas y exportación de datos.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description: "Aplicación de red social con autenticación, publicaciones, comentarios, likes y messenger en tiempo real.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management",
    description: "Sistema de gestión de tareas con tableros Kanban, asignaciones, deadlines y notificaciones.",
    tags: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Generator",
    description: "Herramienta para crear portfolios profesionales con templates personalizables y exportación PDF.",
    tags: ["Next.js", "React", "PDFKit", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Booking System",
    description: "Sistema de reservas online para hoteles y restaurantes con calendario interactivo y pagos.",
    tags: ["React", "Node.js", "MySQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
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
