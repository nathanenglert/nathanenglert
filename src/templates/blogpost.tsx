import React from "react";
import { graphql, Link, PageProps } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { GlitchLinkButton } from "@/components/link-button";

interface BlogPostData {
  current: {
    id: string;
    title: string;
    slug: string;
    publishDate: string;
    body: {
      childMarkdownRemark: {
        html: string;
        excerpt: string;
      };
    };
    tags: string[];
  };
  allPosts: {
    nodes: {
      slug: string;
      publishDate: string;
    }[];
  };
}

const BlogPost: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const { title, slug, publishDate, body } = data.current;
  const currentIndex = data.allPosts.nodes.findIndex(
    (post) => post.slug === data.current.slug
  );
  const previous =
    currentIndex < data.allPosts.nodes.length - 1
      ? data.allPosts.nodes[currentIndex + 1]
      : null;
  const next = currentIndex > 0 ? data.allPosts.nodes[currentIndex - 1] : null;

  return (
    <Layout className="space-y-10">
      <Seo
        title={title}
        description={body.childMarkdownRemark.excerpt}
        location={slug}
        article
      />
      <div>
        <h1 className="text-2xl font-brand leading-12 cyber-h after:bg-accent">
          {title}
        </h1>
        <div className="flex justify-end">
          <time className="text-xs font-mono text-accent-foreground tracking-widest">
            {publishDate}
          </time>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          className="space-y-4 mt-4"
        />
      </div>
      <div className="cyber-tile bg-muted p-4 pb-5">
        <p className="text-sm text-muted-foreground">
          <Link
            to="/about"
            className="text-accent-foreground hover:underline font-bold"
          >
            Nathan
          </Link>{" "}
          is a writer who explores themes of truth, technology, and mental
          health through poetry and fiction. His stories blend cyberpunk
          aesthetics with grounded, emotional storytelling.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div>
          {previous && (
            <GlitchLinkButton
              to={`/${previous.slug}`}
              label="Previous"
              tag="X08"
            />
          )}
        </div>
        <div>
          {next && (
            <GlitchLinkButton
              to={`/${next.slug}`}
              label="Next"
              tag="X0R"
              isRight
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query ($slug: String!) {
    current: contentfulBlogPost(slug: { eq: $slug }) {
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
    allPosts: allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        slug
        publishDate
      }
    }
  }
`;
