// getElementById for element selector

document.getElementById('diceRollerbutton').onclick = diceRoll;

function diceRoll() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var random2 = Math.floor((Math.random() * 6) + 1);
  
  document.getElementById("placeholder1").innerHTML = (random1);
  document.getElementById("placeholder2").innerHTML = (random2);

}

// callback function onclick
   // - random 1-6
   // - print numbers in to placeholder1 and placeholder2 

