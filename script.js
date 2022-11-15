// API : https://api.chucknorris.io/jokes/random

let btn = document.querySelector(".btn");

// Added a click event on button
btn.addEventListener("click",randomJoke);

// Button click function
async function randomJoke() {

    let jokeDiv = document.querySelector(".joke");
    
    // fetch data from API.
    let joke = await fetch('https://api.chucknorris.io/jokes/random').then((data)=>{
        return data.json();
    }
    ).catch((error)=>{
        console.log(error);
    });

    jokeDiv.textContent = joke.value;
}