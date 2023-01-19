const user = {
  id: 1,
  name: "John",
  age: 25,
};

let Juser = JSON.stringify(user);

localStorage.setItem('user', Juser);

function saveUserToL(user) {
  localStorage.setItem("user", JSON.stringify(user));
  return Juser1 = user
}
function printUser() {
  let printedUser = JSON.parse(localStorage.getItem("user"));
  return console.log(printedUser);
  
}
printUser()