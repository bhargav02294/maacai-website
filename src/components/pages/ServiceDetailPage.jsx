import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Reveal from '../Reveal';
import './ServiceDetailPage.css';

const serviceData = {
  ai: {
    number: '01',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    title: 'Build Intelligent Products That Think, Learn and Scale.',
    description:
      'We design and engineer practical AI systems that turn complex workflows, customer interactions and business data into intelligent digital experiences.',
    icon: 'brain',
    color: '#e91e8c',
    accentSoft: 'rgba(233, 30, 140, 0.10)',
    introTitle: 'AI that solves real business problems.',
    introText:
      'From intelligent assistants and recommendation engines to document intelligence and predictive workflows, we build AI into products where it creates measurable value.',
    capabilities: [
      {
        title: 'AI Product Development',
        text: 'Turn an AI concept into a production-ready product with the right architecture, models and user experience.',
      },
      {
        title: 'AI Copilots',
        text: 'Create contextual assistants that help teams search, create, analyze and act faster.',
      },
      {
        title: 'Machine Learning',
        text: 'Build predictive systems around business data, classification, forecasting and intelligent decision support.',
      },
      {
        title: 'Generative AI',
        text: 'Integrate modern language and generative models into useful workflows instead of isolated experiments.',
      },
      {
        title: 'Intelligent Automation',
        text: 'Combine AI with workflow automation to reduce repetitive operational work.',
      },
      {
        title: 'AI Integrations',
        text: 'Connect intelligent capabilities with your existing applications, APIs, databases and business systems.',
      },
    ],
    workflow: [
      'Discover the business problem',
      'Prepare data and define the AI strategy',
      'Prototype the intelligent experience',
      'Engineer and integrate the solution',
      'Evaluate quality, security and reliability',
      'Deploy, monitor and continuously improve',
    ],
    outcomes: [
      'Faster decision-making',
      'Reduced repetitive work',
      'Smarter customer experiences',
      'Actionable business intelligence',
    ],
  },

  saas: {
    number: '02',
    eyebrow: 'SAAS DEVELOPMENT',
    title: 'Launch SaaS Products Built for Users, Revenue and Scale.',
    description:
      'We create robust SaaS platforms with thoughtful UX, scalable architecture, subscription-ready foundations and the operational capabilities modern businesses need.',
    icon: 'cloud',
    color: '#2563eb',
    accentSoft: 'rgba(37, 99, 235, 0.10)',
    introTitle: 'From product idea to scalable platform.',
    introText:
      'A successful SaaS product needs more than screens. We combine product thinking, engineering, infrastructure and analytics to build platforms designed for long-term growth.',
    capabilities: [
      {
        title: 'SaaS Product Engineering',
        text: 'Build complete web-based products around your business model, users and operational requirements.',
      },
      {
        title: 'Multi-Tenant Architecture',
        text: 'Create secure foundations that allow multiple customers or organizations to use the same platform.',
      },
      {
        title: 'Subscription Systems',
        text: 'Design plans, feature access, usage rules and account experiences around recurring revenue models.',
      },
      {
        title: 'Admin & Operations',
        text: 'Give internal teams powerful dashboards and controls to manage users, content and platform activity.',
      },
      {
        title: 'API & Integrations',
        text: 'Connect your SaaS product with payment systems, CRMs, communication tools and third-party services.',
      },
      {
        title: 'Scalable Infrastructure',
        text: 'Prepare the application for increasing traffic, data volume and product complexity.',
      },
    ],
    workflow: [
      'Product discovery and requirements',
      'Information architecture and UX',
      'Platform architecture',
      'Core feature development',
      'Testing and performance hardening',
      'Launch, analytics and iteration',
    ],
    outcomes: [
      'Faster product launches',
      'Scalable recurring-revenue foundations',
      'Better user retention',
      'Centralized business operations',
    ],
  },

  mobile: {
    number: '03',
    eyebrow: 'MOBILE APP DEVELOPMENT',
    title: 'Mobile Experiences Designed Around Real User Behavior.',
    description:
      'We build modern mobile applications that feel fast, intuitive and dependable across the complete customer journey.',
    icon: 'smartphone',
    color: '#7c3aed',
    accentSoft: 'rgba(124, 58, 237, 0.10)',
    introTitle: 'Useful apps people actually want to use.',
    introText:
      'Every interaction matters on mobile. We focus on clear navigation, responsive experiences, thoughtful states and performance so the product feels natural from the first tap.',
    capabilities: [
      {
        title: 'Product Strategy',
        text: 'Translate business goals and user needs into a focused mobile product experience.',
      },
      {
        title: 'iOS & Android Experiences',
        text: 'Design and engineer mobile products with consistent, polished experiences across devices.',
      },
      {
        title: 'Cross-Platform Development',
        text: 'Build efficiently with modern cross-platform technologies where they make strategic sense.',
      },
      {
        title: 'API & Backend Integration',
        text: 'Connect the app to secure APIs, databases, authentication and existing business systems.',
      },
      {
        title: 'Push & Engagement',
        text: 'Design notification and engagement flows that are useful rather than disruptive.',
      },
      {
        title: 'Performance Optimization',
        text: 'Focus on loading speed, smooth interaction, reliability and efficient data usage.',
      },
    ],
    workflow: [
      'Understand users and use cases',
      'Map the mobile experience',
      'Design key screens and interactions',
      'Develop and integrate the application',
      'Test across devices and scenarios',
      'Launch, measure and improve',
    ],
    outcomes: [
      'Higher mobile engagement',
      'Simpler customer journeys',
      'Faster interactions',
      'Consistent product experiences',
    ],
  },

  web: {
    number: '04',
    eyebrow: 'WEB DEVELOPMENT',
    title: 'High-Performance Web Experiences Built to Move Businesses Forward.',
    description:
      'We engineer modern websites and web applications that combine strong visual design, responsive experiences and dependable technology.',
    icon: 'code',
    color: '#0891b2',
    accentSoft: 'rgba(8, 145, 178, 0.10)',
    introTitle: 'The web should look exceptional and work even better.',
    introText:
      'From premium marketing websites to complex web applications, we create responsive digital experiences that are fast, maintainable and aligned with business goals.',
    capabilities: [
      {
        title: 'Web Applications',
        text: 'Build interactive platforms that support customers, employees and business operations.',
      },
      {
        title: 'Corporate Websites',
        text: 'Create credible, high-conversion digital presences that communicate your brand clearly.',
      },
      {
        title: 'Frontend Engineering',
        text: 'Develop responsive interfaces with component-driven architecture and polished interactions.',
      },
      {
        title: 'Backend Integration',
        text: 'Connect the frontend to APIs, databases, authentication and business systems.',
      },
      {
        title: 'Performance Engineering',
        text: 'Optimize loading, rendering and interaction performance across modern devices.',
      },
      {
        title: 'Modernization',
        text: 'Upgrade legacy web experiences with cleaner architecture and modern user experiences.',
      },
    ],
    workflow: [
      'Business and technical discovery',
      'Experience architecture',
      'Interface design',
      'Frontend and backend development',
      'Quality and performance testing',
      'Launch, analytics and optimization',
    ],
    outcomes: [
      'Faster digital experiences',
      'Higher customer engagement',
      'Stronger brand credibility',
      'Scalable web foundations',
    ],
  },
};

function ServiceVisual({ service }) {
  return (
    <div
      className="service-detail-visual"
      style={{
        '--service-color': service.color,
        '--service-soft': service.accentSoft,
      }}
    >
      <div className="service-detail-visual__glow service-detail-visual__glow--one" />
      <div className="service-detail-visual__glow service-detail-visual__glow--two" />

      <div className="service-detail-dashboard">
        <div className="service-detail-dashboard__top">
          <div className="service-detail-window-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="service-detail-window-label">
            MAAC.AI / {service.eyebrow}
          </span>
        </div>

        <div className="service-detail-dashboard__body">
          <div className="service-detail-dashboard__hero">
            <div
              className="service-detail-dashboard__icon"
              style={{
                color: service.color,
                background: service.accentSoft,
              }}
            >
              <Icon
                name={service.icon}
                size={28}
              />
            </div>

            <div>
              <span>INTELLIGENT SYSTEM</span>
              <strong>Built for real-world impact.</strong>
            </div>
          </div>

          <div className="service-detail-metrics">
            <div className="service-detail-metric">
              <span>Strategy</span>
              <strong>01</strong>
            </div>

            <div className="service-detail-metric">
              <span>Build</span>
              <strong>02</strong>
            </div>

            <div className="service-detail-metric">
              <span>Scale</span>
              <strong>03</strong>
            </div>
          </div>

          <div className="service-detail-progress">
            <div>
              <span>Solution progress</span>
              <strong>84%</strong>
            </div>

            <div className="service-detail-progress__track">
              <span
                style={{
                  width: '84%',
                  background: service.color,
                }}
              />
            </div>
          </div>

          <div className="service-detail-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div
        className="service-detail-floating-card service-detail-floating-card--one"
        style={{
          borderColor: `${service.color}28`,
        }}
      >
        <span
          style={{
            color: service.color,
          }}
        >
          LIVE
        </span>
        <strong>System ready</strong>
      </div>

      <div
        className="service-detail-floating-card service-detail-floating-card--two"
        style={{
          borderColor: `${service.color}28`,
        }}
      >
        <Icon
          name="arrowRight"
          size={14}
          style={{
            color: service.color,
          }}
        />
        <strong>Scale →</strong>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ serviceKey }) {
  const service = serviceData[serviceKey];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [serviceKey]);

  if (!service) {
    return null;
  }

  return (
    <div
      className="service-detail-page"
      style={{
        '--service-color': service.color,
        '--service-soft': service.accentSoft,
      }}
    >
      {/* HERO */}
      <section className="service-detail-hero">
        <div className="container">
          <div className="service-detail-hero__grid">

            <Reveal variant="left">
              <div className="service-detail-hero__content">

                <Link
                  to="/#services"
                  className="service-detail-back"
                >
                  <Icon
                    name="arrowRight"
                    size={13}
                  />
                  Back to services
                </Link>

                <div className="service-detail-eyebrow">
                  <span
                    className="service-detail-eyebrow__number"
                  >
                    {service.number}
                  </span>

                  <span>{service.eyebrow}</span>
                </div>

                <h1 className="service-detail-title">
                  {service.title}
                </h1>

                <p className="service-detail-description">
                  {service.description}
                </p>

                <div className="service-detail-actions">
                  <Link
                    to="/contact"
                    className="btn-primary"
                  >
                    Start a Project
                    <Icon
                      name="arrowRight"
                      size={15}
                    />
                  </Link>

                  <a
                    href="#capabilities"
                    className="service-detail-text-link"
                  >
                    Explore capabilities
                    <Icon
                      name="arrowRight"
                      size={13}
                    />
                  </a>
                </div>

              </div>
            </Reveal>

            <Reveal
              variant="right"
              delay={100}
            >
              <ServiceVisual service={service} />
            </Reveal>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="service-detail-intro">
        <div className="container">
          <div className="service-detail-intro__grid">

            <Reveal>
              <div>
                <p className="section-tag">
                  THE MAAC.AI APPROACH
                </p>

                <h2 className="section-title">
                  {service.introTitle}
                </h2>
              </div>
            </Reveal>

            <Reveal
              variant="right"
              delay={100}
            >
              <div className="service-detail-intro__copy">
                <p>
                  {service.introText}
                </p>

                <div
                  className="service-detail-accent-line"
                  style={{
                    background: service.color,
                  }}
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="service-detail-capabilities"
      >
        <div className="container">

          <Reveal>
            <div className="service-detail-section-header">
              <div>
                <p className="section-tag">
                  CAPABILITIES
                </p>

                <h2 className="section-title">
                  Everything you need to turn the idea into a product.
                </h2>
              </div>

              <p className="service-detail-section-header__side">
                Strategy, design and engineering work together as one
                product development system.
              </p>
            </div>
          </Reveal>

          <div className="service-detail-capability-grid">
            {service.capabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 60}
              >
                <article className="service-detail-capability-card">
                  <div
                    className="service-detail-capability-number"
                    style={{
                      color: service.color,
                      background: service.accentSoft,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span
                    className="service-detail-card-arrow"
                    style={{
                      color: service.color,
                    }}
                  >
                    <Icon
                      name="arrowRight"
                      size={14}
                    />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="service-detail-workflow">
        <div className="container">

          <Reveal>
            <div className="service-detail-section-header">
              <div>
                <p className="section-tag">
                  HOW WE WORK
                </p>

                <h2 className="section-title">
                  A clear path from first conversation to launch.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="service-detail-workflow__track">
            <div
              className="service-detail-workflow__line"
              style={{
                background: `linear-gradient(90deg, ${service.color}, rgba(15,23,42,.08))`,
              }}
            />

            {service.workflow.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 70}
              >
                <div className="service-detail-workflow__step">
                  <div
                    className="service-detail-workflow__dot"
                    style={{
                      borderColor: service.color,
                      color: service.color,
                    }}
                  >
                    {index + 1}
                  </div>

                  <span>
                    PHASE {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{step}</h3>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* OUTCOMES */}
      <section className="service-detail-outcomes">
        <div className="container">

          <div className="service-detail-outcomes__box">
            <Reveal variant="left">
              <div>
                <p className="section-tag">
                  BUSINESS IMPACT
                </p>

                <h2>
                  Technology should create an outcome, not just another
                  system.
                </h2>

                <p>
                  We keep the implementation connected to the business
                  result — whether that means growth, efficiency,
                  engagement or better decision-making.
                </p>
              </div>
            </Reveal>

            <div className="service-detail-outcomes__list">
              {service.outcomes.map((outcome, index) => (
                <Reveal
                  key={outcome}
                  variant="right"
                  delay={index * 70}
                >
                  <div className="service-detail-outcome">
                    <span
                      style={{
                        background: service.color,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <strong>{outcome}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-cta">
        <div className="container">

          <Reveal>
            <div className="service-detail-cta__inner">

              <div>
                <p className="section-tag">
                  HAVE AN IDEA?
                </p>

                <h2>
                  Let's build something intelligent.
                </h2>

                <p>
                  Tell us what you're trying to achieve. We'll help
                  shape the right digital solution.
                </p>
              </div>

              <Link
                to="/contact"
                className="btn-primary"
              >
                Talk to MAAC.AI
                <Icon
                  name="arrowRight"
                  size={15}
                />
              </Link>

            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}