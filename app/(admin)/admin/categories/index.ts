import CategoryIcon from '@mui/icons-material/Category';

import CategoryCreate from './create';
import CategoryEdit from './edit';
import CategoryList from './list';

const categories = {
  list: CategoryList,
  create: CategoryCreate,
  edit: CategoryEdit,
  icon: CategoryIcon,
  recordRepresentation: 'category',
};

export default categories;
