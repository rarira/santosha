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
  const { bucket, path } = splitBucketFullPath(imageFullPath);

  console.log("Generating signed URL for image:", { bucket, path });
  const { signedUrl } = await createSignedUrl({
    bucket,
    filePath: path,
    options: { transform: { width: 400, height: 300 } },
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
        style={{ objectFit: "contain" }}
        className={className}
      />
    </div>
  );
}

export default ClassThumbnailImage;
