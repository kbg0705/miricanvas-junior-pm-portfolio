import type { ProjectDetail } from '../../types/project';
import { makePlaceholder as image } from '../imagePlaceholders';

export const printbankMainDetail: ProjectDetail = {
  slug: 'printbank-main',
  overview: 'Printbank 메인페이지는 주문 기능 중심으로 구성되어 신규 사용자가 상품을 탐색하고 제작 방법을 이해한 뒤 상담으로 진입하기 어려웠습니다. GA4 행동 데이터를 바탕으로 메인의 역할을 상품 탐색, 제작 안내, 상담 진입으로 재정의했습니다.',
  context: 'NPB 운영 이슈 구조화와 별도로, 이 프로젝트는 메인페이지의 정보 구조와 CTA 개선에 집중했습니다. 배너, 팝업, 콘텐츠, 상담 CTA의 우선순위를 조정하고 개선 후 평균 참여시간 변화를 확인했습니다.',
  executiveSummary: {
    problem: '기존 메인은 주문 기능 중심으로 구성되어 신규 사용자의 상품 탐색과 상담 진입이 약했습니다.',
    decision: 'GA4 행동 데이터를 바탕으로 상품 탐색, 제작 안내, 상담 CTA를 메인의 핵심 역할로 재정의했습니다.',
    outcome: '활성 사용자당 평균 참여시간이 1분 14초에서 2분 8초로 약 1.7배 증가했습니다.',
  },
  evidence: [
    { label: 'GA4 행동 데이터', description: '사용자의 접속과 참여 지표를 확인해 메인페이지에서 충분한 탐색이 일어나지 않는 지점을 파악했습니다.' },
    { label: '정보 구조 진단', description: '배너, 팝업, 상품 안내, 상담 CTA가 서로 다른 목적을 충분히 구분하지 못하는 문제를 확인했습니다.' },
    { label: '상담 진입 흐름', description: '신규 사용자가 제작 가능 여부를 판단하고 상담으로 이동하는 흐름이 명확하지 않았습니다.' },
  ],
  keyQuestion: '신규 사용자가 상품을 탐색하고 제작 가능성을 판단한 뒤 상담으로 자연스럽게 이동하게 하려면 무엇이 먼저 보여야 할까?',
  decisions: [
    { number: '01', title: '메인페이지 역할 재정의', evidence: '기존 메인은 주문 기능 중심으로 구성되어 탐색과 상담 진입의 역할이 약했습니다.', decision: '상품 탐색, 제작 안내, 상담 진입을 메인페이지의 핵심 역할로 분리했습니다.', specification: '배너, 팝업, 콘텐츠, 상담 CTA의 우선순위와 위치를 재정리했습니다.', effect: '신규 사용자가 메인에서 확인해야 할 정보와 다음 행동을 더 빠르게 찾을 수 있게 했습니다.' },
    { number: '02', title: '행동 데이터 기반 개선 확인', evidence: 'GA4에서 메인페이지 참여 시간이 낮게 나타났습니다.', decision: '개선 전후 평균 참여시간을 같은 기준으로 비교했습니다.', specification: '활성 사용자당 평균 참여시간을 1분 14초에서 2분 8초로 추적했습니다.', effect: '개선이 실제 탐색 행동 증가로 이어졌는지 확인할 수 있었습니다.' },
  ],
  artifacts: [{ ...image('artifact', '메인 정보 구조 개선안', 'GA4 분석 기반 IA와 CTA 우선순위'), src: 'public/images/projects/printbank-main/01-cover.png', objectFit: 'cover' }],
  collaboration: ['운영 요청과 사용자 행동 데이터를 분리해 메인페이지 개선 범위를 정리했습니다.', '디자인과 개발 협의 시 배너, 팝업, 상담 CTA의 우선순위와 노출 조건을 구체화했습니다.', '개선 후 GA4 참여 지표를 확인해 성과를 측정 가능한 항목으로 분리했습니다.'],
  outcomes: [
    { value: '1.7×', label: '평균 참여시간 증가', description: '활성 사용자당 평균 참여시간이 1분 14초에서 2분 8초로 증가했습니다.', type: 'measured' },
    { value: 'IA', label: '메인 정보 구조 재설계', description: '상품 탐색, 제작 안내, 상담 CTA를 중심으로 메인의 역할을 재정의했습니다.', type: 'delivered' },
  ],
  learnings: ['메인페이지 성과는 체류시간만이 아니라 다음 행동으로 이어지는지 함께 확인해야 합니다.', '운영 개선 프로젝트와 화면 리뉴얼 프로젝트는 문제의 근거와 성과 지표를 분리해 설명해야 합니다.'],
  confidentialityNote: '회사 내부 정보 보호를 위해 실제 화면과 지표 맥락은 공개 가능한 범위에서 재구성했습니다.',
  images: [{ ...image('cover', 'Printbank 메인페이지 개선 대표 화면', 'GA4 기반 메인 정보 구조 개선'), src: 'public/images/projects/printbank-main/01-cover.png', objectFit: 'cover' }],
  previousProject: 'printbank-npb',
  nextProject: 'magic-ecole',
};
