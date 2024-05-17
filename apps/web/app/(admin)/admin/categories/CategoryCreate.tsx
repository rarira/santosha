import { Create, SimpleForm, TextInput } from 'react-admin';

function CategoryCreate() {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput autoFocus source="name" />
      </SimpleForm>
    </Create>
  );
}

export default CategoryCreate;
