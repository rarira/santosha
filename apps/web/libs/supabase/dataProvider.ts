import { supabaseDataProvider } from 'ra-supabase';

import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from '.';

export const dataProvider = supabaseDataProvider({
  instanceUrl: SUPABASE_URL,
  apiKey: SUPABASE_ANON_KEY,
  supabaseClient,
});
