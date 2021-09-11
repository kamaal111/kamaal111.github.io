import React from 'react';
import { useRouter } from 'next/router';

function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black',
  };

  const handleClick = (
    event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event?.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default ActiveLink;
