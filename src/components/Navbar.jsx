import { useEffect, useState } from 'react';
import Icon from './Icon';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Products', href: '#products', id: 'products' },
  { label: 'Industries', href: '#industries', id: 'industries' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Blog', href: '#blog', id: 'blog' },
  { label: 'Contact Us', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y > lastY + 6 && !menuOpen);
      if (y < 80) setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.01 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" aria-label="MAAC.AI home">
          <span className="logo-mark"><span /></span><span className="logo-text">maacai</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <a href="#contact" className="btn-primary navbar__cta">Book Free Consultation <Icon name="arrowRight" size={15} /></a>
          <button type="button" className={`navbar__hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
