import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }: { data: any }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <Seo location="/" />
      <p className="text-center text-2xl font-bold">Under Construction</p>
    </Layout>
  );
};

export default IndexPage;

// prettier-ignore
export const query = graphql`
  query BlogPostsPageQuery {
    site {
      siteMetadata {
        github
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
