import React from 'react';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

import CardStyles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  return (
    <div className={CardStyles.postCard}>
      <div className={CardStyles.postContent}>
        <h4>{post.title}</h4>
        <h5>{post.publishedDate}</h5>
        <ReactMarkdown
          source={post.excerpt.excerpt}
          escapeHtml={false}
        />
        <Link to={`/blog/${post.slug}`}>Read more...</Link>
      </div>
    </div>
  );
}

export default PostCard;