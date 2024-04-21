import React from 'react';

import Page from '../../components/Layouts/Page';
import PrivacyPolicy from '../../components/PrivacyAndTerms/PrivacyPolicy';
import TermsAndConditions from '../../components/PrivacyAndTerms/TermsAndConditions';

function PrivacyAndTerms(): JSX.Element {
  return (
    <Page>
      <PrivacyPolicy />
      <TermsAndConditions />
    </Page>
  );
}

export default PrivacyAndTerms;
