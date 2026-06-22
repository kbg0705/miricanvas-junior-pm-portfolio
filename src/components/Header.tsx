import { Download } from 'lucide-react';
import { EmailCopyButton } from './EmailCopyButton';

type HeaderProps = {
  email: string;
  activeSection: string;
  onCopyEmail: () => void;
};

const navItems = [
  { id: 'work', label: 'WORK', href: '#work' },
  { id: 'process', label: 'PROCESS', href: '#process' },
  { id: 'about', label: 'ABOUT', href: '#about' },
];

export function Header({ email, activeSection, onCopyEmail }: HeaderProps) {
  return (
    <header className="site-header" data-scrolled={activeSection !== 'top'}>
      <a className="brand-lockup" href="#top" aria-label="메인 상단으로 이동">
        <strong>KB.</strong>
        <span>KIM BUGYEONG / PRODUCT MANAGER</span>
      </a>

      <nav className="global-nav" aria-label="주요 섹션 이동">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? 'is-active' : undefined}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
        <a className="nav-download" href="/resume/김부경_이력서.pdf" download>
          RESUME
          <Download size={14} aria-hidden="true" />
        </a>
        <EmailCopyButton email={email} onCopy={onCopyEmail} variant="text" />
      </nav>
    </header>
  );
}
import { Copy, Download } from 'lucide-react';
import { projects } from '../data/projects';

const email = 'portfolio@example.com';

export function Header() {
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="홈으로 이동">
        PM Portfolio
      </a>
      <nav className="project-nav" aria-label="프로젝트 바로가기">
        {projects.map((project) => (
          <a key={project.id} href={`#${project.id}`}>
            {project.title.replace(' 개선', '').replace(' 리뉴얼', '')}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" className="icon-button" onClick={handleCopyEmail} aria-label="이메일 복사">
          <Copy size={17} />
        </button>
        <a className="resume-button" href="/resume.pdf" download>
          <Download size={17} />
          Resume
        </a>
      </div>
    </header>
  );
}
