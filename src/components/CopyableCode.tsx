import * as React from 'react';
import classnames from 'classnames';

import Icon from './Icon';

interface Props {
  children: React.ReactElement;
  enabled?: boolean;
}

type ChildrenElements = Array<string | { props?: { children?: string } }>;

function CopyableCode({ children, enabled = true }: Props): JSX.Element {
  if (!enabled) return children;

  return (
    <div className="copyable-code">
      <button
        type="button"
        aria-label="Copy button"
        className="copy-button"
        onClick={(event) => {
          void (async () => {
            event.preventDefault();

            await onClick(children);
          });
        }}
      >
        <Icon name={classnames('fa', 'fa-2x', 'fa-clipboard', 'copy-icon')} />
      </button>
      {children}
    </div>
  );
}

async function onClick(children: React.ReactElement): Promise<void> {
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
