import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./Dialog.module.css";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className={styles.title}>
        {props.title}
      </h1>
      <p className={styles.askNameText}>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }
  render() {
    return (
      <Dialog
       title="Mars exploration program"
       message="How can I call you?">
        <input className={styles.input} value={this.state.login} onChange={this.handleChange} />
        <button className={styles.btn} onClick={this.handleSignUp}>Sign me up!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export default SignUpDialog;