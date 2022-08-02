import * as React from 'react';
import classNames from '@kamaal111/classname';

import Icon from './Icon';

type Props = {
  children: React.ReactElement;
  enabled?: boolean;
};

type ChildrenElements = (string | { props?: { children?: string } })[];

function CopyableCode({ children, enabled = true }: Props) {
  if (!enabled) return children;

  return (
    <div className="copyable-code">
      <button
        type="button"
        className="copy-button"
        onClick={async (event) => {
          event.preventDefault();

          await onClick(children);
        }}
      >
        <Icon name={classNames('fa', 'fa-2x', 'fa-clipboard', 'copy-icon')} />
      </button>
      {children}
    </div>
  );
}

async function onClick(children: React.ReactElement) {
  const childrenElements: ChildrenElements | string | undefined =
    children.props?.children?.props?.children;

  if (childrenElements == null) {
    return;
  }

  let textChildren: string;
  if (typeof childrenElements === 'string') {
    textChildren = childrenElements;
  } else {
    textChildren = childrenElements
      .map((child) => {
        if (typeof child === 'string') {
          return child;
        }

        return child?.props?.children ?? '';
      })
      .join('');
  }

  await navigator.clipboard.writeText(textChildren);
}

export default CopyableCode;
