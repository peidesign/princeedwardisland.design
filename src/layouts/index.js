import React from "react";
import Base from "./base"

export default class Template extends React.Component {
  render() {
    return <Base>{this.props.children()}</Base>;
  }
}
