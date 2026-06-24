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
        <header className="metric-hero">
          <strong>{projects.length}</strong>
          <div><span>Projects</span><p>{practicalProjects.length}개 실무 · {academicProjects.length}개 학부 및 대학원</p></div>
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
