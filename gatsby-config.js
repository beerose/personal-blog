module.exports = {
  siteMetadata: {
    title: `Aleksandra Sikora — personal blog`,
    name: `blog`,
    siteUrl: `https://aleksandrasays.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `About life. With a bit of sarcasm and a pinch of harshness.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/aleksandrasays`,
      },
      {
        name: `github`,
        url: `https://github.com/beerose`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/poczekajnamnie`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        backend: {
          repo: 'https://github.com/beerose/personal-blog',
        },
      },
    },
  ],
};
