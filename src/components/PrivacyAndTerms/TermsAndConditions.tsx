import React, { Fragment } from 'react';

import { termsAndCondition } from '../../appContent';
import ContactMe from '../ContactMe';

import config from '../../config';

function TermsAndConditions(): JSX.Element {
  return (
    <>
      <h2>{termsAndCondition.title}</h2>
      <h3>{`Last updated: ${config.lastUpdatedTermsAndConditions}`}</h3>
      {termsAndCondition.description.map((description) => (
        <p key={description.slice(0, 10)}>{description}</p>
      ))}
      {termsAndCondition.content.map(({ header, content }) => (
        <Fragment key={header}>
          <h3>{header}</h3>
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
