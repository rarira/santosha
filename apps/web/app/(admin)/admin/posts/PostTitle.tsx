import type { JSX } from 'react';

import { useRecordContext } from 'react-admin';

export default (): JSX.Element => {
  const record = useRecordContext();
  return <>{record ? `Title: ${record.title}` : ''}</>;
};
