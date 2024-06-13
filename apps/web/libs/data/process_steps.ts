export type ProcessStep =
  | {
      type: 'content';
      stepNo: number;
      title: string;
      description: string;
    }
  | {
      type: 'arrow';
      direction: 'left' | 'right' | 'up' | 'down';
      span: number;
    }
  | {
      type: 'line';
      direction: 'horizontal' | 'vertical';
      span: number;
    };

const processSteps: ProcessStep[] = [
  {
    type: 'content',
    stepNo: 1,
    title: '상담 신청',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
  {
    type: 'arrow',
    direction: 'right',
    span: 1,
  },
  {
    type: 'content',
    stepNo: 2,
    title: '설문지 작성',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
  {
    type: 'arrow',
    direction: 'right',
    span: 1,
  },
  {
    type: 'content',
    stepNo: 3,
    title: '카카오톡(or 전화) 상담',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
  {
    type: 'arrow',
    direction: 'down',
    span: 4,
  },

  {
    type: 'line',
    direction: 'horizontal',
    span: 1,
  },
  {
    type: 'line',
    direction: 'horizontal',
    span: 4,
  },
  {
    type: 'line',
    direction: 'horizontal',
    span: 1,
  },
  {
    type: 'line',
    direction: 'vertical',
    span: 4,
  },
  {
    type: 'content',
    stepNo: 4,
    title: '체업 수업 진행',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
  {
    type: 'arrow',
    direction: 'right',
    span: 1,
  },
  {
    type: 'content',
    stepNo: 5,
    title: '체업 수업 Q&A',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
  {
    type: 'arrow',
    direction: 'right',
    span: 1,
  },
  {
    type: 'content',
    stepNo: 6,
    title: '본 수업 진행',
    description: '아래 입력 양식을 전송하여 상담신청을 완료합니다.',
  },
];

export default processSteps;
