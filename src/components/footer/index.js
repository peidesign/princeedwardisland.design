import React from "react";

export default ({ siteMetadata }) => {
  return (
    <div className="md:flex md:justify-between pt-8 pr-4 pb-8 pl-4 text-sm text-black-pale w-100">
      <p>{siteMetadata ? siteMetadata.copyright : ""}</p>
      <p>Made with ❤️ on a 💻</p>
    </div>
  );
};
