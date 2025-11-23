import koreanMessages from '@spectrum/ra-language-korean';
import { TranslationMessages } from 'react-admin';

import U from '@/libs/util';

const ko: TranslationMessages = U.merge(
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
    resources: {
      posts: {
        name: 'Post |||| Posts',
        fields: {
          password: 'Password (if protected post)',
          pictures: 'Related Pictures',
        },
      },
    },
    post: {
      list: {
        search: '검색',
      },
      form: {
        summary: '개요',
        body: '본문',
        miscellaneous: '기타',
      },
      edit: {
        title: 'Post "%{title}"',
      },
      action: {
        save_and_edit: 'Save and Edit',
        save_and_add: 'Save and Add',
        save_and_show: 'Save and Show',
        save_with_average_note: 'Save with Note',
      },
    },
    contact: {
      action: {
        update_all_replied: '모두 답변한 것으로 변경',
      },
    },
  },
  koreanMessages,
);

export default ko;
