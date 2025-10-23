function buildApp() {
  nameShow = document.getElementById("name");
  let contacts;

  nameShow.innerHTML = sessionStorage.getItem("nameShow");
  const table = document.getElementById("people");
  const add = document.getElementById("add");
  add.addEventListener("click", function () {
    navigate("addContact");
  });

  function createTable() {
    table.innerHTML = "";
    const arr1 = ["Name", "Family Name", "Email", "Phone Number"];
    const tr = document.createElement("tr");
    for (let i = 0; i < arr1.length; i++) {
      const th = document.createElement("th");
      th.innerHTML = arr1[i];
      tr.appendChild(th);
    }
    table.appendChild(tr);
    const username = sessionStorage.getItem("nameShow");
    const fajax = new Fajax();
    fajax.onload(function (array) {
      addContacts(array);
    });
    fajax.open("GET", "contacts");
    fajax.send();
  }
  createTable();

  function addContacts(contactsArray) {
    const contacts = JSON.parse(contactsArray);
    for (let i = 0; i < contacts.length; i++) {
      console.log(contacts);
      const tr = document.createElement("tr");
      console.log(contacts[i]);
      const values = Object.values(contacts[i]);
      for (let j = 0; j < values.length; j++) {
        const th = document.createElement("th");
        th.innerHTML = values[j];
        tr.appendChild(th);
      }
      table.appendChild(tr);
    }
  }

  // const fajax = new Fajax();
  // fajax.onload(function (m) {
  //   console.log(m);
  //   // console.log(JSON.parse(m));
  // });
  // fajax.open("GET", "contacts");
  // fajax.send();
}
