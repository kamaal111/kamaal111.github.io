import * as React from 'react';
import Image from 'next/image';

import IconLink from '../IconLink';

import config from '../../config';
import useMediaQuery from '../../hooks/useMediaQuery';

const IMAGE_PATH = 'images/avatar.jpg';

function HomeContent() {
  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  const imageSize = showMobileLayout ? 150 : 216;

  return (
    <div className={'content'}>
      <Image
        className={'avatar'}
        src={IMAGE_PATH}
        alt={`Picture of ${config.fullName}`}
        width={imageSize}
        height={imageSize}
        priority
      />
      <h1>{config.fullName}</h1>
      <h2>{config.currentRoles.join(' | ')}</h2>
      {config.socials.map(({ icon, id, url }) => {
        return <IconLink name={icon} url={url} key={id} />;
      })}
    </div>
  );
}

export default HomeContent;
