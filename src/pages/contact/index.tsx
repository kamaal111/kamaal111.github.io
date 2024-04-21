import * as React from 'react';

import Page from '../../components/Layouts/Page';
import ContactMe from '../../components/ContactMe';

function Contact(): JSX.Element {
  return (
    <Page>
      <ContactMe from="app" />
    </Page>
  );
}

export default Contact;
