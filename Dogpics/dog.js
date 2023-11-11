console.log("hi");

async function getdogs(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const pics= await response.json();
    return pics;
}
let a=getdogs(); //Calling the getdogs function and storing the promise in variable a.

a.then(data => console.log(data)); //Resolving the promise and logging the result to the console

let btn=document.getElementById('btn');

btn.addEventListener('click', async function(){
    let dogsdata= await getdogs();    //Calling the getdogs function when the button is clicked
    document.getElementById('dogimg').src=dogsdata.message;
})
window.addEventListener('DOMContentLoaded', async function(){
    let dogsdata= await getdogs();    //Calling the getdogs function when the button is clicked
    document.getElementById('dogimg').src=dogsdata.message;
    document.getElementById('dogimg').className="img-rounded";
})