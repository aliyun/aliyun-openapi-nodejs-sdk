
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-16';
    super(config);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} CombineBatchNo - combineBatchNo. required.
   */
  combineCancel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'CombineBatchNo')) {
      throw new TypeError('parameter "CombineBatchNo" is required');
    }

    return this.request('CombineCancel', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} CombineBatchNo - combineBatchNo. required.
   */
  combinePreview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'CombineBatchNo')) {
      throw new TypeError('parameter "CombineBatchNo" is required');
    }

    return this.request('CombinePreview', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} CombineBatchNo - combineBatchNo. required.
   */
  combineStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'CombineBatchNo')) {
      throw new TypeError('parameter "CombineBatchNo" is required');
    }

    return this.request('CombineStart', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Language - language. optional.
   * @param {String} Aliuid - aliuid. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   */
  createAliuidMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('CreateAliuidMessage', params, options);
  }

  /**
   * @param {RepeatList} EmpIdList - empIdList. required.
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   */
  createEmpIdMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpIdList')) {
      throw new TypeError('parameter "EmpIdList" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('CreateEmpIdMessage', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Language - language. optional.
   * @param {String} Hid - hid. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   */
  createHidMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('CreateHidMessage', params, options);
  }

  /**
   * @param {RepeatList} MobileList - mobileList. optional.
   * @param {RepeatList} TaobaoNickList - taobaoNickList. optional.
   * @param {RepeatList} EmailReceiver - emailList. optional.
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   */
  createMixMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('CreateMixMessage', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   */
  findMessageEventByBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FindMessageEventByBizId', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   */
  findMessageEventChannelInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('FindMessageEventChannelInfo', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   */
  findMessageEventInfoByBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FindMessageEventInfoByBizId', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   */
  findMessageEventInfoByBizIdBrief(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FindMessageEventInfoByBizIdBrief', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   */
  mixedTemplateByMessageEventId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    return this.request('MixedTemplateByMessageEventId', params, options);
  }

}

module.exports = Client;
