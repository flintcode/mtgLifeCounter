
// player 1
const displayOne = document.querySelector("#counter1");
const incrementPlayerOne = document.querySelector("#plusPlayerOne");
const decrementPlayerOne = document.querySelector("#minusPlayerOne");



function PlayerOnePlus (){
  return displayOne.value += 1;
}
function PlayerOneMinus  (){
  return displayOne.value -= 1;
}

    incrementPlayerOne.addEventListener("click",PlayerOnePlus);
    decrementPlayerOne.addEventListener("click",PlayerOneMinus);


// player 2
const displayTwo = document.querySelector("#counter2");
const incrementPlayerTwo = document.querySelector("#plusPlayerTwo");
const decrementPlayerTwo = document.querySelector("#minusPlayerTwo");

function PlayerTwoPlus (){
    return displayTwo.value += 1;
  }

function PlayerTwoMinus (){
    return displayTwo.value -= 1;
  }

    incrementPlayerTwo.addEventListener("click",PlayerTwoPlus)
    decrementPlayerTwo.addEventListener("click",PlayerTwoMinus);

if (displayOne.value < 0 || displayTwo.value < 0){
        alert ("undefined");
}