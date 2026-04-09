export default function AboutPage() {
  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="content-section content-split section-reveal" style={{ paddingTop: "3rem" }}>
          <div>
            <h2 style={{ marginBottom: "1.5rem" }}>About Me</h2>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.8", fontSize: "1.05rem" }}>
              I&apos;m Bill Bitok, a full-stack developer based in Nairobi, Kenya. With a background in Mathematics and Computer Science, I blend analytical thinking with creative problem-solving to build software that&apos;s both beautiful and functional.
            </p>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.8", fontSize: "1.05rem", color: "var(--ink-soft)" }}>
              I specialize in building scalable web applications, from startup MVPs to enterprise systems. My approach combines design-first thinking with solid engineering principles. I believe great software should be intuitive, performant, and a joy to use.
            </p>
            <p style={{ marginBottom: "2rem", lineHeight: "1.8", fontSize: "1.05rem", color: "var(--ink-soft)" }}>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
            </p>

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--line)" }}>
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}>Core Values</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid var(--line)" }}>
                  <strong style={{ color: "var(--primary-blue)" }}>Design-Driven</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    User experience is paramount. Every pixel, interaction, and feature should serve a purpose.
                  </p>
                </li>
                <li style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid var(--line)" }}>
                  <strong style={{ color: "var(--primary-blue)" }}>Performance-Obsessed</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    Fast applications are better applications. I optimize for speed and efficiency at every level.
                  </p>
                </li>
                <li>
                  <strong style={{ color: "var(--primary-blue)" }}>Maintainable Code</strong>
                  <p style={{ margin: "0.5rem 0 0", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                    Clean, well-documented code is an investment in the future of the project.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <img
              src="/about-hero.jpg"
              alt="About Bill Bitok"
              className="hero-image"
              style={{ minHeight: "400px" }}
            />

            <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Quick Facts</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Location:</strong> Nairobi, Kenya
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Education:</strong> BSc Mathematics & Computer Science, Multimedia University of Kenya
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Experience:</strong> 2+ years building production systems
                </li>
                <li>
                  <strong>Passion:</strong> Building products that solve real problems
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section section-reveal">
          <h2 style={{ marginBottom: "2rem" }}>Technical Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div style={{ padding: "1.5rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1rem", color: "var(--primary-blue)" }}>Frontend</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.8" }}>
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS & ShadCN UI</li>
                <li>Responsive Design</li>
                <li>Web Performance</li>
              </ul>
            </div>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1rem", color: "var(--primary-blue)" }}>Backend</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.8" }}>
                <li>FastAPI & Python</li>
                <li>Java Spring Boot</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Authentication & Security</li>
              </ul>
            </div>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1rem", color: "var(--primary-blue)" }}>DevOps & Tools</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", color: "var(--ink-soft)", lineHeight: "1.8" }}>
                <li>Docker & Kubernetes</li>
                <li>PostgreSQL & Supabase</li>
                <li>CI/CD Pipelines</li>
                <li>Git & Version Control</li>
                <li>Linux Administration</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
