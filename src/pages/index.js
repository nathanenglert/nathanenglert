import React from "react";
import { Link, graphql } from "gatsby";

import Navbar from "../components/navbar";
import Layout from "../components/layout";
import TextScrambler from "../components/textScrambler";

const IndexPage = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges;

  return (
    <Layout>
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 is-size-4-mobile">Hi, my name is Nathan.</h1>
            <h2 className="subtitle is-size-3 is-size-6-mobile">i am a <TextScrambler />.</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column">
              <h1 className="title">About Me</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <p className="content">
                I am a technology evangelist who specializes in web development. Throughout my career, I have helped people and companies
                alike use technology to improve their day-to-day lives. It all started when I pooled my savings and birthday money to buy
                my first computer when I was twelve years old. From there, I taught myself how to design websites and developed a passion
                for learning technology and applying it in different ways.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="box highlights">
                <div className="columns">                  
                  <div className="column">
                    <h2 className="title is-size-4">Developer</h2>
                    <p className="content">I enjoy building things that could have an impact on someone's life. My specialty is developing for the web.</p>
                    <h3 className="subtitle">Languages I Speak</h3>
                    <p className="content">C#, JavaScript, HTML, CSS</p>
                    <h3 className="subtitle">Frameworks and Tools</h3>
                    <ul>
                      <li>Node.js</li>
                      <li>Vue.js</li>
                      <li>.NET Core</li>
                      <li>Visual Studio Code</li>
                      <li>Github</li>
                    </ul>
                  </div>
                  <div className="column">
                    <h2 className="title is-size-4">Leader</h2>
                    <p className="content">I am a Lead Software Engineer at New Balance. My team focuses on business optimization and connectivity to systems on a global scale.</p>                                            
                    <h3 className="subtitle">Soft Skills</h3>
                    <p className="content">Mentorship, Business Analysis</p>
                    <h3 className="subtitle">Highlights</h3>
                    <ul>
                      <li>10+ Years Experience</li>
                      <li>2-time Hackathon Winner</li>
                    </ul>     
                  </div>
                  <div className="column">
                    <h2 className="title is-size-4">Hobbyist</h2>
                    <p className="content">I am a lifelong learner. The majority of my time is spent programming some new idea, but here are a few of my other interests:</p>
                    <h3 className="subtitle">Interests</h3>
                    <ul>
                      <li>Game Design</li>
                      <li>Unity3D</li>
                      <li>Coffee</li>
                      <li>Pixel Art</li>
                      <li>Hockey</li>
                      <li>Reading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column">
              <h1 className="title">Recent Experiments</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <p className="content">
                I enjoy building things in my free-time. Typically these side projects are centered around a new technology I want to learn or a new idea I've dreamed up. Here are a few of my recent experiments:
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns level">
                <div className="column level-item">
                  <div className="box">
                    <h3 className="subtitle">
                      <a href="https://nathanenglert.com/apps/customizer/" title="Customizer">Customizer</a>
                    </h3>
                    <p className="content">
                      A user interface for designing a custom product out of a set of available options.
                    </p>
                  </div>
                </div>
                <div className="column level-item">
                  <div className="box">
                    <h3 className="subtitle">
                      <Link to="/apps/raffler">Raffler</Link>
                    </h3>
                    <p className="content">
                      A simple app used to simulate a raffle or sweepstakes drawing.
                    </p>
                  </div>
                </div>
                <div className="column level-item">
                  <div className="box">
                    <h3 className="subtitle">
                      <a href="https://nathanenglert.com/apps/kaslo/" title="KASLO">KASLO</a>
                    </h3>
                    <p className="content">
                      A tool that helps calculate options for paying off student loan debt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-centered">Tales from a Developer</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <p className="content has-text-centered">
                I hesitate calling this a blog, as that would indicate that I post with some regularity. I've tried that a number
                of times and it never turns out well. No, this is a catch-all for anything that I feel like throwing out on the web.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {blogPosts.map(({ node: post }) => (
                <div className="card article" key={post.id}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <h3 className="subtitle article-title">
                          {post.type !== 'quote' && <Link to={post.slug}>{post.title}</Link>}
                          {post.type === 'quote' && post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="content article-body">
                      {post.body.childMarkdownRemark.excerpt}&nbsp;
                      {post.type !== 'quote' && <Link to={post.slug}>Read more.</Link>}
                    </div>
                    <div className="article-footer">
                      <time className="is-size-7 has-text-grey-dark" dateTime="{post.publishDate}">{post.publishDate}</time>
                    </div>
                  </div>
                </div>              
              ))}         
            </div>
          </div> 
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlogPost(limit: 5, sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          type
          title
          slug
          publishDate(formatString: "MMMM D, YYYY")
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