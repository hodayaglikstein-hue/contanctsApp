function addContact() {
  nameShow = document.getElementById("name");
  nameShow.innerHTML = sessionStorage.getItem("nameShow");
  const logo = document.getElementById("imgpeople");
  logo.addEventListener("click", function () {
    navigate("app");
  });
  const logout = document.getElementById("logouti");

  logout.addEventListener("click", function () {
    sessionStorage.clear();
    nameShow.innerHTML = "";
    navigate("login");
  });
  const add = document.getElementById("addNew");
  add.addEventListener("click", addNewContact);
  function addNewContact() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenumber").value;
    const regex = /^[^@]+@[^@]+\.[^@]+$/;
    const regex2 = /^[A-Za-z]+$/;

    if (firstname === "" || lastname === "" || email === "" || phone === "") {
      alert("please fill everything");
      return;
    }
    if (
      firstname.length < 3 ||
      firstname.length > 20 ||
      lastname.length < 3 ||
      lastname.length > 20 ||
      phone.length != 10 ||
      !regex.test(email)
    ) {
      alert("Something is worng");
      return;
    }
    if (!regex2.test(firstname) || !regex2.test(lastname)) {
      alert("The firstname and lastname can only contain letters ");
      return;
    } else {
      const contact = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
      };
      const fajax = new Fajax();
      fajax.onload(function (contacts) {
        console.log(contacts);
      });
      fajax.open("POST", "contacts");
      fajax.send(contact);
      navigate("app");
    }
  }
}
