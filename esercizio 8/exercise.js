function multiplyByTwo(value) {
  let number = 2;
  inner = () => value * number;
  console.log(inner())
}
multiplyByTwo(9)
