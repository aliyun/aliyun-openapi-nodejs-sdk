
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-10';
    super(config);
  }

  /**
   * @param {String} MediaId - MediaId. required.
   * @param {String} Status - Status. required.
   * @param {String} SubUserId - SubUserId. optional.
   * @param {String} Stage - Stage. optional.
   * @param {String} Reason - Reason. optional.
   * @param {String} Comment - Comment. optional.
   * @param {Float} Position - Position. optional.
   */
  addReview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('AddReview', params, options);
  }

  /**
   * @param {String} MediaId - MediaId. required.
   */
  getReviews(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetReviews', params, options);
  }

  /**
   * @param {String} MediaId - MediaId. required.
   */
  getVAEResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    return this.request('GetVAEResult', params, options);
  }

}

module.exports = Client;
