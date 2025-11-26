import BookIcon from '@mui/icons-material/Book';

import PostCreate from './create';
import PostEdit from './edit';
import PostList from './list';
import PostShow from './show';

const posts = {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostShow,
  icon: BookIcon,
  recordRepresentation: 'post',
};

export default posts;
