if (typeof(Storage) !== "undefined") {
  // Store
  //localStorage.setItem("lastname", "Smith");
  sessionStorage.setItem("lastname", "Smith");
  // Retrieve
  //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}