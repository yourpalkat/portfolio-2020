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
  const { projects, writing } = useStaticQuery(graphql`
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
            thumbnail {
              description
              fluid(maxWidth: 200, quality: 90) {
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
      writing: allContentfulBlogPost(limit: 3, sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            publishedDate(formatString: "DD MMMM, YYYY")
            contentful_id
            slug
            excerpt {
              excerpt
            }
          }
        }
      }
    }
  `);
  
  return (
    <Layout homePage={true}>
      <SEO title="Home" />
      <Splash />
      <ProjectSection projects={projects} />
      <WritingSection writing={writing} />
    </Layout>
  );
}

export default IndexPage;
