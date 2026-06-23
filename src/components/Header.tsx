import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const homeSections = [
  { id: 'home', label: 'HOME' },
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return undefined;

    const elements = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-34% 0px -52% 0px', threshold: [0.08, 0.2, 0.45] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  const headerClassName = `site-header${isScrolled ? ' is-scrolled' : ''}`;

  return <header className={headerClassName}><NavLink className="brand-lockup" to="/"><strong>KB.</strong><span>KIM BUGYEONG / PRODUCT MANAGER</span></NavLink><nav className="global-nav" aria-label="주요 페이지">{isHome ? homeSections.map((section) => <a className={activeSection === section.id ? 'active' : undefined} href={`#${section.id}`} key={section.id}>{section.label}</a>) : <><NavLink to="/" end>HOME</NavLink><NavLink to="/work">WORK</NavLink><NavLink to="/about">ABOUT</NavLink><NavLink to="/contact">CONTACT</NavLink></>}</nav></header>;
}
