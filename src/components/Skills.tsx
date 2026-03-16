const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Angular", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "React Native", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "SCSS", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "PHP (Laravel, Symfony)", level: 90 },
      { name: "Python (Django)", level: 80 },
      { name: "Java (Spring Boot)", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "Nest.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "JWT", level: 85 },
    ],
  },
  {
    name: "Bases de Datos",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    name: "DevOps & Herramientas",
    icon: "🛠️",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git/GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Linux (Ubuntu, Debian)", level: 85 },
      { name: "Vercel", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    name: "Seguridad & Otros",
    icon: "🔒",
    skills: [
      { name: "ITIL 4", level: 75 },
      { name: "Hardening", level: 70 },
      { name: "Redes", level: 75 },
      { name: "Virtualización (Proxmox)", level: 70 },
      { name: "Figma", level: 80 },
      { name: "WordPress", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades & <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Tecnologías con las que trabajo día a día para crear soluciones modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span className="text-sm text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
