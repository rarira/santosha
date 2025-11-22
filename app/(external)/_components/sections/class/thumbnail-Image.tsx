import { AspectRatio } from '@ui/aspect-ratio';
import Image from 'next/image';

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

  // If signedUrl is empty (error occurred), show a placeholder
  if (!signedUrl) {
    return (
      <AspectRatio
        ratio={4 / 3}
        className="w-full bg-gradient-to-br from-yoga-sand/50 to-yoga-cream/30"
      />
    );
  }

  return (
    <AspectRatio ratio={4 / 3} className="w-full">
      <Image src={signedUrl} alt={alt} fill className={className} />
    </AspectRatio>
  );
}

export default ClassThumbnailImage;
