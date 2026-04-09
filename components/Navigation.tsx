'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          BB
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              href="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={isActive('/projects') ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/experience" 
              className={isActive('/experience') ? 'active' : ''}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
