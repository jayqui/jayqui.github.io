document.getElementById('tedtalk').onmouseover = function() {
  document.getElementById('tedlink').style.color = "#8bb8df";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(0%)";
}
document.getElementById('tedtalk').onmouseleave = function() {
  document.getElementById('tedlink').style.color = "#337AB7";
  document.getElementById('tedlink').style.backgroundColor = "transparent";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(50%)";
}

document.getElementById('tedlink').onmouseover = function() {
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(0%)";
}
document.getElementById('tedlink').onmouseleave = function() {
  document.getElementById('tedlink').style.color = "#337AB7";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(70%)";
}