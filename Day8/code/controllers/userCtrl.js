var userlist = require('./users'); //call in user list

module.exports = { //manually setup login - DO NOT DO THIS IN THE REAL WORLD
	login: function(req, res, next ) {
		var userFound = false;
    userlist.users.forEach(function(user){ //Check to see if they are on the list
      if (user.username === req.body.username && user.password === req.body.password) {
        req.session.currentUser = user; //if so currentuser set on sessions
        userFound = true;
      }
    })
		if (userFound) { //note to user
			res.send({ userFound: true });
		} else {
			res.send({ userFound: false });
		}
	}
}
