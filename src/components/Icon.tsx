import * as React from 'react';

type Props = {
  name: string;
};

function Icon({ name }: Props) {
  return <i className={`fa fa-2x fa-${name}`} />;
}

export default Icon;
