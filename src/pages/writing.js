import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FancyText from '../components/FancyText/FancyText';
import PostCard from '../components/PostCard/PostCard';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import WritingPageStyles from '../components/WritingSection/WritingSection.module.scss';

const WritingPage = () => {
  const { writing } = useStaticQuery(graphql`
    query {
      writing: allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            publishedDate(formatString: "D MMMM, YYYY")
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
          <div className={WritingPageStyles.indexTitleBlock}>
            <FancyText text="writing archive" />
          </div>
          <div className={WritingPageStyles.indexContentBlock}>
            <h3 className="title">Writing</h3>
            <p>This is it, this is everything. Here are all the posts in the archive. Mostly I write to just try and figure things out for myself; if someone else gets something useful out of it, that's a wonderful bonus, but I generally don't consider myself an expert in anything enough to say: Here, here is how a thing is done, etc. So, caveat lector and all that.</p>
            <div className={WritingPageStyles.postCardSection}>
              {writing.edges.map(post => <PostCard post={post.node} key={post.node.contentful_id} />)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default WritingPage;
