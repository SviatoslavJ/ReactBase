import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./WarningBanner.module.css";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className={styles.warning}>Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button className={styles.btn} onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}


export default Page;