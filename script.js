async function getResult(){

let usn=document.getElementById("usn").value;

let res = await fetch("/.netlify/functions/result?usn="+usn);

let data = await res.json();

document.getElementById("result").innerHTML =
"Name: "+data.name + "<br>SGPA: "+data.sgpa;

}