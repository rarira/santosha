import Image from "next/image";

import { createSignedUrl, splitBucketFullPath } from "@/libs/supabase";

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
  // Handle missing or invalid imageFullPath
  if (!imageFullPath || typeof imageFullPath !== "string") {
    return (
      <div
        className="w-full bg-linear-to-br from-yoga-sand/50 to-yoga-cream/30"
        style={{ aspectRatio: "4 / 3" }}
      />
    );
  }

  const { bucket, path } = splitBucketFullPath(imageFullPath);

  const { signedUrl } = await createSignedUrl({
    bucket,
    filePath: path,
  });

  // If signedUrl is empty (error occurred), show a placeholder
  if (!signedUrl) {
    return (
      <div
        className="w-full bg-linear-to-br from-yoga-sand/50 to-yoga-cream/30"
        style={{ aspectRatio: "4 / 3" }}
      />
    );
  }

  return (
    <div
      className="w-full relative bg-muted overflow-hidden"
      style={{ aspectRatio: "4 / 3" }}
    >
      <Image
        src={signedUrl}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        className={className}
      />
    </div>
  );
}

export default ClassThumbnailImage;
