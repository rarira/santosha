import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { createSignedUrl, splitBucketFullPath } from '@/libs/supabase';

interface ClassThumbnailImageprops {
  imageFullPath: any;
  alt: string;
  className?: string;
}

async function ClassThumbnailImage({
  imageFullPath,
  alt,
  className,
}: ClassThumbnailImageprops): Promise<React.JSX.Element> {
  const { bucket, path } = splitBucketFullPath(imageFullPath);

  const { signedUrl } = await createSignedUrl({
    bucket,
    filePath: path,
    options: { transform: { width: 300 } },
  });

  return (
    <AspectRatio ratio={1 / 1} className="w-full">
      <Image src={signedUrl} alt={alt} fill className={className} />
    </AspectRatio>
  );
}

export default ClassThumbnailImage;
