'use client';

import { RichTextInput } from 'ra-input-rich-text';
import { useMemo } from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  Create,
  DateInput,
  FormDataConsumer,
  FormDataConsumerRenderParams,
  ImageField,
  ImageInput,
  ReferenceInput,
  SaveButton,
  SimpleFormConfigurable,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  required,
  useNotify,
  useRedirect,
} from 'react-admin';
import { useFormContext } from 'react-hook-form';

import ExtraInfoInput from './_components/extraInfo/extra-info-input';

function PostCreateToolbar() {
  const notify = useNotify();
  const redirect = useRedirect();
  const { reset } = useFormContext();

  return (
    <Toolbar>
      <SaveButton label="post.action.save_and_edit" variant="text" />
      <SaveButton
        label="post.action.save_and_show"
        type="button"
        variant="text"
        mutationOptions={{
          onSuccess: data => {
            notify('ra.notification.created', {
              type: 'info',
              messageArgs: { smart_count: 1 },
            });
            redirect('show', 'posts', data.id);
          },
        }}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      />
      <SaveButton
        label="post.action.save_and_add"
        type="button"
        variant="text"
        mutationOptions={{
          onSuccess: () => {
            reset();
            window.scrollTo(0, 0);
            notify('ra.notification.created', {
              type: 'info',
              messageArgs: { smart_count: 1 },
            });
          },
        }}
      />
      <SaveButton
        label="post.action.save_with_average_note"
        type="button"
        variant="text"
        mutationOptions={{
          onSuccess: data => {
            notify('ra.notification.created', {
              type: 'info',
              messageArgs: { smart_count: 1 },
            });
            redirect('show', 'posts', data.id);
          },
        }}
        transform={data => ({ ...data, average_note: 10 })}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      />
    </Toolbar>
  );
}

const backlinksDefaultValue = [
  {
    date: new Date(),
    url: 'http://google.com',
  },
];

export default function PostCreate(): React.JSX.Element {
  const dateDefaultValue = useMemo(() => new Date(), []);

  return (
    <Create redirect="edit">
      <SimpleFormConfigurable toolbar={<PostCreateToolbar />}>
        <TextInput autoFocus source="title" validate={required('Required field')} />
        <TextInput source="teaser" fullWidth multiline validate={required('Required field')} />
        <ImageInput source="picture" label="Image" accept={{ 'image/*': [] }} helperText="">
          <ImageField source="src" title="title" />
        </ImageInput>
        <RichTextInput source="body" fullWidth validate={required()} />

        <DateInput source="published_at" defaultValue={dateDefaultValue} />
        <ArrayInput source="backlinks" defaultValue={backlinksDefaultValue} validate={[required()]}>
          <SimpleFormIterator>
            <DateInput source="date" defaultValue="" />
            <TextInput source="url" defaultValue="" />
          </SimpleFormIterator>
        </ArrayInput>
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
      </SimpleFormConfigurable>
    </Create>
  );
}
