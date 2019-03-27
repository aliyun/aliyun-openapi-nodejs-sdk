
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-14';
    super(config);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {String} RequestId - defaultValue. optional.
   */
  apiDefineTest(params = {}, options = {}) {
    return this.request('ApiDefineTest', params, options);
  }

  /**
   * @param {String} RequestId - requestId. optional.
   * @param {String} RequestId - myRequestId2. optional.
   * @param {String} RequiredValue - requiredValue. required.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {RepeatList} JsonRepeatList - jsonRepeatList. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} RequiredValue - requiredValue. required.
   */
  multiInputParamApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('MultiInputParamApi', params, options);
  }

  /**
   * @param {Integer} NumberRange - numberRange. optional.
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} StringValue - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {Json} JsonObjectList - myJsonObjectList. optional.
   * @param {Integer} EnumValue - enumValue. optional.
   * @param {String} RequiredValue - requiredValue. required.
   * @param {String} DefaultValue - defaultValue. optional. default: iamdefaultValue.
   * @param {String} HttpStatusCode - httpStatusCode. optional.
   * @param {String} Success - success. optional.
   * @param {String} Code - code. optional.
   * @param {String} Message - message. optional.
   * @param {String} ResultSwitchValue - resultSwitchValue. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Json} JsonObject - myJsonObject. optional.
   * @param {Integer} IntValue - intValue. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  rpcDubboApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
   * @param {String} StringValue - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {Integer} EnumValue - enumValue. optional.
   * @param {String} RequiredValue - requiredValue. required.
   * @param {String} DefaultValue - defaultValue. optional. default: iamdefaultValue.
   * @param {String} HttpStatusCode - httpStatusCode. optional.
   * @param {String} Success - success. optional.
   * @param {String} Code - code. optional.
   * @param {String} Message - message. optional.
   * @param {String} ResultSwitchValue - resultSwitchValue. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Json} JsonObject - myJsonObject. optional.
   * @param {Json} OtherParam - otherParam. optional.
   * @param {RepeatList} JsonRepeatList - jsonRepeatList. optional.
   * @param {RepeatList} ListDisk - listDisks. optional.
   * @param {RepeatList} SimpleRepeatListDisk - simpleRepeatListDisks. optional.
   * @param {RepeatList} StandardRepeatListDisk - standardRepeatListDisks. optional.
   * @param {RepeatList} MixedRepeatListDisk - mixedRepeatListDisks. optional.
   * @param {RepeatList} NestedRepeatListDisk - nestedRepeatListDisks. optional.
   */
  rpcDubboApiForRepeatList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboApiForRepeatList', params, options);
  }

}

module.exports = Client;
