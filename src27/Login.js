import React from "react";

class Login extends React.Component {
    state = {
      username: "",
      password: "",
      remember: false
    };
  
    handleInputChange = event => {
      const { name, value, type, checked } = event.target;
      type === "checkbox"
        ? this.setState({ [name]: checked })
        : this.setState({ [name]: value });
    };
  
    render() {
      return (
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="remember">Remember me:</label>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={this.state.remember}
              onChange={this.handleInputChange}
            />
          </div>
          <div>{ this.state.username}</div>
          <div>{ this.state.password}</div>
          <div>{ String(this.state.remember)}</div>
        </form>
      );
  }
  
}

export default Login