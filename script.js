console.log('Hello!');
var tableContent = "";
function  addcontent{//change
for (index = 0; index < enteredStrings.length; index++) {
    tableContent += "<tr><td>" + enteredStrings[index] + "</td>"

    + "<td>" + enteredStringsTwo[index] + "</td></tr>";

    nameCounter++;
    total.innerHTML = "Total: " + nameCounter;
}
output.innerHTML = tableContent;
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function addcontact(){
    let numberinput = document.getElementById("mobile").value;
    let emailinput = document.getElementById("name").value;
   let nameinput = document.getElementById("email").value;
    const num=document.getElementById('mobile').innerHTML=numberinput ;
    const email=document.getElementById('name').innerHTML=emailinput ;
    const name=document.getElementById('email').innerHTML=nameinput ;
    console.log(numberinput)
    console.log(emailinput)
    console.log(nameinput)


}