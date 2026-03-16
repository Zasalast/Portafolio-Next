const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Herramientas",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
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
