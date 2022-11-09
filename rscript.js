

// name site 

let headingElm = document.querySelector("h1"); 
let name = prompt("What is your name?");
console.log(headingElm.textContent); //before
headingElm.textContent = name + "'s Recipes !!";
console.log(headingElm.textContent); //after
let recent = null; 

let recipe = document.querySelector("button.rec");
recipe.addEventListener("click", newRecipe);
//let ingredient = document.querySelector("button.ing");
//ingredient.addEventListener("click", getIngredient);

function addToList(content){
    let itemElm = document.createElement("li");
    itemElm.textContent = content;
    itemElm.addEventListener('click', function handleClick(){
        
    });
    let listElm = document.querySelector("ul#" + recent.id);
    listElm.appendChild(itemElm);
}

function getIngredient(){
    let inputElm = document.querySelector( "ul#" + recent.id + " > input");
    //Only add to the list if not empty
    if (inputElm.value !== "") {
        addToList(inputElm.value); 
    }
    else {
        alert("You can’t add a blank item to the list");
    }
    inputElm.value = ""; //clear the input box
}

function newRecipe(){
    let inputElm = document.querySelector("input#ogbutton");

    if (inputElm.value === "") {
         alert("You can’t add a blank recipe");
    }
    else if( document.querySelector("#"+ inputElm.value) ){
        alert("You can’t re-use recipe");
    }
    else {
        newList(inputElm.value); 

    }
    inputElm.value = "";
}

function setRecent(newRecipe){
    if(recent !== newRecipe){
        if(recent){
            recent.classList.remove("recent");
            document.querySelector( "ul#" + recent.id + " > input").classList.add("hidden");
            document.querySelector( "ul#" + recent.id + " > button").classList.add("hidden")

        }
        recent = newRecipe;
        recent.classList.add("recent"); 
        document.querySelector( "ul#" + recent.id + " > input").classList.remove("hidden");
        document.querySelector( "ul#" + recent.id + " > button").classList.remove("hidden")

    } 
    
}

function newList(name){
    let newRecipe = document.createElement("ul");
    newRecipe.classList.add("box"); 
    // 

    newRecipe.textContent = name;
    newRecipe.id = name; 
    let ingBox = document.createElement("input", type = "text"); 
    newRecipe.appendChild(ingBox);

    let ingredient = document.createElement("button",);
    ingredient.innerHTML = "Add Ingredient";
    ingredient.addEventListener("click", getIngredient);
    newRecipe.appendChild(ingredient);


    newRecipe.addEventListener('click', function handleClick(){
        setRecent(newRecipe); 
        
    }); 

    let book = document.querySelector("div.listholder");
    book.appendChild(newRecipe);
    setRecent(newRecipe); 


}
