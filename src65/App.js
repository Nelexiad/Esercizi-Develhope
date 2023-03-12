import Welcome from "./Welcome";
import Counter from "./ClickCounter";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import { NotFound } from "./NotFound";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/users/Nelexiad'>Github User</Link>
      <Link to='/users'>Github Users List</Link>
      <Routes>
        <Route path='/' element={<Welcome name='Daniele' />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users/:username' element={<GithubUser />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/users' element={<GithubUserList />}>
          <Route path=':username' element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
