// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '137506010320031', // your App ID
		'clientSecret' 	: '37c02420625019bb87f60cbb935685ce', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'MSdvlixzCMhkmaoGNtRk83Ryl',
		'consumerSecret' 	: 'nctAgm780FhR0tgLOk6A582opXvFjYXkLTuPjHNfKzAMsiUqeI',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '656346168053-anoch56oufcd1teej328cf948p9hgh1d.apps.googleusercontent.com',
		'clientSecret' 	: 'YJZG9WJIqr20ZMC3ZXtEjMIM',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};