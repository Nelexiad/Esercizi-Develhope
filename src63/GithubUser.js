import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GithubUser = () => {
  const [data, setData] = useState(null);

  let { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.login}</h1>
          <h2>{data.html_url}</h2>
          <img src={data.avatar_url} alt='avatar' />
        </>
      )}
    </div>
  );
};

export default GithubUser;
