import type { JSX } from 'react';

import { Datagrid, DateField, List, TextField } from 'react-admin';

function CategoryList(): JSX.Element {
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
