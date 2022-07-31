import * as React from 'react';
import classNames from '@kamaal111/classname';

import Icon from './Icon';

type Props = {
  children: React.ReactElement;
};

type ChildrenElements = (string | { props?: { children?: string } })[];

function CopyableCode({ children }: Props) {
  async function onClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();

    const childrenElements: ChildrenElements | undefined =
      children.props?.children?.props?.children;
    if (childrenElements == null) {
      return;
    }

    const textChildren = childrenElements
      .map((child) => {
        if (typeof child === 'string') {
          return child;
        }

        return child?.props?.children ?? '';
      })
      .join('');

    await navigator.clipboard.writeText(textChildren);
  }

  return (
    <div className="copyable-code">
      <button type="button" className="copy-button" onClick={onClick}>
        <Icon name={classNames('fa', 'fa-2x', 'fa-clipboard', 'copy-icon')} />
      </button>
      {children}
    </div>
  );
}

export default CopyableCode;
