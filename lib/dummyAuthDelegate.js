/**
 * Created by vedi on 7/7/14.
 */

var
  util = require('util');

function AuthDelegate() {
}

util.inherits(AuthDelegate, Object);

/**
 * Get user object by login and password
 * @param login
 * @param password
 * @param callback receives user model if found, false - if not found
 */
AuthDelegate.prototype.findUserByLoginAndPassword = function(login, password, callback) {
  return callback(null, {login: "login"});
};

/**
 * Get client object by id and secret
 * @param clientId
 * @param clientSecret
 * @param callback client model if found, false - if not found
 */
AuthDelegate.prototype.findClientByIdAndSecret = function(clientId, clientSecret, callback) {
  return callback(null, {clientId: clientId, clientSecret: clientSecret});
};

/**
 * Get user object by token
 * @param token
 * @param callback receives object containing user model as `obj` and additional `info` object if found, false - if not found
 */
AuthDelegate.prototype.findUserByAccessToken = function(token, callback) {
  return callback(null, {obj: {login: "login"}, info: {}});
};

/**
 * Get user object by refreshToken
 * @param token
 * @param callback receives user model if found, false - if not found
 */
AuthDelegate.prototype.findUserByRefreshToken = function(token, callback) {
  return callback(null, {login: "login"});
};

/**
 * Clean up tokens for user and client
 * @param user
 * @param client
 * @param callback receives no params
 */
AuthDelegate.prototype.cleanUpTokensByUserAndClient = function(user, client, callback) {
  callback();
};

/**
 * Create tokens for user and client
 * @param user
 * @param client
 * @param scope
 * @param tokenValue
 * @param refreshTokenValue
 * @param callback receives no params
 */
AuthDelegate.prototype.createTokensByUserAndClient = function (user, client, scope, tokenValue, refreshTokenValue, callback) {
  callback();
};

/**
 * Get additional token info.
 * @returns {Object} an arbitrary object
 */
AuthDelegate.prototype.getTokenInfo = function () {
  return {};
};

/**
 * Generate token value string.
 * @returns {Object} tokenValue
 */
AuthDelegate.prototype.generateTokenValue = function () {
  return 'xxx';
};

module.exports = AuthDelegate;