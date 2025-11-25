import CategoryIcon from '@mui/icons-material/Category';

import CategoryCreate from './category-create';
import CategoryEdit from './category-edit';
import CategoryList from './category-list';

const categories = {
  list: CategoryList,
  create: CategoryCreate,
  edit: CategoryEdit,
  icon: CategoryIcon,
  recordRepresentation: 'category',
};

export default categories;
