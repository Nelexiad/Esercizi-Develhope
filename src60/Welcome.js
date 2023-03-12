import React from "react";

const Welcome = ({ name = "Giorgia" }) => {
  return <p>Welcome, {name}</p>;
};

export default Welcome;
