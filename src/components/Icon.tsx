import * as React from 'react';

interface Props {
  name: string;
}

function Icon({ name }: Props): JSX.Element {
  return <i className={name} />;
}

export default Icon;
