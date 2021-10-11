import React from 'react';

import Footer from '../../components/Footer';
import PrivacyAndTermsHeader from '../../components/PrivacyAndTerms/PrivacyAndTermsHeader';
import HomeMainContent from '../../components/PrivacyAndTerms/HomeMainContent';

function PrivacyAndTerms() {
  return (
    <>
      <div style={{ marginRight: 16, marginLeft: 16 }}>
        <PrivacyAndTermsHeader />
        <HomeMainContent />
      </div>
      <Footer />
    </>
  );
}

export default PrivacyAndTerms;
