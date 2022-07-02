import * as React from 'react';

import Link from 'next/link';

import { fullName } from '../config';

type Props = {
  headerText?: string;
};

function Header({ headerText }: Props) {
  return (
    <div className="header">
      <div className="home-link">
        <Link href="/">{fullName}</Link>
      </div>
      {headerText != null ? <h2>{headerText}</h2> : null}
    </div>
  );
}

export default Header;
