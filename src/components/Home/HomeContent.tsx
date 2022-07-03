import * as React from 'react';
import Image from 'next/image';

import IconLink from '../IconLink';

import { fullName, currentRoles, socials } from '../../config';

import styles from '../../../styles/Home.module.scss';

const IMAGE_SIZE = 216;
const IMAGE_PATH = 'images/avatar.jpg';

function HomeContent() {
  return (
    <div className={styles.content}>
      <Image
        className={styles.avatar}
        src={IMAGE_PATH}
        alt={`Picture of ${fullName}`}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
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
