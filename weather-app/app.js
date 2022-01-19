const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/posts'
request({url: url},(error, response) => {
    const data = JSON.parse(response.body);
    console.log("response",data);
})