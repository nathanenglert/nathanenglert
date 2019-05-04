import React from "react";
import GatsbyImage from 'gatsby-image';
import { graphql } from "gatsby";

import Navbar from "../../components/navbar";
import Layout from "../../components/layout";

import "./instagram.scss";

class Instagram extends React.Component {
  _renderImages = () => {
    return this.props.data.allInstaNode.edges.map(image => (
      <GatsbyImage key={image.node.id} resolutions={image.node.localFile.childImageSharp.resolutions} />
    ));
  };

  render () {
    return (
      <Layout>
        <Navbar className="has-background-light" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column photo-stream has-text-centered">     
                <div class="text">
                  <svg>
                  <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%" >
                      <rect id="alpha" x="0" y="0" width="100%" height="100%"/>
                      <text id="title" x="50%" y="0" dy="0.75em">insta</text>
                      <text id="title" x="50%" y="0" dy="1.5em">gram</text>
                    </mask>
                    </defs>
                    <rect id="base" x="0" y="0" width="100%" height="100%"/>
                  </svg>
                </div>
           
                {this._renderImages()}
                
              </div>
            </div>
          </div>
        </section>
        <section class="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h3 className="is-size-6 has-text-weight-bold">Inspiration and References</h3>
                <ul className="is-size-7">
                  <li><a href="https://codepen.io/luisdeanda/pen/zePRmR?page=2">Photo Text Background</a> by design.the.web</li>
                  <li><a href="https://speckyboy.com/css-svg-canvas-masks/">10 Amazing Examples of CSS, SVG &amp; Canvas Masks In Action</a> by Jake Rocheleau</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
};

export default Instagram;

export const pageQuery = graphql`
  query {
    allInstaNode (limit: 8) {
      edges {
        node {
          localFile {
            childImageSharp {
              resolutions(width: 300) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
          id
        }
      }
    }
  }
`;
