const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async (event) => {

let usn = event.queryStringParameters.usn;

let url = "https://results.vtu.ac.in/result?usn=" + usn;

let response = await axios.get(url);

let $ = cheerio.load(response.data);

let name = $("#studentName").text();
let sgpa = $("#sgpa").text();

let subjects = [];

$("table tr").each(function(){
   let subject = $(this).find("td:eq(0)").text();
   let result = $(this).find("td:eq(4)").text();

   subjects.push({subject,result});
});

return {
statusCode:200,
body:JSON.stringify({
usn,
name,
sgpa,
subjects
})
};

};
