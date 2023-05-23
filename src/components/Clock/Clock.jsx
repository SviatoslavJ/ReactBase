import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./Clock.module.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.h1}>This is a time right now</h1>
        <h2 className={styles.h2}>Now: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
