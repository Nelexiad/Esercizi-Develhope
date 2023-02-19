import React from "react";

export const Sum = (props, { number = [22, 32, 44, 55] }) => {
  return (
    <div>
      {props.numbers
        ? props.numbers.reduce((a, b) => a + b)
        : number.reduce((a, b) => a + b)}
    </div>
  );
};
