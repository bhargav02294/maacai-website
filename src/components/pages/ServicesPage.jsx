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
  },

  {
    number: "02",
    category: "SAAS DEVELOPMENT",
    title: "SaaS Development",
    description:
      "Design and develop scalable SaaS products with modern architecture, intuitive experiences, and reliable performance.",
    path: "/services/saas-development",
  },

  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Web Development",
    description:
      "Create responsive websites and powerful web applications built for speed, security, and business growth.",
    path: "/services/web-development",
  },

  {
    number: "04",
    category: "UI / UX DESIGN",
    title: "UI/UX Design",
    description:
      "Design beautiful interfaces and seamless user experiences that improve engagement and usability.",
    path: "/services/ui-ux-design",
  },

  {
    number: "05",
    category: "BUSINESS AUTOMATION",
    title: "Automation",
    description:
      "Automate repetitive workflows, integrate systems, and improve productivity using intelligent automation.",
    path: "/services/automation",
  },

  {
    number: "06",
    category: "DIGITAL MARKETING",
    title: "Digital Marketing",
    description:
      "Grow your brand through SEO, paid campaigns, content marketing, social media, and performance marketing.",
    path: "/services/digital-marketing",
  },

  {
    number: "07",
    category: "DATA ANALYTICS",
    title: "Data Analytics",
    description:
      "Transform raw business data into dashboards, reports, and actionable insights for smarter decisions.",
    path: "/services/data-analytics",
  },

  {
    number: "08",
    category: "MOBILE APPLICATIONS",
    title: "Mobile Apps",
    description:
      "Build Android, iOS, and cross-platform mobile applications with modern UI and smooth performance.",
    path: "/services/mobile-apps",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">

      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="services-page-hero">

        <div className="services-page-hero__grid"></div>

        <div className="services-page-hero__glow services-page-hero__glow--one"></div>
        <div className="services-page-hero__glow services-page-hero__glow--two"></div>

        <div className="services-page-hero__inner">

          <p className="services-page__eyebrow">
            OUR SERVICES
          </p>

          <h1 className="services-page-hero__title">
            <br />
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
          INTRO SECTION
      ========================================================== */}

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
          SERVICES GRID
      ========================================================== */}

      <section className="services-page-list">

        <div className="services-page-container">

          <div className="services-page-list__heading">

            <p className="services-page__eyebrow">
              OUR EXPERTISE
            </p>

            <h2>Explore our services</h2>

          </div>

          <div className="services-page-grid">

            {services.map((service) => (
              <Link
                key={service.number}
                to={service.path}
                className="services-page-card"
              >
                <div className="services-page-card__top">

                  <span className="services-page-card__number">
                    {service.number}
                  </span>

                  <div className="services-page-card__icon">
                    ↗
                  </div>

                </div>

                <div className="services-page-card__content">

                  <p className="services-page-card__category">
                    {service.category}
                  </p>

                  <h3>{service.title}</h3>

                  <p className="services-page-card__description">
                    {service.description}
                  </p>

                </div>

                <div className="services-page-card__bottom">

                  <span>Explore service</span>

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
          CTA SECTION
      ========================================================== */}

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