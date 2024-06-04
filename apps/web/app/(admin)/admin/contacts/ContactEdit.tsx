import {
  BooleanInput,
  DateField,
  Edit,
  EmailField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

function ContactEdit(): JSX.Element {
  return (
    <>
      <Show>
        <SimpleShowLayout>
          <TextField source="id" />
          <DateField source="created_at" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone_no" />
          <TextField source="content" />
        </SimpleShowLayout>
      </Show>
      <Edit>
        <SimpleForm>
          <BooleanInput source="replied" />
        </SimpleForm>
      </Edit>
    </>
  );
}

export default ContactEdit;
