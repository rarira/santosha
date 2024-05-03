'use client';

import { LoginPage } from 'ra-supabase';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';

import { authProvider } from '@/libs/supabase/authProvider';
import { dataProvider } from '@/libs/supabase/dataProvider';

const AdminApp = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
    <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="posts" list={ListGuesser} edit={EditGuesser} recordRepresentation="title" />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
