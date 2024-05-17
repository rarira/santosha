'use client';

import { LoginPage } from 'ra-supabase';
import { Admin, Resource } from 'react-admin';

import { i18nProvider } from '@/i18n/admin';
import { authProvider } from '@/libs/supabase/authProvider';
import { dataProvider } from '@/libs/supabase/dataProvider';

import categories from '../categories';
import posts from '../posts';
import users from '../users';

const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
  >
    <Resource name="users" {...users} />
    <Resource name="posts" {...posts} />
    <Resource name="categories" {...categories} />
  </Admin>
);

export default AdminApp;
