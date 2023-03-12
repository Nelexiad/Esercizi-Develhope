import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
  let { username } = useParams();

  return <div>{username && <h1>{username}</h1>}</div>;
};

export default ShowGithubUser;
