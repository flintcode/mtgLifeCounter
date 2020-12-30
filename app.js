
// player 1
const displayOne = document.querySelector("#counter1");
const incrementPlayerOne = document.querySelector("#plusPlayerOne");
const decrementPlayerOne = document.querySelector("#minusPlayerOne");
const incrFivePlayerOne = document.querySelector("#plusFivePlayerOne");
const decrFivePlayerOne = document.querySelector("#minusFivePlayerOne");



function PlayerOnePlus (){
    return displayOne.value = Number(displayOne.value) + 1;
  }
function PlayerOneMinus  (){
    return displayOne.value -= 1;
}
    incrementPlayerOne.addEventListener("click",PlayerOnePlus);
    decrementPlayerOne.addEventListener("click",PlayerOneMinus);

// incr/decr player one by 5
function PlayerOnePlusFive (){
        return displayOne.value = Number(displayOne.value) + 5;
      }
function PlayerOneMinusFive  (){
        return displayOne.value -= 5;
    }
    incrFivePlayerOne.addEventListener("click",PlayerOnePlusFive);
    decrFivePlayerOne.addEventListener("click",PlayerOneMinusFive);


// player 2
const displayTwo = document.querySelector("#counter2");
const incrementPlayerTwo = document.querySelector("#plusPlayerTwo");
const decrementPlayerTwo = document.querySelector("#minusPlayerTwo");
const incrementFivePlayerTwo = document.querySelector("#plusFivePlayerTwo");
const decrementFivePlayerTwo = document.querySelector("#minusFivePlayerTwo");

// incr/decr player two by 1
function PlayerTwoPlus (){
    return displayTwo.value = Number(displayTwo.value) + 1;
  }
function PlayerTwoMinus (){
    return displayTwo.value -= 1;
  }
    incrementPlayerTwo.addEventListener("click",PlayerTwoPlus)
    decrementPlayerTwo.addEventListener("click",PlayerTwoMinus);

// incr/decr player two by 5

function PlayerTwoPlusFive (){
    return displayTwo.value = Number(displayTwo.value) + 5;
  }
function PlayerTwoMinusFive (){
    return displayTwo.value -= 5;
  }
    incrementFivePlayerTwo.addEventListener("click",PlayerTwoPlusFive)
    decrementFivePlayerTwo.addEventListener("click",PlayerTwoMinusFive);

if (displayOne.value < 0 || displayTwo.value < 0){
        alert ("undefined");
}

function mainBack(){
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/82/32/15/8232157f8d4e09717bf71b9a5e7d2929.jpg')";
}
function blackBack(){
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2805743.jpg')";
}
function redBack(){
    document.body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/002/010/203/large/lidija-raletic-magic-the-gathering-mountain1.jpg?1455908586')";
}
function greenBack(){
    document.body.style.backgroundImage = "url('https://media.magic.wizards.com/images/wallpaper/timbercrown-pathway_sld_1920x1080_wallpaper.jpg')";

}
function blueBack(){
    document.body.style.backgroundImage = "url('https://media.magic.wizards.com/images/wallpaper/tidechannel-pathway_khm_1920x1080_wallpaper_0.jpg')";
}
function whiteBack(){
    document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/011/375/136/large/alayna-lemmer-danner-1-plains.jpg?1529273570')";
}

// background changer
const storeMain = document.querySelector('#main')
const storeBlack = document.querySelector("#black")
const storeRed = document.querySelector('#red');
const storeGreen  = document.querySelector('#green');
const storeBlue  = document.querySelector('#blue');
const storeWhite  = document.querySelector('#white');

storeMain.addEventListener('click',mainBack)
storeBlack.addEventListener("click",blackBack);
storeRed.addEventListener("click",redBack);
storeGreen.addEventListener("click",greenBack);
storeBlue.addEventListener("click",blueBack);
storeWhite.addEventListener("click",whiteBack)