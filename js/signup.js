function checkSignUp() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", addToStorage);

  function addToStorage() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const regex = /^[A-Za-z]+$/;
    if (password !== confirmPassword) {
      alert("the passwords aren't the same");
      return false;
    }
    if (userName === "" || password === "") {
      alert("please enter username and password");
      return false;
    }
    if (
      userName.length < 3 ||
      userName.length > 20 ||
      password.length < 4 ||
      password.length > 8
    ) {
      alert(
        "The length of the username need to be between 3 to 20 characters and the length of the password need to be between 3 to 8 characters"
      );
      return false;
    }
    if (!regex.test(userName)) {
      alert("The username can only contain letters ");
    }

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
  }
}
