import { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

const GithubUserList = () => {
  const { username } = useParams();
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleAddUsername = async () => {
    const response = await fetch(`https://api.github.com/users/${newUsername}`);
    if (response.status == 200) {
      const data = await response.json();
      setUsernames([...usernames, data.login]);
    }
    setNewUsername("");
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={newUsername}
          onChange={handleNewUsernameChange}
        />
        <button onClick={handleAddUsername}>Add</button>
      </div>
      {usernames.map((username) => (
        <Link to={`/users/${username}`}>{username}</Link>
      ))}
      <Outlet />
    </div>
  );
};

export default GithubUserList;
