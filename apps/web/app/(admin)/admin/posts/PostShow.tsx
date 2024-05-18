import {
  ArrayField,
  CloneButton,
  Datagrid,
  DateField,
  ReferenceField,
  RichTextField,
  ShowContextProvider,
  ShowView,
  TabbedShowLayout,
  TextField,
  UrlField,
  WrapperField,
  useShowController,
} from 'react-admin';

import OriginalImage from './OriginalImage';
import PostTitle from './PostTitle';

function PostShow() {
  const controllerProps = useShowController();
  return (
    <ShowContextProvider value={controllerProps}>
      <ShowView title={<PostTitle />}>
        <TabbedShowLayout>
          <TabbedShowLayout.Tab label="post.form.summary">
            <TextField source="id" />
            <TextField source="title" />

            <TextField source="teaser" />
            {controllerProps?.record?.image && (
              <WrapperField label="Original image">
                <OriginalImage imageFullPath={controllerProps?.record?.image.fullPath} />
              </WrapperField>
            )}
            <ArrayField source="backlinks">
              <Datagrid bulkActionButtons={false}>
                <DateField source="date" />
                <UrlField source="url" />
              </Datagrid>
            </ArrayField>
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="post.form.body">
            <RichTextField source="body" stripTags={false} label={false} />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="post.form.miscellaneous">
            <DateField source="published_at" />
            <ReferenceField source="category_id" reference="categories" label="Category">
              <TextField source="name" />
            </ReferenceField>
            {controllerProps?.record?.extra_info && <></>}
            <TextField source="views" />
            <CloneButton />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </ShowView>
    </ShowContextProvider>
  );
}

export default PostShow;
