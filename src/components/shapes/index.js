import React, { Component } from "react";
import rules from "./rules.json";
import styles from "./shapes.module.css";

export default class ShapesComponent extends Component {
  generateRect(ruleset) {
    return (
      <div
        className={`${styles.rect} ${styles.spin} absolute text-purple`}
        style={{
          width: ruleset.width,
          height: ruleset.height,
          top: ruleset.y,
          left: ruleset.x,
          "--spin-duration": `${Math.round(Math.random() + 6 * 2)}s`,
          "--float-duration": `${Math.round(Math.random() + 3 * 2)}s`
        }}
      />
    );
  }

  generateCircle(ruleset) {
    return (
      <div
        className={`${styles.circle} absolute text-purple`}
        style={{
          width: ruleset.width,
          height: ruleset.height,
          top: ruleset.y,
          left: ruleset.x,
          "--spin-duration": `${Math.round(Math.random() * 12)}s`,
          "--float-duration": `${Math.round(Math.random() * 6)}s`
        }}
      />
    );
  }

  generateTriangle(ruleset) {
    return (
      <svg
        className={`${styles.triangle} ${styles.spin} absolute text-purple`}
        x="0px"
        y="0px"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        enable-background="new 0 0 30 30"
        style={{
          width: ruleset.width,
          height: ruleset.height,
          top: ruleset.y,
          left: ruleset.x,
          "--spin-duration": `${Math.round(Math.random() * 12)}s`,
          "--float-duration": `${Math.round(Math.random() * 6)}s`
        }}
      >
        <polygon
          fill="none"
          stroke-width="5px"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        />
      </svg>
    );
  }

  render() {
    return (
      <div
        className={`${this.props.className} ${styles.shapes} ${styles.float} fixed h-full m-auto opacity-10 pin`}
      >
        {rules.map(ruleset => {
          const rand = Math.round(Math.random() * 3);

          if (rand == 1) {
            return this.generateRect(ruleset);
          } else if (rand == 2) {
            return this.generateCircle(ruleset);
          } else {
            return this.generateTriangle(ruleset);
          }
        })}
      </div>
    );
  }
}
