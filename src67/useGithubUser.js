import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((r) => r.json());
};

const useGithubUser = (username) => {
  const shouldFetch = username !== "";
  const { data, error } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null,
    fetcher,
    { revalidateOnMount: true }
  );

  return { data: data ?? {}, error, loading: !data && !error };
};

export default useGithubUser;
