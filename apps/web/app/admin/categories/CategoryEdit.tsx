import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

function CategoryEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <DateInput source="created_at" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;
