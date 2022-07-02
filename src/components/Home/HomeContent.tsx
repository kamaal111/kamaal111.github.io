import React from 'react';
import { work } from '../../appContent';

function HomeContent() {
  return (
    <div className="home-content">
      <i>{"I'm just using this domain as my playground"}</i>
      {work.map(({ title, link }) => {
        return (
          <div className="work-link" key={title}>
            <a href={link}>
              <b>{title}</b>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default HomeContent;
