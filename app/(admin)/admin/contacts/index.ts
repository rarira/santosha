import ContactIcon from '@mui/icons-material/ContactSupport';

import ContactEdit from './edit';
import ContactList from './list';

const contacts = {
  list: ContactList,
  edit: ContactEdit,
  icon: ContactIcon,
  recordRepresentation: 'contact',
};

export default contacts;
