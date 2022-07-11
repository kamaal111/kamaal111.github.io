import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Page from './Page';

import routing from '../../../.kamaal/routing.json';
import type { ContentConfiguration } from '../../types';
import getMarkdown from '../../utils/getMarkdown';

type Props = {
  category: keyof typeof routing;
  contentKey: string;
};

function Content({ category, contentKey }: Props) {
  const [markdownContent, setMarkdownContent] = React.useState('');

  const configuration = (routing[category] as ContentConfiguration[]).find(
    (value) => value.query === contentKey,
  );
  const configurationNotFound = configuration == null;

  React.useEffect(() => {
    if (!configurationNotFound) {
      getMarkdown(configuration.routesPath!).then((maybeMarkdown) => {
        if (maybeMarkdown == null) return;
        setMarkdownContent(maybeMarkdown);
      });
    }
  }, [configurationNotFound]);

  if (configurationNotFound) {
    return (
      <Page title={'Not Found 🥲'}>
        <div />
      </Page>
    );
  }

  return (
    <Page title={configuration?.title}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </Page>
  );
}

export default Content;
