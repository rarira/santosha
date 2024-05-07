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
import { useState } from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  BooleanInput,
  CheckboxGroupInput,
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
  NumberInput,
  ReferenceInput,
  ReferenceManyCount,
  ReferenceManyField,
  SelectInput,
  ShowButton,
  SimpleFormIterator,
  TabbedForm,
  TextField,
  TextInput,
  TopToolbar,
  minValue,
  number,
  required,
  useCreateSuggestionContext,
  usePermissions,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import PostTitle from './PostTitle';
import TagReferenceInput from './TagReferenceInput';

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

export default function PostEdit() {
  const { permissions } = usePermissions();
  return (
    <Edit title={<PostTitle />} actions={<EditActions />}>
      <TabbedForm defaultValues={{ average_note: 0 }} warnWhenUnsavedChanges>
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
          <CheckboxGroupInput
            source="notifications"
            fullWidth
            choices={[
              { id: 12, name: 'Ray Hakt' },
              { id: 31, name: 'Ann Gullar' },
              { id: 42, name: 'Sean Phonee' },
            ]}
          />
          <ImageInput multiple source="pictures" accept="image/*" helperText="">
            <ImageField source="src" title="title" />
          </ImageInput>
          {permissions === 'admin' && (
            <ArrayInput source="authors">
              <SimpleFormIterator inline>
                <ReferenceInput source="user_id" reference="users">
                  <AutocompleteInput helperText={false} />
                </ReferenceInput>
                <FormDataConsumer>
                  {({ scopedFormData, getSource, ...rest }) =>
                    scopedFormData && scopedFormData.user_id ? (
                      <SelectInput
                        source={getSource('role')}
                        choices={[
                          {
                            id: 'headwriter',
                            name: 'Head Writer',
                          },
                          {
                            id: 'proofreader',
                            name: 'Proof reader',
                          },
                          {
                            id: 'cowriter',
                            name: 'Co-Writer',
                          },
                        ]}
                        helperText={false}
                        {...rest}
                      />
                    ) : null
                  }
                </FormDataConsumer>
              </SimpleFormIterator>
            </ArrayInput>
          )}
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.body">
          <RichTextInput source="body" label={false} validate={required()} fullWidth />
        </TabbedForm.Tab>
        <TabbedForm.Tab label="post.form.miscellaneous">
          <TagReferenceInput reference="tags" source="tags" label="Tags" />
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
          <NumberInput source="average_note" validate={[required(), number(), minValue(0)]} />
          <BooleanInput source="commentable" defaultValue />
          <TextInput InputProps={{ disabled: true }} source="views" />
          <ArrayInput source="pictures">
            <SimpleFormIterator>
              <TextInput source="url" defaultValue="" />
              <ArrayInput source="metas.authors">
                <SimpleFormIterator>
                  <TextInput source="name" defaultValue="" />
                </SimpleFormIterator>
              </ArrayInput>
            </SimpleFormIterator>
          </ArrayInput>
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
