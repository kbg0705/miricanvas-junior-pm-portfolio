import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';
import { featuredProjectsB } from '../featuredProjectsB';

export const printStudioDetail: ProjectDetail = {
  slug: 'print-studio',
  overview: '명함 주문 과정의 파일 오류와 주문 정보를 옮기는 수작업을 줄이기 위해 사용자 가이드와 시스템 연동을 설계했습니다.',
  context: '인쇄 전문 용어와 파일 규칙은 초보 사용자에게 어렵고 오류는 주문 후 CS와 재작업으로 이어졌습니다.',
  executiveSummary: { problem: '작업 파일 오류와 수작업 주문 접수가 사용자와 운영자 모두의 시간을 소모했습니다.', decision: '오류 직전 가이드를 제공하고 주문·파일·운송장 정보를 연결했습니다.', outcome: '신규 서비스를 출시했고 파일 가이드 이용률 50% 이상, 운영 처리시간 30% 단축을 확인했습니다.' },
  evidence: [{ label: 'CS 문의', description: '반복 파일 오류 유형과 질문 시점을 분류했습니다.' }, { label: '주문 흐름 분석', description: 'Cafe24와 업무 시스템 사이의 수작업 구간을 확인했습니다.' }, { label: '운영자 인터뷰', description: '접수·파일 검수·운송장 입력 과정을 점검했습니다.' }, { label: '출시 후 이용률', description: '파일 가이드 사용과 처리시간을 확인했습니다.' }],
  keyQuestion: '사용자가 주문을 완료하기 전에 스스로 제작 가능한 파일인지 확인하게 하려면 어떻게 해야 할까?',
  decisions: [
    { number: '01', title: '업로드 시점에 상품별 작업 가이드 제공', evidence: '파일 오류는 주문 완료 후 발견돼 CS와 재작업으로 이어졌습니다.', decision: '오류 가능성이 높은 업로드 시점에 가이드를 배치했습니다.', specification: '상품·규격별 가이드, 확인 CTA, 오류 예시를 정의했습니다.', effect: '사용자가 주문 전 파일 규칙을 확인하도록 했습니다.' },
    { number: '02', title: '가이드 교체 구조', evidence: '안내가 바뀔 때 개발 의존도가 높았습니다.', decision: '운영자가 최신 가이드를 교체할 수 있게 했습니다.', specification: '상품별 링크와 파일명 규칙, 교체 권한, 대체 안내를 정의했습니다.', effect: '콘텐츠 변경을 개발 배포와 분리했습니다.' },
    { number: '03', title: '주문 데이터 매핑', evidence: '운영자가 주문 정보를 반복 입력했습니다.', decision: '주문 CSV와 업무 필드를 매핑하고 파일·운송장 흐름을 연결했습니다.', specification: '주문번호, 상품, 옵션, 파일, 배송 항목을 정의했습니다.', effect: '운영 처리시간을 30% 줄였습니다.' },
  ],
  artifacts: [image('artifact', '상품별 파일 가이드', '오류 직전 제공되는 작업 가이드'), image('artifact', '주문 데이터 매핑', '주문과 업무 필드 연결'), image('outcome', '출시 화면 및 지표', '가이드 이용률과 운영시간 변화')],
  collaboration: ['디자이너와 반응형 화면 및 UX Writing을 조율했습니다.', '개발자와 플랫폼 제약과 데이터 매핑 조건을 협의했습니다.', '운영자와 접수·검수·배송 흐름을 검증했습니다.'],
  outcomes: featuredProjectsB[0].impact,
  learnings: ['안내는 오류 직전의 맥락에서 제공해야 효과적입니다.', '운영 자동화는 화면과 데이터 연결 조건까지 설계해야 합니다.', '전문 용어와 함께 사용자가 수행할 행동을 설명해야 합니다.'],
  images: [], previousProject: 'tax-canvas', nextProject: 'print-decision-support',
};
