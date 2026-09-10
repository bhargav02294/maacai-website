import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Portfolio', href: '/#portfolio', id: 'portfolio' },
  { label: 'Contact Us', href: '/contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const location = useLocation();

  // ======================================================
  // SCROLL STATE
  // ======================================================

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const y = window.scrollY;

      setScrolled(y > 18);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);


  // ======================================================
  // ACTIVE NAVIGATION
  // ======================================================

  useEffect(() => {

    // -------------------------------
    // SERVICE PAGES
    // -------------------------------

    if (location.pathname.startsWith('/services')) {
      setActive('services');
      return undefined;
    }


    // -------------------------------
    // OTHER NORMAL PAGES
    // -------------------------------

    if (location.pathname === '/about') {
      setActive('about');
      return undefined;
    }

    if (location.pathname === '/blog') {
      setActive('blog');
      return undefined;
    }

    if (location.pathname === '/contact') {
      setActive('contact');
      return undefined;
    }


    // -------------------------------
    // HOME PAGE SECTIONS
    // -------------------------------

    if (location.pathname !== '/') {
      return undefined;
    }

    const sections = navLinks
      .map((link) =>
        document.getElementById(link.id),
      )
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {

        const visibleEntries = entries
          .filter(
            (entry) => entry.isIntersecting,
          )
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          );

        if (visibleEntries.length) {
          setActive(
            visibleEntries[0].target.id,
          );
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [
          0.01,
          0.1,
          0.25,
          0.5,
        ],
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => observer.disconnect();

  }, [location.pathname]);


  // ======================================================
  // MOBILE MENU
  // ======================================================

  const handleNavClick = () => {
    setMenuOpen(false);
  };


  // ======================================================
  // ESCAPE KEY
  // ======================================================

  useEffect(() => {

    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {
        setMenuOpen(false);
      }

    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };

  }, [menuOpen]);


  // ======================================================
  // PREVENT BACKGROUND SCROLL
  // ======================================================

  useEffect(() => {

    if (
      !menuOpen ||
      window.innerWidth > 1100
    ) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };

  }, [menuOpen]);


  // ======================================================
  // JSX
  // ======================================================

  return (
    <nav
      className={[
        'navbar',
        scrolled
          ? 'navbar--scrolled'
          : '',
        menuOpen
          ? 'navbar--menu-open'
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >

      <div className="navbar__inner container">

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="navbar__logo"
          aria-label="MAAC.AI home"
          onClick={handleNavClick}
        >

          <span
            className="logo-mark"
            aria-hidden="true"
          >
            <span />
          </span>

          <span className="logo-text">
            maacai
          </span>

        </Link>


        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <ul
          className={[
            'navbar__links',
            menuOpen
              ? 'navbar__links--open'
              : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >

          {navLinks.map((link) => {

            const isActive =
              active === link.id;

            return (
              <li key={link.id}>

                {/* ==========================================
                    REACT ROUTER LINKS
                ========================================== */}

                <Link
                  to={link.href}
                  className={[
                    'navbar__link',
                    isActive
                      ? 'navbar__link--active'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={
                    isActive
                      ? 'page'
                      : undefined
                  }
                  onClick={handleNavClick}
                >

                  <span>
                    {link.label}
                  </span>

                </Link>

              </li>
            );
          })}

        </ul>


        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="navbar__actions">

          <Link
            to="/contact"
            className="btn-primary navbar__cta"
            onClick={handleNavClick}
          >

            <span>
              Book Free Consultation
            </span>

            <Icon
              name="arrowRight"
              size={15}
            />

          </Link>


          {/* ================================================
              HAMBURGER
          ================================================ */}

          <button
            type="button"
            className={[
              'navbar__hamburger',
              menuOpen ? 'open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() =>
              setMenuOpen(
                (value) => !value,
              )
            }
            aria-label={
              menuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >

            <span />
            <span />
            <span />

          </button>

        </div>

      </div>

    </nav>
  );
}