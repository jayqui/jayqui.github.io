$(function() {
  var currentVerb = randomVerb();
  var currentAdj = randomAdj();
  $("#making-verb").html(currentVerb);
  $("#persev-adj").html(currentAdj);

  newDistinctVerbOnHover(currentVerb);
  newDistinctAdjOnHover(currentAdj);

  identifyHeartOfMidwestOnMouseEnter();
  backtoHeartOfMidwestOnMouseOut();
});

function findDistinctVerb(currentVerb) {
  var newVerb = randomVerb();
  while (currentVerb == newVerb) {
    newVerb = randomVerb();
  }
  return newVerb;
}
function findDistinctAdj(currentAdj) {
  var newAdj = randomAdj();
  while (currentAdj == newAdj) {
    newAdj = randomAdj();
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

function identifyHeartOfMidwestOnMouseEnter() {
  $("#place-made").on("mouseenter", function(){
    $(this).html("Chicago, Illinois and Dayton, Ohio").css("color", "#36417d");
  });
}
function backtoHeartOfMidwestOnMouseOut() {
  $("#place-made").on("mouseout", function(){
    $(this).html("the heart of the Midwest").css("color", "initial");
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


