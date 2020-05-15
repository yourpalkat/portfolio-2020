import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import PostStyles from './blogPost.module.scss';

const ProjectTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.excerpt.excerpt} />
      <section id="project-page">
        <div className="gridWrapper">
          <div className={PostStyles.contentBlock}>
            <h2 className={PostStyles.title}>{post.title}</h2>
            <h4 className={PostStyles.date}>{post.publishedDate}</h4>
            {post.postBody && (
              <ReactMarkdown
                source={post.postBody.postBody}
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
