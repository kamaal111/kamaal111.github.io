import * as React from 'react';
import Link from 'next/link';
import classnames from '@kamaal111/classname';

import Icon from './Icon';
import Divider from './Divider';

import config from '../config';
import useMediaQuery from '../hooks/useMediaQuery';

import styles from '../../styles/components/Header.module.scss';

function Header() {
  const [dropDownMenuItemsAreVisible, setDropDownMenuItemsAreVisible] =
    React.useState(false);

  const showMobileLayout = useMediaQuery('(max-width: 770px)');

  const toggleDropDownMenuItems = React.useCallback(() => {
    setDropDownMenuItemsAreVisible(!dropDownMenuItemsAreVisible);
  }, [dropDownMenuItemsAreVisible]);

  return (
    <>
      <div className={styles.header}>
        <div className="home-link">
          <Link href="/">{config.fullName}</Link>
        </div>
        <div className={styles['menu-links']}>
          <Header.MenuItems
            showMobileLayout={showMobileLayout}
            dropDownMenuItemsAreVisible={dropDownMenuItemsAreVisible}
            onHamburgerClick={toggleDropDownMenuItems}
          />
        </div>
      </div>
      <Header.Dropdown
        isVisible={dropDownMenuItemsAreVisible && showMobileLayout}
      />
    </>
  );
}

type MenuItemsProps = {
  showMobileLayout: boolean;
  dropDownMenuItemsAreVisible: boolean;
  onHamburgerClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

Header.Dropdown = function Dropdown({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <>
      <Divider className="animated-appearing" />
      <ul className={classnames(styles.dropdown, 'animated-appearing')}>
        {config.menuItems.map(({ id, name, link }) => {
          return (
            <li key={id}>
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Divider className="animated-appearing" />
    </>
  );
};

Header.MenuItems = function MenuItems({
  showMobileLayout,
  dropDownMenuItemsAreVisible,
  onHamburgerClick,
}: MenuItemsProps) {
  if (showMobileLayout) {
    return (
      <button type="button" className="icon-link" onClick={onHamburgerClick}>
        <Icon
          name={classnames('fa', 'fa-bars', 'fa-fw', styles.hamburger, {
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
