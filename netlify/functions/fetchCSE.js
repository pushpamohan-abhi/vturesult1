const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async () => {

let students=[];

for(let i=115;i<=172;i++){

let num = i.toString().padStart(3,"0");
let usn = "1HK24CS"+num;

try{

let url=`https://results.vtu.ac.in/result?usn=${usn}`;

let response = await axios.get(url);

let $ = cheerio.load(response.data);

let name=$("#studentName").text();
let sgpa=$("#sgpa").text();

students.push({
usn,
name,
sgpa
});

}catch(err){
console.log("skip",usn);
}

}

return{
statusCode:200,
body:JSON.stringify(students)
};

};
