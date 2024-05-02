'use client';

import { createClient } from '@supabase/supabase-js';
import { supabaseDataProvider } from 'ra-supabase';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';

import Util from '../../../libs/util';

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE } = Util.ENV_VARS;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

const dataProvider = supabaseDataProvider({
  instanceUrl: SUPABASE_URL,
  apiKey: SUPABASE_SERVICE_ROLE,
  supabaseClient,
});

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="posts" list={ListGuesser} edit={EditGuesser} recordRepresentation="title" />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;
