import * as React from 'react';
import Link from 'next/link';

import Icon from './Icon';

import { fullName, menuItems } from '../config';
import useMediaQuery from '../hooks/useMediaQuery';

function Header() {
  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  return (
    <div className="header">
      <div className="home-link">
        <Link href="/">{fullName}</Link>
      </div>
      <div className="menu-links">
        <Header.MenuItems showMobileLayout={showMobileLayout} />
      </div>
    </div>
  );
}

type MenuItemsProps = {
  showMobileLayout: boolean;
};

Header.MenuItems = function MenuItems({ showMobileLayout }: MenuItemsProps) {
  if (showMobileLayout) {
    return (
      <button type="button" onClick={(event) => console.log('hallo')}>
        <Icon name="fa fa-bars fa-fw hamburger" />
      </button>
    );
  }
  return (
    <>
      {menuItems.map(({ id, name, link }) => {
        return (
          <Link href={link} key={id}>
            {name}
          </Link>
        );
      })}
    </>
  );
};

export default Header;
