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
      },
      message: {
        clear_array_input: '전체 리스트를 지우시겠습니까?',
      },
    },
  },
  koreanMessages,
);

export default ko;
