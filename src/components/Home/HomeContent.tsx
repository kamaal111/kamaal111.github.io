import * as React from 'react';
import Image from 'next/image';

import IconLink from '../IconLink';

import { fullName, currentRoles, socials } from '../../config';
import useMediaQuery from '../../hooks/useMediaQuery';

import styles from '../../../styles/Home.module.scss';

const IMAGE_PATH = 'images/avatar.jpg';

function HomeContent() {
  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  const imageSize = showMobileLayout ? 150 : 216;

  return (
    <div className={styles.content}>
      <Image
        className={styles.avatar}
        src={IMAGE_PATH}
        alt={`Picture of ${fullName}`}
        width={imageSize}
        height={imageSize}
        priority
      />
      <h1>{fullName}</h1>
      <h2>{currentRoles.join(' | ')}</h2>
      {socials.map(({ icon, id, url }) => {
        return <IconLink name={icon} url={url} key={id} />;
      })}
    </div>
  );
}

export default HomeContent;
