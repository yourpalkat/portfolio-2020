import React from 'react';
import { Link } from 'gatsby';

import FancyText from '../FancyText/FancyText';
import PostCard from '../PostCard/PostCard';

import WritingStyles from './WritingSection.module.scss';

const Writing = ({ writing }) => {
  return (
    <section id="writing">
      <div className="gridWrapper">
        <div className={WritingStyles.indexTitleBlock}>
          <FancyText text="writing" />
        </div>
        <div className={WritingStyles.indexContentBlock}>
          <h3>Recent writing</h3>
          <p>I haven't been writing very often, but that's something I'm trying to remedy! These are the most recent posts, and there's more to see on the <Link to='/writing'>All Writing</Link> page.</p>
          {writing.edges.map(post => <PostCard post={post.node} key={post.node.contentful_id} />)}
        </div>
      </div>
    </section>
  );
}

export default Writing;