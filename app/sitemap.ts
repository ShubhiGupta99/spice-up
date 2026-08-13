export default function sitemap() {
  const base = 'https://www.thedabbastory.in';
  const routes = ['', '/pricing', '/menu', '/faq', '/contact'];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
