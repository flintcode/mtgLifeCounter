
// player 1
const displayOne = document.querySelector("#counter1");
const incrementPlayerOne = document.querySelector("#plusPlayerOne");
const decrementPlayerOne = document.querySelector("#minusPlayerOne");

function PlayerOnePlus (){
    return displayOne.value = Number(displayOne.value) + 1;
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
    return displayTwo.value = Number(displayTwo.value) + 1;
  }
function PlayerTwoMinus (){
    return displayTwo.value -= 1;
  }
    incrementPlayerTwo.addEventListener("click",PlayerTwoPlus)
    decrementPlayerTwo.addEventListener("click",PlayerTwoMinus);

if (displayOne.value < 0 || displayTwo.value < 0){
        alert ("undefined");
}

function blackBack(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/424/magic-the-gathering-mtg-wallpaper-hd-1680x1050-455383.jpg')";
}
function redBack(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/424/magic-the-gathering-mtg-wallpaper-hd-1680x1050-455383.jpg')";
}
function greenBack(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/424/magic-the-gathering-mtg-wallpaper-hd-1680x1050-455383.jpg')";
}
function blueBack(){
    document.body.style.backgroundImage = "url('https://media.magic.wizards.com/images/wallpaper/tidechannel-pathway_khm_1920x1080_wallpaper_0.jpg')";
}
function whiteBack(){
    document.body.style.backgroundImage = "url('https://wallpapermemory.com/uploads/424/magic-the-gathering-mtg-wallpaper-hd-1680x1050-455383.jpg')";
}

// background changer
const storeBlack = document.querySelector("#black")
const storeRed = document.querySelector('#red');
const storeGreen  = document.querySelector('#greeb');
const storeBlue  = document.querySelector('#blue');
const storeWhite  = document.querySelector('#white');


storeBlack.addEventListener("click",blackBack);
storeRed.addEventListener("click",redBack);
storeGreen.addEventListener("click",greenBack);
storeBlue.addEventListener("click",blueBack);
storeWhite.addEventListener("click",whiteBack)