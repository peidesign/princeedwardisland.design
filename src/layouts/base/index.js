import Helmet from "react-helmet";
import React from "react";
import styles from "./base.css";

export default ({ children, data }) => {
  return (
    <div>
      <Helmet>
        <title>
          P.E.I Design
        </title>
        <body class="bg-white-pale border-8 border-purple ma0 pa0" />
      </Helmet>
      {data}
      {children}
    </div>
  );
};
