$(function() {
  var currentVerb = randomVerb();
  var currentAdj = randomAdj();
  $("#making-verb").html(currentVerb);
  $("#persev-adj").html(currentAdj);
  newDistinctVerbOnHover(currentVerb);
  newDistinctAdjOnHover(currentAdj);
});

document.getElementById('place-made').onmouseover = function() {
  sayWhere();
  document.getElementById('place-made').style.color = "#36417d";
};
document.getElementById('place-made').onmouseout = function() {
  heartOfMidwest();
  document.getElementById('place-made').style.color = "#333333";
};

function findDistinctVerb(currentVerb) {
  var newVerb = randomVerb();
  while (currentVerb == newVerb) {
    newVerb = randomVerb();
  }
  return newVerb;
}
function findDistinctAdj(currentAdj) {
  var newAdj = randomAdj();
  console.log("outside", currentAdj, newAdj);
  while (currentAdj == newAdj) {
    console.log("inside-1", currentAdj, newAdj);
    newAdj = randomAdj();
    console.log("inside-2", currentAdj, newAdj);
  }
  return newAdj;
}
function newDistinctVerbOnHover(currentVerb) {
  $("#making-verb").on("mouseover",function() {
    var newVerb = findDistinctVerb(currentVerb);
    $(this).html(newVerb);
    currentVerb = newVerb;
  });
}
function newDistinctAdjOnHover(currentAdj) {
  $("#persev-adj").on("mouseover",function() {
    var newAdj = findDistinctAdj(currentAdj);
    $(this).html(newAdj);
    currentAdj = newAdj;
  });
}

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
  return verbs[Math.floor(Math.random()*verbs.length)];
};
var randomAdj = function() {
  return adjectives[Math.floor(Math.random()*adjectives.length)];
};
var sayWhere = function() {
  document.getElementById('place-made').innerHTML = "Chicago, Illinois and Dayton, Ohio";
}
var heartOfMidwest = function() {
  document.getElementById('place-made').innerHTML = "the heart of the Midwest";
}


