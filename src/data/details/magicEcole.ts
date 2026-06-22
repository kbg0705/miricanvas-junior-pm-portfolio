import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsA } from '../featuredProjectsA';

export const magicEcoleDetail: ProjectDetail = {
  slug: 'magic-ecole',
  overview: '고정된 권한 체계와 낮은 콘텐츠 재사용성으로 새로운 운영 요구마다 추가 개발이 필요했습니다. 전역 권한과 강의 내부 권한을 분리하고 사용자 정의 역할과 콘텐츠 라이브러리를 설계했습니다.',
  context: '서비스가 확장될수록 역할과 강의 유형은 늘어났지만 권한과 콘텐츠 구조는 초기 모델에 묶여 있었습니다.',
  executiveSummary: { problem: '새 역할과 강의 요구마다 추가 개발이 필요했습니다.', decision: '권한 범위와 콘텐츠 계층을 제품 정책으로 분리하고 재사용 구조를 만들었습니다.', outcome: '14개 Sprint를 운영하고 기획팀 업무 수행률 90%를 달성했으며 SaaS 지원 사업 통과에 기여했습니다.' },
  evidence: [{ label: '운영자 인터뷰', description: '역할 추가와 콘텐츠 복제의 반복 업무를 확인했습니다.' }, { label: '기존 정책 분석', description: '전역 권한과 강의 내부 행동 권한이 섞인 구조를 분석했습니다.' }, { label: '업무 흐름', description: '강의 생성부터 콘텐츠 재사용까지 단계를 비교했습니다.' }, { label: 'Sprint 회고', description: '기획 준비 상태와 개발 착수 지연 원인을 점검했습니다.' }],
  keyQuestion: '새로운 역할과 강의가 추가될 때마다 개발하지 않아도 되는 LMS 구조를 어떻게 만들 수 있을까?',
  decisions: [
    { number: '01', title: '전역 권한과 강의 내부 권한 분리', evidence: '역할 이름과 실제 접근 범위가 일치하지 않았습니다.', decision: '서비스 전체 권한과 강의 안의 행동 권한을 분리했습니다.', specification: '전역 역할과 Teacher·Student·Custom Role을 별도 관리했습니다.', effect: '새 강의 역할이 전역 권한 구조를 바꾸지 않도록 했습니다.' },
    { number: '02', title: 'Custom Role 권한 체크리스트', evidence: '새 역할이 필요할 때마다 개발 요청이 발생했습니다.', decision: '운영자가 행동 권한을 조합해 역할을 만들도록 했습니다.', specification: '권한 체크리스트, 기본값, 변경 이력, 안전장치를 정의했습니다.', effect: '운영 요구에 대응하는 확장성을 높였습니다.' },
    { number: '03', title: '콘텐츠 계층과 라이브러리 통합', evidence: '비슷한 강의가 기수마다 반복 생성됐습니다.', decision: '프로젝트–섹션–액티비티 계층을 통일하고 재사용을 설계했습니다.', specification: '학생·교사 화면 계층을 맞추고 라이브러리에서 불러오도록 했습니다.', effect: '강의 제작의 반복 작업을 줄였습니다.' },
    { number: '04', title: '3 Sprint Rule과 Jira 기준', evidence: '준비되지 않은 업무가 Sprint에 들어가 일정이 흔들렸습니다.', decision: '개발 착수 전에 필요한 준비 상태를 정의했습니다.', specification: '백로그, 화면정의, 정책, 예외, QA 기준을 확인했습니다.', effect: '회의보다 준비 상태를 중심으로 협업했습니다.' },
  ],
  artifacts: [image('artifact', '권한 매트릭스', '역할별 데이터·행동 권한 비교'), image('artifact', '콘텐츠 계층 구조', '프로젝트–섹션–액티비티 관계'), image('artifact', 'Jira Sprint Board', '14개 Sprint 운영 기준')],
  collaboration: ['운영자·강사·기관 관리자 요구를 역할별로 분리했습니다.', '개발자와 권한 데이터 구조와 기본값을 협의했습니다.', 'Jira와 데일리 미팅으로 Sprint를 관리했습니다.'],
  outcomes: featuredProjectsA[1].impact,
  learnings: ['권한은 역할 이름보다 데이터 접근 범위와 행동 권한을 기준으로 설계해야 합니다.', '자유로운 설정에는 기본값과 안전장치가 필요합니다.', 'Scrum은 개발 착수 기준을 명확히 하는 도구여야 합니다.'], images: [], previousProject: 'printbank-npb', nextProject: 'tax-canvas',
};
