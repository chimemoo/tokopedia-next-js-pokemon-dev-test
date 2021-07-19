import Head from 'next/head';

export default function SEO({ title = 'Pokemon', desc = '' }) {
  return (
    <Head>
      <title data-testid="title-page">{title} - PokeDex</title>
      <meta name="Description" content={desc} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
