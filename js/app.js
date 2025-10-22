function buildApp() {
  nameShow = document.getElementById("name");
  console.log(nameShow);
  let contacts;

  nameShow.innerHTML = sessionStorage.getItem("nameShow");
  const table = document.getElementById("people");
  const add = document.getElementById("add");
  console.log(add);
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
    addContacts( array);
  });
  fajax.open("GET", "contacts");
  fajax.send();
  }
  createTable();



  function addContacts(contacts) {
    console.log("Im in");
    contacts = JSON.parse(contacts);
    for (let i = 0; i < contacts.length; i++) {
      const tr = document.createElement("tr");
      const values = Object.values(contacts[i]);
      for (let j = 0; j < values.length; j++) {
        const th = document.createElement("th");
        th.innerHTML = values[j];
        tr.appendChild(th);
      }
      table.appendChild(tr);
    }
  }
}
