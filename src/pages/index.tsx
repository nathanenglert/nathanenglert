import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }: { data: any }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <Seo location="/" />
      <div className="space-y-4 mb-8">
        <h1 className="text-2xl font-brand tracking-widest">
          Welcome to Tomorrow.
        </h1>
        <p>
          I'm Nathan, an engineer, poet, and author. You can learn more{" "}
          <Link to="/about" className="text-secondary hover:underline">
            about me here.
          </Link>{" "}
          I'm working on a few projects that I can't wait to share soon. For
          now, check out some of my work below!
        </p>
      </div>
      <ul className="space-y-4">
        {blogPosts.map((post: any) => (
          <li key={post.node.id} className="flex gap-8 items-baseline">
            <time className="font-mono text-xs text-accent-foreground tracking-widest">
              {post.node.publishDate}
            </time>
            <Link to={post.node.slug} className="hover:underline">
              {post.node.title}
            </Link>
          </li>
        ))}
      </ul>
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
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      edges {
        node {
          id
          type
          title
          slug
          publishDate(formatString: "YYYY.MM.DD")
          tags
        }
      }
    }
  }
`;
