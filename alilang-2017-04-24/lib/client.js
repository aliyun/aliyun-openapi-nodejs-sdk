
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-24';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ClientCID - cid. required.
   * @param {String} Language - language. optional.
   * @param {String} CurVer - curVer. required.
   * @param {String} OsType - osType. required.
   * @param {String} AppName - appName. required.
   * @param {String} SerialNo - serialNo. required.
   */
  upgradeService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientCID')) {
      throw new TypeError('parameter "ClientCID" is required');
    }

    if (!hasOwnProperty(params, 'CurVer')) {
      throw new TypeError('parameter "CurVer" is required');
    }

    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'SerialNo')) {
      throw new TypeError('parameter "SerialNo" is required');
    }

    return this.request('UpgradeService', params, options);
  }

}

module.exports = Client;
