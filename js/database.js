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

function deleteContact(contactId) {
  console.log(getAllContacts(sessionStorage.getItem("nameShow")));
  console.log(contactId + " hello");
  let contacts = [];
  contacts = JSON.parse(getAllContacts(sessionStorage.getItem("nameShow")));
  console.log(contacts);
  contacts.splice(contactId - 1, 1);
  localStorage.setItem(
    sessionStorage.getItem("nameShow"),
    JSON.stringify(contacts)
  );
}
