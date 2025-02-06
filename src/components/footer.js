import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaDev,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
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
      }
    `}
    render={(data) => (
      <footer className="">
        <div className="text-center">
          <p className="">Handcrafted by me &copy; 2019</p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
