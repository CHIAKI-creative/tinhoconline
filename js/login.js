fetch("../html/login.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("login").innerHTML = data;
    });