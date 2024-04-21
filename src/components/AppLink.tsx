import * as React from 'react';
import Link from 'next/link';

interface Props {
  link: string;
  isExternalLink: boolean;
  children: JSX.Element | JSX.Element[];
}

function AppLink({ isExternalLink, link, children }: Props): JSX.Element {
  if (isExternalLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <Link href={link}>{children}</Link>;
}

export default AppLink;
