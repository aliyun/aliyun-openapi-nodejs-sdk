
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-08';
    super(config);
  }

  /**
   * @param {RepeatList} ImageUrl - imageUrls. required.
   * @param {RepeatList} Scene - scenes. required.
   * @param {Boolean} Async - async. optional. default: false.
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
   */
  imageFeedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    options.method = 'POST';
    return this.request('ImageFeedback', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  imageResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ImageResult', params, options);
  }

  /**
   * @param {RepeatList} TaskId - taskIds. required.
   */
  imageResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ImageResults', params, options);
  }

  /**
   * @param {String} Text - content. required.
   */
  textKeywordFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Text')) {
      throw new TypeError('parameter "Text" is required');
    }

    options.method = 'POST';
    return this.request('TextKeywordFilter', params, options);
  }

  /**
   * @param {String} Text - content. required.
   */
  textWordCorrect(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Text')) {
      throw new TypeError('parameter "Text" is required');
    }

    options.method = 'POST';
    return this.request('TextWordCorrect', params, options);
  }

}

module.exports = Client;
