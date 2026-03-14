function analyze(students){

let pass = students.filter(s=>s.sgpa>0).length;

let passPercentage = (pass/students.length)*100;

let average =
students.reduce((a,b)=>a+parseFloat(b.sgpa),0)/students.length;

let topper =
students.sort((a,b)=>b.sgpa-a.sgpa)[0];

return{
passPercentage,
averageSGPA:average,
topper
};

}
