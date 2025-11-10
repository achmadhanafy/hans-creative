/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hanstudio.vercel.app', // ✅ your live site URL
  generateRobotsTxt: true,                 // ✅ also generate robots.txt
  sitemapSize: 7000,                       // for large sites
  changefreq: 'weekly',                    // how often pages may change
  priority: 0.7,                           // default importance
  exclude: ['/404'],                       // optional: exclude pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}
