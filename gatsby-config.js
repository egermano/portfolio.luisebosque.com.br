module.exports = {
  siteMetadata: {
    title: 'Luise Bosquê',
    description: 'Desenvolvendo produtos do início ao fim. Consultoria, criação modelagem, confecção e marketing.',
    keywords: [
      'Luise Bosquê',
      'Estilista',
      'Personal Stylist',
      'Vestidos Especiais',
      'Vestido para festa',
    ],
    author: 'Bruno Germano <bruno@egermano.com>',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'portfolio-luise-bosque',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/data/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
