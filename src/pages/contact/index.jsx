import React from 'react';
import Head from 'next/head';

import ContactMe from '../../components/PrivacyAndTerms/ContactMe';
import Footer from '../../components/Footer';

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
    </>
  );
}

export default Contact;
