module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Raisha Asuma",
    "menuLinks" : [
      // {
      //   "name": "home",
      //   "link": "/"
      // },
      {
        "name": "work",
        "link": "/work"
      },
      {
        "name": "about",
        "link": "/about"
      },
      {
        "name": "contact",
        "link": "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
