import { supabaseAuthProvider } from 'ra-supabase';

import { supabaseClient } from '.';

export const authProvider = supabaseAuthProvider(supabaseClient, {
  getPermissions: async () => {
    return Promise.resolve();
  },
});
