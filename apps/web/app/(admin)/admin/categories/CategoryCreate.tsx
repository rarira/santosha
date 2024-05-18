import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

import { getCategoryExtraInfoChoices } from '@/libs/admin';

function CategoryCreate() {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput autoFocus source="name" />
        <SelectInput source="extra_info" choices={getCategoryExtraInfoChoices()} />
      </SimpleForm>
    </Create>
  );
}

export default CategoryCreate;
