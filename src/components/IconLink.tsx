import * as React from 'react';

import Icon from './Icon';

interface Props {
  name: string;
  url: string;
}

function IconLink({ name, url }: Props): JSX.Element {
  return (
    <a
      className="icon-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Icon link"
    >
      <Icon name={name} />
    </a>
  );
}

export default IconLink;
