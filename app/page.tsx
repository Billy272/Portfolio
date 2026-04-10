import Link from "next/link";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="section-reveal mb-16 flex flex-col gap-12" style={{ animationDelay: "80ms" }}>
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="relative h-full overflow-hidden rounded-[24px] border border-[var(--line)] bg-[radial-gradient(115%_130%_at_0%_0%,rgba(0,81,255,0.08),transparent_55%),var(--card-bg)] p-8 shadow-[0_14px_34px_rgba(26,26,26,0.12)] sm:p-10 lg:p-12">
              <p className="mb-6 inline-block rounded-full border border-[var(--line)] bg-[var(--card-bg-alt)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">
                Full Stack Developer · DevOps Engineer · Systems Design
              </p>
              <h1 className="m-0 text-[clamp(2.2rem,5.4vw,4.8rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--foreground)]">
                Building premium digital experiences that are delightful to use and engineered to scale.
              </h1>
              <p className="my-6 max-w-[60ch] text-[1.04rem] leading-8 text-[var(--ink-soft)]">
                I&apos;m Bill Bitok, a developer from Nairobi crafting thoughtful interfaces and reliable systems. I focus on building software that solves real problems with clarity and taste.
              </p>
              <div className="mb-7 flex flex-wrap gap-2.5" aria-label="Core strengths">
                <span className="rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--primary-blue)_8%,white)] px-3 py-1.5 text-xs font-semibold tracking-[0.02em] text-[var(--foreground)]">Interaction-ready UI</span>
                <span className="rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--primary-blue)_8%,white)] px-3 py-1.5 text-xs font-semibold tracking-[0.02em] text-[var(--foreground)]">Scalable backend systems</span>
                <span className="rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--primary-blue)_8%,white)] px-3 py-1.5 text-xs font-semibold tracking-[0.02em] text-[var(--foreground)]">Fast product delivery</span>
              </div>
              <div className="mb-5 flex flex-wrap gap-4 max-md:flex-col max-md:gap-3">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="/projects" className="btn-secondary">
                  See My Work
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-4 border-t border-[var(--line)] pt-6">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Current Focus</p>
                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">Product-grade web experiences</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Collaboration</p>
                  <p className="mt-1 text-sm font-medium text-[var(--foreground)]">Freelance · Contract · Full-time</p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[340px] w-full items-center lg:min-h-[430px]">
              <div className="relative h-full w-full overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--card-bg-alt)] shadow-[0_16px_36px_rgba(26,26,26,0.16)]">
                <img src="/Me.jpg" alt="Developer workspace" className="block h-full w-full object-cover" />
                <article className="absolute right-4 top-4 max-w-[240px] rounded-[14px] border border-white/50 bg-[rgba(17,24,39,0.62)] px-4 py-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm animate-[heroFloat_4.8s_ease-in-out_infinite]" aria-label="Work style">
                  <p className="m-0 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/85">Workflow</p>
                  <strong className="mt-1 block text-[0.84rem] leading-[1.35]">Design → Build → Deploy</strong>
                </article>
                <article className="absolute bottom-4 left-4 max-w-[240px] rounded-[14px] border border-white/50 bg-[rgba(17,24,39,0.62)] px-4 py-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm animate-[heroFloat_4.8s_ease-in-out_infinite] [animation-delay:0.6s]" aria-label="Availability">
                  <p className="m-0 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/85">Based in Nairobi</p>
                  <strong className="mt-1 block text-[0.84rem] leading-[1.35]">Open to remote projects</strong>
                </article>
              </div>
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
              <img src="/crm.png" alt="Web application interfaces" className="projects-image" />
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
