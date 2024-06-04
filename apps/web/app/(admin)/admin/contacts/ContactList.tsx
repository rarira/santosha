import { memo } from 'react';
import {
  BooleanField,
  BulkUpdateButton,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from 'react-admin';

function ContactList(): JSX.Element {
  const ContactListBulkActions = memo(() => (
    <>
      <BulkUpdateButton data={{ replied: true }} label="contact.action.update_all_replied" />
    </>
  ));

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
