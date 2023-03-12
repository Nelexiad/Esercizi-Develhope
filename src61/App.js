import Welcome from "./Welcome";
import Counter from "./ClickCounter";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Alessandro' />} />
      <Route path='/counter' element={<Counter />} />
    </Routes>
  );
};

export default App;
