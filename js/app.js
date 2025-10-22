function buildApp() {
  const table = document.getElementById("people");
  const add = document.getElementById("add");
  console.log(add);
  add.addEventListener("click", function () {
    navigate("addContact");
  });

  function createTable() {
    table.innerHTML = "";
    table.style.border = "1 solid black";
    const arr1 = ["Name", "Family Name", "Email", "Phone Number"];
    const tr = document.createElement("tr");
    for (let i = 0; i < arr1.length; i++) {
      const th = document.createElement("th");
      th.innerHTML = arr1[i];
      tr.appendChild(th);
    }
    table.appendChild(tr);
    const username = sessionStorage.getItem("nameShow");
    addContacts(username);
  }
  createTable();

  function addContacts(username) {
    console.log("Im in");
    const contacts = JSON.parse(allContacts(username));
    for (let i = 0; i < contacts.length; i++) {
      const tr = document.createElement("tr");
      const values = Object.values(contacts[i]);
      //   console.log(values);
      for (let j = 0; j < values.length; j++) {
        const th = document.createElement("th");
        // console.log(values[i]);
        th.innerHTML = values[j];
        tr.appendChild(th);
      }
      table.appendChild(tr);
    }
  }
}
