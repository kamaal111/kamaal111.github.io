import * as React from 'react';
import Link from 'next/link';

import { fullName, menuItems } from '../config';

function Header() {
  return (
    <div className="header">
      <div className="home-link">
        <Link href="/">{fullName}</Link>
      </div>
      <div className="menu-links">
        {menuItems.map(({ id, name, link }) => {
          return (
            <Link href={link} key={id}>
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
