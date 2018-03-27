import React from "react";
import Link from "../link";

export default ({ siteMetadata, className }) => (
  <nav role="navigation" className={`${className} self-start mt-4 mb-4`}>
    {(siteMetadata)
        ? siteMetadata.menu.map(menuItem => {
            <menuItem item={menuItem} />;
        })
        : ""
    }
  </nav>
);

const menuItem = item => <Link href={href} to={to} />;
