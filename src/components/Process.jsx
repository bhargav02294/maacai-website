
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your business goals',
  },
  {
    num: '02',
    title: 'Research',
    desc: 'In-depth analysis & market research',
  },
  {
    num: '03',
    title: 'Planning',
    desc: 'Strategic planning & roadmap',
  },
  {
    num: '04',
    title: 'Design',
    desc: 'Creative UI/UX design',
  },
  {
    num: '05',
    title: 'Development',
    desc: 'Agile development & coding',
  },
  {
    num: '06',
    title: 'Testing',
    desc: 'Quality testing & optimization',
  },
  {
    num: '07',
    title: 'Launch',
    desc: 'Smooth deployment & release',
  },
  {
    num: '08',
    title: 'Support',
    desc: 'Continuous support & maintenance',
  },
  {
    num: '09',
    title: 'Growth',
    desc: 'Scaling your business',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const current = -rect.top;
      const nextProgress = Math.min(
        1,
        Math.max(0, current / scrollableDistance)
      );

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const activeIndex = Math.min(
    steps.length - 1,
    Math.round(progress * (steps.length - 1))
  );

  const lineProgress = progress * 100;

  return (
    <section
      ref={sectionRef}
      className="process-section"
      style={{
        '--process-progress': `${lineProgress}%`,
      }}
    >
      <div className="process-sticky">
        <div className="container">
          <Reveal>
            <div className="text-center process-section__header">
              <p className="section-tag">OUR PROCESS</p>

              <h2 className="section-title">
                From Idea To Impact — We Build It All
              </h2>

              <p className="section-subtitle">
                A clear, collaborative workflow keeps strategy, design and
                engineering moving toward the same outcome.
              </p>
            </div>
          </Reveal>

          <div className="process-wrapper">
            <div className="process-timeline">
              <div className="process-timeline__track" />

              <div className="process-timeline__progress" />
            </div>

            <div className="process-list">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;

                return (
                  <div
                    key={step.num}
                    className={`process-step ${
                      isActive ? 'process-step--active' : ''
                    } ${isCompleted ? 'process-step--completed' : ''}`}
                  >
                    <div className="process-step__marker">
                      <div className="process-step__circle">
                        {isCompleted ? (
                          <Icon name="check" size={14} />
                        ) : (
                          step.num
                        )}
                      </div>
                    </div>

                    <div className="process-step__content">
                      <span className="process-step__eyebrow">
                        STEP {step.num}
                      </span>

                      <h3>{step.title}</h3>

                      <p>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="process-scroll-hint">
            <span className="process-scroll-hint__line" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
