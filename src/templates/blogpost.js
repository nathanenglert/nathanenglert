import React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/navbar";
import Layout from "../components/layout";
import ProfileImage from '../images/profile.jpg';

const BlogPost = ({ data }) => {
  const { title, publishDate, body } = data.contentfulBlogPost;
  return (
    <Layout>
      <Navbar className="has-background-light" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h1 className="title has-text-centered">{title}</h1>
              {/* <h3 className="blog-date has-text-centered has-text-grey-light is-size-5">
                <time label={publishDate}>{publishDate}</time>
              </h3> */}
              <div className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html
                }}
              />
              <div className="blog-footer has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                  <img src={ProfileImage} alt="Nathan Englert" />
                </figure>
                <p className="blog-author has-text-weight-bold has-text-grey">Nathan Englert</p>
                <p className="blog-date has-text-weight-bold has-text-grey">
                  <time label={publishDate}>{publishDate}</time>
                </p>
              </div>
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
      publishDate(formatString: "MMMM D, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`;
