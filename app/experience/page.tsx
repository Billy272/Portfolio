import ProtectedImage from "@/components/ProtectedImage";

export default function ExperiencePage() {
  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="content-section content-split section-reveal" style={{ paddingTop: "3rem" }}>
          <div>
            <h2 style={{ marginBottom: "2rem" }}>Professional Experience</h2>

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

          <div>
            <ProtectedImage
              src="/exp.jpg"
              alt="Professional experience"
              className="hero-image"
            />

            <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)" }}>Education</h3>
              <p style={{ marginBottom: "1rem", fontSize: "1rem" }}>
                <strong>BSc Mathematics & Computer Science (Statistics)</strong>
              </p>
              <p style={{ marginBottom: "1.5rem", color: "var(--ink-soft)", fontSize: "0.95rem" }}>
                Multimedia University of Kenya, 2021 - 2026
              </p>

              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)" }}>Certifications</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                <li style={{ marginBottom: "0.75rem" }}>freeCodeCamp - Web Development</li>
                <li style={{ marginBottom: "0.75rem" }}>freeCodeCamp - Data Structures & Algorithms</li>
                <li>DataCamp - Data Analysis & Data Science</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section section-reveal">
          <h2 style={{ marginBottom: "2rem" }}>Complete Skills Breakdown</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>Frontend Development</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>ShadCN UI & Radix UI</li>
                <li>State Management (Redux, Context)</li>
                <li>Testing (Jest, React Testing Library)</li>
              </ul>
            </div>

            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>Backend Development</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>Java Spring Boot</li>
                <li>RESTful APIs & tRPC</li>
                <li>FastAPI (Python)</li>
                <li>Database Design</li>
                <li>Prisma & Drizzle ORM</li>
                <li>Authentication & Security</li>
              </ul>
            </div>

            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>Databases & Storage</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Supabase</li>
                <li>Firebase</li>
                <li>Redis</li>
                <li>Data Modeling</li>
              </ul>
            </div>

            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>DevOps & Infrastructure</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>Docker & Containerization</li>
                <li>Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Git & Version Control</li>
                <li>Nginx, Apache & Web Servers</li>
                <li>Linux Administration</li>
                <li>Cloud Deployment</li>
              </ul>
            </div>

            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>Authentication & Security</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>Keycloak</li>
                <li>Supabase Auth</li>
                <li>OAuth 2.0</li>
                <li>JWT & Session Management</li>
                <li>Role-Based Access Control</li>
                <li>Password Hashing (bcrypt)</li>
                <li>Security Best Practices</li>
              </ul>
            </div>

            <div style={{ padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)", fontSize: "1.1rem" }}>Data Science & Analytics</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "2" }}>
                <li>Python (Pandas, NumPy)</li>
                <li>Data Analysis</li>
                <li>Statistical Modeling</li>
                <li>Visualization (Seaborn, Matplotlib)</li>
                <li>SciPy</li>
                <li>Data Interpretation</li>
                <li>Statistical Inference</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
