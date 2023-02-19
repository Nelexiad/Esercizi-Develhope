import React from "react";

class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    this.props.onLogin({
      username: username,
      password: password,
      remember: remember,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='username' autoFocus />
          <input name='password' type='password' />
          <input name='remember' type='checkbox' />
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
