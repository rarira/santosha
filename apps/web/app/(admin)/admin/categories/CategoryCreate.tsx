import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

import { categoryExtraInfo } from '@/libs/admin';

function CategoryCreate(): React.JSX.Element {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput autoFocus source="name" />
        <SelectInput source="extra_info" choices={categoryExtraInfo} />
      </SimpleForm>
    </Create>
  );
}

export default CategoryCreate;
