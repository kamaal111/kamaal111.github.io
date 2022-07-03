import * as React from 'react';
import Image from 'next/image';

import { fullName, currentRoles } from '../../config';

import styles from '../../../styles/Home.module.scss';

function HomeContent() {
  const imageSize = 216;

  return (
    <div className={styles.content}>
      <Image
        className={styles.avatar}
        src={'images/avatar.jpg'}
        alt={`Picture of ${fullName}`}
        width={imageSize}
        height={imageSize}
        priority
      />
      <h1>{fullName}</h1>
      <h2>{currentRoles.join(' | ')}</h2>
    </div>
  );
}

export default HomeContent;
