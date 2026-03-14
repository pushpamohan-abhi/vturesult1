async function getResult(){

let usn=document.getElementById("usn").value;

let res=await fetch("/.netlify/functions/result?usn="+usn);

let data=await res.json();

document.getElementById("result").innerHTML=
"Name: "+data.name+
"<br>SGPA: "+data.sgpa;

}



async function getAnalysis(){

let res=await fetch("/.netlify/functions/analysis");

let data=await res.json();

document.getElementById("analysis").innerHTML=

"Pass Percentage: "+data.passPercentage+
"<br>Average SGPA: "+data.averageSGPA+
"<br>Topper: "+data.topper;

createChart(data);

}



function createChart(data){

new Chart(document.getElementById("chart"),{

type:"bar",

data:{

labels:["Pass %","Average SGPA"],

datasets:[{

label:"CSE Performance",

data:[data.passPercentage,data.averageSGPA],

backgroundColor:["green","blue"]

}]

}

});

}
