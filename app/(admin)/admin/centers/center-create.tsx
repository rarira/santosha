import { Create, SimpleForm, TextInput, required } from 'react-admin';

export default function CenterCreate(): React.JSX.Element {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="name" label="센터명" validate={[required()]} fullWidth />
        <TextInput source="address" label="주소" validate={[required()]} fullWidth multiline />
        <TextInput source="phone" label="전화번호" fullWidth />
        <TextInput source="email" label="이메일" type="email" fullWidth />
        <TextInput source="link" label="지도 링크" type="url" fullWidth />
        <TextInput source="description" label="설명" fullWidth multiline />
        <TextInput source="additional_info" label="기타 정보" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
}
