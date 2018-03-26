import React from "react";
import Link from "../../link";

export default ({ children, href, to, external, color, className }) => (
  <Link href={href} to={to} external={external} className={`${className} border-${color ? color : "purple"} border-2 font-strong  hover:opacity-75 inline-block pt-4 pr-8 pl-8 pb-4 text-lg text-${color ? color : "purple"} w-auto`}>
    {children}
  </Link>
);