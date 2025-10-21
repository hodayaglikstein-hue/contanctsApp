const users = localStorage.getItem("users") || "[]";

function getAllContacts() {
  return localStorage.getItem("contacts") || "[]";
}

function getAllUsers() {
  return localStorage.getItem("users") || "[]";
}

//contact = object
function insertContact(contact) {
  const contacts = JSON.parse(getAllContacts());
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function insertUser(username) {
  const users = JSON.parse(getAllUsers());
  users.push(username);
  localStorage.setItem("users", JSON.stringify(users));
}

function getUser(username) {
  const users = JSON.parse(getAllUsers());
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      return users[i];
    }
  }
  return -1;
}

function getContact(name) {
  const contacts = JSON.parse(getAllContacts());
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i];
    }
  }
  return -1;
}

// function updateContact(name, edit) {

// }

// let c = {
//   id: 2,
//   name: "bob",
//   email: "",
//   phoneNum: "0528317658",
// };

// insertContact(c);
// console.log(JSON.parse(getAllContacts()));
// let cc = getContact("bob");
// console.log(cc);
