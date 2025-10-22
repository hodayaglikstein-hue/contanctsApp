function network(request) {
  setTimeout(function (request) {
    const random = Math.random();
    if (random < 0.1) {
      return console.log("error");
    } else {
      return request;
    }
  }, 3000);
}
