import React from "react";

const Welcome = ({ name = "Danilo" }) => {
  return <p>Welcome, {name}</p>;
};

export default Welcome;
