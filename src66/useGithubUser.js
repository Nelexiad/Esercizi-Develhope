import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((r) => r.json());
};

const useGithubUser = (username) => {
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return { data: data ?? [], error, loading: !data && !error };
};

export default useGithubUser;
