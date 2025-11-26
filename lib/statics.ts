/**
 * 사이트 전체에서 사용되는 정적 텍스트 컨텐츠를 관리하는 파일
 *
 * 각 섹션별로 독립적인 상수로 분리하여 관리합니다.
 */

// ============================================================
// 사이트 기본 정보
// ============================================================

export const SITE_INFO = {
  name: "산토샤 요가",
  logo: {
    alt: "Santosha Yoga",
    path: "/image/santosha_logo.webp",
  },
  instructor: {
    name: "Lizzy",
  },
} as const;

// ============================================================
// 섹션 공통 정보 (타이틀, 서브타이틀, 네비게이션 등)
// ============================================================

export const SECTIONS = {
  intro: {
    id: "intro",
    title: "산토샤 요가 소개",
    subtitle: null,
    anchor: "#intro-section",
    navTitle: "소개",
  },
  class: {
    id: "class",
    title: "요가 수업 종류",
    subtitle: "다양한 종류의 요가를 함께 할 수 있어요",
    anchor: "#class-section",
    navTitle: "요가 종류",
  },
  process: {
    id: "process",
    title: "상담 프로세스",
    subtitle: "이렇게 진행 되요",
    anchor: "#process-section",
    navTitle: "과정",
  },
  contact: {
    id: "contact",
    title: "Contact",
    subtitle: "연락해 주세요",
    anchor: "#contact-section",
    navTitle: "연락",
  },
} as const;

// 네비게이션 메뉴 (SECTIONS에서 자동 생성)
export const NAV_MENU = Object.values(SECTIONS).map((section) => ({
  title: section.navTitle,
  url: section.anchor,
}));

// ============================================================
// Intro Section 전용 컨텐츠
// ============================================================

export const INTRO_CONTENT = {
  speechBubble: {
    author: SITE_INFO.instructor.name,
    message:
      "안녕하세요. 산토샤 요가의 Lizzy입니다. 산토샤요가는 1대1 개인레슨과 단체수업 출강을 모두 진행하고 있습니다. 궁금하신 사항은 사이트 하단 contact 를 통해 연락주세요🙏🏻",
    hoverText: "지금 연락하려면 클릭하세요",
    linkTo: SECTIONS.contact.anchor,
  },
  accordion: [
    {
      id: "item-1",
      icon: "✔️",
      title: "1대1 개인레슨",
      content:
        "다수와 함께하는 수업에 불편함이나 산만한 느낌을 느끼셨다면, 1대1 수업을 통해 자신의 몸과 마음에 집중하고 동작과 호흡을 정확히 이어갈 수 있어요.",
    },
    {
      id: "item-2",
      icon: "✔️",
      title: "기업 출강",
      content:
        "다수의 기업 출강을 진행한 경험이 있어요. 수업 종류는 세가지로 따로 또는 같이 진행할 수 있습니다.",
      list: ["스트레칭 수업", "난이도 있는 요가 수업", "명상 수업"],
    },
    {
      id: "item-3",
      icon: "✔️",
      title: "산토샤의 의미",
      content: [
        "산토샤는 완전, 전체의 sam과 수용, 만족의 tosha가 합쳐진 단어입니다.",
        "산토샤 요가는 우리의 삶에 부드러움을 챙기며 편안함과 안락함을 느끼는 것에 목적을 둡니다. 몸과 마음의 균형감을 챙기며 현재의 자신에게 집중해봅니다.",
      ],
    },
  ],
} as const;

// ============================================================
// Process Section 전용 컨텐츠
// ============================================================

type ProcessStepContent = {
  type: "content";
  stepNo: number;
  title: string;
  description: string;
};

type ProcessStepArrow = {
  type: "arrow";
  direction: "left" | "right" | "up" | "down";
  span: number;
};

type ProcessStepLine = {
  type: "line";
  direction: "horizontal" | "vertical";
  span: number;
};

export type ProcessStep =
  | ProcessStepContent
  | ProcessStepArrow
  | ProcessStepLine;

export const PROCESS_STEPS = {
  mobile: [
    {
      type: "content",
      stepNo: 1,
      title: "상담 신청",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 2,
      title: "설문지 작성",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "down", span: 4 },
    { type: "line", direction: "horizontal", span: 1 },
    { type: "line", direction: "vertical", span: 4 },
    {
      type: "content",
      stepNo: 3,
      title: "카카오톡(or 전화) 상담",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 4,
      title: "체업 수업 진행",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "down", span: 4 },
    { type: "line", direction: "horizontal", span: 1 },
    { type: "line", direction: "vertical", span: 4 },
    {
      type: "content",
      stepNo: 5,
      title: "체업 수업 Q&A",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 6,
      title: "본 수업 진행",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
  ],
  desktop: [
    {
      type: "content",
      stepNo: 1,
      title: "상담 신청",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 2,
      title: "설문지 작성",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 3,
      title: "카카오톡(or 전화) 상담",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "down", span: 4 },
    { type: "line", direction: "horizontal", span: 1 },
    { type: "line", direction: "horizontal", span: 4 },
    { type: "line", direction: "horizontal", span: 1 },
    { type: "line", direction: "vertical", span: 4 },
    {
      type: "content",
      stepNo: 4,
      title: "체업 수업 진행",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 5,
      title: "체업 수업 Q&A",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
    { type: "arrow", direction: "right", span: 1 },
    {
      type: "content",
      stepNo: 6,
      title: "본 수업 진행",
      description: "아래 입력 양식을 전송하여 상담신청을 완료합니다.",
    },
  ],
} as const;

// ============================================================
// Hero Section 전용 컨텐츠
// ============================================================

export const HERO_SLIDES = [
  {
    image: "/image/hero/lizzy-004.jpg",
    title: "평온한 마음",
    subtitle: "요가로 찾는 내면의 평화",
  },
  {
    image: "/image/hero/lizzy-006.jpg",
    title: "건강한 몸",
    subtitle: "균형잡힌 자세와 호흡",
  },
  {
    image: "/image/hero/lizzy-014.jpg",
    title: "행복한 일상",
    subtitle: "산토샤 요가와 함께",
  },
] as const;

// ============================================================
// Contact Section 전용 컨텐츠
// ============================================================

export const CONTACT_INFO = {
  heading: "함께 요가를 시작해보세요",
  description:
    "요가에 관심이 있으시거나 궁금한 점이 있으시면 언제든 연락주세요. 친절하고 자세하게 안내해드리겠습니다.",
  businessHours: {
    label: "문의 시간",
    value: "평일 09:00 - 18:00",
  },
  responseTime: {
    label: "답변 시간",
    value: "영업일 기준 24시간 이내",
  },
  scheduleButton: {
    text: "📅 현재 수업 시간표 보기",
    href: "/schedule",
  },
} as const;
