$(document).ready(function() {
  $("#making-verb").html(randomVerb());
  $("#persev-adj").html(randomAdj());
});

document.getElementById('making-verb').onmouseover = function() {randomVerb()};
document.getElementById('persev-adj').onmouseover = function() {randomAdj()};
document.getElementById('place-made').onmouseover = function() {
  sayWhere();
  document.getElementById('place-made').style.color = "#36417d";
};
document.getElementById('place-made').onmouseout = function() {
  heartOfMidwest();
  document.getElementById('place-made').style.color = "#333333";
};

var verbs = [
  'Assembled',
  'Begotten',
  'Composed',
  'Constructed',
  'Cooked up',
  'Fabricated',
  'Fashioned',
  'Forged',
  'Formed',
  'Invented',
  'Made',
  'Shaped',
  'Spawned',
  'Synthesized',
  'Whipped up',
];
var adjectives = [
  'ardor',
  'candor',
  'chutzpah',
  'constancy',
  'dedication',
  'determination',
  'devotion',
  'drive',
  'excitement',
  'fervor',
  'fortitude',
  'grit',
  'gumption',
  'guts',
  'heart',
  'intensity',
  'joy',
  'love',
  'moxie',
  'nerve',
  'obduracy',
  'passion',
  'perseverance',
  'pleasure',
  'resoluteness',
  'resolve',
  'stamina',
  'tenacity',
  'vigor',
  'zeal',
];
var randomVerb = function() {
  document.getElementById('making-verb').innerHTML = verbs[Math.floor(Math.random()*verbs.length)];
};
var randomAdj = function() {
  document.getElementById('persev-adj').innerHTML = adjectives[Math.floor(Math.random()*adjectives.length)];
};
var sayWhere = function() {
  // document.getElementById('place-made').style.color = "36417d";
  document.getElementById('place-made').innerHTML = "Chicago, Illinois and Dayton, Ohio";
}
var heartOfMidwest = function() {
  document.getElementById('place-made').innerHTML = "the heart of the Midwest";
}


