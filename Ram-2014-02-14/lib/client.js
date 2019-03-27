
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-02-14';
    super(config);
  }

  /**
   * @param {String} UserName - UserName. required.
   * @param {String} Comments - Comments. optional.
   */
  addUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('AddUser', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   * @param {String} PolicyName - PolicyName. required.
   */
  deleteUserPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('DeleteUserPolicy', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   */
  getUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   * @param {String} PolicyName - PolicyName. required.
   */
  getUserPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    return this.request('GetUserPolicy', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   */
  listUserPolicies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('ListUserPolicies', params, options);
  }

  /**
   */
  listUsers(params = {}, options = {}) {
    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   * @param {String} PolicyName - PolicyName. required.
   * @param {String} PolicyDocument - PolicyDocument. required.
   */
  putUserPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    if (!hasOwnProperty(params, 'PolicyDocument')) {
      throw new TypeError('parameter "PolicyDocument" is required');
    }

    return this.request('PutUserPolicy', params, options);
  }

  /**
   * @param {String} UserName - UserName. required.
   */
  removeUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('RemoveUser', params, options);
  }

}

module.exports = Client;
