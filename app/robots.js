export default function robots() {
  const siteUrl = 'https://rishabh15aayaninfotech.github.io/rishabh_portfolio';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
