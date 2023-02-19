import React, { useEffect, useState } from "react";

const GithubUser = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState();
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

      <h2>
        ciao stai cercando il github user {user} che si è registrato da{" "}
        {data.location}
      </h2>
    </div>
  );
};
export default GithubUser;
