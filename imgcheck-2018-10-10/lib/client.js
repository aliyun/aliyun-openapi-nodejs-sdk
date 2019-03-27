
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-10';
    super(config);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} AliUid - aliUid. optional.
   * @param {String} ImageRegionNo - imageRegionNo. optional.
   */
  createImageCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateImageCheck', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ImgCheckId - imgCheckId. optional.
   * @param {String} ImageId - imageId. optional.
   */
  describeImageCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeImageCheck', params, options);
  }

}

module.exports = Client;
