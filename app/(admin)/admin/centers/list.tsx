import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  ExportButton,
  FilterButton,
  List,
  SearchInput,
  TextField,
  TopToolbar,
} from 'react-admin';

const centerFilters = [<SearchInput key={0} source="q" alwaysOn />];

function CenterListActions() {
  return (
    <TopToolbar>
      <FilterButton />
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
}

export default function CenterList(): React.JSX.Element {
  return (
    <List filters={centerFilters} actions={<CenterListActions />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" label="센터명" />
        <TextField source="address" label="주소" />
        <TextField source="phone" label="전화번호" />
        <TextField source="link" label="지도 링크" />
        <DateField source="created_at" label="생성일" showTime />
        <EditButton />
      </Datagrid>
    </List>
  );
}
