import React from "react";
import Link from "../link";
import Logo from "./pei-design-logo.svg";
import Menu from "../menu";

export default ({ siteMetadata }) => {
  console.log(siteMetadata)
  return (
    <nav role="navigation" className="self-start mt-4 mb-4">
      <Link to="/">
        <h1>
          <Logo className="w-32 h-32" />
        </h1>
      </Link>
      <Menu siteMetadata={siteMetadata} />
    </nav>
  );
};
