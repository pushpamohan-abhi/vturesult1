exports.handler = async () => {

let students=[

{usn:"1BI21CS001",sgpa:8.5},
{usn:"1BI21CS002",sgpa:7.2},
{usn:"1BI21CS003",sgpa:9.1},
{usn:"1BI21CS004",sgpa:6.4}

];

let pass=students.filter(s=>s.sgpa>0).length;

let passPercentage=(pass/students.length)*100;

let averageSGPA=

students.reduce((a,b)=>a+b.sgpa,0)/students.length;

let topper=

students.sort((a,b)=>b.sgpa-a.sgpa)[0].usn;

return{

statusCode:200,

body:JSON.stringify({

passPercentage,

averageSGPA,

topper

})

};

};
