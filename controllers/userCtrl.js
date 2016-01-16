var users = [
	{
		name: 'Preston McNeil',
		password: 'password1'
	},
	{
		name: 'Ryan Rasmussen',
		password: '$akgfl#'
	},
	{
		name: 'Terri Ruff',
		password: 'hunter2'

	},
	{
		name: 'Lindsey Mayer',
		password: '777mittens777'
	}
];

module.exports = {
  login: function(req, res, next) {
		var name = req.body.userName;
    var pw = req.body.password;
    var userFound = false;
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      // if match found for name and password
      if (user.name == name) {
        if (user.password == pw) {
          req.session.currentUser = user.name;
          userFound = true;
          res.send({userFound: true});
        } else if (user.password !== pw) {
          res.send({password: 'invalid'});
          userFound = true;
        }
      }
    }
    // if user is not found at all, status 404 on response
    if (!userFound) {
      res.status(404).send({userFound: false});
    }
  }
};
