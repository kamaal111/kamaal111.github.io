import React, { Fragment } from 'react';

import { termsAndCondition } from '../../appContent';
import ContactMe from './ContactMe';

import { lastUpdated } from '../../config';

function TermsAndConditions() {
  return (
    <>
      <h1>{termsAndCondition.title}</h1>
      <h3>{`Last updated: ${lastUpdated}`}</h3>
      {termsAndCondition.description.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
      {termsAndCondition.content.map(({ header, content }) => (
        <Fragment key={header}>
          <h2>{header}</h2>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Fragment>
      ))}
      <ContactMe from={termsAndCondition.title} />
    </>
  );
}

export default TermsAndConditions;
