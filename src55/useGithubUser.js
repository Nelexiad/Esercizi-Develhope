import { useState, useEffect } from "react";

const useGithubUser = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        setData(json);
        if (response.status !== 200) {
          setError("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [username]);

  return {
    data: data,
    error: error,
    loading: loading,
  };
};

export default useGithubUser;
