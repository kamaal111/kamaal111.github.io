import React from 'react';

import { contactEmail } from '../../config';

function ContactMe({ from }: ContactMeProps) {
  return (
    <>
      <h2>Contact Me</h2>
      <p>
        {`If you have any questions or suggestions about my ${from}, do
          not hesitate to contact me at `}
        <a href={`mailto:${contactEmail}?Subject=Hello`} target="_top">
          {`${contactEmail}.`}
        </a>
      </p>
    </>
  );
}

type ContactMeProps = {
  from: string;
};

export default ContactMe;
