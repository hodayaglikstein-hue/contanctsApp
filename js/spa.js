function navigate(page) {
  const content = document.getElementById("content");
  const template = document.getElementById(page);
  const clone = template.content.cloneNode(true);
  content.innerHTML = "";
  content.appendChild(clone);
  if (page === "signup" || page === "login") {
    content.className = "enter";
  } else {
    content.className = page;
    // buildApp();
    return;
  }
  if (page === "login") {
    checkLogin();
  }
  if (page === "signup") {
    checkSignUp();
  }
}
navigate("login");
// navigate("app");

// function buildApp(){

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
// }

