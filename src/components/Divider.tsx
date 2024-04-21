import * as React from 'react';
import classnames from 'classnames';

function Divider({ className }: { className?: string }): JSX.Element {
  const combinedClassName = classnames('divider', className ?? '');
  return <div className={combinedClassName} />;
}

export default Divider;
