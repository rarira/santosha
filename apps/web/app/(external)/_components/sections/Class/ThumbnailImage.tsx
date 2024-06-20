import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio';
import { cn } from '@ui/lib/utils';
import Image from 'next/image';

import { createSignedUrl, splitBucketFullPath } from '@/libs/supabase';

interface ThumbnailImageprops {
  imageFullPath: any;
  alt: string;
  className?: string;
}

async function ThumbnailImage({
  imageFullPath,
  alt,
  className,
}: ThumbnailImageprops): Promise<React.JSX.Element | null> {
  const { bucket, path } = splitBucketFullPath(imageFullPath);

  const { signedUrl } = await createSignedUrl({
    bucket,
    filePath: path,
    options: { transform: { width: 300 } },
  });

  return (
    <AspectRatio ratio={1 / 1} className="w-full">
      <Image src={signedUrl} alt={alt} fill className={cn('object-cover', className)} />
    </AspectRatio>
  );
}

export default ThumbnailImage;
