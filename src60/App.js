import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Alessandro' />} />
    </Routes>
  );
};

export default App;
