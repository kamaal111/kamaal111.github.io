import * as React from 'react';
import classnames from 'classnames'

function Divider({ className }: { className?: string }) {
  const combinedClassName = classnames('divider', className ?? '');
  return <div className={combinedClassName} />;
}

export default Divider;
