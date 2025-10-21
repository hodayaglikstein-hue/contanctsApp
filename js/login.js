function checkLogin() {
  const button = document.getElementById("submit1");
  button.addEventListener("click", check);

  function check() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (checkIfUserExist(userName, password)) {
      alert("Logged in successfully");
      sessionStorage.setItem("nameShow", " " + userName);
      navigate("app");
      return;
    }

    alert("Incorrect");
  }
}
