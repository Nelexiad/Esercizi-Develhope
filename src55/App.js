import useGithubUser from "./useGithubUser";

const App = () => {
  const { data, error, loading } = useGithubUser("Nelexiad");

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
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

export default App;
