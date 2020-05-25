import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
        site {
          siteMetadata {
            title
            author
            imageUrl
            description
            keywords
          }
        }
      }
    `}
    render={(data) => (
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=1"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <title>{data.site.siteMetadata.title}</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content={data.site.siteMetadata.author} /> />
        <meta
          itemprop="description"
          content={data.site.siteMetadata.description}
        />
        <meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="nathanenglert"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting. You can now buy me a coffee!"
          data-color="#FF813F"
          data-position="right"
          data-x_margin="32"
          data-y_margin="32"
        />
      </Helmet>
    )}
  />
);
