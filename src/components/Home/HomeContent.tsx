import * as React from 'react';

import IconLink from '../IconLink';

import config from '../../config';

const IMAGE_PATH = 'images/avatar.jpg';

function HomeContent() {
  return (
    <div className={'home-content'}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={'avatar'}
        src={IMAGE_PATH}
        alt={`Picture of ${config.fullName}`}
      />
      <div className="home-info">
        <h1>{config.fullName}</h1>
        <h2>{config.currentRoles.join(' | ')}</h2>
        {config.socials.map(({ icon, id, url }) => {
          return <IconLink name={icon} url={url} key={id} />;
        })}
      </div>
    </div>
  );
}

export default HomeContent;
