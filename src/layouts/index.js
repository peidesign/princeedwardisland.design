import React from "react";
import Base from "./base";
import SEO from "../components/SEO"

export default class Template extends React.Component {
  render() {
    return (
      <Base>
        {this.props.children()}
      </Base>
    );
  }
}
