import * as React from 'react';

type Props = {
  name: string;
};

function Icon({ name }: Props) {
  return <i className={name} />;
}

export default Icon;
