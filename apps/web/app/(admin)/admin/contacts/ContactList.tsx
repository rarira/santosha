import type { JSX } from 'react';

import {
  BooleanField,
  BulkUpdateButton,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from 'react-admin';

const ContactListBulkActions = () => (
  <BulkUpdateButton data={{ replied: true }} label="contact.action.update_all_replied" />
);

function ContactList(): React.JSX.Element {
  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={<ContactListBulkActions />}>
        <TextField source="id" />
        <DateField source="created_at" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone_no" />
        <BooleanField source="replied" />
      </Datagrid>
    </List>
  );
}

export default ContactList;
