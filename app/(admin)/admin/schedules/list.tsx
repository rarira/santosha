import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  ExportButton,
  FilterButton,
  FunctionField,
  List,
  ReferenceField,
  SearchInput,
  SelectInput,
  TextField,
  TopToolbar,
} from 'react-admin';
import Link from 'next/link';

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

const scheduleFilters = [
  <SearchInput key={0} source="q" alwaysOn />,
  <SelectInput key={1} source="day_of_week" choices={DAY_CHOICES} label="요일" />,
  <SelectInput key={2} source="class_type" choices={CLASS_TYPE_CHOICES} label="수업 종류" />,
];

function ScheduleListActions() {
  return (
    <TopToolbar>
      <FilterButton />
      <CreateButton />
      <ExportButton />
      <Link
        href="/schedule"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '6px 16px',
          color: '#1976d2',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        📅 캘린더 보기
      </Link>
    </TopToolbar>
  );
}

export default function ScheduleList(): React.JSX.Element {
  return (
    <List
      filters={scheduleFilters}
      actions={<ScheduleListActions />}
      sort={{ field: 'day_of_week', order: 'ASC' }}
    >
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <FunctionField
          label="요일"
          render={(record: any) => DAY_CHOICES.find(d => d.id === record.day_of_week)?.name}
        />
        <FunctionField
          label="시간"
          render={(record: any) => `${record.start_time} - ${record.end_time}`}
        />
        <TextField source="title" label="수업명" />
        <FunctionField
          label="수업 종류"
          render={(record: any) => CLASS_TYPE_CHOICES.find(c => c.id === record.class_type)?.name}
        />
        <ReferenceField source="center_id" reference="centers" label="수업 장소" link="show">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="created_at" label="생성일" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
}
