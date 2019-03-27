
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-09';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  buyOriginPictures(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('BuyOriginPictures', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getStyles(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetStyles', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  queryCutoutTaskResult(params = {}, options = {}) {
    return this.request('QueryCutoutTaskResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  queryGenerateTaskResult(params = {}, options = {}) {
    return this.request('QueryGenerateTaskResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  submitCutoutTask(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('SubmitCutoutTask', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} Width - width. required.
   * @param {RepeatList} CopyWrite - copyWrites. optional.
   * @param {RepeatList} MajorImagePath - majorImagePaths. required.
   * @param {String} ActionPoint - actionPoint. optional.
   * @param {Integer} Height - height. required.
   * @param {String} LogoImagePath - logoImagePath. optional.
   * @param {RepeatList} PropertyId - propertyIds. optional.
   * @param {Integer} Type - type. required.
   * @param {Integer} ImageCount - imageCount. optional.
   */
  submitGenerateTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Width')) {
      throw new TypeError('parameter "Width" is required');
    }

    if (!hasOwnProperty(params, 'MajorImagePath')) {
      throw new TypeError('parameter "MajorImagePath" is required');
    }

    if (!hasOwnProperty(params, 'Height')) {
      throw new TypeError('parameter "Height" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    options.method = 'POST';
    return this.request('SubmitGenerateTask', params, options);
  }

}

module.exports = Client;
