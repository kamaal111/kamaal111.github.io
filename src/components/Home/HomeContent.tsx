import * as React from 'react';
import Image from 'next/image';

// import { work } from '../../appContent';
import avatar from '../../../public/images/avatar.jpg';

import styles from '../../../styles/Home.module.scss';

function HomeContent() {
  const imageSize = 216;

  return (
    <div className={styles.content}>
      <Image
        className={styles.avatar}
        src={avatar}
        alt="Picture of the author"
        width={imageSize}
        height={imageSize}
        priority
      />
      {/* {work.map(({ title, link }) => {
        return (
          <div className="work-link" key={title}>
            <a href={link}>
              <b>{title}</b>
            </a>
          </div>
        );
      })} */}
    </div>
  );
}

export default HomeContent;
