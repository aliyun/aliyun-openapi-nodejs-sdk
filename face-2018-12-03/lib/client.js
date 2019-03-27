
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-03';
    super(config);
  }

  /**
   * @param {String} Group - group. required.
   * @param {String} Person - person. required.
   * @param {String} Image - image. required.
   * @param {String} ImageUrl - image_url. optional.
   * @param {String} Content - content. optional.
   */
  addFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    if (!hasOwnProperty(params, 'Person')) {
      throw new TypeError('parameter "Person" is required');
    }

    if (!hasOwnProperty(params, 'Image')) {
      throw new TypeError('parameter "Image" is required');
    }

    options.method = 'POST';
    return this.request('AddFace', params, options);
  }

  /**
   * @param {String} Group - group. required.
   * @param {Long} Mark - mark. optional.
   */
  listFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    options.method = 'POST';
    return this.request('ListFace', params, options);
  }

  /**
   * @param {String} Ticket - ticket. required.
   * @param {String} Prod - prod. required.
   * @param {String} Lang - lang. optional.
   */
  queryApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ticket')) {
      throw new TypeError('parameter "Ticket" is required');
    }

    if (!hasOwnProperty(params, 'Prod')) {
      throw new TypeError('parameter "Prod" is required');
    }

    options.method = 'POST';
    return this.request('QueryApis', params, options);
  }

  /**
   * @param {String} Group - group. optional.
   * @param {String} ImageUrl - image_url. optional.
   * @param {String} Content - content. optional.
   */
  recognizeFace(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('RecognizeFace', params, options);
  }

}

module.exports = Client;
