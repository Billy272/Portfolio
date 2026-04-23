'use client';

import ProtectedImage from '@/components/ProtectedImage';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });

  const [formStartedAt] = useState(() => Date.now());

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formStartedAt,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? 'Unable to send your message right now.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-shell">
      <div className="bg-orb bg-orb-left" aria-hidden="true" />
      <div className="bg-orb bg-orb-right" aria-hidden="true" />
      <div className="portfolio-main">
        <section className="content-section content-split section-reveal" style={{ paddingTop: "3rem" }}>
          <div>
            <h2 style={{ marginBottom: "1.5rem" }}>Let&apos;s Work Together</h2>
            <p style={{ marginBottom: "2rem", lineHeight: "1.8", color: "var(--ink-soft)", fontSize: "1.05rem" }}>
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--foreground)" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--line)",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--foreground)" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--line)",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--foreground)" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--line)",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    border: 0,
                  }}
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px',
                    opacity: 0,
                    pointerEvents: 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--foreground)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me more..."
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--line)",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "fit-content", padding: "0.9rem 2rem", opacity: isSubmitting ? 0.8 : 1 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitError && (
                <p style={{ color: '#b42318', fontWeight: '500' }}>
                  {submitError}
                </p>
              )}

              {submitted && (
                <p style={{ color: "var(--primary-blue)", fontWeight: "500" }}>
                  Thanks for your message! I&apos;ll get back to you soon on email.
                </p>
              )}
            </form>
          </div>

          <div>
            <ProtectedImage
              src="/contact.jpg"
              alt="Contact"
              className="hero-image"
              minHeight="400px"
            />

            <div style={{ marginTop: "2rem", padding: "2rem", backgroundColor: "var(--card-bg-alt)", borderRadius: "12px" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Other Ways to Reach Me</h3>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>Email</h4>
                <a href="mailto:billbitok977@gmail.com" style={{ color: "var(--primary-blue)", textDecoration: "none", fontWeight: "500" }}>
                  billbitok977@gmail.com
                </a>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>Phone</h4>
                <a href="tel:+254747162986" style={{ color: "var(--primary-blue)", textDecoration: "none", fontWeight: "500" }}>
                  +254 747 162 986
                </a>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>Location</h4>
                <p style={{ margin: 0, color: "var(--foreground)" }}>Nairobi, Kenya</p>
              </div>

              <div>
                <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>Social</h4>
                <a
                  href="https://github.com/Billy272"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--primary-blue)", textDecoration: "none", fontWeight: "500", display: "block" }}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/bill-bitok"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--primary-blue)", textDecoration: "none", fontWeight: "500", display: "block", marginTop: "0.5rem" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
