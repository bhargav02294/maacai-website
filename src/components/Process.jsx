import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import './Process.css';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understanding your business goals' },
  { num: '02', title: 'Research', desc: 'In-depth analysis & market research' },
  { num: '03', title: 'Planning', desc: 'Strategic planning & roadmap' },
  { num: '04', title: 'Design', desc: 'Creative UI/UX design' },
  { num: '05', title: 'Development', desc: 'Agile development & coding' },
  { num: '06', title: 'Testing', desc: 'Quality testing & optimization' },
  { num: '07', title: 'Launch', desc: 'Smooth deployment & release' },
  { num: '08', title: 'Support', desc: 'Continuous support & maintenance' },
  { num: '09', title: 'Growth', desc: 'Scaling your business' },
];

export default function Process() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const nodes = ref.current?.querySelectorAll('.process-step');
    if (!nodes?.length) return undefined;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(Number(entry.target.dataset.index))), { rootMargin: '-35% 0px -45% 0px', threshold: .01 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return <section className="process-section"><div className="container"><Reveal><div className="text-center process-section__header"><p className="section-tag">OUR PROCESS</p><h2 className="section-title">From Idea To Impact — We Build It All</h2><p className="section-subtitle">A clear, collaborative workflow keeps strategy, design and engineering moving toward the same outcome.</p></div></Reveal><div className="process-track" ref={ref}><div className="process-line"><span style={{'--line-progress':`${(active/(steps.length-1))*100}%`}}/></div>{steps.map((step,index)=><div key={step.num} data-index={index} className={`process-step ${index<=active?'process-step--active':''}`}><div className="process-step__content"><span className="process-step__eyebrow">STEP {step.num}</span><h3>{step.title}</h3><p>{step.desc}</p></div><div className="process-step__circle">{index<active?<Icon name="check" size={15}/>:step.num}</div></div>)}</div></div></section>;
}
