import { useRecordContext } from 'react-admin';

export default () => {
  const record = useRecordContext();
  return <>{record ? `Title: ${record.title}` : ''}</>;
};
