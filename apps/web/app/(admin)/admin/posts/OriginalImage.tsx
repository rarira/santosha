/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Labeled } from 'react-admin';

import { createSignedUrl, splitBucketFullPath } from '@/libs/supabase';

function OriginalImage({ imageFullPath }: { imageFullPath?: string }): JSX.Element | null {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!imageFullPath) return;

    (async () => {
      const { bucket, path } = splitBucketFullPath(imageFullPath);

      const { signedUrl } = await createSignedUrl({
        bucket,
        filePath: path,
        options: { transform: { width: 300 } },
      });

      if (signedUrl) setImageUrl(signedUrl);
    })();
  }, [imageFullPath]);

  if (!imageUrl) return null;

  return (
    <div style={{ width: 300, marginTop: 20 }}>
      <Labeled label="Original image">
        <img src={imageUrl} />
      </Labeled>
    </div>
  );
}

export default OriginalImage;
