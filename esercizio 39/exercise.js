const user = {
  id: 1,
  name: "John",
  age: 25,
};

let Juser = JSON.stringify(user);

localStorage.setItem('user', Juser);

function saveUserToL(user) {
  localStorage.setItem("user", JSON.stringify(user));
}