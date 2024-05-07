import { supabaseDataProvider } from 'ra-supabase';
import { withLifecycleCallbacks } from 'react-admin';
import { v4 as uuidv4 } from 'uuid';

import { SUPABASE_ANON_KEY, SUPABASE_URL, supabaseClient } from '.';

export const dataProvider = withLifecycleCallbacks(
  supabaseDataProvider({
    instanceUrl: SUPABASE_URL,
    apiKey: SUPABASE_ANON_KEY,
    supabaseClient,
  }),
  [
    {
      resource: 'posts',
      beforeSave: async ({ picture, ...rests }: any, _dataProvider: any): Promise<any> => {
        if (!picture) return rests;

        const filename = `posts/${rests.author_id}-${uuidv4()}`;

        const { data: uploadedData, error } = await supabaseClient.storage
          .from('images')
          .upload(filename, picture.rawFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          console.log({ error });
        } else {
          const { path, ...restUplodedData } = uploadedData;

          return { ...rests, image: restUplodedData };
        }
      },
    },
  ],
);
