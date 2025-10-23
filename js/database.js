function getAllContacts(username) {
  return localStorage.getItem(username) || "[]";
}

function getAllUsers() {
  return localStorage.getItem("users") || "[]";
}

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
  let user = users[id - 1];
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
  let contacts = [];
  contacts = JSON.parse(getAllContacts(sessionStorage.getItem("nameShow")));
  contacts.splice(contactId - 1, 1);
  localStorage.setItem(
    sessionStorage.getItem("nameShow"),
    JSON.stringify(contacts)
  );
}
