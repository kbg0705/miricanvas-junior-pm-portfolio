import { useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projectCategories, type ProjectCategoryFilter } from '../data/projectCategories';
import { projects } from '../data/projects';

const academicProjectSlugs = new Set([
  'print-decision-support',
  'gachon-metaverse-campus',
  'smooth-route',
  'my-ai-service-business',
  'picar-ar-sns',
  'recommendation',
  'hci-vr',
]);

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategoryFilter>('All');
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter)), [filter]);
  const practicalProjects = filtered.filter((project) => !academicProjectSlugs.has(project.slug));
  const academicProjects = filtered.filter((project) => academicProjectSlugs.has(project.slug));

  return (
    <>
      <Header />
      <main className="page-shell">
        <header className="page-hero">
          <p className="eyebrow">All Work</p>
          <h1>문제 유형과 제품 단계에 따라 프로젝트를 탐색하세요.</h1>
          <p>문제 정의부터 제품 판단, 실행 결과까지 프로젝트별 핵심 내용을 한눈에 확인할 수 있습니다.</p>
        </header>
        <div className="filter-bar" aria-label="프로젝트 필터">
          {projectCategories.map((category) => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        <WorkGroup
          eyebrow="Professional"
          title="실무 프로젝트"
          description="제품 조직에서 기획, 협업, 출시와 검증까지 수행한 작업입니다."
          projects={practicalProjects}
        />
        <WorkGroup
          eyebrow="Academic"
          title="학부 및 대학원 프로젝트"
          description="학업과 연구 과정에서 문제 정의, 프로토타입, 서비스 구조를 검증한 작업입니다."
          projects={academicProjects}
        />
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function WorkGroup({
  eyebrow,
  title,
  description,
  projects,
}: {
  eyebrow: string;
  title: string;
  description: string;
  projects: typeof import('../data/projects').projects;
}) {
  if (!projects.length) return null;

  return (
    <section className="work-list">
      <div className="work-list__heading">
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
        <p>{description}</p>
      </div>
      <div className="work-grid">
        {projects.map((project) => <ProjectCard compact uniform key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
