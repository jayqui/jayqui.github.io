document.addEventListener('DOMContentLoaded', function() {
  var currentVerb = randomVerb();
  var currentAdj = randomAdj();
  document.getElementById('making-verb').innerHTML = currentVerb;
  document.getElementById('persev-adj').innerHTML = currentAdj;

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
  var makingVerbElem = document.getElementById('making-verb');
  makingVerbElem.addEventListener('mouseover', function() {
    var newVerb = findDistinctVerb(currentVerb);
    this.innerHTML = newVerb;
    currentVerb = newVerb;
  });
}
function newDistinctAdjOnHover(currentAdj) {
  var persevAdjElem = document.getElementById('persev-adj');
  persevAdjElem.addEventListener('mouseover', function() {
    var newAdj = findDistinctAdj(currentAdj);
    this.innerHTML = newAdj;
    currentAdj = newAdj;
  });
}

function identifyHeartOfMidwestOnMouseEnter() {
  var placeMadeElem = document.getElementById('place-made');
  placeMadeElem.addEventListener('mouseenter', function() {
    this.innerHTML = 'Chicago, Illinois and Dayton, Ohio';
    this.style.color = '#36417d';
  });
}
function backtoHeartOfMidwestOnMouseOut() {
  var placeMadeElem = document.getElementById('place-made');
  placeMadeElem.addEventListener('mouseout', function() {
    this.innerHTML = 'the heart of the Midwest';
    this.style.color = '';
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


