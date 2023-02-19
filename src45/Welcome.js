import React from "react";
import Age from "./Age";

function Welcome({ name = "Dan", age }) {
  return (
    <div className='welcome'>
      <p>Welcome {name}</p>
      {age >= 18 ? <Age age={age} /> : <p>too young</p>}
    </div>
  );
}

export default Welcome;
