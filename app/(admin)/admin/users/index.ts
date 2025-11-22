import UserIcon from '@mui/icons-material/People';

import UserEdit from './user-edit';
import UserList from './user-list';

const users = {
  list: UserList,
  //   create: CategoryCreate,
  edit: UserEdit,
  icon: UserIcon,
  recordRepresentation: 'user',
};

export default users;
