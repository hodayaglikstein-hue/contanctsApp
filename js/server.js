function checkIfUserExist(username, password) {
  if (getUser(username) === -1) {
    return false;
  }
  const user = JSON.parse(getUser(username));
  if (user.password != password) {
    return false;
  }
  return true;
}

function checkIfContactExist() {}

function allContacts(username) {
  return getAllContacts(username);
}
