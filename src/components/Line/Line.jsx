import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./Line.module.css";

class Line extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className={styles.div}></div>
    );
  }
}

export default Line;
