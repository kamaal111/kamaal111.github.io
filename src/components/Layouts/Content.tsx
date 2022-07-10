import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Page from './Page';

import routing from '../../../.kamaal/routing.json';
import type { ContentConfiguration } from '../../types';

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
      readFile(configuration.routesPath!, setMarkdownContent);
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

async function readFile(path: string, setValue: (text: string) => void) {
  try {
    const content = await fetch(`../../content${path}.md`);
    const text = await content.text();
    setValue(text);
  } catch (error) {
    // gracefully die
  }
}

export default Content;
