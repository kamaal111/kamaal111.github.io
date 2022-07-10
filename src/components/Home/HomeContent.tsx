import * as React from 'react';

import IconLink from '../IconLink';

import config from '../../config';
import useMediaQuery from '../../hooks/useMediaQuery';

const IMAGE_PATH = 'images/avatar.jpg';

function HomeContent() {
  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  const imageSize = showMobileLayout ? 150 : 216;

  return (
    <div className={'content'}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt, @next/next/no-img-element */}
      <img
        className={'avatar'}
        src={IMAGE_PATH}
        width={imageSize}
        height={imageSize}
        alt={`Picture of ${config.fullName}`}
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
