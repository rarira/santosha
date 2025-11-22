import { useRecordContext } from 'react-admin';

const PostTitle = (): React.JSX.Element => {
  const record = useRecordContext();
  // v5: useRecordContext returns Record | undefined
  return <>{record?.title ? `Title: ${record.title}` : ''}</>;
};

export default PostTitle;
