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
    if (!checkIfUserExist(userName, password)) {
      const user = {
        username: userName,
        password: password,
      };
      updateUserDatabase(user);
      sessionStorage.setItem("nameShow", "" + user.username);
      alert("User registered successfully!");
      navigate("login");
    } else {
      alert("Username already exist");
    }
  }
}
