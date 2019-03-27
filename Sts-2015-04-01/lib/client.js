
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-01';
    super(config);
  }

  /**
   * @param {Long} DurationSeconds - DurationSeconds. optional.
   * @param {String} Policy - Policy. optional.
   * @param {String} RoleArn - RoleArn. required.
   * @param {String} RoleSessionName - RoleSessionName. required.
   */
  assumeRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'RoleSessionName')) {
      throw new TypeError('parameter "RoleSessionName" is required');
    }

    return this.request('AssumeRole', params, options);
  }

  /**
   * @param {Long} DurationSeconds - DurationSeconds. optional.
   * @param {String} Policy - Policy. optional.
   * @param {String} RoleArn - RoleArn. required.
   * @param {String} RoleSessionName - RoleSessionName. required.
   * @param {String} AssumeRoleFor - AssumeRoleFor. required.
   */
  assumeRoleWithServiceIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'RoleSessionName')) {
      throw new TypeError('parameter "RoleSessionName" is required');
    }

    if (!hasOwnProperty(params, 'AssumeRoleFor')) {
      throw new TypeError('parameter "AssumeRoleFor" is required');
    }

    return this.request('AssumeRoleWithServiceIdentity', params, options);
  }

  /**
   * @param {Long} DurationSeconds - DurationSeconds. optional.
   */
  generateSessionAccessKey(params = {}, options = {}) {
    return this.request('GenerateSessionAccessKey', params, options);
  }

  /**
   */
  getCallerIdentity(params = {}, options = {}) {
    return this.request('GetCallerIdentity', params, options);
  }

  /**
   * @param {String} Name - Grantee. required.
   * @param {String} Policy - Policy. required.
   * @param {Long} DurationSeconds - DurationSeconds. required.
   */
  getFederationToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'DurationSeconds')) {
      throw new TypeError('parameter "DurationSeconds" is required');
    }

    return this.request('GetFederationToken', params, options);
  }

}

module.exports = Client;
