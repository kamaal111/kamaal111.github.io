import React from 'react';
import Head from 'next/head';

import ContactMe from '../../components/PrivacyAndTerms/ContactMe';
import Footer from '../../components/Footer';

function Contact() {
  return (
    <>
      <div style={{ marginLeft: 16, marginRight: 16 }}>
        <Head>
          <title>Contact</title>
        </Head>
        <main>
          <ContactMe from="app" />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
