import * as React from 'react';

import List from '../../components/Layouts/List';

function CheatSheet() {
  return (
    <List
      title="Cheat Sheet"
      contentKey="cheat-sheet"
      configuration={{ hideDate: true, bulleted: true }}
    />
  );
}

export default CheatSheet;
