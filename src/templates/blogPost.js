import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import PostStyles from './singleProject.module.scss';

const ProjectTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  return (
    <Layout>
      <SEO title={`Project: ${post.title}`} />
      <section id="project-page">
        <div className="gridWrapper">
          <div className={PostStyles.contentBlock}>
            <h3>{post.title}</h3>
            <h4>{post.publishedDate}</h4>
            {post.body && (
              <ReactMarkdown
                source={post.body.body}
                escapeHtml={false}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectTemplate;
