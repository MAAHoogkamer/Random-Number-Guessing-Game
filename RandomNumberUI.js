window.onload = function() {
  txt();
  maxNumShw();
  addNumWin();
}
let nWon=0;
function letsPlay() {
    var x = document.getElementById("lPlay");
      x.style.display = "none";
}
function playAg() {
    var x = document.getElementById("nGame");
    x.style.display = "grid";
    nWon=0;
    maxNum=10;
    var ausgabe3a = document.getElementById("numWonId");
    ausgabe3a.textContent = nWon;
    var ausgabeShwa = document.getElementById("maxNumId");
    ausgabeShwa.textContent = maxNum;
}
function nLevel() {
    var x = document.getElementById("nGame");
    x.style.display = "grid";
    maxNum+=5;
    maxNumShw();
    txt();
}
function notNow() {
    var ausgabe2 = document.getElementById("playQid");
    ausgabe2.textContent = 'Just play the game.';
    var ausgabe2a = document.getElementById("lPlayButt");
    ausgabe2a.textContent = 'Ok...';
    var x1 = document.getElementById("notId");
    x1.style.display = "none";
}
function addNumWin() {
  var ausgabe3 = document.getElementById("numWonId");
    ausgabe3.textContent = nWon;
}
function maxNumShw() {
  var ausgabeShw = document.getElementById("maxNumId");
    ausgabeShw.textContent = maxNum;
}
function youWin() {
    var x2 = document.getElementById("nGame");
      x2.style.display = "none";
}
