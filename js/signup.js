function checkSignUp() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", addToStorage);

  function addToStorage() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("the passwords aren't the same");
      return false;
    }
    if (userName === "" || password === "") {
      alert("please enter username and password");
      return false;
    }
    //save all users
    //find user id

    const fajax = new Fajax();
    fajax.onload(function (users) {
      let usersArr = JSON.parse(users);
      if (findUser(usersArr, userName) === true) {
        alert("Username already exist");
      } else {
        const user = {
          username: userName,
          password: password,
        };
        const fajax2 = new Fajax();
        fajax2.onload(function (user) {
          usersArr.push(user);
        });
        fajax2.open("POST", "users");
        fajax2.send(user);
        sessionStorage.setItem("nameShow", "" + user.username);
        alert("User registered successfully!");
        navigate("login");
      }
    });
    fajax.open("GET", "users");
    fajax.send();

    function findUser(users, username) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          return true;
        }
      }
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

    // if (!checkIfUserExist(userName, password)) {
    //   //   const user = {
    //   //     username: userName,
    //   //     password: password,
    //   //   };
    //   //   //
    //   //   updateUserDatabase(user);
    //   //   sessionStorage.setItem("nameShow", "" + user.username);
    //   //   alert("User registered successfully!");
    //   //   navigate("login");
    // } else {
    //   alert("Username already exist");
    // }
  }
}
