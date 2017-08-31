// const passport = require('passport');

// const root = '/api/v1/';

// const auth = require('../lib/auth');
// const user = require('./user');
// const ping = require('./ping');

module.exports = function(app) {

    // app.route(root + 'signup')
    //     .post(user.signUp);

    // app.route(root + 'signin')
    //     .post(passport.authenticate('local'), user.signIn);
    
    // app.route('/ping')
    //     .get(auth, ping.ping)
    
    app.route('/ping')
      .all(function(req, res, next) {
        res.send('pong');
      })

    app.route('/')
      .all(function(req, res, next) {
        res.send('200 OK');
      })

}
