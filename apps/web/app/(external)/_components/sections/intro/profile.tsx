import { AspectRatio } from '@ui/components/ui/aspect-ratio';
import Image from 'next/image';

import LizzyImg from 'public/image/lizzy.jpg';

function IntroProfile(): React.JSX.Element {
  return (
    <div className="w-1/2 h-1/2">
      <AspectRatio ratio={1 / 1}>
        <Image src={LizzyImg} alt="Lizzy" fill className="rounded-full object-cover" />
      </AspectRatio>
    </div>
  );
}

export default IntroProfile;
