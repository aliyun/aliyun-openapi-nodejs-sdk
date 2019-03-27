
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MessageType - messageType. required.
   * @param {String} QueueName - queueName. optional.
   */
  queryTokenForMnsQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    return this.request('QueryTokenForMnsQueue', params, options);
  }

}

module.exports = Client;
