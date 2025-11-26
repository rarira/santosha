import EventIcon from '@mui/icons-material/Event';

import ScheduleCreate from './create';
import ScheduleEdit from './edit';
import ScheduleList from './list';

const schedules = {
  list: ScheduleList,
  create: ScheduleCreate,
  edit: ScheduleEdit,
  icon: EventIcon,
  recordRepresentation: 'title',
};

export default schedules;
