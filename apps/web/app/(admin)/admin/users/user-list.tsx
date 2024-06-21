import { Datagrid, DateField, EmailField, List, TextField } from 'react-admin';

function UserList(): React.JSX.Element {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
}

export default UserList;
