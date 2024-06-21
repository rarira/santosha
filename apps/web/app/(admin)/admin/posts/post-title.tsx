import { useRecordContext } from 'react-admin';

const PostTitle = (): React.JSX.Element => {
  const record = useRecordContext();
  return <>{record ? `Title: ${record.title}` : ''}</>;
};

export default PostTitle;
