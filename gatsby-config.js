const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_APP_TITLE,
    description: 'An app skeleton to kickstart app development with Material-AppKit and Gatsby',
  },
  plugins: [
    //--------------------------------------------------------------------------
    // 'gatsby-plugin-preact',
    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fafafa',
        cache_busting_mode: 'none',
        display: 'standalone',
        icon: 'data/images/application-logo.png',
        name: process.env.GATSBY_APP_TITLE,
        theme_color: '#fff',
        short_name: 'MUI AppKit',
        start_url: '/',
      }
    },

    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },

    //--------------------------------------------------------------------------
    'gatsby-plugin-sharp',

    //--------------------------------------------------------------------------
    'gatsby-transformer-sharp',

    //--------------------------------------------------------------------------
    'gatsby-plugin-app-layout',
    'gatsby-plugin-material-ui',

    //--------------------------------------------------------------------------
    'gatsby-plugin-react-helmet-async',

    //--------------------------------------------------------------------------
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/noie.js',
      },
    },
  ],
};
