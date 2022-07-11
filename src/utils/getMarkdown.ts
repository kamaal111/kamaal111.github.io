async function getMarkdown(path: string) {
  let content: Awaited<Response>;
  try {
    content = await fetch(`../../content${path}.md`);
  } catch (error) {
    return null;
  }

  let text: Awaited<string>;
  try {
    text = await content.text();
  } catch (error) {
    return null;
  }

  const lines = text.split('\n');
  const configurationStart = lines.findIndex((line) => line === '---');
  if (configurationStart === -1) return null;

  const configurationEnd = lines.findIndex(
    (line, index) => line === '---' && index !== configurationStart,
  );
  if (configurationEnd === -1) return null;

  return lines.slice(configurationEnd + 1).join('\n');
}

export default getMarkdown;
