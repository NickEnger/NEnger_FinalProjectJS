var path = window.location.pathname;
var page = path.split("/").pop();
var final = page.split(".").shift();
var Name = document.getElementById("Name");

sessionStorage.setItem("final", final);