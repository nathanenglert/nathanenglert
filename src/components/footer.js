import React from 'react';
import { FaTwitter, FaGithub, FaDev, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
						<a className="button is-medium is-dark" href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
							<span className="icon is-small">							
									<FaTwitter />							
							</span>
						</a>
						<a className="button is-medium is-dark" href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<span className="icon is-small">							
								<FaInstagram />							
							</span>
						</a>
						<a className="button is-medium is-dark" href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
							<span className="icon is-small">							
									<FaGithub />							
							</span>
						</a>
						<a className="button is-medium is-dark" href={data.site.siteMetadata.devto} target="_blank" rel="noopener noreferrer" aria-label="DEV.to">
							<span className="icon is-small">							
								<FaDev />							
							</span>
						</a>
						<a className="button is-medium is-dark" href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<span className="icon is-small">							
								<FaLinkedin />							
							</span>
						</a>
					</p>
					<p className="is-size-7">
						Handcrafted by me &copy; 2019<br />
						Made with{' '}
						<a href={data.site.siteMetadata.gatsby} className="has-text-white">Gatsby</a> +{' '}
						<a href={data.site.siteMetadata.bulma} className="has-text-white">Bulma</a>
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
