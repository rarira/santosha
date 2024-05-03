import { createClient } from '@supabase/supabase-js';

import Util from '@/libs/util';

export const { SUPABASE_URL, SUPABASE_ANON_KEY } = Util.getEnv();
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
