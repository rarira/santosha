import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

const DAY_CHOICES = [
  { id: 0, name: '일요일' },
  { id: 1, name: '월요일' },
  { id: 2, name: '화요일' },
  { id: 3, name: '수요일' },
  { id: 4, name: '목요일' },
  { id: 5, name: '금요일' },
  { id: 6, name: '토요일' },
];

const CLASS_TYPE_CHOICES = [
  { id: 'studio', name: '요가원 출강' },
  { id: 'private', name: 'PT' },
  { id: 'other', name: '기타' },
];

export default function ScheduleCreate(): React.JSX.Element {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="title" label="수업명" validate={[required()]} fullWidth />
        <SelectInput
          source="class_type"
          label="수업 종류"
          choices={CLASS_TYPE_CHOICES}
          validate={[required()]}
          defaultValue="studio"
        />
        <ReferenceInput source="center_id" reference="centers" label="수업 장소">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <SelectInput
          source="day_of_week"
          label="요일"
          choices={DAY_CHOICES}
          validate={[required()]}
        />
        <TextInput
          source="start_time"
          label="시작 시간"
          validate={[required()]}
          placeholder="09:00"
          helperText="형식: HH:MM (예: 09:00)"
        />
        <TextInput
          source="end_time"
          label="종료 시간"
          validate={[required()]}
          placeholder="10:30"
          helperText="형식: HH:MM (예: 10:30)"
        />
        <TextInput source="additional_info" label="기타 정보" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
}
