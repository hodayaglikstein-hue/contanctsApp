function buildApp() {
  nameShow = document.getElementById("name");
  let contacts;

  nameShow.innerHTML = sessionStorage.getItem("nameShow");
  const table = document.getElementById("people");
  const add = document.getElementById("add");
  const logout = document.getElementById("logoutid");
  add.addEventListener("click", function () {
    navigate("addContact");
  });
  logout.addEventListener("click", function () {
    sessionStorage.clear();
    nameShow.innerHTML = "";
    navigate("login");
  });

  function createTable() {
    table.innerHTML = "";
    const arr1 = ["Name", "Family Name", "Email", "Phone Number", ""];
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
      const tr = document.createElement("tr");
      const values = Object.values(contacts[i]);
      const deleteButton = document.createElement("button");
      deleteButton.id = i;
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        deleteFromContacts(this.id);
      });
      for (let j = 0; j < values.length; j++) {
        const td = document.createElement("td");
        td.innerHTML = values[j];
        tr.appendChild(td);
      }
      const tdButton = document.createElement("td");
      tdButton.appendChild(deleteButton);
      tr.appendChild(tdButton);
      table.appendChild(tr);
    }
  }

  function deleteFromContacts(deleteButtonId) {
    const fajax = new Fajax();
    fajax.onload(function () {
      createTable();
    });
    fajax.open("DELETE", "contacts/" + deleteButtonId);
    fajax.send();
  }
}
