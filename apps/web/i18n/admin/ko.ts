import koreanMessages from '@spectrum/ra-language-korean';
import { TranslationMessages } from 'react-admin';

import Util from '@/libs/util';

const ko: TranslationMessages = Util.merge(
  {
    ra: {
      configurable: {
        customize: '커스터마이징',
      },
      action: {
        clear_array_input: '리스트 지우기',
        select_columns: '열 선택',
      },
      message: {
        clear_array_input: '전체 리스트를 지우시겠습니까?',
      },
    },
    simple: {
      action: {
        close: '닫기',
        resetViews: '보기 초기화',
      },
      'create-post': '포스트 생성',
    },
  },
  koreanMessages,
);

export default ko;
