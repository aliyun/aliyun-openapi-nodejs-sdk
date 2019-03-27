
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-10-18';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} Async - async. optional. default: false.
   * @param {String} NotifyUrl - notifyUrl. optional.
   * @param {String} NotifySeed - notifySeed. optional.
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
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} TaskId - taskIds. required.
   */
  imageResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('ImageResults', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} BizScene - bizScene. required.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} UserId - userId. optional.
   * @param {String} TopicId - topicId. optional.
   * @param {String} FeedId - feedId. required.
   * @param {String} Title - title. optional.
   * @param {Long} PostTime - postTime. optional.
   * @param {String} PostContent - postContent. required.
   * @param {String} PostContentType - contentType. required.
   * @param {String} DynamicProp - dynamicProp. optional.
   */
  pluginAntispamDetection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizScene')) {
      throw new TypeError('parameter "BizScene" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'FeedId')) {
      throw new TypeError('parameter "FeedId" is required');
    }

    if (!hasOwnProperty(params, 'PostContent')) {
      throw new TypeError('parameter "PostContent" is required');
    }

    if (!hasOwnProperty(params, 'PostContentType')) {
      throw new TypeError('parameter "PostContentType" is required');
    }

    options.method = 'POST';
    return this.request('PluginAntispamDetection', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} ActionResult - actionResult. required.
   * @param {RepeatList} Ids - ids. required.
   */
  pluginAntispamFeedback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'ActionResult')) {
      throw new TypeError('parameter "ActionResult" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    options.method = 'POST';
    return this.request('PluginAntispamFeedback', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} BizScene - bizScene. required.
   * @param {String} ClientVersion - clientVersion. required.
   * @param {String} PostContentType - contentType. required.
   * @param {String} PageIndex - pageIndex. required.
   * @param {String} PageSize - pageSize. required.
   */
  pluginAntispamResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizScene')) {
      throw new TypeError('parameter "BizScene" is required');
    }

    if (!hasOwnProperty(params, 'ClientVersion')) {
      throw new TypeError('parameter "ClientVersion" is required');
    }

    if (!hasOwnProperty(params, 'PostContentType')) {
      throw new TypeError('parameter "PostContentType" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('PluginAntispamResults', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} Text - contents. optional.
   */
  textAntispamDetection(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('TextAntispamDetection', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
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
   * @param {String} RegionId - regionId. optional.
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
