'use client';

import { LoginPage } from 'ra-supabase';
import { Admin, Resource } from 'react-admin';

import { i18nProvider } from '@/i18n/admin';
import { authProvider } from '@/libs/supabase/authProvider';
import { dataProvider } from '@/libs/supabase/dataProvider';

import categories from '../categories';
import contacts from '../contacts';
import posts from '../posts';
import users from '../users';

const AdminApp: React.FC = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
    darkTheme={null}
  >
    <Resource name="users" {...users} />
    <Resource name="posts" {...posts} />
    <Resource name="categories" {...categories} />
    <Resource name="contacts" {...contacts} />
  </Admin>
);

export default AdminApp;
