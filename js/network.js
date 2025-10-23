function network(request, callback) {
  setTimeout(function () {
    const random = Math.random();
    if (random < 0.05) {
      callback(alert("Network Error"));
    } else {
      callback(response(request));
    }
  }, 1000);
}
