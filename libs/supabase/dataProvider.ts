import { supabaseDataProvider } from 'ra-supabase';
import { withLifecycleCallbacks } from 'react-admin';
import { v4 as uuidv4 } from 'uuid';

import { SUPABASE_ANON_KEY, SUPABASE_URL, splitBucketFullPath, supabaseClient } from '.';

export const dataProvider = withLifecycleCallbacks(
  supabaseDataProvider({
    instanceUrl: SUPABASE_URL,
    apiKey: SUPABASE_ANON_KEY,
    supabaseClient,
  }),
  [
    {
      resource: 'posts',
      beforeSave: async (data: any, _dataProvider: any): Promise<any> => {
        if (!data) return;

        const { picture, category_id, ...rest } = data;

        if (category_id) {
          const { data: categoryData } = await _dataProvider.getOne('categories', {
            id: category_id,
          });

          if (!categoryData?.extra_info) {
            rest.extra_info = null;
          }
        }

        if (!picture) {
          return { category_id, ...rest };
        }

        const filename = `posts/${rest.author_id}-${uuidv4()}`;

        const { data: uploadedData, error } = await supabaseClient.storage
          .from('images')
          .upload(filename, picture.rawFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          console.log({ error });
        } else {
          const { image, ...oldData } = rest;
          const { path, ...restUplodedData } = uploadedData;

          if (image) {
            const { bucket, path: oldpath } = splitBucketFullPath(image.fullPath);
            const { error: removeError } = await supabaseClient.storage
              .from(bucket)
              .remove([oldpath]);
            if (removeError) {
              console.log({ removeError });
            }
          }

          return { ...oldData, category_id, image: restUplodedData };
        }
      },
    },
  ],
);
