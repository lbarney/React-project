//Variables
var name = true;

//Array
var arr = [21, 31, true, "Peter", [1, 2, 3], name, {}, []];

//Object
var monkey = {
  eyes: "Blue",
  bananaCount: 10,
  arms: 3,
  favoriteQuote: "ooh aah",
  mutant: true,
  favoriteFoods: ["bananas", "beer", "whiskey"],
  homeConditions: {
    location: "jungle",
    house: "tree"
  },
  speech: function(quote) {
    console.log(quote);
  }
};

//function

var sum = function(a, b) {
  var added = a + b;
  return added;
};

function sum (a,b) {
  var added = a + b;
  return added;
}

//Invoking functions and methods

monkey.speech(monkey.favoriteQuote);

var addedvalues = sum(21, 34);


//Array Manipulation

var arr = [12, 24, 36, 45];

arr.push(72);
