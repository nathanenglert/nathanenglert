import React from 'react';
import { graphql } from 'gatsby';

import BlogFooter from '../components/blogFooter';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const { title, slug, publishDate, body } = data.contentfulBlogPost;
  return (
    <Layout>
      <SEO
        title={title}
        description={body.childMarkdownRemark.excerpt}
        location={slug}
        article
      />
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
          excerpt(pruneLength: 260)
        }
      }
      tags
    }
  }
`;
