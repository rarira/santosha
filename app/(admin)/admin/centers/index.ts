import LocationOnIcon from '@mui/icons-material/LocationOn';

import CenterCreate from './create';
import CenterEdit from './edit';
import CenterList from './list';

const centers = {
  list: CenterList,
  create: CenterCreate,
  edit: CenterEdit,
  icon: LocationOnIcon,
  recordRepresentation: 'name',
};

export default centers;
