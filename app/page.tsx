import ProtectedImage from "@/components/ProtectedImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        {/* Hero Section */}
        <section className="section-reveal mb-24 flex flex-col gap-16" style={{ animationDelay: "80ms" }}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent-primary)]">
                Full Stack Developer
              </p>
              <h1 className="mb-6 text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--foreground)]">
                Crafting <span className="italic text-[var(--accent-primary)]">interactive</span> experiences
              </h1>
              <p className="mb-8 max-w-[55ch] text-lg leading-relaxed text-[var(--ink-soft)]">
                I&apos;m Bill Bitok, designing and building thoughtful digital products that engage users and scale reliably. From concept to production, every detail matters.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 max-md:flex-col">
                <Link href="/projects" className="btn-primary">
                  Explore My Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch →
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-8">
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">4+</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)]">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">20+</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)]">Projects Shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">92%</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)]">Client Happy</p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Showcase */}
            <div className="group relative h-[500px] w-full overflow-hidden rounded-[28px] border-2 border-[var(--line)] bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg-alt)] p-8 shadow-[0_20px_50px_rgba(26,26,26,0.15)] transition-transform duration-500 lg:h-[600px]">
              {/* Blurred Image Background */}
              <ProtectedImage 
                src="/Me.jpg" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover  opacity-50 rounded-xl"
              />

              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/10 to-transparent blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[var(--accent-secondary)]/10 to-transparent blur-3xl" />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Top Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur-sm p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)] mb-1">Design</p>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">User-Centered</h3>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur-sm p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)] mb-1">Build</p>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">Performance</h3>
                  </div>
                </div>

                {/* Center Feature */}
                <div className="relative flex flex-col items-center justify-center gap-3 text-center h-32">
                  {/* Content on top */}
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-[var(--foreground)] opacity-90 group-hover:opacity-100 transition-opacity">
                      ◎
                    </div>
                    <p className="text-sm font-medium text-[var(--foreground)] font-semibold mt-2">Interactive & Dynamic</p>
                  </div>
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur-sm p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)] mb-1">Tech</p>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">Modern Stack</h3>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur-sm p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)] mb-1">Deploy</p>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">Scalable</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <section className="feature-strip section-reveal" style={{ animationDelay: "160ms" }}>
          <article className="feature-card feature-card-dark">
            <p>Specialty</p>
            <h3>
              Full-stack web applications with pixel-perfect interfaces and robust backend systems.
            </h3>
          </article>
          <article className="feature-card">
            <p>Approach</p>
            <h3>Design thinking, solid engineering, meticulous attention to performance and user experience.</h3>
          </article>
          <article className="feature-card feature-card-blue">
            <p>Location</p>
            <h3>Based in Nairobi, open to remote and contract opportunities worldwide.</h3>
          </article>
        </section>

        {/* Featured Work Section */}
        <section className="content-section projects-section section-reveal" style={{ animationDelay: "240ms" }}>
          <div className="section-heading mb-12">
            <div>
              <h2>Selected Work</h2>
              <p>Showcasing production-ready applications from concept through deployment.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Featured Project with Screenshot */}
            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[var(--line)] bg-[var(--card-bg-alt)] shadow-lg h-[400px]">
                <img 
                  src="/crm.png" 
                  alt="Evergain CRM Interface" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <article className="project-card project-card-large">
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
            </div>

            {/* Right - Project Cards Grid */}
            <div className="flex flex-col gap-6">
              <article className="project-card project-card-feature">
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
              <article className="project-card project-card-feature">
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
              <article className="project-card project-card-feature">
                <div>
                  <p className="project-tag">Microservices Architecture</p>
                  <h3>Tulia Backend</h3>
                  <p>
                    Production-grade microservices with Spring Boot, Kafka, Redis, and PostgreSQL deployed on Kubernetes with automated CI/CD using Jenkins and ArgoCD.
                  </p>
                </div>
                <a href="https://github.com/Billy272/Tulia-Backend" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </article>
            </div>
          </div>

          <div style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
            <Link href="/projects" className="btn-primary">
              Explore Complete Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
