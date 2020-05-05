import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import NavBar from '../components/navbar';
import BlogFooter from '../components/blogFooter';

const BlogPost = ({ data }) => {
  const { title, publishDate, body } = data.contentfulBlogPost;
  return (
    <Layout>
      <NavBar />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1>
                <time className="has-text-grey-dark" dateTime="{publishDate}">
                  {publishDate}
                </time>
                {title}
              </h1>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html,
                }}
              />
              <BlogFooter publishDate={publishDate} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "YYYY.MM.DD")
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`;
