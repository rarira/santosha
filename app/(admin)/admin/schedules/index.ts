import EventIcon from '@mui/icons-material/Event';

import ScheduleCreate from './schedule-create';
import ScheduleEdit from './schedule-edit';
import ScheduleList from './schedule-list';

const schedules = {
  list: ScheduleList,
  create: ScheduleCreate,
  edit: ScheduleEdit,
  icon: EventIcon,
  recordRepresentation: 'title',
};

export default schedules;
