var thisDay = new Date();
var day = thisDay.toDateString();
document.getElementById("Day").textContent = day;

var date = thisDay.getDay();
var hr = thisDay.getHours();

var newName = localStorage.getItem("array");

if(date == 6 && hr == 18){
    newName = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"];
}

localStorage.setItem("array", newName);