import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsA } from '../featuredProjectsA';

export const taxCanvasDetail: ProjectDetail = {
  slug: 'tax-canvas',
  overview: '세무사가 사실관계와 쟁점을 입력하면 AI가 분석하고 법령, 예규, 판례를 근거로 제시하는 전문가용 서비스입니다. 긴 분석 시간, 복수 쟁점 비교, 결과 신뢰성 문제를 중심으로 흐름을 재설계했습니다.',
  context: '전문가는 AI의 결론보다 근거와 검토 가능성을 중요하게 봅니다. 대기·실패·재시도·근거 탐색을 하나의 판단 흐름으로 설계해야 했습니다.',
  executiveSummary: { problem: 'AI 결과가 늦고 여러 쟁점을 비교하거나 근거를 즉시 검토하기 어려웠습니다.', decision: 'AI 상태, 복수 쟁점, 재분석, 근거 문서를 연결한 검색·검토 흐름을 설계했습니다.', outcome: 'v1.1 요구사항을 개발 착수 가능한 수준으로 완성하고 검색 결과와 답변의 연결 구조를 정의했습니다.' },
  evidence: [{ label: '세무사 인터뷰', description: 'AI 결과를 믿기 어려운 이유와 검토 순서를 확인했습니다.' }, { label: '기존 흐름 분석', description: '긴 대기와 복수 쟁점 전환의 이탈 지점을 찾았습니다.' }, { label: 'RAG 구조 협의', description: '검색 결과와 생성 답변의 관계를 정의했습니다.' }, { label: '사용자 시나리오', description: '실패·재시도·이전 결과 비교까지 포함했습니다.' }],
  keyQuestion: '사용자가 AI 답변을 그대로 믿지 않고도 빠르게 검토하고 판단하게 하려면 무엇이 필요할까?',
  decisions: [
    { number: '01', title: 'AI 분석 단계와 부분 결과 제공', evidence: '긴 대기 동안 진행 상태와 실패 여부를 알기 어려웠습니다.', decision: '분석 단계를 보여주고 확인 가능한 결과부터 제공했습니다.', specification: '대기·진행·부분 완료·실패·재시도 상태를 정의했습니다.', effect: 'AI 처리 시간을 검토 가능한 과정으로 바꿨습니다.' },
    { number: '02', title: '복수 쟁점 이동과 결과 보존', evidence: '하나의 사실관계에 여러 쟁점을 비교해야 했습니다.', decision: '쟁점을 추가하고 빠르게 이동하며 이전 결과를 유지하도록 했습니다.', specification: '최대 쟁점 수, 탭 이동, 다시 분석 횟수, 이전 결과 표시를 정의했습니다.', effect: '분석 맥락을 잃지 않고 결과를 비교할 수 있게 했습니다.' },
    { number: '03', title: '판례·예규 메타데이터 제공', evidence: '전문가는 결론보다 출처 유형과 날짜를 먼저 확인했습니다.', decision: '근거 문서를 답변과 함께 탐색하게 했습니다.', specification: '문서 유형, 제목, 날짜, 링크, 답변 연결 관계를 정의했습니다.', effect: '사용자가 AI 답변을 독립적으로 검증할 수 있게 했습니다.' },
  ],
  artifacts: [image('artifact', 'AI 상태 흐름', '대기·부분 결과·실패·재시도 상태'), image('artifact', '쟁점 및 결과 구조', '복수 쟁점 이동과 이전 결과 보존'), image('artifact', 'RAG 근거 메타데이터', '판례·예규·법령과 답변 연결')],
  collaboration: ['세무사 인터뷰로 판단 기준과 근거 확인 순서를 정리했습니다.', '개발팀과 RAG 검색 결과와 생성 답변의 연결 구조를 협의했습니다.', 'Jira에 요구사항과 예외 상태를 정리했습니다.'],
  outcomes: featuredProjectsA[2].impact,
  learnings: ['AI 제품은 대기, 실패, 재시도, 근거 확인 흐름이 신뢰를 결정합니다.', '생성 결과와 검색 근거의 관계를 명확히 설명해야 합니다.', '개발 완료 전 기획 결과를 실제 사용자 성과처럼 표현하지 않아야 합니다.'], images: [], previousProject: 'magic-ecole', nextProject: 'print-studio',
};
