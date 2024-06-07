import BookIcon from '@mui/icons-material/Book';
import { Box, useMediaQuery } from '@mui/material';
import { Theme, styled } from '@mui/material/styles';
import { ReactNode, type JSX } from 'react';
import {
  BulkDeleteButton,
  BulkExportButton,
  CreateButton,
  DatagridConfigurable,
  DateField,
  EditButton,
  ExportButton,
  FilterButton,
  InfiniteList,
  List,
  NumberField,
  ReferenceField,
  SearchInput,
  SelectColumnsButton,
  ShowButton,
  SimpleList,
  TextField,
  TextInput,
  TopToolbar,
  WrapperField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import ResetViewsButton from './ResetViewsButton';

export const PostIcon = BookIcon;

const postFilter = [
  <SearchInput source="q" alwaysOn />,
  <TextInput source="title" defaultValue="Qui tempore rerum et voluptates" />,
];

// const exporter = posts => {
//   const data = posts.map(post => ({
//     ...post,
//     backlinks: lodashGet(post, 'backlinks', []).map(backlink => backlink.url),
//   }));
//   return jsonExport(data, (err, csv) => downloadCSV(csv, 'posts'));
// };

// eslint-disable-next-line no-unused-vars
const PostListBulkActions = ({ children, ...props }: any) => (
  <>
    <ResetViewsButton {...props} />
    <BulkDeleteButton {...props} />
    <BulkExportButton {...props} />
  </>
);

function PostListActions({ isSmall }: { isSmall?: boolean }) {
  return (
    <TopToolbar>
      {!isSmall && <SelectColumnsButton />}
      <FilterButton />
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
}

function PostListMobile() {
  return (
    <InfiniteList
      filters={postFilter}
      sort={{ field: 'published_at', order: 'DESC' }}
      // exporter={exporter}
      actions={<PostListActions isSmall />}
    >
      <SimpleList
        primaryText={record => record.title}
        secondaryText={record => `${record.views} views`}
        tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
      />
    </InfiniteList>
  );
}

function PostListActionToolbar({ children }: { children: ReactNode }) {
  return <Box sx={{ alignItems: 'center', display: 'flex' }}>{children}</Box>;
}

function PostPanel({ record }: { record: any }) {
  return <div dangerouslySetInnerHTML={{ __html: record.body }} />;
}

function PostListDesktop() {
  return (
    <List
      filters={postFilter}
      sort={{ field: 'published_at', order: 'DESC' }}
      // exporter={exporter}
      actions={<PostListActions />}
    >
      <Styled.Datagrid
        bulkActionButtons={<PostListBulkActions />} // Use the imported component as a JSX component
        rowClick={'show'}
        expand={PostPanel}
      >
        <TextField source="id" />
        <TextField source="title" cellClassName="title" />
        <ReferenceField source="category_id" reference="categories" label="Category">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="published_at" sortByOrder="DESC" cellClassName="publishedAt" />
        <NumberField source="views" sortByOrder="DESC" />
        <WrapperField label="Actions">
          <PostListActionToolbar>
            <EditButton />
            <ShowButton />
          </PostListActionToolbar>
        </WrapperField>
      </Styled.Datagrid>
    </List>
  );
}

export default function PostList(): JSX.Element {
  const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'), { noSsr: true });
  return isSmall ? <PostListMobile /> : <PostListDesktop />;
}

const Styled = {
  Datagrid: styled(DatagridConfigurable)(({ theme }) => ({
    '& .title': {
      maxWidth: '16em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '& .hiddenOnSmallScreens': {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    '& .column-tags': {
      minWidth: '9em',
    },
    '& .publishedAt': { fontStyle: 'italic' },
  })) as any, // typecript 에러
};
