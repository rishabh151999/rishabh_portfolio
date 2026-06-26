export default function sitemap() {
  const siteUrl = 'https://rishabh15aayaninfotech.github.io/rishabh_portfolio';
  const lastModified = new Date('2026-06-26');

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
