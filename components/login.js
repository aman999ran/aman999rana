
  document.querySelector("form").addEventListener("submit", log);
  var loginData = JSON.parse(localStorage.getItem("data"));

  function log(event) {
    event.preventDefault();
    // alert("aman")
    var email = document.querySelector("#mail").value;
    var pass = document.querySelector("#pass").value;
    // console.log(email);

    for (var i = 0; i < loginData.length; i++) {
      console.log(loginData[i].el);
      console.log(loginData[i].pd);

      if (loginData[i].el == email && loginData[i].pd == pass) {
        window.location.href = "home.html";
      }
    }
  }

