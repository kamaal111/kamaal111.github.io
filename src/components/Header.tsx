import * as React from 'react';
import Link from 'next/link';
import classnames from '@kamaal111/classname';

import Icon from './Icon';

import config from '../config';
import useMediaQuery from '../hooks/useMediaQuery';

function Header() {
  const [dropDownMenuItemsAreVisible, setDropDownMenuItemsAreVisible] =
    React.useState(false);

  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  const toggleDropDownMenuItems = React.useCallback(() => {
    setDropDownMenuItemsAreVisible(!dropDownMenuItemsAreVisible);
  }, [dropDownMenuItemsAreVisible]);

  return (
    <div className="header">
      <div className="home-link">
        <Link href="/">{config.fullName}</Link>
      </div>
      <div className="menu-links">
        <Header.MenuItems
          showMobileLayout={showMobileLayout}
          dropDownMenuItemsAreVisible={dropDownMenuItemsAreVisible}
          onHamburgerClick={toggleDropDownMenuItems}
        />
      </div>
    </div>
  );
}

type MenuItemsProps = {
  showMobileLayout: boolean;
  dropDownMenuItemsAreVisible: boolean;
  onHamburgerClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

Header.MenuItems = function MenuItems({
  showMobileLayout,
  dropDownMenuItemsAreVisible,
  onHamburgerClick,
}: MenuItemsProps) {
  if (showMobileLayout) {
    return (
      <button type="button" onClick={onHamburgerClick}>
        <Icon
          name={classnames('fa', 'fa-bars', 'fa-fw', 'hamburger', {
            toggled: dropDownMenuItemsAreVisible,
          })}
        />
      </button>
    );
  }

  return (
    <>
      {config.menuItems.map(({ id, name, link }) => {
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
