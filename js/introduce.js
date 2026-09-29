fetch("../html/introduce.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("introduce").innerHTML = data;
    });