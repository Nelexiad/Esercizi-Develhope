import { useMemo } from "react";

const list = [
  {
    name: "Daniele",
    id: 0,
    age: 26,
  },
  {
    name: "Giorgia",
    id: 1,
    age: 25,
  },
  {
    name: "Roberta",
    id: 2,
    age: 17,
  },
];

function filter() {
  let values = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].age > 18) {
      console.log(list[i]);
      values.push(list[i]);
    }
  }
  return values;
}

const FilteredList = () => {
  const result = useMemo(() => JSON.stringify(filter()), []);
  return <p>{result}</p>;
};

export default FilteredList;
