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
    'gatsby-plugin-no-ie',

    //--------------------------------------------------------------------------
    // 'gatsby-plugin-preact',

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
  ],
};
