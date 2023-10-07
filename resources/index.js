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

//Phone number appears---------------------------------------------------------------

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



//email appears--------------------------------------------------------------------------------



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


//about photos------------------------------------------------------------------------------------------

    //photo one

let fourth = document.querySelectorAll(".photo_one");

let goAway = function () {
    document.getElementById("bigBoy").style.display = "none";
    document.getElementById("slide").style.display = "none";
    document.getElementById("one").style.display = "flex";

}

let comeBack = function () {
    document.getElementById("bigBoy").style.display= "flex";
    document.getElementById("slide").style.display = "flex";
    document.getElementById("one").style.display = "none";
}

function action (button) {
    button.addEventListener('mouseover', goAway);
    button.addEventListener('mouseout', comeBack);
}

fourth.forEach(action);


  //photo two

  let fifth = document.querySelectorAll(".photo_two");

  let goAwayTwo = function () {
      document.getElementById("bigBoy").style.display = "none";
      document.getElementById("slide").style.display = "none";
      document.getElementById("two").style.display = "flex";
  }
  
  let comeBackTwo = function () {
      document.getElementById("bigBoy").style.display= "flex";
      document.getElementById("slide").style.display = "flex";
      document.getElementById("two").style.display = "none";
  }
  
  function actionTwo (button) {
      button.addEventListener('mouseover', goAwayTwo);
      button.addEventListener('mouseout', comeBackTwo);
  }
  
  fifth.forEach(actionTwo);

    //photo three

let sixth = document.querySelectorAll(".photo_three");

let goAwayThree = function () {
    document.getElementById("bigBoy").style.display = "none";
    document.getElementById("slide").style.display = "none";
    document.getElementById("three").style.display = "flex";
}

let comeBackThree = function () {
    document.getElementById("bigBoy").style.display= "flex";
    document.getElementById("slide").style.display = "flex";
    document.getElementById("three").style.display = "none";
}

function actionThree (button) {
    button.addEventListener('mouseover', goAwayThree);
    button.addEventListener('mouseout', comeBackThree);
}

sixth.forEach(actionThree);


  //photo four

  let seventh = document.querySelectorAll(".photo_four");

  let goAwayFour = function () {
      document.getElementById("bigBoy").style.display = "none";
      document.getElementById("slide").style.display = "none";
      document.getElementById("four").style.display = "flex";
  }
  
  let comeBackFour = function () {
      document.getElementById("bigBoy").style.display= "flex";
      document.getElementById("slide").style.display = "flex";
      document.getElementById("four").style.display = "none";
  }
  
  function actionFour (button) {
      button.addEventListener('mouseover', goAwayFour);
      button.addEventListener('mouseout', comeBackFour);
  }
  
  seventh.forEach(actionFour);

    //photo five

let eighth = document.querySelectorAll(".photo_five");

let goAwayFive = function () {
    document.getElementById("bigBoy").style.display = "none";
    document.getElementById("slide").style.display = "none";
    document.getElementById("five").style.display = "flex";
}

let comeBackFive = function () {
    document.getElementById("bigBoy").style.display= "flex";
    document.getElementById("slide").style.display = "flex";
    document.getElementById("five").style.display = "none";
}

function actionFive (button) {
    button.addEventListener('mouseover', goAwayFive);
    button.addEventListener('mouseout', comeBackFive);
}

eighth.forEach(actionFive);