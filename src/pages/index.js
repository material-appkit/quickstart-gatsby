import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

const styles = makeStyles((theme) => ({
  main: {
    textAlign: 'center',
  },

  contentContainer: {
    margin: 'auto',
    padding: theme.spacing(4, 2, 2),
  },

  title: {
    fontSize: theme.typography.pxToRem(28),
    letterSpacing: '0.40rem',
    lineHeight: 1.2,
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(40),
    }
  },
}));


function HomePage(props) {
  const classes = styles();

  return (
    <Layout
      contentContainerClassName={classes.contentContainer}
      showBackButton={false}
      title="Introduction"
      {...props}
    >
      <main className={classes.main}>
        <Typography variant="h1" className={classes.title}>
          Gatsby Quickstart
        </Typography>

        <Typography>
          (Coming Soon)
        </Typography>
      </main>
    </Layout>
  );
}

HomePage.propTypes = COMMON_PAGE_PROPS;

export default HomePage;
