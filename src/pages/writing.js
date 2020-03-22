import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FancyText from '../components/FancyText/FancyText';
import PostCard from '../components/PostCard/PostCard';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import WritingStyles from '../components/ProjectSection/ProjectSection.module.scss';

const WritingPage = () => {
  const { writing } = useStaticQuery(graphql`
    query {
      writing: allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            contentful_id
            excerpt {
              excerpt
            }
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="All writing" />
      <section id="all-writing" className="pageSection">
        <div className="gridWrapper">
          <div className={WritingStyles.indexTitleBlock}>
            <FancyText text="writing archive" />
          </div>
          <div className={WritingStyles.indexContentBlock}>
            <h3>Writing</h3>
            <p>I do not write as often as I should, but I am working to remedy that! Here are all the posts in the archive.</p>
            <div className={WritingStyles.projectCardSection}>
              {writing.edges.map(post => <PostCard post={post.node} key={post.node.contentful_id} />)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default WritingPage;
