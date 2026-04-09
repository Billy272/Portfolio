import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Evergain Limited",
      tag: "Corporate Website",
      description:
        "Modern corporate website with clear value proposition, responsive design, and optimized for conversions. Features a beautiful landing page showcasing services, team, and portfolio.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://www.evergain.co.ke/",
      color: "bg-blue-50",
    },
    {
      title: "Evergain CRM",
      tag: "Enterprise CRM",
      description:
        "Complete CRM solution featuring lead management, proposals, project tracking, invoicing and reporting. Built with React frontend and FastAPI backend for enterprise scalability.",
      tech: ["React", "FastAPI", "PostgreSQL", "Redux", "Tailwind CSS"],
      link: "https://crm.evergain.co.ke/",
      color: "bg-slate-50",
    },
    {
      title: "Human Resource Management",
      tag: "HR Platform",
      description:
        "Comprehensive HRM suite with recruitment, payroll, attendance tracking, and performance management. Built with Next.js and PostgreSQL for real-time data synchronization.",
      tech: ["Next.js", "PostgreSQL", "TypeScript", "Docker", "JWT Auth"],
      link: "https://hrm.evergain.co.ke/",
      color: "bg-blue-50",
    },
  ];

  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="content-section section-reveal" style={{ paddingTop: "3rem" }}>
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>
              A selection of projects I&apos;ve built, ranging from corporate websites to enterprise applications.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`${project.color} border border-gray-200 rounded-16 p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "2rem" }}>
                  <div style={{ flex: 1 }}>
                    <p className="project-tag">{project.tag}</p>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "var(--foreground)" }}>
                      {project.title}
                    </h3>
                    <p style={{ color: "var(--ink-soft)", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                      {project.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: "0.5rem 1rem",
                            backgroundColor: "white",
                            border: "1px solid var(--line)",
                            borderRadius: "6px",
                            fontSize: "0.85rem",
                            color: "var(--ink-soft)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
            <p style={{ marginBottom: "1rem", color: "var(--ink-soft)" }}>
              Interested in working together? Let&apos;s talk about your next project.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
