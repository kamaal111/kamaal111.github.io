import * as React from 'react';

import Icon from './Icon';

type Props = {
  name: string;
  url: string;
};

function IconLink({ name, url }: Props) {
  return (
    <a
      className="icon-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={name} />
    </a>
  );
}

export default IconLink;
