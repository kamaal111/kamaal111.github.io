import * as React from 'react';

import Page from './Page';
import AppLink from '../AppLink';

import routing from '../../../.kamaal/routing.json';
import type { ContentConfiguration } from '../../types';

type Props = {
  title: string;
  contentKey: keyof typeof routing;
};

function List({ title, contentKey }: Props) {
  const sortedContent = (routing[contentKey] as ContentConfiguration[])
    .filter(
      (content) => content.routesPath != null || content.externalLink != null,
    )
    .map((content) => ({
      ...content,
      hasExternalLink: content.externalLink != null,
      date: new Date(content.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Page title={title}>
      {sortedContent.map(
        ({
          routesPath,
          externalLink,
          title: contentTitle,
          date,
          hasExternalLink,
        }) => {
          const link = routesPath ?? externalLink!;

          return (
            <List.Item
              key={link}
              link={link}
              title={contentTitle}
              date={date}
              isExternalLink={hasExternalLink}
            />
          );
        },
      )}
    </Page>
  );
}

type ItemProps = {
  date: Date;
  link: string;
  title: string;
  isExternalLink: boolean;
};

List.Item = function Item({ date, link, title, isExternalLink }: ItemProps) {
  return (
    <div className="list-item">
      <span className="date">
        {date.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </span>
      <div className="colored-links">
        <AppLink isExternalLink={isExternalLink} link={link}>
          <h2>{title}</h2>
        </AppLink>
      </div>
    </div>
  );
};

export default List;
