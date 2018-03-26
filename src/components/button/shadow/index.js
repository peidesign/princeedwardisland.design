import React from "react";
import Link from "../../link";
import styles from "./shadow.module.css";

export default ({ children, href, to, external, color, className }) => (
  <Link
    href={href}
    to={to}
    external={external}
    className={`${className} ${styles.buttonShadow} inline-block text-${
      color ? color : "purple"
    }-pale`}
  >
    <div
      className={`bg-${
        color ? color : "purple"
      } hover:opacity-90 font-strong inline-block pt-4 pr-8 pl-8 pb-4 text-lg text-white w-auto`}
    >
      {children}
    </div>
  </Link>
);
