import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { createSignedUrl, splitBucketFullPath } from '@/libs/supabase';

interface ClassThumbnailImageprops {
  imageFullPath: any;
  alt: string;
  className?: string;
}

function ClassThumbnailImage({
  imageFullPath,
  alt,
  className,
}: ClassThumbnailImageprops): React.JSX.Element | null {
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
    <AspectRatio ratio={1 / 1} className="w-full">
      <Image src={imageUrl} alt={alt} fill className={className} />
    </AspectRatio>
  );
}

export default ClassThumbnailImage;
