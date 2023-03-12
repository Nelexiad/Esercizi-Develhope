import useSWR from "swr";
import { useCallback } from "react";

const fetcher = (url) => {
  return fetch(url).then((r) => r.json());
};

const useGithubUser = (username) => {
  const shouldFetch = username !== "";
  const { data, error, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null,
    fetcher,
    { revalidateOnMount: true }
  );

  const refetch = useCallback(() => {
    mutate();
  }, [mutate]);

  return { data: data ?? [], error, loading: !data && !error, refetch };
};

export default useGithubUser;
