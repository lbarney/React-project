//Closures

var flower = "red";
var plant = "basil"

var ladybug = function(plant) {
  var flower = "red";
  return function(bug) {
    var message = "Yummy!" + flower + plant + " is the " + bug + "s favorite food!";
    return message;
  };
};

var pollinate = ladybug("basil");
pollinate("potato bug");


--> plant --> basil
--> flower = "red"
--> "Yummy! Red basil is the potato bugs favorite food!"


//Callbacks

//library name is manipfns
var pusher = function(arr, num) {
  var newarr = arr.push(num);
  return newarr;
};

var unshifter = function(arr, num) {
  var newarr = arr.unshift(num);
  return newarr;
}




var arrManipulator = function(arr, num, callback) {
  return callback(arr, num);
}

var newarr = arrManipulator([1,2,3], 5, unshifter);
