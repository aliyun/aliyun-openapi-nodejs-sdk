
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-15';
    super(config);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('CheckResource', params, options);
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
   * @param {String} Bid - bid. required.
   * @param {Long} Aliuid - aliuid. optional.
   * @param {Json} TemplateParasList - templateParasList. optional.
   */
  combinePreviewRealTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('CombinePreviewRealTime', params, options);
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
   * @param {Long} Aliuid - aliuid. required.
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

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('CreateAliuidMessage', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Language - language. optional.
   * @param {Long} Aliuid - aliuid. required.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {Boolean} SkipFlowControl - skipFlowControl. required.
   */
  createAliuidMessageSkipFlowControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'SkipFlowControl')) {
      throw new TypeError('parameter "SkipFlowControl" is required');
    }

    return this.request('CreateAliuidMessageSkipFlowControl', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Language - language. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {RepeatList} EmpIdList - empIdList. required.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   */
  createEmpIdMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'EmpIdList')) {
      throw new TypeError('parameter "EmpIdList" is required');
    }

    return this.request('CreateEmpIdMessage', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Language - language. optional.
   * @param {String} ChannelType - channelType. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {RepeatList} EmpIdList - empIdList. required.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {Boolean} SkipFlowControl - skipFlowControl. required.
   */
  createEmpIdMessageSkipFlowControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'EmpIdList')) {
      throw new TypeError('parameter "EmpIdList" is required');
    }

    if (!hasOwnProperty(params, 'SkipFlowControl')) {
      throw new TypeError('parameter "SkipFlowControl" is required');
    }

    return this.request('CreateEmpIdMessageSkipFlowControl', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Language - language. optional.
   * @param {String} Hid - hid. required.
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

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('CreateHidMessage', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} ChannelType - channelType. optional.
   * @param {String} Language - language. optional.
   * @param {String} Hid - hid. required.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {Boolean} SkipFlowControl - skipFlowControl. required.
   */
  createHidMessageSkipFlowControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'SkipFlowControl')) {
      throw new TypeError('parameter "SkipFlowControl" is required');
    }

    return this.request('CreateHidMessageSkipFlowControl', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Bid - bid. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {Long} LanguageFromUid - languageFromUid. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {RepeatList} MobileList - mobileList. optional.
   * @param {RepeatList} TtsList - ttsList. optional.
   * @param {RepeatList} TaobaoNickList - taobaoNickList. optional.
   * @param {RepeatList} EmailReceiver - emailList. optional.
   */
  createMixMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('CreateMixMessage', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Bid - bid. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {Long} LanguageFromUid - languageFromUid. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {RepeatList} MobileList - mobileList. optional.
   * @param {RepeatList} TtsList - ttsList. optional.
   * @param {RepeatList} TaobaoNickList - taobaoNickList. optional.
   * @param {RepeatList} EmailReceiver - emailList. optional.
   * @param {Boolean} SkipFlowControl - skipFlowControl. required.
   */
  createMixMessageSkipFlowControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'SkipFlowControl')) {
      throw new TypeError('parameter "SkipFlowControl" is required');
    }

    return this.request('CreateMixMessageSkipFlowControl', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {Long} LanguageFromUid - languageFromUid. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {RepeatList} MobileList - mobileList. optional.
   * @param {RepeatList} TtsList - ttsList. optional.
   * @param {RepeatList} TaobaoNickList - taobaoNickList. optional.
   * @param {RepeatList} EmailReceiver - emailList. optional.
   */
  createMixMessageWithAliuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('CreateMixMessageWithAliuid', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Hid - hid. required.
   * @param {String} Language - language. optional.
   * @param {Json} TemplateParas - templateParas. optional.
   * @param {String} ParamAppend - paramAppend. optional.
   * @param {Long} LanguageFromUid - languageFromUid. optional.
   * @param {String} Sender - sender. optional.
   * @param {String} CombineBatchNo - combineBatchNo. optional.
   * @param {RepeatList} MobileList - mobileList. optional.
   * @param {RepeatList} TtsList - ttsList. optional.
   * @param {RepeatList} TaobaoNickList - taobaoNickList. optional.
   * @param {RepeatList} EmailReceiver - emailList. optional.
   */
  createMixMessageWithHid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('CreateMixMessageWithHid', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   */
  deleteUserLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('DeleteUserLog', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Bid - bid. required.
   */
  findMessageEventByBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('FindMessageEventByBizId', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Bid - bid. required.
   */
  findMessageEventChannelInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('FindMessageEventChannelInfo', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Bid - bid. required.
   */
  findMessageEventInfoByBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('FindMessageEventInfoByBizId', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Bid - bid. required.
   * @param {String} EmpId - empId. optional.
   */
  findMessageEventInfoByBizIdBrief(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('FindMessageEventInfoByBizIdBrief', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} CombineBatchNo - combineBatchNo. required.
   */
  innerCombineCancel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'CombineBatchNo')) {
      throw new TypeError('parameter "CombineBatchNo" is required');
    }

    return this.request('InnerCombineCancel', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} CombineBatchNo - combineBatchNo. required.
   */
  innerCombineStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'CombineBatchNo')) {
      throw new TypeError('parameter "CombineBatchNo" is required');
    }

    return this.request('InnerCombineStart', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {Long} Hid - hid. optional.
   * @param {String} Bid - bid. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} MessageEventId - messageEventId. required.
   * @param {String} Bid - bid. required.
   */
  mixedTemplateByMessageEventId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MessageEventId')) {
      throw new TypeError('parameter "MessageEventId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('MixedTemplateByMessageEventId', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

}

module.exports = Client;
