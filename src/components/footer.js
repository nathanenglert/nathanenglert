import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

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
					}
				}
			}
		`}
		render={data => (
			<footer className="footer has-background-dark has-text-grey-light">
				<div className="content has-text-centered">					
					<p className="">
						<a className="button is-medium is-dark" href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
							<span className="icon is-small">							
									<FaTwitter />							
							</span>
						</a>
						<a className="button is-medium is-dark" href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
							<span className="icon is-small">							
									<FaGithub />							
							</span>
						</a>
					</p>
					<p className="is-size-7">
						Handcrafted by me &copy; 2019<br />
						Made with{' '}
						<a href={data.site.siteMetadata.gatsby}>Gatsby</a> +{' '}
						<a href={data.site.siteMetadata.bulma}>Bulma</a>
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
