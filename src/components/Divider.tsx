import * as React from 'react';
import classNames from '@kamaal111/classname';

function Divider({ className }: { className?: string }) {
  const combinedClassName = classNames('divider', className ?? '');
  return <div className={combinedClassName} />;
}

export default Divider;
