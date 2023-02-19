import React from "react";

export const Sum = (props) => {
  return <div>{props.numbers.reduce((a, b) => a + b)}</div>;
};
