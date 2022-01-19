console.log("script.js");


const form = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
// console.log("search",search);

form.addEventListener('submit',(e) => {
    e.preventDefault();
    message1.textContent = search.value;
    console.log(search.value);
    message2.textContent = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log("fetching data")
    
        response.json().then((result) => {
            if(result.error){
                console.log("error",result.error)
            }
            else{
                console.log("result",result);
                message2.textContent = JSON.stringify(result);
            }
        })
    })
})
