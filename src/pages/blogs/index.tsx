import * as React from 'react';
import { useRouter } from 'next/router';

import List from '../../components/Layouts/List';
import Content from '../../components/Layouts/Content';
import Page from '../../components/Layouts/Page';

import type routing from '../../../.kamaal/routing.json';

function Blogs() {
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const pathComponents = router.asPath
    .split('/')
    .filter((value) => value !== '');

  if (loading) {
    return (
      <Page title={'Loading....'}>
        <div />
      </Page>
    );
  }

  if (pathComponents.length > 1) {
    return (
      <Content
        category={pathComponents[0] as keyof typeof routing}
        contentKey={pathComponents[1]}
      />
    );
  }

  return <List title="Blogs" contentKey="blogs" />;
}

export default Blogs;
