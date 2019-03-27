
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-21';
    super(config);
  }

  /**
   * @param {String} DataId - dataId. required.
   * @param {String} PostId - postId. optional.
   * @param {String} SceneId - sceneId. optional.
   * @param {String} PostNick - postNick. optional.
   * @param {String} PostIp - postIp. optional.
   * @param {String} PostMac - postMac. optional.
   * @param {Long} PostTime - postTime. optional.
   * @param {String} MachineCode - machineCode. optional.
   * @param {String} ParentDataId - parentDataId. optional.
   * @param {String} Title - title. optional.
   * @param {String} PostContent - content. optional.
   * @param {RepeatList} ImageUrl - imageUrls. optional.
   */
  antispamDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('AntispamDetection', params, options);
  }

  /**
   * @param {RepeatList} DataId - dataIds. required.
   */
  antispamResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('AntispamResults', params, options);
  }

  /**
   * @param {Boolean} Async - async. optional. default: false.
   * @param {RepeatList} ImageUrl - imageUrls. required.
   * @param {RepeatList} Scene - scenes. required.
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
