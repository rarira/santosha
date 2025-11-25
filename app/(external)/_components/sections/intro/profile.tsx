import { AspectRatio } from '@ui/aspect-ratio';
import Image from 'next/image';

import LizzyImg from 'public/image/lizzy.jpg';

function IntroProfile(): React.JSX.Element {
  return (
    <div className="w-1/2 h-1/2 relative group">
      <AspectRatio ratio={1 / 1}>
        <div className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background transition-all duration-300 group-hover:ring-primary/40 group-hover:shadow-2xl">
          <Image
            src={LizzyImg}
            alt="Lizzy"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </AspectRatio>
    </div>
  );
}

export default IntroProfile;
