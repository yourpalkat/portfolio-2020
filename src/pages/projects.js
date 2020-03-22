import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FancyText from '../components/FancyText/FancyText';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import ProjectStyles from '../components/ProjectSection/ProjectSection.module.scss';

const IndexPage = () => {
  const { projects } = useStaticQuery(graphql`
    query {
      projects: allContentfulProject(sort: {fields: publishedDate, order: DESC}) {
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
    }
  `);

  return (
    <Layout>
      <SEO title="All projects" />
      <section id="all-projects" className="pageSection">
        <div className="gridWrapper">
          <div className={ProjectStyles.indexTitleBlock}>
            <FancyText text="projects archive" />
          </div>
          <div className={ProjectStyles.indexContentBlock}>
            <h3>All projects</h3>
            <p>Well, you asked for it. These are all the projects and experiments I have to show right now!</p>
            <div className={ProjectStyles.projectCardSection}>
              {projects.edges.map(project => <ProjectCard project={project.node} key={project.node.contentful_id} />)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
