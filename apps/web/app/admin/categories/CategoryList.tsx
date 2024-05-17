import { Datagrid, DateField, List, TextField } from 'react-admin';

function CategoryList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <DateField source="created_at" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
}

export default CategoryList;
