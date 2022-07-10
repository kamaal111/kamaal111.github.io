import * as React from 'react';

import ContactMe from '../ContactMe';

import { privacy } from '../../appContent';

function PrivacyPolicy() {
  return (
    <>
      <h2>{privacy.title}</h2>
      {privacy.description.map((paragraph) => (
        <p key={paragraph.slice(0, 10)}>{paragraph}</p>
      ))}
      {privacy.content.map(({ header, content }) => (
        <React.Fragment key={header}>
          <h3>{header}</h3>
          {content.map((paragraph) => (
            <p key={`${header}${paragraph.slice(0, 10)}`}>{paragraph}</p>
          ))}
        </React.Fragment>
      ))}
      <ContactMe from={privacy.title} />
    </>
  );
}

export default PrivacyPolicy;
