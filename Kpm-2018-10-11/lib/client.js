
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-11';
    super(config);
  }

  /**
   * @param {String} KeyType - keyType. required.
   * @param {RepeatList} KeyProfileIdList - keyProfileIdList. required.
   */
  batchDeleteSymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'KeyProfileIdList')) {
      throw new TypeError('parameter "KeyProfileIdList" is required');
    }

    options.method = 'POST';
    return this.request('BatchDeleteSymKey', params, options);
  }

  /**
   * @param {String} KeyType - keyType. required.
   * @param {String} ZmkProfileId - zmkProfileId. required.
   * @param {RepeatList} KeyProfileIdList - keyProfileIdList. required.
   */
  batchDeliverSymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'ZmkProfileId')) {
      throw new TypeError('parameter "ZmkProfileId" is required');
    }

    if (!hasOwnProperty(params, 'KeyProfileIdList')) {
      throw new TypeError('parameter "KeyProfileIdList" is required');
    }

    options.method = 'POST';
    return this.request('BatchDeliverSymKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   */
  deleteAsymKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteAsymKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   */
  deliverPublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('DeliverPublicKey', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} PubKeyProfileId - pubKeyProfileId. optional.
   * @param {String} ZmkProfileId - zmkProfileId. optional.
   */
  deliverSessionZmk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    options.method = 'POST';
    return this.request('DeliverSessionZmk', params, options);
  }

  /**
   * @param {String} KeyProfileId - keyProfileId. optional.
   * @param {String} Mechanism - mechanism. required.
   * @param {String} PubKeyProfileId - pubKeyProfileId. optional.
   * @param {String} ZmkProfileId - zmkProfileId. optional.
   */
  generateSessionZmkByAsymAndSymEnc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mechanism')) {
      throw new TypeError('parameter "Mechanism" is required');
    }

    options.method = 'POST';
    return this.request('GenerateSessionZmkByAsymAndSymEnc', params, options);
  }

}

module.exports = Client;
