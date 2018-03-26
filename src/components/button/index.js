import React from "react";
import Inverted from "./inverted";
import Plain from "./plain";
import Shadow from "./shadow";

export default ({ style, href, to, external, color, children, className }) => {
  let type = style ? style.toLowerCase() : "plain"

  if (type === "inverted") {
    return (
      <Inverted className={className} href={href} to={to} external={external} color={color}>
        {children}
      </Inverted>
    );
  } else if (type === "shadow") {
    return (
      <Shadow className={className} href={href} to={to} external={external} color={color}>
        {children}
      </Shadow>
    );
  } else {
    return (
      <Plain className={className} href={href} to={to} external={external} color={color}>
        {children}
      </Plain>
    );
  }
};
