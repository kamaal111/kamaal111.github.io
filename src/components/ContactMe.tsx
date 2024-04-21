import React from 'react';

import config from '../config';

interface ContactMeProps {
  from: string;
}

function ContactMe({ from }: ContactMeProps): JSX.Element {
  return (
    <>
      <h2>Contact Me</h2>
      <p>
        {`If you have any questions or suggestions about my ${from}, do
          not hesitate to contact me at `}
        <a
          className="colored-link"
          href={`mailto:${config.contactEmail}?Subject=Hello`}
          target="_top"
        >
          {`${config.contactEmail}.`}
        </a>
      </p>
    </>
  );
}

export default ContactMe;
