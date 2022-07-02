import * as React from 'react';

type Props = {
  headerText?: string;
};

function Header({ headerText }: Props) {
  return (
    <div className="header">
      <h1>Kamaal Farah</h1>
      {headerText != null ? <h2>{headerText}</h2> : null}
    </div>
  );
}

export default Header;
