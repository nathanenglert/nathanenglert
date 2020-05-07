import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import NavBar from '../components/navbar';
import SEO from '../components/seo';

const NotFoundPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <SEO
        title="404 - Nathan Englert"
        description="How'd you get here?"
        location="/404"
      />
      <NavBar />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1>Not Found!</h1>
              <p className="content">
                The page you are looking for doesn't appear to exist. How about
                you take a look at one of these instead?
              </p>
              <ul>
                {blogPosts.map(({ node: post }) => (
                  <li key={post.id}>
                    <time
                      className="has-text-grey-dark"
                      dateTime="{post.publishDate}"
                    >
                      {post.publishDate}
                    </time>
                    <Link to={post.slug}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

// prettier-ignore
export const query = graphql`
  query NotFoundPageQuery {
    allContentfulBlogPost(limit: 5, sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          type
          title
          slug
          publishDate(formatString: "YYYY.MM.DD")
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 260)
            }
          }
          tags
        }
      }
    }
  }
`;
