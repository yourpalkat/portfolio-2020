import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import ProjectStyles from './singleProject.module.scss';

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext;
  return (
    <Layout>
      <SEO title={`Project: ${project.title}`} />
      <section id="project-page">
        <div className="gridWrapper">
          <div className={ProjectStyles.contentBlock}>
            <h3>{project.title}</h3>
            {project.fullDescription && (
              <ReactMarkdown
                source={project.fullDescription.fullDescription}
                escapeHtml={false}
              />
            )}
            {project.externalUrl && <p><a href={project.externalUrl}>See it here!</a></p>}
            {project.gitHubUrl && <p><a href={project.gitHubUrl}>GitHub repo</a></p>}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectTemplate;
