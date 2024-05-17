import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

function CategoryEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <DateInput source="created_at" disabled />
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;
