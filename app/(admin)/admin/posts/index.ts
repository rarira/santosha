import BookIcon from '@mui/icons-material/Book';

import PostCreate from './post-create';
import PostEdit from './post-edit';
import PostList from './post-list';
import PostShow from './post-show';

const posts = {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostShow,
  icon: BookIcon,
  recordRepresentation: 'post',
};

export default posts;
