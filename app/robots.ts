import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const baseUrl="https://avantula.live";
  return {
    rules: {
      userAgent: '*',
      allow: ["/", "/about", "/video-editing", "/graphics"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}