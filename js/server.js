function response(request) {
  switch (request.method) {
    case "GET":
      if (request.url.startsWith("users")) {
        let arr = request.url.match(/\d+/g);
        if (!arr) {
          return getAllUsers();
        } else {
          let id = Number(arr[0]);
          return getUserById(id);
        }
      }
      if (request.url.startsWith("contacts")) {
        let arr = request.url.match(/\d+/g);
        if (!arr) {
          return allContacts(sessionStorage.getItem("nameShow"));
        } else {
          let id = Number(arr[0]);
          return getContactById(id);
        }
      } else {
        return "ERROR";
      }
      break;
    case "POST":
      if (request.url.startsWith("users")) {
        updateUserDatabase(request.data);
        return true;
      }
      if (request.url.startsWith("contacts")) {
        newContact(request.data);
        return true;
      } else {
        return "ERROR";
      }
      break;
    case "UPDATE":
      if (request.type === "users") {
      }
      if (request.type === "contacts") {
      } else {
        return "ERROR";
      }
      break;
    case "DELETE":
      if (request.url.startsWith("contacts")) {
        let arr = request.url.match(/\d+/g);
        if (!arr) {
          return "ERROR";
        } else {
          let id = Number(arr[0]);
          deleteContact(id + 1);
        }
      } else {
        return "ERROR";
      }
      break;
    default:
      "ERROR";
  }
}

function updateUserDatabase(user) {
  insertUser(user);
}

function newContact(contact) {
  insertContact(contact, sessionStorage.getItem("nameShow"));
}

function allContacts(username) {
  return getAllContacts(username);
}
