import React, { useEffect, useState } from "react";

const GithubUser = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    const fecthing = async () => {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();
      setData(json);

      console.log(json);
    };
    fecthing();
  }, [user]);
  const handleUserChoise = (evt) => {
    setUser(evt.target.value);
  };
  return (
    <div>
      <input onChange={handleUserChoise} type='text' />

      <div>
        {data.id && data.location && (
          <h2>
            ciao stai cercando il github user {user} che si è registrato da{" "}
            {data.location} puoi raggiungerlo con questo link {data.html_url}
          </h2>
        )}
        {data.id && !data.location && (
          <h2>
            ciao stai cercando il github user {user} puoi raggiungerlo con
            questo link {data.html_url}
          </h2>
        )}
      </div>
    </div>
  );
};
export default GithubUser;
