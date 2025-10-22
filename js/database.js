const users = localStorage.getItem("users") || "[]";

function getAllContacts(username) {
  return localStorage.getItem(username) || "[]";
}

function getAllUsers() {
  return localStorage.getItem("users") || "[]";
}

//contact = object
function insertContact(contact, username) {
  const contacts = JSON.parse(getAllContacts(username));
  contacts.push(contact);
  localStorage.setItem(username, JSON.stringify(contacts));
}

function insertUser(user) {
  const users = JSON.parse(getAllUsers());
  users.push(user);
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

function getUserById(id) {
  const users = JSON.parse(getAllUsers());
  let user = user[id - 1];
  return user;
}

function getContactById(id) {
  const contacts = JSON.parse(
    getAllContacts(sessionStorage.getItem("nameShow"))
  );
  let contact = contacts[id - 1];
  return contact;
}

function getContact(name, username) {
  const contacts = JSON.parse(getAllContacts(username));
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
//   name: "bob",
//   lm: "bobi",
//   email: "bla@gmail.com",
//   phoneNum: "0528317658",
// };

// insertContact(c, "bla");
// console.log(JSON.parse(getAllContacts()));
// let cc = getContact("bob");
// console.log(cc);
