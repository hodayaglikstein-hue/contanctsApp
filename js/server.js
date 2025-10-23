// console.log(response({ method: "GET", url: "users" }));
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
      if (request.type === "users") {
      }
      if (request.type === "contacts") {
        if (request.url.startsWith("contacts")) {
          let arr = request.url.match(/\d+/g);
          if (!arr) {
            return "ERROR";
          } else {
            let id = Number(arr[0]);
            //give id for each delete (starting from 0) and then get the
            // id from the delete and delete the contact with the same id

            //OR
            //get the array of the button (with the same class which I will add in js)
            //and then just delete the contact with the same id
          }
        } else {
          return "ERROR";
        }
      } else {
        return "ERROR";
      }
      break;
    default:
      "ERROR";
  }
  // prosses the request
}

// function checkIfUserExist(username, password) {
//   if (getUser(username) === -1) {
//     return false;
//   }
//   const user = getUser(username);
//   if (user.password != password) {
//     return false;
//   }
//   return true;
// }

function updateUserDatabase(user) {
  insertUser(user);
}

function newContact(contact) {
  insertContact(contact, sessionStorage.getItem("nameShow"));
}

function allContacts(username) {
  return getAllContacts(username);
}
