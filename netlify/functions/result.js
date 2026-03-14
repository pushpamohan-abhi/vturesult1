exports.handler = async (event) => {

const usn = event.queryStringParameters.usn;

return {
statusCode: 200,
body: JSON.stringify({
name:"Sample Student",
sgpa:"8.2"
})
};

};