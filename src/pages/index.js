import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import ProfileImage from '../images/profile.jpg';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <SEO location="/" />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="hero column is-6 is-offset-3">
              <figure className="image is-96x96 is-centered">
                <img
                  className="is-rounded"
                  src={ProfileImage}
                  alt="Nathan Englert"
                />
              </figure>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <p className="content">
                <strong>Hi, I'm Nathan.</strong>
                &nbsp;I am a technology evangelist who specializes in API
                development. I work at{' '}
                <a href="https://www.saksoff5th.com/">Saks OFF 5th</a> and am 
                leading a team focused on developer experience.
              </p>
              <p className="content">
                As a leader, I enjoy building team cultures that support growth,
                inclusivity, and creativity. As an engineer, I love increasing
                operational efficiency through the use of technology and
                automation.
              </p>
              <p className="content">
                In my spare time, I like to <a href="/apps">build things</a> and
                contribute to <a href={data.site.siteMetadata.devto}>DEV</a>.
                You can also find me on{' '}
                <a rel="me" href="https://mastodon.gamedev.place/@nathanenglert">Mastodon</a> and{' '}
                <a href={data.site.siteMetadata.linkedin}>LinkedIn</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h2>About</h2>
              <p className="content">
                Throughout my career, I have helped people and companies alike
                use technology to improve their day-to-day lives. It all started
                after pooling my savings and birthday money to buy my first
                computer when I was twelve years old. From there, I taught
                myself how to design websites and learned how to apply
                technology in different ways.
              </p>
              <p className="content">
                In 2008, I started my professional career as a junior software
                engineer and developed a passion for connecting systems and
                automating processes. Over the years, I've carried that passion
                along with me everywhere I've gone. I've worked on teams that
                have built eCommerce platforms for a global scale and others
                that have implemented new ERP systems. One of my proudest
                accomplishments has been developing a service to optimize HVAC
                systems for a major hotel chain. By deploying this service, the
                chain was able to save hundreds of thousands per year in energy
                costs across its properties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section activity">
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h2>Activity</h2>
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
    },
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
