import * as React from 'react';
import Image from 'next/image';

import Icon from '../Icon';

import { fullName, currentRoles } from '../../config';

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
      <Icon name={'apple'} />
    </div>
  );
}

export default HomeContent;
