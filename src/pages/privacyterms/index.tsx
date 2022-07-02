import React from 'react';

import Page from '../../components/Page';
import PrivacyPolicy from '../../components/PrivacyAndTerms/PrivacyPolicy';
import TermsAndConditions from '../../components/PrivacyAndTerms/TermsAndConditions';

function PrivacyAndTerms() {
  return (
    <Page>
      <PrivacyPolicy />
      <TermsAndConditions />
    </Page>
  );
}

export default PrivacyAndTerms;
