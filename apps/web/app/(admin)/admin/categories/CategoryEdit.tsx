import { DateInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';

import { getCategoryExtraInfoChoices } from '@/libs/admin';

function CategoryEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <SelectInput source="extra_info" choices={getCategoryExtraInfoChoices()} />
        <DateInput source="created_at" disabled />
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;