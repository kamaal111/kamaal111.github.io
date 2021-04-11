import React from 'react';

import Footer from '../../components/Footer';
import PrivacyAndTermsHeader from '../../components/PrivacyAndTerms/PrivacyAndTermsHeader';
import HomeMainContent from '../../components/PrivacyAndTerms/HomeMainContent';
import Styles from '../../components/Styles';

function PrivacyAndTerms() {
  return (
    <>
      <PrivacyAndTermsHeader />
      <HomeMainContent />
      <Footer />
      <Styles />
    </>
  );
}

export default PrivacyAndTerms;
