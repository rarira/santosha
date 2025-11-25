import LocationOnIcon from '@mui/icons-material/LocationOn';

import CenterCreate from './center-create';
import CenterEdit from './center-edit';
import CenterList from './center-list';

const centers = {
  list: CenterList,
  create: CenterCreate,
  edit: CenterEdit,
  icon: LocationOnIcon,
  recordRepresentation: 'name',
};

export default centers;
