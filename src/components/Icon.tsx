import * as React from 'react';
import classNames from '@kamaal111/classname';

type Props = {
  name: string;
};

function Icon({ name }: Props) {
  return <i className={classNames(name, 'app-link')} />;
}

export default Icon;
