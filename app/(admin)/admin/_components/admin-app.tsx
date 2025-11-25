'use client';

import { LoginPage } from 'ra-supabase';
import { Admin, Resource } from 'react-admin';

import { i18nProvider } from '@/i18n/admin';
import { authProvider } from '@/libs/supabase/authProvider';
import { dataProvider } from '@/libs/supabase/dataProvider';

import categories from '../categories';
import centers from '../centers';
import contacts from '../contacts';
import posts from '../posts';
import schedules from '../schedules';

const AdminApp: React.FC = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={LoginPage}
    i18nProvider={i18nProvider}
    darkTheme={null}
  >
    <Resource name="posts" {...posts} />
    <Resource name="categories" {...categories} />
    <Resource name="contacts" {...contacts} />
    <Resource name="centers" {...centers} />
    <Resource name="schedules" {...schedules} />
  </Admin>
);

export default AdminApp;
