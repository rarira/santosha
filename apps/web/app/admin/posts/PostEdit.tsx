/* eslint-disable @next/next/no-img-element */
import {
  Box,
  BoxProps,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField as MuiTextField,
} from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import { useEffect, useState } from 'react';
import {
  ArrayInput,
  BooleanInput,
  CloneButton,
  CreateButton,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EditActionsProps,
  EditButton,
  FormDataConsumer,
  ImageField,
  ImageInput,
  Labeled,
  ReferenceManyCount,
  ReferenceManyField,
  SelectInput,
  ShowButton,
  SimpleFormIterator,
  TabbedForm,
  TextField,
  TextInput,
  TopToolbar,
  required,
  useCreateSuggestionContext,
  useEditContext,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import { createSignedUrl, splitBucketFullPath } from '@/libs/supabase';

import PostTitle from './PostTitle';

function CreateCategory({ onAddChoice }: { onAddChoice: (record: any) => void }) {
  const { filter, onCancel, onCreate } = useCreateSuggestionContext();
  const [value, setValue] = useState(filter || '');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const choice = { name: value, id: value.toLowerCase() };
    onAddChoice(choice);
    onCreate(choice);
    setValue('');
    return false;
  };
  return (
    <Dialog open onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <MuiTextField
            label="New Category"
            value={value}
            onChange={event => setValue(event.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

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

function SanitizedBox({ fullWidth, ...props }: BoxProps & { fullWidth?: boolean }) {
  return <Box {...props} />;
}

const categories = [
  { name: 'Tech', id: 'tech' },
  { name: 'Lifestyle', id: 'lifestyle' },
];

function OriginalImage({ formData, ...rest }: any) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { bucket, path } = splitBucketFullPath(formData.image.fullPath);

      const { signedUrl } = await createSignedUrl({
        bucket,
        filePath: path,
        options: { transform: { width: 300 } },
      });

      if (signedUrl) setImageUrl(signedUrl);
    })();
  }, [formData, formData?.image?.fullPath]);

  if (!imageUrl) return null;

  return (
    <div style={{ width: 300, marginTop: 20 }}>
      <Labeled label="Original image">
        <img src={imageUrl} {...rest} />
      </Labeled>
    </div>
  );
}

export default function PostEdit() {
  const { record, isLoading } = useEditContext();

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
            {({ formData, dispatch, ...rest }) => {
              if (!formData.picture) {
                return <OriginalImage formData={formData} {...rest} />;
              }
            }}
          </FormDataConsumer>
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.body">
          <RichTextInput source="body" label={false} validate={required()} fullWidth />
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.miscellaneous">
          {/* <TagReferenceInput reference="tags" source="tags" label="Tags" /> */}
          <ArrayInput source="backlinks">
            <SimpleFormIterator>
              <DateInput source="date" />
              <TextInput source="url" validate={required()} />
            </SimpleFormIterator>
          </ArrayInput>
          <DateInput source="published_at" />
          <SelectInput
            create={
              <CreateCategory
                // Added on the component because we have to update the choices
                // ourselves as we don't use a ReferenceInput
                onAddChoice={choice => categories.push(choice)}
              />
            }
            resettable
            source="category"
            choices={categories}
          />
          {/* <NumberInput source="average_note" validate={[required(), number(), minValue(0)]} /> */}
          <BooleanInput source="commentable" defaultValue />
          <TextInput InputProps={{ disabled: true }} source="views" />
        </TabbedForm.Tab>
        <TabbedForm.Tab
          label="post.form.comments"
          count={
            <ReferenceManyCount
              reference="comments"
              target="post_id"
              sx={{ lineHeight: 'inherit' }}
            />
          }
        >
          <ReferenceManyField reference="comments" target="post_id" fullWidth>
            <Datagrid>
              <DateField source="created_at" />
              <TextField source="author.name" />
              <TextField source="body" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </TabbedForm.Tab>
      </TabbedForm>
    </Edit>
  );
}
