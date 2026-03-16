const services = [
  {
    icon: "💻",
    title: "Desarrollo Web",
    description: "Creación de aplicaciones web modernas y escalables utilizando las últimas tecnologías como Next.js, React y TypeScript.",
    features: [
      "Sitios web responsive",
      "Aplicaciones SPA",
      "E-commerce",
      "Dashboards admin",
    ],
  },
  {
    icon: "🎨",
    title: "Diseño UI/UX",
    description: "Diseño de interfaces de usuario atractivas y funcionales que mejoran la experiencia del usuario.",
    features: [
      "Diseño de interfaces",
      "Prototipado",
      "Sistemas de diseño",
      "UX Research",
    ],
  },
  {
    icon: "⚡",
    title: "Optimización",
    description: "Mejora del rendimiento y velocidad de tu sitio web para mejor SEO y experiencia de usuario.",
    features: [
      "Auditoría de rendimiento",
      "Optimización Core Web Vitals",
      "SEO técnico",
      "Velocidad de carga",
    ],
  },
  {
    icon: "🔧",
    title: "Mantenimiento",
    description: "Soporte continuo y mantenimiento para garantizar el funcionamiento óptimo de tu aplicación.",
    features: [
      "Actualizaciones de seguridad",
      "Bug fixes",
      "Nuevas funcionalidades",
      "Soporte técnico",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Soluciones personalizadas para llevar tu presencia digital al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
