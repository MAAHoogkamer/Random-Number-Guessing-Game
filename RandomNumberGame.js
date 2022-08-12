var gNum;
var maxNum = 10;
function txt(){
  gNum = Math.floor(Math.random() * maxNum)+1;
}
let shwZ = 0;
function shwTxt(){
  if (shwZ == 0) {
    var ausgabe1 = document.getElementById("kanone");
      ausgabe1.textContent = gNum;
      shwZ = 1;
  } else {
    var ausgabe1 = document.getElementById("kanone");
      ausgabe1.textContent = '';
      shwZ = 0;
  }
  }

function askNum() {
  for (countN = 1; countN <=6; countN++) {
    if (countN <=5){
      var aNum = prompt('Please enter a number between 0-'+maxNum+'\nGuessing try number: '+countN);
      if (aNum == gNum)
      {
        nWon++;
        alert('Well done!\nNumber of tries: '+countN);
        youWin();
        addNumWin();
        break;
      }
      else if (aNum > gNum)
      {
        alert('Too heigh!');
      }
      else if (aNum == null)
      {
      break;
      }
      else if (aNum =="")
      {
        alert('Please enter a number...');
        countN --;
      }
      else if (aNum < gNum)
      {
        alert('Too low!');
      }
    }
  else if (countN > 5){
    alert('Too many tries.............');
  }
}
}
