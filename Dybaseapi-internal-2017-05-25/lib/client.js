
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-25';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Format - Format. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} Signature - Signature. optional.
   * @param {String} SignatureMethod - SignatureMethod. optional.
   * @param {String} SignatureNonce - SignatureNonce. optional.
   * @param {String} SignatureVersion - SignatureVersion. optional.
   * @param {String} Timestamp - Timestamp. optional.
   * @param {String} Version - Version. optional.
   * @param {String} MessageType - MessageType. required.
   * @param {String} QueueName - QueueName. optional.
   * @param {String} SignatureType - SignatureType. optional.
   * @param {String} OwnerId - OwnerId. optional.
   * @param {String} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ResourceOwnerAccount - ResourceOwnerAccount. optional.
   * @param {String} SecurityToken - SecurityToken. optional.
   */
  queryTokenForMnsQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    return this.request('QueryTokenForMnsQueue', params, options);
  }

}

module.exports = Client;
