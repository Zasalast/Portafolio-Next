const blogPosts = [
  {
    title: "Optimización de rendimiento en Next.js 14",
    excerpt: "Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js con Server Components y Suspense.",
    date: "15 Mar 2026",
    readTime: "8 min",
    category: "Next.js",
  },
  {
    title: "Guía completa de TypeScript para React",
    excerpt: "Domina TypeScript con React: tipos, generics, hooks tipados y mejores prácticas para proyectos escalables.",
    date: "10 Mar 2026",
    readTime: "12 min",
    category: "TypeScript",
  },
  {
    title: "Diseño de sistemas de componentes en TailwindCSS",
    excerpt: "Cómo crear un sistema de diseño consistente y escalable utilizando TailwindCSS con variables personalizadas.",
    date: "5 Mar 2026",
    readTime: "10 min",
    category: "TailwindCSS",
  },
  {
    title: "Autenticación segura con NextAuth.js",
    excerpt: "Implementa autenticación robusta en tus aplicaciones Next.js con múltiples proveedores y mejores prácticas de seguridad.",
    date: "28 Feb 2026",
    readTime: "15 min",
    category: "Seguridad",
  },
  {
    title: "Deploy en Vercel: De cero a producción",
    description: "Tutorial completo para desplegar aplicaciones Next.js en Vercel con CI/CD, variables de entorno y optimizaciones.",
    date: "20 Feb 2026",
    readTime: "10 min",
    category: "DevOps",
  },
  {
    title: "State Management en 2026",
    excerpt: "Comparativa de las mejores soluciones de gestión de estado: Zustand, Jotai, Redux Toolkit y React Query.",
    date: "15 Feb 2026",
    readTime: "14 min",
    category: "React",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-background-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blog & <span className="gradient-text">Artículos</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Comparto conocimientos y experiencias sobre desarrollo web y tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="card card-hover group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 text-xs rounded-md bg-accent-primary/20 text-accent-primary">
                  {post.category}
                </span>
                <span className="text-xs text-text-muted">{post.readTime} lectura</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-text-muted">{post.date}</span>
                <span className="text-sm font-medium text-accent-primary group-hover:underline">
                  Leer más →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
