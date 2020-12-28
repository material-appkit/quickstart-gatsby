import React from 'react';

import Layout from 'layout/Layout';

import { COMMON_PAGE_PROPS } from 'variables';

import {
  PageTitle,
} from 'components/typography';


function AboutPage(props) {
  return (
    <Layout
      showBackButton={false}
      title="About"
      {...props}
    >
      <main>
        <PageTitle>
          About Gatsby Quickstart
        </PageTitle>
      </main>
    </Layout>
  );
}

AboutPage.propTypes = COMMON_PAGE_PROPS;

export default AboutPage;

