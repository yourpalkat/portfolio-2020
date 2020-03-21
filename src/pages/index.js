import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Splash from '../components/Splash/Splash';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import WritingSection from '../components/WritingSection/WritingSection';

import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/global.scss';

const IndexPage = () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allContentfulProject(filter: {featured: {eq: true}}) {
        edges {
          node {
            title
            contentful_id
            shortDescription {
              shortDescription
            }
            slug
            externalUrl
          }
        }
      }
    }
  `);
  
  return (
    <Layout>
      <SEO title="Home" />
      <Splash />
      <ProjectSection projects={projects} />
      <WritingSection />
    </Layout>
  );
}

export default IndexPage;
