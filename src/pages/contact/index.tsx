import React from 'react';
import Head from 'next/head';

import ContactMe from '../../components/PrivacyAndTerms/ContactMe';
import Footer from '../../components/Footer';
import Styles from '../../components/Styles';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main>
        <ContactMe from="app" />
      </main>
      <Footer />
      <Styles />
    </>
  );
}

export default Contact;
