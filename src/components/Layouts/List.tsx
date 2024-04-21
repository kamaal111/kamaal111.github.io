import * as React from 'react';
import classnames from 'classnames';

import Page from './Page';
import AppLink from '../AppLink';

import routing from '../../../.kamaal/routing.json';
import type { ContentConfiguration } from '../../types';

type Configuration = {
  hideDate?: boolean;
  bulleted?: boolean;
};

type Props = {
  title: string;
  contentKey: keyof typeof routing;
  configuration?: Configuration;
};

function List({ title, contentKey, configuration }: Props) {
  const sortedContent = (routing[contentKey] as ContentConfiguration[])
    .filter(({ routesPath, externalLink, draft }) => {
      if (process.env.NODE_ENV !== 'development' && draft) {
        return false;
      }
      return routesPath != null || externalLink != null;
    })
    .map((content) => ({
      ...content,
      hasExternalLink: content.externalLink != null,
      date: new Date(content.date),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Page title={title}>
      <ul>
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
                configuration={configuration}
              />
            );
          },
        )}
      </ul>
    </Page>
  );
}

type ItemProps = {
  date: Date;
  link: string;
  title: string;
  isExternalLink: boolean;
  configuration?: Configuration;
};

List.Item = function Item({
  date,
  link,
  title,
  isExternalLink,
  configuration,
}: ItemProps) {
  return (
    <li
      className={classnames('list-item', {
        bulleted: configuration?.bulleted ?? false,
      })}
    >
      {!(configuration?.hideDate ?? false) ? (
        <span className="date">
          {date.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      ) : null}
      <div className="colored-links">
        <AppLink isExternalLink={isExternalLink} link={link}>
          <h2>{title}</h2>
        </AppLink>
      </div>
    </li>
  );
};

export default List;
