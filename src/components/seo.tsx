import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  location?: string;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

interface SiteMetadata {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultImage: string;
  twitterUsername: string;
}

interface QueryResult {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const Seo: React.FC<SEOProps> = ({
  location,
  title,
  description,
  image,
  article,
}) => {
  const { site } = useStaticQuery<QueryResult>(query);
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    titleTemplate: title == null ? "" : titleTemplate,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${location}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: imageUrl
      }
    }
  }
`;
