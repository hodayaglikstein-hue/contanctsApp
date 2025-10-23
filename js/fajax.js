class Fajax {
  constructor() {
    this.request = {};
    this._onload = "";
  }

  open(method, url) {
    switch (method) {
      case "POST":
        this.request.method = "POST";
        break;
      case "GET":
        this.request.method = "GET";
        break;
      case "UPDATE":
        this.request.method = "UPDATE";
        break;
      case "DELETE":
        this.request.method = "DELETE";
        break;
      default:
        return "ERROR";
    }
    this.request.url = url;
  }

  onload(callback) {
    this._onload = callback;
  }

  send(data = {}) {
    this.request.data = data;
    network(this.request, (answer) => {
      if (answer === null) {
        console.error("Error");
      } else {
        this._onload(answer);
      }
    });
  }
}
// const fajax = new Fajax();
// fajax.onload(function (m) {
//   console.log(JSON.parse(m)[0].username);
// });
// fajax.open("GET", "users");
// fajax.send();
