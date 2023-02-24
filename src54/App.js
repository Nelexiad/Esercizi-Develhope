import useGithubUser from "./useGithubUser";

const App = () => {
  const { data } = useGithubUser("Nelexiad");

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

export default App;
