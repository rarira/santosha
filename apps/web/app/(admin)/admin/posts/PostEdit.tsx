/* eslint-disable @next/next/no-img-element */

import { Box, BoxProps } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import {
  ArrayInput,
  AutocompleteInput,
  CloneButton,
  CreateButton,
  DateInput,
  Edit,
  EditActionsProps,
  FormDataConsumer,
  FormDataConsumerRenderParams,
  ImageField,
  ImageInput,
  ReferenceInput,
  required,
  ShowButton,
  SimpleFormIterator,
  TabbedForm,
  TextInput,
  TopToolbar,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import ExtraInfoInput from './extraInfo/ExtraInfoInput';
import OriginalImage from './OriginalImage';
import PostTitle from './PostTitle';

function EditActions({ hasShow }: EditActionsProps) {
  return (
    <TopToolbar>
      <CloneButton className="button-clone" />
      {hasShow && <ShowButton />}
      {/* FIXME: added because react-router HashHistory cannot block navigation induced by address bar changes */}
      <CreateButton />
    </TopToolbar>
  );
}

// eslint-disable-next-line no-unused-vars
function SanitizedBox({ fullWidth, ...props }: BoxProps & { fullWidth?: boolean }) {
  return <Box {...props} />;
}

export default function PostEdit(): React.JSX.Element {
  return (
    <Edit title={<PostTitle />} actions={<EditActions />}>
      <TabbedForm warnWhenUnsavedChanges>
        <TabbedForm.Tab label="post.form.summary">
          <SanitizedBox
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="space-between"
            fullWidth
          >
            <TextInput InputProps={{ disabled: true }} source="id" />
            <TextInput source="title" validate={required()} resettable />
          </SanitizedBox>
          <TextInput multiline fullWidth source="teaser" validate={required()} resettable />

          <ImageInput source="picture" accept="image/*" helperText="">
            <ImageField source="src" title="title" />
          </ImageInput>

          <FormDataConsumer>
            {({ formData }) => {
              if (!formData.picture) {
                return <OriginalImage imageFullPath={formData?.image.fullPath} />;
              }
            }}
          </FormDataConsumer>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.body">
          <RichTextInput source="body" label={false} validate={required()} fullWidth />
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.miscellaneous">
          <ArrayInput source="backlinks">
            <SimpleFormIterator>
              <DateInput source="date" />
              <TextInput source="url" validate={required()} />
            </SimpleFormIterator>
          </ArrayInput>
          <DateInput source="published_at" />
          <ReferenceInput source="category_id" reference="categories" allowEmpty>
            <AutocompleteInput label="Category" optionText="name" sx={{ width: 300 }} />
          </ReferenceInput>

          <FormDataConsumer>
            {({ formData, ..._rest }: FormDataConsumerRenderParams<Record<any, any>>) => {
              if (formData.category_id) {
                return <ExtraInfoInput categoryId={formData.category_id} />;
              }
            }}
          </FormDataConsumer>
          {/* <ClassScoreInput /> */}
          <TextInput InputProps={{ disabled: true }} source="views" />
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
}
