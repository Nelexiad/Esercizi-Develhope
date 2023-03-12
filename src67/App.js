import useGithubUser from "./useGithubUser";

const App = () => {
  const { data, error, loading } = useGithubUser("Nelexiad");

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>An error has occurred</div>}
      {data && !error && (
        <>
          <h1>{data.login}</h1>
          <h2>{data.html_url}</h2>
          <img src={data.avatar_url} alt='avatar' />
        </>
      )}
    </div>
  );
};

export default App;
