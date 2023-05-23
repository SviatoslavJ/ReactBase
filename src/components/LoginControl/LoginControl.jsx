import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./LoginControl.module.css";

function LoginButton(props) {
  return <button className={styles.loginbtn} onClick={props.onClick}>Log in</button>;
}

function LogoutButton(props) {
  return (
    <button className={styles.logoutbtn} onClick={props.onClick}>
      Log out
    </button>
  );
}

function UserGreeting(props) {
  return <h1 className={styles.h1}>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1 className={styles.h2}>Come in, please.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;