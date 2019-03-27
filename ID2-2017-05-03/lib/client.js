
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-03';
    super(config);
  }

  /**
   * @param {String} Id2 - id2. optional.
   * @param {Long} Tolerance - tolerance. optional.
   * @param {String} AuthCode - authCode. optional.
   * @param {String} Data - data. optional.
   * @param {String} RequestId - requestId. optional.
   */
  encodeSkByTimestamp(params = {}, options = {}) {
    return this.request('EncodeSkByTimestamp', params, options);
  }

  /**
   * @param {String} Id2 - id2. optional.
   * @param {Long} Tolerance - tolerance. optional.
   * @param {String} AuthCode - authCode. optional.
   * @param {String} Digest - digest. optional.
   * @param {String} RequestId - requestId. optional.
   */
  verifyDataByTimestamp(params = {}, options = {}) {
    return this.request('VerifyDataByTimestamp', params, options);
  }

}

module.exports = Client;
