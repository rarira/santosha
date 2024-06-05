import { memo } from 'react';
import { TextInput, useGetOne } from 'react-admin';

import ClassScoreInput from './ClassScoreInput';

function ExtraInfoInput({ categoryId }: { categoryId: number }): React.ReactNode {
  const { data: category } = useGetOne('categories', { id: categoryId });

  switch (category?.extra_info) {
    case 'ClassScore':
      return (
        <div>
          <TextInput
            source="extra_info.type"
            value={category?.extra_info}
            sx={{ display: 'none' }}
          />
          <ClassScoreInput />
        </div>
      );
    default:
      return <></>;
  }
}

export default memo(ExtraInfoInput);
