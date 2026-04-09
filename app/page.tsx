import Link from "next/link";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="hero-layout section-reveal" style={{ animationDelay: "80ms" }}>
          <div className="hero-content-wrapper">
            <div className="hero-copy-block">
              <p className="eyebrow">Full Stack Developer · DevOps Engineer · Systems Design</p>
              <h1 className="hero-title">
                Building premium digital experiences that are delightful to use and engineered to scale.
              </h1>
              <p className="hero-copy">
                I&apos;m Bill Bitok, a developer from Nairobi crafting thoughtful interfaces and reliable systems. I focus on building software that solves real problems with clarity and taste.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/projects" className="btn-secondary">
                  See My Work
                </Link>
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
                <h2>Featured Work</h2>
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

          <div style={{ textAlign: "center", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
