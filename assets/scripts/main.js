var host="lesis.lat"

if (window.location.host == host && window.location.protocol != "https:") {
    window.location.protocol = "https:"
}

var modal = document.getElementById("contactModal");
var btn   = document.getElementById("contactBtn");
var span  = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}