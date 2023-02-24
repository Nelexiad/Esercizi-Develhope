import CarDetails from "./CarDetails";

function App() {
  return (
    <div>
      <CarDetails initialData={{ model: "", year: "", color: "" }} />
    </div>
  );
}

export default App;
