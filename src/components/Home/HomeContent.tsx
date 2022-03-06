import React from 'react';
import { work } from '../../appContent';

function HomeContent() {
  return (
    <>
      <i>{"I'm just using this domain as my playground"}</i>
      {work.map(({ title, link }) => {
        return (
          <div className="work-link" key={title}>
            <a href={link} target="_blank" rel="noreferrer">
              <b>{title}</b>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default HomeContent;
