import * as React from 'react';

type Props = {
  name: string;
};

function Icon({ name }: Props) {
  return (
    <div>
      <i className={`fa fa-2x fa-${name}`} />
    </div>
  );
}

export default Icon;
