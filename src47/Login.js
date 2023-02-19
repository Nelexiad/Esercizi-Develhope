import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "remember") {
      setRemember(checked);
    }
    console.log(
      `username: ${username}, psw: ${password}, remember: ${remember}`
    );
  };

  function handleLogin(event) {
    event.preventDefault();
    console.log({ username, password, remember });
  }

  return (
    <form>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='remember'>Remember me:</label>
        <input
          type='checkbox'
          id='remember'
          name='remember'
          checked={remember}
          onChange={handleInputChange}
        />
      </div>
      <div>{username}</div>
      <div>{password}</div>
      <div>{String(remember)}</div>
      <button disabled={!username || !password} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
