import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FancyText from '../FancyText/FancyText';
import PostCard from '../PostCard/PostCard';

import WritingStyles from './WritingSection.module.scss';

const Writing = () => {
  const { writing } = useStaticQuery(graphql`
    query {
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
    <section id="writing">
      <div className="gridWrapper">
        <div className={WritingStyles.indexTitleBlock}>
          <FancyText text="writing" />
        </div>
        <div className={WritingStyles.indexContentBlock}>
          {writing.edges.map(post => <PostCard post={post.node} key={post.node.contentful_id} />)}
        </div>
      </div>
    </section>
  );
}

export default Writing;