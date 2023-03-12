import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome name='Daniele' />} />
    </Routes>
  );
};

export default App;
