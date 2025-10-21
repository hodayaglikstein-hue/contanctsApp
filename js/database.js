// const users = localStorage.getItem("users") || "[]";

function getAllContacts() {
  return localStorage.getItem("contacts") || "[]";
}

//contact = object
function insertContact(contact) {
  const contacts = JSON.parse(getAllContacts());
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function getContact(name) {
  const contacts = JSON.parse(getAllContacts());
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      return contacts[i];
    }
  }
  return "Contact not exist";
}

// function updateContact(name, edit) {

// }

let c = {
  id: 2,
  name: "bob",
  phoneNum: "0528317658",
};

// insertContact(c);
// console.log(JSON.parse(getAllContacts()));
let cc = getContact("bob");
console.log(cc);
