import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import ProfileImage from "../images/profile.jpg";
import SEO from "../components/seo";
import Wrapper from "../components/foundation/wrapper";

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <SEO location="/" />
      <Wrapper className="lg:pt-24">
        <p className="text-center text-2xl font-bold">Under Construction</p>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

// prettier-ignore
export const query = graphql`
  query BlogPostsPageQuery {
    site {
      siteMetadata {
        gatsby
        bulma
        twitter
        github
        linkedin
        devto
        instagram
      }
    }
    allContentfulBlogPost(limit: 5, sort: { publishDate: DESC }) {
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
