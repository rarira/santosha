import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

function UserEdit(): React.JSX.Element {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="email" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <DateInput source="created_at" disabled />
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit;
