import { Link } from "react-router-dom";
import "./ServicesPage.css";

const services = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Solutions",
    description:
      "Build intelligent products and AI-powered experiences that automate work, improve decisions, and create new possibilities.",
    path: "/services/artificial-intelligence",
    icon: "ai",
    theme: "pink",
  },

  {
    number: "02",
    category: "SAAS DEVELOPMENT",
    title: "SaaS Development",
    description:
      "Design and develop scalable SaaS products with modern architecture, intuitive experiences, and reliable performance.",
    path: "/services/saas-development",
    icon: "saas",
    theme: "blue",
  },

  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "Create responsive websites and powerful web applications built for speed, security, and business growth.",
    path: "/services/web-development",
    icon: "web",
    theme: "blue",
  },

  {
    number: "04",
    category: "UI / UX DESIGN",
    title: "UI/UX Design",
    description:
      "Design beautiful interfaces and seamless user experiences that improve engagement and usability.",
    path: "/services/ui-ux-design",
    icon: "design",
    theme: "purple",
  },

  {
    number: "05",
    category: "BUSINESS AUTOMATION",
    title: "Automation",
    description:
      "Automate repetitive workflows, integrate systems, and improve productivity using intelligent automation.",
    path: "/services/automation",
    icon: "automation",
    theme: "pink",
  },

  {
    number: "06",
    category: "DIGITAL MARKETING",
    title: "Digital Marketing",
    description:
      "Grow your brand through SEO, paid campaigns, content marketing, social media, and performance marketing.",
    path: "/services/digital-marketing",
    icon: "marketing",
    theme: "blue",
  },

  {
    number: "07",
    category: "DATA ANALYTICS",
    title: "Data Analytics",
    description:
      "Transform raw business data into dashboards, reports, and actionable insights for smarter decisions.",
    path: "/services/data-analytics",
    icon: "analytics",
    theme: "purple",
  },

  {
    number: "08",
    category: "MOBILE APPLICATIONS",
    title: "Mobile Apps",
    description:
      "Build Android, iOS, and cross-platform mobile applications with modern UI and smooth performance.",
    path: "/services/mobile-apps",
    icon: "mobile",
    theme: "blue",
  },
];

/* =========================================================
   DECORATIVE SERVICE ICONS
   ========================================================= */

function ServiceIcon({ type }) {
  if (type === "ai") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 18C48 18 40 26 39 37C29 37 22 45 22 55C22 61 25 67 30 70C25 74 23 80 24 86C26 96 35 101 44 99C48 108 58 112 67 108C75 105 80 98 80 89"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 18C72 18 80 26 81 37C91 37 98 45 98 55C98 61 95 67 90 70C95 74 97 80 96 86C94 96 85 101 76 99C72 108 62 112 53 108C45 105 40 98 40 89"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 25V101"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M45 49C40 48 36 51 35 56M45 70C39 69 35 72 34 77M75 49C80 48 84 51 85 56M75 70C81 69 85 72 86 77"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "saas") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 130 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37 86H99C113 86 122 77 122 65C122 54 114 45 103 43C101 25 87 13 69 13C52 13 38 24 34 40C18 40 8 50 8 63C8 76 19 86 37 86Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M77 86C77 74 85 65 97 65C107 65 115 72 117 82"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "web") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 130 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43 23L12 55L43 87"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87 23L118 55L87 87"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75 15L55 95"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 14L106 45L60 91L29 60L75 14Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path
          d="M29 60L18 88L46 77"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M72 17L103 48"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M53 68L67 54"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "automation") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 12H70L73 25C77 26 81 28 85 31L97 25L108 36L102 48C105 52 107 56 108 61L121 64V82L108 85C107 90 105 94 102 98L108 110L97 121L85 115C81 118 77 120 72 121L69 134H51L48 121C43 120 39 118 35 115L23 121L12 110L18 98C15 94 13 90 12 85L-1 82V64L12 61C13 56 15 52 18 48L12 36L23 25L35 31C39 28 43 26 48 25L50 12Z"
          transform="translate(0 -13) scale(.9)"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle
          cx="60"
          cy="60"
          r="20"
          stroke="currentColor"
          strokeWidth="7"
        />
        <circle cx="60" cy="60" r="7" fill="currentColor" />
      </svg>
    );
  }

  if (type === "marketing") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 130 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 102V76"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M48 102V57"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M78 102V38"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M13 48L43 34L72 43L112 13"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95 13H112V30"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "analytics") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 130 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 88V62"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M52 88V42"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M86 88V23"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M12 22L42 31L67 15L108 30"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "mobile") {
    return (
      <svg
        className="service-art-icon"
        viewBox="0 0 100 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="8"
          width="60"
          height="114"
          rx="10"
          stroke="currentColor"
          strokeWidth="7"
        />
        <path
          d="M38 22H62"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="50" cy="105" r="5" fill="currentColor" />
      </svg>
    );
  }

  return null;
}

export default function ServicesPage() {
  return (
    <div className="services-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="services-page-hero">

        <div className="services-page-hero__grid"></div>

        <div className="services-page-hero__glow services-page-hero__glow--one"></div>

        <div className="services-page-hero__glow services-page-hero__glow--two"></div>

        <div className="services-page-hero__inner">

          <p className="services-page__eyebrow">
            OUR SERVICES
          </p>

          <h1 className="services-page-hero__title">
            Innovative
            <br />

            <span className="services-page-hero__gradient">
              Digital Solutions
            </span>

            <br />

            That Drive Business Growth.
          </h1>

          <p className="services-page__hero-copy">
            We create AI-powered software, SaaS platforms, websites,
            mobile applications, automation systems, marketing solutions,
            and data-driven digital experiences that help businesses
            grow faster and smarter.
          </p>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="services-page-intro">

        <div className="services-page-container">

          <div className="services-page-intro__top">

            <div>

              <p className="services-page__eyebrow">
                WHAT WE DO
              </p>

              <h2>
                Technology that solves
                <br />
                real business problems.
              </h2>

            </div>

            <div className="services-page-intro__copy">

              <p>
                We combine strategy, technology, design, and data to build
                modern digital products that are useful, scalable, secure,
                and designed for long-term business growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section className="services-page-list">

        <div className="services-page-container">

          <div className="services-page-list__heading">

            <p className="services-page__eyebrow">
              OUR EXPERTISE
            </p>

            <h2>
              Explore our services
            </h2>

          </div>


          <div className="services-page-grid">

            {services.map((service) => (

              <Link
                key={service.number}
                to={service.path}
                className={`services-page-card services-page-card--${service.theme}`}
              >

                {/* Decorative background */}

                <div className="services-page-card__circle services-page-card__circle--one"></div>

                <div className="services-page-card__circle services-page-card__circle--two"></div>

                <div className="services-page-card__dots"></div>


                {/* Top */}

                <div className="services-page-card__top">

                  <span className="services-page-card__number">
                    {service.number}
                  </span>

                  <div className="services-page-card__icon">
                    ↗
                  </div>

                </div>


                {/* Illustration */}

                <div className="services-page-card__art">
                  <ServiceIcon type={service.icon} />
                </div>


                {/* Content */}

                <div className="services-page-card__content">

                  <p className="services-page-card__category">
                    {service.category}
                  </p>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="services-page-card__description">
                    {service.description}
                  </p>

                </div>


                {/* Bottom */}

                <div className="services-page-card__bottom">

                  <span>
                    Explore service
                  </span>

                  <span className="services-page-card__arrow">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="services-page-cta">

        <div className="services-page-cta__grid"></div>

        <div className="services-page-cta__glow"></div>

        <div className="services-page-container">

          <div className="services-page-cta__content">

            <p className="services-page__eyebrow">
              LET'S BUILD SOMETHING AMAZING
            </p>

            <h2>
              Ready to transform
              <br />
              your business digitally?
            </h2>

            <p>
              Whether you're launching a startup, scaling a SaaS product,
              building an AI solution, or modernizing your business —
              MAAC.AI is ready to help.
            </p>

            <Link
              to="/contact"
              className="services-page-cta__button"
            >
              Get Started →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}