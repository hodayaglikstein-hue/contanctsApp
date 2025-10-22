function addContact() {
  const add = document.getElementById("addNew");
  add.addEventListener("click", addNewContact);
  function addNewContact() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenumber").value;

    if (firstname === "" || lastname === "" || email === "" || phone === "") {
      alert("please fill everything");
    } else {
      const contact = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
      };

      newContact(contact);
      navigate("app");
    }
  }
}
