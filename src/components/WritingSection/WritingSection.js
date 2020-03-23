import React from 'react';
import { Link } from 'gatsby';

import FancyText from '../FancyText/FancyText';
import PostCard from '../PostCard/PostCard';

import WritingStyles from './WritingSection.module.scss';

const Writing = ({ writing }) => {
  return (
    <section id="writing" className={WritingStyles.writingSection}>
      <div className="gridWrapper">
        <div className={WritingStyles.indexTitleBlock}>
          <FancyText text="rec ent writing" label="Recent writing" />
        </div>
        <div className={WritingStyles.indexContentBlock}>
          <h3 className={WritingStyles.title}>Recent writing</h3>
          <p>I haven’t written very often of late, but that's something I’m trying to remedy! These are the most recent posts, and there’s more to see on the <Link to='/writing'>All Writing</Link> page.</p>
          <div className={WritingStyles.postCardSection}>
            {writing.edges.map(post => <PostCard post={post.node} key={post.node.contentful_id} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Writing;