class Fajax {
  constructor() {
    this.request = {};
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

  send(data = {}) {
    this.data = data;
    const res = response(this.request);
  }
}
const fajax = new Fajax();
fajax.onload = function (response) {
  if (this.status === 200) {
    console.log("y");
  } else {
    console.log("g");
  }
};
fajax.open("GET", "users");
fajax.send();
console.log(res);
