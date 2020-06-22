
window.addEventListener("load", function(){
    alert("Thank You for Visiting the Luther's Table Open-Mic SignUp");
})

document.querySelector("body").setAttribute("id", "keyEvent");

//Keeps the time updating while page is open
setInterval("timeCheck()", 1000);

function timeCheck(){
    var getDate = new Date();
    document.querySelector("#thisDay").innerHTML = getDate.toLocaleDateString();
    document.getElementById("thisDay").innerHTML += "<br>" + getDate.toLocaleTimeString();

}

var boldenStyle = document.createElement("link");
boldenStyle.setAttribute("href", "ss_insert.css");
boldenStyle.setAttribute("rel", "stylesheet");
document.head.appendChild(boldenStyle);
document.styleSheets[document.styleSheets.length-1].insertRule(
"td.class1{\
    font-weight: bold;\
    }",0);

//Starts new rows
var numberHTML = "<tr>";

//makes the columns with id. class. and/or link names
for(var i = 1; i<=16; i++){
    numberHTML += "<td><a class = " + i +" href = "+ i +".html>" + i + ". </a></td><td id="+i+">-</td></tr><tr>";
}

//puts all items in the table
document.getElementById("table").innerHTML += numberHTML;

//Creates where the names would be stored
var newName = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"];

//Carries old list over between pages
var testName = localStorage.getItem("array"); 

//turns testName into an array without the extra symbols
var newTest = testName.split("[").pop();
newTest = newTest.split("]").shift();
newTest = newTest.replace(/"/g, "'");
newTest = newTest.replace(/'/g, "");
newTest = newTest.split(",");

//Replaces blank items of the first list with filled items of the new list
for (var i = 1; i<=16; i++){
    if(newTest[i-1]!= "-"){
        newName[i-1] = newTest[i-1];
    }
}

for(var i = 1; i <= 16; i++){
    document.getElementById(i).classList.add("class1");
}


var names = document.querySelectorAll(".class1");

for(var i = 0; i<names.length-1; i++){
    if(names.item(i) != "" || names.item(i) != "-"){
       document.styleSheets[document.styleSheets.length-1].insertRule(
      ".class1{\
           font-style: italic;\
           }",1);
       }
}

//var fs = require("fs");
//console.log(fs.readFile("Text1.txt"));

//gets the number they selected
var pos = document.getElementById(sessionStorage.getItem("final"));

//gets their name out of the URL
var name = location.search.split("=").pop();

//Sets the name from the url to its item in the list
newName[sessionStorage.getItem("final")-1] = name;

//Fixes bug of items not returning a -
for(var i = 1; i<= newName.length; i++){
    if(newName[i-1] == undefined || newName[i-1] == null || newName[i-1] == "null" || newName[i-1] == "") {
        document.getElementById(i).innerHTML = "-";
        newName[i-1] = "-";
    }
}

//Prints the array to the table
for (var i =1; i <= newName.length; i++){
    document.getElementById(i).innerHTML = newName[i-1];
}

//Sends the current array to hold between page switch
localStorage.setItem("array", JSON.stringify(newName));

var disabledLinks = ["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"];

//Stores the links to be disabled in a list
for(var i = 1; i<=16; i++){
    if(document.getElementById(i).innerHTML != "-" && disabledLinks[i-1] != i){
        disabledLinks[i-1] = i;
    }
}
//Disables the links
for(var i =1; i<=16; i++){
    if(disabledLinks[i-1] == i){
        document.getElementsByClassName(i).item(0).href = "";
    }
}

var tBody = document.getElementsByTagName("tbody");
var lastChild = tBody.item(1).lastChild;
tBody.item(1).removeChild(lastChild);

var originalValue;
for(var i = 1; i<= 16; i++){
    document.getElementById(i).addEventListener("mouseover", function(){
        originalValue = document.getElementById(event.target.id).innerHTML;
        if(event.target.innerHTML != "-"){
            document.getElementById(event.target.id).innerHTML += " signed up here, if you need to request a switch or removal, please contact our Host or Sound Engineer";
        }
    })
    document.getElementById(i).addEventListener("mouseout", function(){
        document.getElementById(event.target.id).innerHTML = originalValue;
    })
}

var checkKey = function() {
    if(event.shiftKey && event.ctrlKey && event.altKey){
        alert("Congratulations! You found a secret");
    }
};
document.getElementById("keyEvent").addEventListener("keydown", checkKey);