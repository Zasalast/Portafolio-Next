"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 text-center px-6">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background-secondary/50">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-text-secondary">Disponible para trabajar</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hola, soy{" "}
          <span className="gradient-text">Zanoni Alfredo</span>
          <br />
          Salas Tobón
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Desarrollador Full Stack especializado en crear experiencias web modernas,
          eficientes y escalables con{" "}
          <span className="text-accent-primary">Next.js</span> y{" "}
          <span className="text-accent-primary">React</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#proyectos" className="btn-primary">
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn-secondary">
            Contactar
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-text-muted">
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary">5+</div>
            <div className="text-sm">Años de experiencia</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary">50+</div>
            <div className="text-sm">Proyectos</div>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-text-primary">30+</div>
            <div className="text-sm">Clientes</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
