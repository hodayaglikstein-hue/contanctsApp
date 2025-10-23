function network(request, callback) {
  setTimeout(function () {
    const random = Math.random();
    if (random < 0.1) {
      callback(alert("Network Error"));
    } else {
      callback(response(request));
    }
  }, 2000);
}
