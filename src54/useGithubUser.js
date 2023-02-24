import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [username]);

  return {
    data: data,
  };
};

export default useGithubUser;
