var food1 = {
  foodGroup: ["meat","grain"],
  name: "sushi",
  needsToBeCooked: false,
  description: "Raw Fish, Delicious provided that you are at a legit establishment",
  cost: "$9",
  organic: true
}

var food2 = {
  foodGroup: "vegetable or a fruit depending on who you ask",
  name: "eggplant",
  needsToBeCooked: true,
  description: "Purple!!!!",
  cost: "$2",
  organic: true
}

var Food = function(foodGroup, name, needsToBeCooked, description, cost, organic) {
  this.foodGroup = foodGroup;
  this.name = name;
  this.needsToBeCooked = needsToBeCooked;
  this.description = description;
  this.cost = cost;
  this.organic = organic;
};

var sushi = new Food(["meat", "grain"], "sushi", false, "Raw fish", "$9", true);
var eggplant = new Food("vegetable", "eggplant", true, "purple", "$2", true);
