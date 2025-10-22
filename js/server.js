


function checkIfUserExist(username, password) {
  if (getUser(username) === -1) {
    return false;
  }
  const user = getUser(username);
  if (user.password != password) {
    return false;
  }
  return true;
}

function updateUserDatabase(user) {
  insertUser(user);
}

function newContact(contact) {
  console.log("Im here");
  insertContact(contact, sessionStorage.getItem("nameShow"));
}

function allContacts(username) {
  return getAllContacts(username);
}
