import React, { Fragment } from 'react';

import ContactMe from './ContactMe';

import { privacy } from '../../appContent';

function PrivacyPolicy() {
  return (
    <>
      <h1>{privacy.title}</h1>
      {privacy.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {privacy.content.map(({ header, content }) => (
        <Fragment key={header}>
          <h2>{header}</h2>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Fragment>
      ))}
      <ContactMe from={privacy.title} />
    </>
  );
}

export default PrivacyPolicy;
