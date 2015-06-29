document.getElementById('tedtalk').onmouseover = function() {
  document.getElementById('tedlink').style.color = "#8bb8df";
  // document.getElementById('tedlink').style.backgroundColor = "rgba(255,255,255,0.25)";
  // document.getElementById('tedtalk').style.backgroundColor = "rgba(255,0,0,0.075)";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(0%)";
}
document.getElementById('tedtalk').onmouseleave = function() {
  document.getElementById('tedlink').style.color = "#337AB7";
  document.getElementById('tedlink').style.backgroundColor = "transparent";
  // document.getElementById('tedtalk').style.backgroundColor = "#B9B9BC";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(50%)";
}

document.getElementById('tedlink').onmouseover = function() {
  // document.getElementById('tedlink').style.color = "rgba(255,255,255,1)"; // why won't this execute?? Workaround: I did it with CSS.
  // document.getElementById('tedtalk').style.backgroundColor = "rgba(255,0,0,0.075)";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(0%)";
}
document.getElementById('tedlink').onmouseleave = function() {
  document.getElementById('tedlink').style.color = "#337AB7";
  // document.getElementById('tedtalk').style.backgroundColor = "#B9B9BC";
  document.getElementById('ted-img').style["-webkit-filter"] = "grayscale(70%)";
}