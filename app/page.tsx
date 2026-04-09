export default function Home() {
  return (
    <div className="portfolio-shell">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <main className="portfolio-main">
        <section className="topbar section-reveal">
          <p className="brand-mark">BB</p>
          <div className="topbar-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="mailto:billbitok977@gmail.com">Contact</a>
          </div>
        </section>

        <section className="hero-layout section-reveal" style={{ animationDelay: "80ms" }}>
          <div className="hero-content-wrapper">
            <div className="hero-copy-block">
              <p className="eyebrow">Full Stack Developer · DevOps Engineer · Systems Design</p>
              <h1 className="hero-title">
                Building premium digital experiences that are delightful to use and engineered to scale.
              </h1>
              <p className="hero-copy">
                I'm Bill Bitok, a developer from Nairobi crafting thoughtful interfaces and reliable systems. I focus on building software that solves real problems with clarity and taste.
              </p>
              <div className="hero-actions">
                <a href="mailto:billbitok977@gmail.com" className="btn-primary">
                  Get in Touch
                </a>
                <a
                  href="https://github.com/Billy272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  See My Work
                </a>
              </div>
            </div>

            <div className="hero-visual-side">
              <img src="/hero-visual.jpg" alt="Developer workspace" className="hero-image" />
            </div>
          </div>

          <div className="stats-row">
            <article>
              <strong>What I Build</strong>
              <span>Scalable web apps, internal tools, CRMs, HRMs, and beautiful websites.</span>
            </article>
            <article>
              <strong>Tech Stack</strong>
              <span>React, Next.js, FastAPI, Java, Supabase, Docker, PostgreSQL.</span>
            </article>
            <article>
              <strong>My Approach</strong>
              <span>Design thinking, solid engineering, performance obsession.</span>
            </article>
          </div>
        </section>

        <section className="feature-strip section-reveal" style={{ animationDelay: "160ms" }}>
          <article className="feature-card feature-card-dark">
            <p>About</p>
            <h3>
              I build interfaces that delight users and systems that scale. Clean code, thoughtful design, real impact.
            </h3>
          </article>
          <article className="feature-card">
            <p>Education</p>
            <h3>BSc Mathematics & Computer Science, Multimedia University of Kenya.</h3>
          </article>
          <article className="feature-card feature-card-blue">
            <p>Philosophy</p>
            <h3>Design-driven, engineer-led, user-obsessed. Every pixel matters.</h3>
          </article>
        </section>

        <section className="content-section projects-section section-reveal" style={{ animationDelay: "240ms" }}>
          <div className="projects-wrapper">
            <div className="projects-visual">
              <img src="/projects-showcase.jpg" alt="Web application interfaces" className="projects-image" />
            </div>
            <div className="projects-content">
              <div className="section-heading">
                <h2 id="projects">Featured Work</h2>
                <p>Recent projects showcasing full-stack development, from concept to production deployment.</p>
              </div>
              <div className="project-grid">
            <article className="project-card project-card-large">
              <div>
                <p className="project-tag">Corporate Website</p>
                <h3>Evergain Limited</h3>
                <p>
                  Modern corporate website with clear value proposition, responsive design, and optimized for conversions. Built with Next.js and Tailwind.
                </p>
              </div>
              <a href="https://www.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </article>
            <article className="project-card">
              <div>
                <p className="project-tag">Enterprise CRM</p>
                <h3>Evergain CRM</h3>
                <p>
                  Complete CRM solution featuring lead management, proposals, project tracking, invoicing and reporting. Built with React and FastAPI.
                </p>
              </div>
              <a href="https://crm.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </article>
            <article className="project-card">
              <div>
                <p className="project-tag">HR Platform</p>
                <h3>Human Resource Management</h3>
                <p>
                  Comprehensive HRM suite with recruitment, payroll, attendance tracking, and performance management. Built with Next.js and PostgreSQL.
                </p>
              </div>
              <a href="https://hrm.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </article>
          </div>
            </div>
          </div>
        </section>

        <section className="content-section experience-section section-reveal" id="experience" style={{ animationDelay: "320ms" }}>
          <div className="experience-wrapper">
            <div className="experience-content">
              <div className="section-heading">
                <h2>Professional Experience</h2>
                <p>Hands-on roles building real products for real users, from concept through deployment.</p>
              </div>
              <div className="timeline">
              <article className="timeline-item">
                <h3>Software Developer Intern · Jamii Telecommunications</h3>
                <p className="meta">Jun 2025 - Sep 2025</p>
                <ul>
                  <li>
                    Led development of Corporate SIM Card Registration Dashboard with Next.js, TypeScript, and ShadCN UI components.
                  </li>
                  <li>
                    Designed and built complete onboarding workflows for document verification, approval, and activation.
                  </li>
                  <li>
                    Integrated enterprise Keycloak authentication across FastAPI backends and Next.js SSR frontends.
                  </li>
                </ul>
              </article>
              <article className="timeline-item">
                <h3>Technical Support Engineer Intern · Adtel Limited</h3>
                <p className="meta">Feb 2025 - Jun 2025</p>
                <ul>
                  <li>Performed infrastructure diagnostics, server troubleshooting, and comprehensive backend testing.</li>
                  <li>
                    Led migration of legacy dashboards to modern React/Next.js architecture with improved performance.
                  </li>
                </ul>
              </article>
              <article className="timeline-item">
                <h3>Technical Support Engineer Attachee · Adtel Limited</h3>
                <p className="meta">May 2024 - Aug 2024</p>
                <ul>
                  <li>
                    Maintained network infrastructure, resolved critical issues, and contributed to system optimization.
                  </li>
                  <li>
                    Implemented monitoring tools and performance analytics for infrastructure health tracking.
                  </li>
                </ul>
              </article>
            </div>
            </div>

            <div className="experience-visual">
              <img src="/experience-visual.jpg" alt="Developer workspace" className="experience-image" />
            </div>
          </div>

          <aside className="sidebar-stack">
            <div className="content-section compact-section">
              <div className="section-heading">
                <h2>Technical Skills</h2>
              </div>
              <div className="skills-grid">
                <p><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, ShadCN UI, Radix UI</p>
                <p><strong>Backend:</strong> FastAPI, Java Spring Boot, tRPC, Prisma, Drizzle, REST APIs</p>
                <p><strong>Databases:</strong> PostgreSQL, Supabase, MySQL, Redis, Firebase</p>
                <p><strong>DevOps:</strong> Docker, Kubernetes, Nginx, CI/CD pipelines, Linux</p>
                <p><strong>Auth:</strong> Keycloak, Supabase Auth, OAuth 2.0, JWT</p>
                <p><strong>Data Science:</strong> Pandas, NumPy, Statistical Analysis, Seaborn</p>
              </div>
            </div>

            <div className="content-section compact-section">
              <div className="section-heading">
                <h2>Education</h2>
              </div>
              <p>
                <strong>BSc Mathematics & Computer Science (Statistics)</strong><br/>
                Multimedia University of Kenya, 2021 - 2026
              </p>
              <p>
                Certifications: freeCodeCamp Web Development, DataCamp Data Analysis & Data Science.
              </p>
            </div>
          </aside>
        </section>

        <footer className="footer section-reveal" style={{ animationDelay: "400ms" }}>
          <p>Let's build something beautiful and impactful together.</p>
          <a href="mailto:billbitok977@gmail.com">billbitok977@gmail.com</a>
        </footer>
      </main>
    </div>
  );
}
