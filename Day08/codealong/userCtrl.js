var users = [
  {
    username: "Steveee",
    password: "steve-O"
  },{
    username: "georgioP ",
    password: "pwPapa12"
  },{
    username: "admin",
    password: "admin"
  }
];


module.exports = function(req,res,next){
  var userFound = false;
  for (var i = 0; i < users.length; i++) {
    if (req.body.username === users[i].username && req.body.password === users[i].password) {
      userFound = true;
      req.session.currentUser = users[i];
      req.session.cookie.maxAge = 60 * 60 * 1000;
    }
  }
  if (userFound) {
    res.send("Logged in yay");
  } else {
    res.send("Username or password not found.");
  }
};
