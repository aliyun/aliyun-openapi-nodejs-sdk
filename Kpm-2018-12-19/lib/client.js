
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-19';
    super(config);
  }

  /**
   * @param {String} HashMechanism - hashMechanism. required.
   * @param {String} KeyProfileId - keyProfileId. required.
   * @param {String} EncryptKeyProfileId - encryptKeyProfileId. optional.
   * @param {String} EncryptKeyType - encryptKeyType. optional.
   * @param {String} Mechanism - mechanism. optional.
   * @param {String} Iv - iv. optional.
   * @param {String} Data - data. required.
   */
  calcHmacWithCiphertextKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HashMechanism')) {
      throw new TypeError('parameter "HashMechanism" is required');
    }

    if (!hasOwnProperty(params, 'KeyProfileId')) {
      throw new TypeError('parameter "KeyProfileId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('CalcHmacWithCiphertextKey', params, options);
  }

  /**
   * @param {String} HashMechanism - hashMechanism. required.
   * @param {String} KeyValue - keyValue. required.
   * @param {String} EncryptKeyProfileId - encryptKeyProfileId. optional.
   * @param {String} EncryptKeyType - encryptKeyType. optional.
   * @param {String} Mechanism - mechanism. optional.
   * @param {String} Iv - iv. optional.
   * @param {String} Data - data. required.
   */
  calcHmacWithPlaintextKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HashMechanism')) {
      throw new TypeError('parameter "HashMechanism" is required');
    }

    if (!hasOwnProperty(params, 'KeyValue')) {
      throw new TypeError('parameter "KeyValue" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('CalcHmacWithPlaintextKey', params, options);
  }

  /**
   * @param {Integer} RandomLength - randomLength. required.
   */
  generateRandom(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RandomLength')) {
      throw new TypeError('parameter "RandomLength" is required');
    }

    options.method = 'POST';
    return this.request('GenerateRandom', params, options);
  }

}

module.exports = Client;
