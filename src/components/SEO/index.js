import React, { Component } from "react";
import Helmet from "react-helmet";

export default ({siteMetadata, title, description, image, url }) => {
  let Title = title ? title : siteMetadata.title;
  let Description = description ? description : siteMetadata.description;
  let Url = url ? url : siteMetadata.siteURL;
  let Image = image ? Url + image : Url + siteMetadata.social.image;

  const schemaOrgJSONLD = [{
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: Url,
    name: Title,
    alternateName: siteMetadata.siteTitleAlt ? siteMetadata.siteTitleAlt : ""
  }];
    
  return (
    <Helmet>
      {/* Page title */}
      <title>{ Title }</title>

      {/* General tags */}
      <meta name="description" content={Description} />
      <meta name="image" content={Image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={Url} />
      <meta property="og:title" content={Title} />
      <meta property="og:description" content={Description} />
      <meta property="og:image" content={Image} />
      <meta
        property="fb:app_id"
        content={siteMetadata.siteFBAppID ? siteMetadata.siteFBAppID : ""}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={siteMetadata.social.twitter ? siteMetadata.social.twitter : ""}
      />
      <meta name="twitter:title" content={Title} />
      <meta name="twitter:description" content={Description} />
      <meta name="twitter:image" content={Image} />
    </Helmet>
  );
}
