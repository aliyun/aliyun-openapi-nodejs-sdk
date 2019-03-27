
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-05-12';
    super(config);
  }

  /**
   * @param {Integer} resourceType - resourceType. required.
   * @param {String} resourceId - resourceId. required.
   * @param {Long} aliuid - aliUid. required.
   */
  getBsnByResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'resourceType')) {
      throw new TypeError('parameter "resourceType" is required');
    }

    if (!hasOwnProperty(params, 'resourceId')) {
      throw new TypeError('parameter "resourceId" is required');
    }

    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    return this.request('GetBsnByResource', params, options);
  }

  /**
   * @param {String} sn - sn. required.
   */
  getBsnBySn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sn')) {
      throw new TypeError('parameter "sn" is required');
    }

    return this.request('GetBsnBySn', params, options);
  }

  /**
   * @param {Integer} num - num. required.
   * @param {Integer} resourceType - resourceType. required.
   * @param {String} resourceId - resourceId. required.
   * @param {Long} aliuid - aliUid. required.
   */
  productBindBsn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'num')) {
      throw new TypeError('parameter "num" is required');
    }

    if (!hasOwnProperty(params, 'resourceType')) {
      throw new TypeError('parameter "resourceType" is required');
    }

    if (!hasOwnProperty(params, 'resourceId')) {
      throw new TypeError('parameter "resourceId" is required');
    }

    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    return this.request('ProductBindBsn', params, options);
  }

}

module.exports = Client;
