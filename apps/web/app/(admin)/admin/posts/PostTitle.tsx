import type { JSX } from 'react';

import { useRecordContext } from 'react-admin';

export default (): React.JSX.Element => {
  const record = useRecordContext();
  return <>{record ? `Title: ${record.title}` : ''}</>;
};
