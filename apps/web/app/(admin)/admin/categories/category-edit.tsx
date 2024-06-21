import { DateInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';

import { categoryExtraInfo } from '@/libs/admin';
function CategoryEdit(): React.JSX.Element {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <SelectInput source="extra_info" choices={categoryExtraInfo} />
        <DateInput source="created_at" disabled />
      </SimpleForm>
    </Edit>
  );
}

export default CategoryEdit;
