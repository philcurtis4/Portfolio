//function that will make icons bigger when hovered over

let first = document.querySelectorAll('.contact');


let bigger = function (event){
    event.target.style.maxHeight = "10rem";
}

let normal = function (event){
    event.target.style.maxHeight = "8rem";
}



let changeSize = function(button) {
    button.addEventListener('mouseover', bigger);
    button.addEventListener('mouseout', normal);
}

first.forEach(changeSize);

//Phone number appears

let second = document.querySelectorAll(".appear_three");


let pop = function () {
    document.getElementById("hover-three").style.display = "flex";
}

let unpop = function () {
    document.getElementById("hover-three").style.display = "none";
}



let appear = function(button) {
    button.addEventListener('mouseover', pop);
    button.addEventListener('mouseout', unpop);
}

second.forEach(appear);



//email appears



let third = document.querySelectorAll(".appear_one");


let popTwo = function () {
    document.getElementById("hover-one").style.display = "flex";
}

let unpopTwo = function () {
    document.getElementById("hover-one").style.display = "none";
}



let appearTwo = function(button) {
    button.addEventListener('mouseover', popTwo);
    button.addEventListener('mouseout', unpopTwo);
}

third.forEach(appearTwo);