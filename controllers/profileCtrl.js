var profiles = [
	{
		name: 'Preston McNeil',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
		status: 'Everything is bigger in Texas',
		friends: ['Lindsey Mayer', 'Terri Ruff']
	},
	{
		name: 'Ryan Rasmussen',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
		status: 'RR Rules',
		friends: ['Lindsey Mayer']
	},
	{
		name: 'Terri Ruff',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
		status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??',
    friends: ['Lindsey Mayer', 'Preston McNeil']
	},
	{
		name: 'Lindsey Mayer',
		pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
		status: 'OMG MITTENS DID THE CUTEST THING TODAY',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
	}
];

module.exports = {
  getFriendsForCurrUser: function(req, res, next) {
    var currUser = req.session.currentUser;
    var userFound = false;
    if (!currUser) {
      res.sendStatus(401);
    } else if (currUser) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].name === currUser) {
          userFound = true;

          var resObj = {
            currentUser: currUser,
            friends: []
          };

          var friendsArr = profiles[i].friends;
          for (var j = 0; j < profiles.length; j++) {
            if (friendsArr.indexOf(profiles[j].name) > -1) {
              resObj.friends.push(profiles[j]);
            }
          }

          res.send(resObj);
        }
      }
    } else if (!userFound) {
      res.sendStatus(404);
    }
  }
};
