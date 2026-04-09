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
          <div className="hero-copy-block">
            <p className="eyebrow">Full Stack Developer · DevOps Engineer · Systems Design</p>
            <h1 className="hero-title">
              I design and build digital products that feel premium from the first scroll.
            </h1>
            <p className="hero-copy">
              Bill Cordias Bitok from Nairobi. I’m a Mathematics and Computer Science
              student focused on sharp interfaces, reliable systems, and practical
              software that helps teams move faster.
            </p>
            <div className="hero-actions">
              <a href="mailto:billbitok977@gmail.com" className="btn-primary">
                Hire Me
              </a>
              <a
                href="https://github.com/Billy272"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>

            <div className="stats-row">
              <article>
                <strong>Products</strong>
                <span>CRM, HRM, company websites, and secure internal tools.</span>
              </article>
              <article>
                <strong>Stack</strong>
                <span>React, Next.js, FastAPI, Java, Supabase, Docker.</span>
              </article>
              <article>
                <strong>Focus</strong>
                <span>Clarity, design quality, performance, and maintainability.</span>
              </article>
            </div>
          </div>

          <aside className="hero-visual">
            <div className="visual-panel visual-panel-top">
              <div className="hero-avatar">BB</div>
              <div>
                <p className="side-label">Available for hire</p>
                <h2>Building with taste and execution.</h2>
              </div>
            </div>
            <div className="visual-panel visual-panel-bottom">
              <div>
                <p className="side-label">Contact</p>
                <a href="tel:+254727162986">+254 727 162 986</a>
                <a href="mailto:billbitok977@gmail.com">billbitok977@gmail.com</a>
              </div>
              <div className="mini-bar-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </aside>
        </section>

        <section className="feature-strip section-reveal" style={{ animationDelay: "160ms" }}>
          <article className="feature-card feature-card-dark">
            <p>About</p>
            <h3>
              I like clean systems, thoughtful interfaces, and software that works for
              real people.
            </h3>
          </article>
          <article className="feature-card">
            <p>Education</p>
            <h3>Multimedia University of Kenya, BSc Mathematics and Computer Science.</h3>
          </article>
          <article className="feature-card feature-card-blue">
            <p>Approach</p>
            <h3>Design first, engineer deeply, deploy with discipline.</h3>
          </article>
        </section>

        <section className="content-section section-reveal" style={{ animationDelay: "240ms" }}>
          <div className="section-heading">
            <h2 id="projects">Selected Projects</h2>
            <p>Case-study style highlights from your resume, framed like a landing page.</p>
          </div>
          <div className="project-grid">
            <article className="project-card project-card-large">
              <div>
                <p className="project-tag">Website</p>
                <h3>Evergain Limited</h3>
                <p>
                  Corporate website focused on clear service communication, responsive
                  presentation, and stronger SEO visibility.
                </p>
              </div>
              <a href="https://www.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </article>
            <article className="project-card">
              <div>
                <p className="project-tag">CRM</p>
                <h3>Evergain CRM</h3>
                <p>
                  Built for lead capture, proposals, project tracking, invoicing, and
                  internal reporting.
                </p>
              </div>
              <a href="https://crm.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </article>
            <article className="project-card">
              <div>
                <p className="project-tag">HRM</p>
                <h3>Human Resource Management</h3>
                <p>
                  Recruitment, payroll, attendance, and performance workflows with secure
                  authentication and scalable data flow.
                </p>
              </div>
              <a href="https://hrm.evergain.co.ke/" target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </article>
          </div>
        </section>

        <section className="content-section content-split section-reveal" id="experience" style={{ animationDelay: "320ms" }}>
          <div>
            <div className="section-heading">
              <h2>Experience</h2>
              <p>Internship and support roles translated into tangible delivery skills.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <h3>Software Developer Intern · Jamii Telecommunications Limited</h3>
                <p className="meta">Jun 2025 - Sep 2025</p>
                <ul>
                  <li>
                    Developed a Corporate SIM Card Registration Dashboard using Next.js,
                    TypeScript, and ShadCN UI.
                  </li>
                  <li>
                    Built onboarding workflows for document uploads, verification,
                    approval, and activation.
                  </li>
                  <li>
                    Integrated Keycloak authentication across FastAPI and Next.js SSR
                    environments.
                  </li>
                </ul>
              </article>
              <article className="timeline-item">
                <h3>Technical Support Engineer Intern · Adtel Limited (JTL)</h3>
                <p className="meta">Feb 2025 - Jun 2025</p>
                <ul>
                  <li>Performed diagnostics, server troubleshooting, and backend testing.</li>
                  <li>
                    Assisted migration of internal dashboards into modern React/Next.js
                    solutions.
                  </li>
                </ul>
              </article>
              <article className="timeline-item">
                <h3>Technical Support Engineer Attachee · Adtel Limited (JTL)</h3>
                <p className="meta">May 2024 - Aug 2024</p>
                <ul>
                  <li>
                    Supported network troubleshooting, server maintenance, and software
                    issue resolution.
                  </li>
                  <li>
                    Contributed to routine diagnostics, monitoring tools, and system
                    performance checks.
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <aside className="sidebar-stack">
            <div className="content-section compact-section">
              <div className="section-heading">
                <h2>Skills</h2>
              </div>
              <div className="skills-grid">
                <p>Frontend: React, Next.js, TypeScript, Tailwind, ShadCN UI, Radix UI</p>
                <p>Backend: FastAPI, Java Spring Boot, tRPC, Prisma, Drizzle, REST, Kafka</p>
                <p>Data: PostgreSQL, Supabase, MySQL, Redis</p>
                <p>DevOps: Docker, Kubernetes, Nginx, CI/CD, Linux Administration</p>
                <p>Auth: Keycloak, Supabase Auth, Firebase Auth, Google OAuth</p>
                <p>Data Science: Pandas, NumPy, SciPy, Seaborn, Statistical Modeling</p>
              </div>
            </div>

            <div className="content-section compact-section">
              <div className="section-heading">
                <h2>Education & Awards</h2>
              </div>
              <p>
                BSc Mathematics and Computer Science (Statistics), Multimedia University of
                Kenya, 2021 - 2026.
              </p>
              <p>
                Learning milestones include freeCodeCamp Web Development and DSA, plus
                DataCamp certifications in Data Analysis and Data Science.
              </p>
            </div>
          </aside>
        </section>

        <footer className="footer section-reveal" style={{ animationDelay: "400ms" }}>
          <p>Let’s build something premium, clear, and hard to ignore.</p>
          <a href="mailto:billbitok977@gmail.com">billbitok977@gmail.com</a>
        </footer>
      </main>
    </div>
  );
}
