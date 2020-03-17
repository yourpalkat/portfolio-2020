import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Splash from '../components/Splash/Splash';
import Projects from '../components/Projects/Projects';
import Writing from '../components/Writing/Writing';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Splash />
    <Projects />
    <Writing />
  </Layout>
);

export default IndexPage;
