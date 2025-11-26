import { DateField, Edit, SimpleForm, TextInput, required } from 'react-admin';

export default function CenterEdit(): React.JSX.Element {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="ID" disabled />
        <TextInput source="name" label="센터명" validate={[required()]} fullWidth />
        <TextInput source="address" label="주소" validate={[required()]} fullWidth multiline />
        <TextInput source="naver_place_id" label="네이버 플레이스 ID" fullWidth helperText="네이버 지도 URL의 place ID (숫자만)" />
        <TextInput source="social_link" label="소셜 미디어 링크" type="url" fullWidth helperText="인스타그램, 페이스북 등" />
        <TextInput source="description" label="설명" fullWidth multiline />
        <TextInput source="additional_info" label="기타 정보" fullWidth multiline />
        <DateField source="created_at" label="생성일" showTime />
        <DateField source="updated_at" label="수정일" showTime />
      </SimpleForm>
    </Edit>
  );
}
