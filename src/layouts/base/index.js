import React from "react";
import Helmet from "react-helmet"
import styles from "./base.css";

export default ({ data, children }) => {
  return (
    <div>
      <Helmet>      
        <body class="bg-white-pale border-8 border-purple ma0 pa0" />
      </Helmet>
      {children}
    </div>
  );
};
