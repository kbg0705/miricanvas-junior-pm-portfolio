import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsB } from '../featuredProjectsB';

export const decisionSupportDetail: ProjectDetail = {
  slug: 'print-decision-support',
  overview: '인쇄 상품은 용도, 예산, 일정, 품질, 종이, 후가공 등 여러 조건을 동시에 비교해야 합니다. 고객과 운영자 인터뷰를 통해 상담 이후에도 구매 결정을 내리지 못하는 원인을 분석했습니다.',
  context: '상담 이후 이탈을 정보 부족이 아니라 고객 맥락과 상품 체계 사이의 간극으로 정의했습니다.',
  executiveSummary: { problem: '고객은 많은 정보를 받아도 자신의 조건에 맞는 선택 기준을 만들기 어려웠습니다.', decision: '목적·예산·일정·기대 결과를 입력받고 추천 옵션·근거·주의사항을 함께 제시하도록 설계했습니다.', outcome: '문제를 구조화해 서비스 콘셉트를 도출하고 2026 학술대회에서 발표했습니다.' },
  evidence: [{ label: '고객 인터뷰', description: '상담 후에도 결정하지 못한 이유를 수집했습니다.' }, { label: '운영자 인터뷰', description: '추천 판단 기준과 부담을 확인했습니다.' }, { label: 'Affinity Mapping', description: '인터뷰를 선택 기준·불안·운영 부담으로 그룹핑했습니다.' }, { label: 'Service Blueprint', description: '상담 전후 행동과 운영 지원을 연결했습니다.' }],
  keyQuestion: '운영자의 경험적 추천을 어떻게 일관된 의사결정 지원 체계로 전환할 수 있을까?',
  decisions: [
    { number: '01', title: '선택 기준의 부재로 문제 재정의', evidence: '고객은 정보를 더 받아도 판단 기준을 만들지 못했습니다.', decision: '상품 속성보다 사용 목적과 제약 조건을 먼저 수집했습니다.', specification: '용도, 예산, 일정, 기대 결과를 핵심 입력으로 정의했습니다.', effect: '상담을 의사결정 지원 과정으로 전환했습니다.' },
    { number: '02', title: '추천 근거와 주의사항 제공', evidence: '추천만 제시하면 신뢰하기 어렵고 책임이 모호했습니다.', decision: '추천 이유와 조건별 주의사항을 같은 화면에 제공했습니다.', specification: '추천 옵션, 비교 기준, 근거, 제한사항을 함께 표시했습니다.', effect: '고객과 운영자가 사용할 공통 언어를 만들었습니다.' },
    { number: '03', title: 'Human-in-the-loop 유지', evidence: '제작 조건 때문에 자동 추천만으로 확정하기 어려웠습니다.', decision: '운영자의 최종 판단을 유지했습니다.', specification: '추천 후보와 운영자 확인·수정 단계를 분리했습니다.', effect: '자동화의 책임 범위를 명확히 했습니다.' },
  ],
  artifacts: [image('evidence', '인터뷰 그룹핑', '고객·운영자 언어와 문제 그룹'), image('artifact', '서비스 블루프린트', '고객 행동과 운영 지원 연결', '2:1'), image('decision', '추천 구조', '입력 조건에서 근거와 주의사항으로 이어지는 화면')],
  collaboration: ['고객과 운영자 인터뷰를 그룹핑했습니다.', '서비스 맵을 교차 검토했습니다.', '발표를 위해 연구 질문과 적용 범위를 압축했습니다.'],
  outcomes: featuredProjectsB[1].impact,
  learnings: ['복잡한 상품에서는 선택 기준을 만드는 것이 중요합니다.', '추천 기능은 이유와 책임 범위를 함께 설계해야 합니다.', '운영자의 반복 판단을 지원하는 방식이 현실적입니다.'],
  images: [], previousProject: 'print-studio', nextProject: 'gachon-metaverse-campus',
};
