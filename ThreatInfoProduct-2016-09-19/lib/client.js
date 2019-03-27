
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-19';
    super(config);
  }

  /**
   * @param {String} DataType - dataType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} SyncType - syncType. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} ServerVersion - serverVersion. optional.
   */
  threatInfo(params = {}, options = {}) {
    return this.request('ThreatInfo', params, options);
  }

  /**
   * @param {String} DataType - dataType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  versionList(params = {}, options = {}) {
    return this.request('VersionList', params, options);
  }

}

module.exports = Client;
