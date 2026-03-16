const experience = [
  {
    company: "COLSOF S.A.S - Ministerio Relaciones Exteriores",
    role: "Técnico de Servicio Nivel II",
    period: "Enero 2025 – Actual",
    description: "Atención directa a embajadores y funcionarios consulares, soporte técnico especializado en aplicativos institucionales. Recepción de requerimientos, mantenimientos preventivos y correctivos, instalación y configuración de equipos.",
  },
  {
    company: "SONDA Colombia",
    role: "Agente Mesa de Ayuda",
    period: "Julio 2024 – Enero 2025",
    description: "Apoyo técnico a usuarios, asistencia en resolución de incidentes y gestión de acciones para satisfacción del cliente.",
  },
  {
    company: "Estudio y Agencia",
    role: "Arquitecto de Software, Diseñador UI/UX y Programador Full Stack",
    period: "Febrero 2023 – Actual",
    description: "Lideré la planificación y ejecución de sistemas eficientes y escalables, fusionando arquitectura de software y diseño UI/UX intuitivo.",
  },
  {
    company: "Insared Telecomunicaciones SAS",
    role: "Técnico en equipos de computo",
    period: "Febrero 2024 – Junio 2024",
    description: "Instalación y soporte de equipos de computo.",
  },
  {
    company: "Serving Colombia LTDA",
    role: "Técnico en mantenimiento de equipos de computo",
    period: "Enero 2023 – Enero 2024",
    description: "Reparación de equipos, mantenimiento, soporte técnico, instalación y configuración de equipos de escritorio, portátiles e impresoras. Manejo de sistemas Aranda y seguridad.",
  },
  {
    company: "Unidad de Apoyo UDLA",
    role: "Arquitecto de Software, Diseñador UI/UX y Programador Full Stack",
    period: "Dic. 2022 – Ene. 2023",
    description: "Diseño y desarrollo de sistemas IoT para regular temperatura en criadoras de pollos. Implementación integral Front-End y Back-End.",
  },
];

const education = [
  {
    title: "Especialización en Seguridad Informática",
    institution: "Fundación Universitaria Internacional de La Rioja – UNIR",
    year: "2025",
  },
  {
    title: "Ingeniería de Sistemas",
    institution: "Universidad de la Amazonia",
    year: "Febrero 2023 – Florencia",
  },
  {
    title: "Tecnólogo en Técnicas de Desarrollo Gráfico de Proyectos de Construcción",
    institution: "Servicio Nacional de Aprendizaje – SENA",
    year: "Mayo 2013 – Florencia",
  },
];

const contactInfo = {
  phone: "+57 3134208041",
  email: "zasalastobon@gmail.com",
  website: "zasalastobon.com",
  github: "github.com/zasalast",
};

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
        </div>

        <div className="mb-12">
          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Especialista en Seguridad Informática | Ingeniero de Sistemas | Desarrollador Full Stack
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Especialista en Seguridad Informática e Ingeniero de Sistemas con experiencia en desarrollo Full Stack, 
              soporte técnico nivel II, arquitectura de software, diseño UI/UX, administración de bases de datos y servidores, 
              y gestión de incidentes. Dominio de tecnologías como HTML, CSS, JavaScript, Typescript, Angular, React, 
              Vue.js, Next.js, PHP (Laravel, Symfony), Python (Django), Java (Spring Boot), SQL (MySQL, PostgreSQL), 
              SCSS y entornos Linux. Con conocimientos en ITIL 4, análisis técnico, seguridad de la información, redes, 
              hardening, virtualización (Proxmox), gestión de infraestructura y soporte a usuarios de alto nivel.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card text-center">
              <div className="text-2xl font-bold gradient-text">📱</div>
              <div className="text-sm text-text-secondary">{contactInfo.phone}</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold gradient-text">✉️</div>
              <div className="text-sm text-text-secondary">{contactInfo.email}</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold gradient-text">🌐</div>
              <div className="text-sm text-text-secondary">{contactInfo.website}</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold gradient-text">💻</div>
              <div className="text-sm text-text-secondary">{contactInfo.github}</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Experiencia <span className="gradient-text">Laboral</span>
          </h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="card card-hover">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h4 className="text-lg font-semibold text-accent-primary">{exp.company}</h4>
                  <span className="text-sm text-text-muted">{exp.period}</span>
                </div>
                <p className="text-text-primary font-medium mb-2">{exp.role}</p>
                <p className="text-text-secondary text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Formación <span className="gradient-text">Académica</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <h4 className="font-semibold mb-1">{edu.title}</h4>
                <p className="text-sm text-text-secondary">{edu.institution}</p>
                <p className="text-xs text-text-muted mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Reconocimientos
          </h3>
          <div className="card border-l-4 border-l-accent-primary">
            <p className="font-medium">Excelencia Académica 2022-II</p>
            <p className="text-sm text-text-secondary">Universidad de la Amazonia, 25 de mayo 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
