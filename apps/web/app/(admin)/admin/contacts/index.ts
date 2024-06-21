import ContactIcon from '@mui/icons-material/ContactSupport';

import ContactEdit from './contact-edit';
import ContactList from './contact-list';

const contacts = {
  list: ContactList,
  edit: ContactEdit,
  icon: ContactIcon,
  recordRepresentation: 'contact',
};

export default contacts;
