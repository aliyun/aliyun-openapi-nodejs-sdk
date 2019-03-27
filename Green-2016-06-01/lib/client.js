
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-01';
    super(config);
  }

  /**
   * @param {RepeatList} ImageUrl - imageUrls. required.
   * @param {RepeatList} Scene - scenes. required.
   * @param {Boolean} Async - async. optional. default: false.
   * @param {String} RegionId - regionId. optional.
   */
  imageDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    options.method = 'POST';
    return this.request('ImageDetection', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} RegionId - regionId. optional.
   */
  imageResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ImageResult', params, options);
  }

}

module.exports = Client;
