import React, { Fragment } from 'react';

import { termsAndCondition } from '../../appContent';
import ContactMe from './ContactMe';

import { lastUpdatedTermsAndConditions } from '../../config';

function TermsAndConditions() {
  return (
    <>
      <h1>{termsAndCondition.title}</h1>
      <h3>{`Last updated: ${lastUpdatedTermsAndConditions}`}</h3>
      {termsAndCondition.description.map((description) => (
        <p key={description.slice(0, 10)}>{description}</p>
      ))}
      {termsAndCondition.content.map(({ header, content }) => (
        <Fragment key={header}>
          <h2>{header}</h2>
          {content.map((paragraph) => (
            <p key={`${header}${paragraph.slice(0, 10)}`}>{paragraph}</p>
          ))}
        </Fragment>
      ))}
      <ContactMe from={termsAndCondition.title} />
    </>
  );
}

export default TermsAndConditions;
