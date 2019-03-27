
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-10-13';
    super(config);
  }

  /**
   * @param {String} Application - application. required.
   * @param {String} Image - image. required.
   * @param {String} Engine - engine. optional.
   */
  imageDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Application')) {
      throw new TypeError('parameter "Application" is required');
    }

    if (!hasOwnProperty(params, 'Image')) {
      throw new TypeError('parameter "Image" is required');
    }

    return this.request('ImageDetection', params, options);
  }

  /**
   * @param {String} Application - application. required.
   * @param {String} Images - images. required.
   * @param {String} Engine - engine. optional.
   * @param {String} Notification - notification. optional.
   */
  imageDetectionAsync(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Application')) {
      throw new TypeError('parameter "Application" is required');
    }

    if (!hasOwnProperty(params, 'Images')) {
      throw new TypeError('parameter "Images" is required');
    }

    return this.request('ImageDetectionAsync', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  imageDetectionResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ImageDetectionResult', params, options);
  }

  /**
   * @param {String} Application - application. required.
   * @param {String} AccountId - accountId. required.
   * @param {String} MediaId - mediaId. required.
   * @param {String} Segements - segements. required.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Engine - engine. optional.
   * @param {String} Notification - notification. optional.
   * @param {String} DetectionInterval - detectionInterval. optional.
   * @param {Boolean} EnableVAE - enableVAE. optional.
   */
  videoDetectionAsync(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Application')) {
      throw new TypeError('parameter "Application" is required');
    }

    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'MediaId')) {
      throw new TypeError('parameter "MediaId" is required');
    }

    if (!hasOwnProperty(params, 'Segements')) {
      throw new TypeError('parameter "Segements" is required');
    }

    return this.request('VideoDetectionAsync', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  videoDetectionResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('VideoDetectionResult', params, options);
  }

}

module.exports = Client;
