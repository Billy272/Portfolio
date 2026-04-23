import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Work</h3>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <a href="mailto:billbitok977@gmail.com">Email</a>
          <a href="https://github.com/Billy272" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bill-bitok" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="tel:+254747162986">+254 747 162 986</a>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>billbitok977@gmail.com</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Bill Bitok. All rights reserved.</p>
      </div>
    </footer>
  );
}
