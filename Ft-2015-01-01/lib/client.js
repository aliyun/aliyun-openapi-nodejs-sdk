
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-01-01';
    super(config);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} RequestId - switchValue. required.
   * @param {String} RequestId - defaultValue. optional.
   */
  apiDefineTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('ApiDefineTest', params, options);
  }

  /**
   */
  dubboPerfApi(params = {}, options = {}) {
    return this.request('DubboPerfApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
   * @param {String} StringValue - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {Json} JsonObjectList - myJsonObjectList. optional.
   * @param {Integer} EnumValue - enumValue. optional.
   * @param {String} RequiredValue_Gated_Gated - requiredValue. required.
   * @param {String} DefaultValue - defaultValue. optional. default: iamdefaultValue.
   * @param {String} HttpStatusCode - httpStatusCode. optional.
   * @param {String} Success - success. optional.
   * @param {String} Code - code. optional.
   * @param {String} Message - message. optional.
   * @param {String} ResultSwitchValue - resultSwitchValue. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Json} JsonObject - myJsonObject. optional.
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  gatedLaunchFtApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue_Gated_Gated')) {
      throw new TypeError('parameter "RequiredValue_Gated_Gated" is required');
    }

    return this.request('GatedLaunchFtApi', params, options);
  }

  /**
   * @param {String} StringList - stringList. optional.
   */
  hiddenJsonItemNameFtApi(params = {}, options = {}) {
    return this.request('HiddenJsonItemNameFtApi', params, options);
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
   */
  rpcAccessControlIpRefuseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcAccessControlIpRefuseApi', params, options);
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
   */
  rpcAccessControlPassApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcAccessControlPassApi', params, options);
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
   */
  rpcAccessControlUserRefuseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcAccessControlUserRefuseApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   */
  rpcAnonymousApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcAnonymousApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  rpcDub.boApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDub.boApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} CheckNumberValue - checkNumberValue. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  rpcDubboApi2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboApi2', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  rpcDubboApi3(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboApi3', params, options);
  }

  /**
   */
  rpcDubboApiForDev(params = {}, options = {}) {
    return this.request('RpcDubboApiForDev', params, options);
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
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   */
  rpcDubboApiTmp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboApiTmp', params, options);
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
   */
  rpcDubboErrorApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcDubboErrorApi', params, options);
  }

  /**
   */
  rpcDynamicHostHttpApi(params = {}, options = {}) {
    return this.request('RpcDynamicHostHttpApi', params, options);
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
   */
  rpcFlowControlApiAndUserRefuseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcFlowControlApiAndUserRefuseApi', params, options);
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
   */
  rpcFlowControlApiExpireApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcFlowControlApiExpireApi', params, options);
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
   */
  rpcFlowControlApiRefuseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcFlowControlApiRefuseApi', params, options);
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
   */
  rpcFlowControlPassApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcFlowControlPassApi', params, options);
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
   */
  rpcFlowControlUserRefuseApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcFlowControlUserRefuseApi', params, options);
  }

  /**
   * @param {String} Sleep - sleep. optional.
   * @param {String} P1 - p1. optional.
   * @param {String} Flag - flag. optional.
   */
  rpcGlobalApi(params = {}, options = {}) {
    return this.request('RpcGlobalApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Long} Sleep - sleep. optional.
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   */
  rpcHsfApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcHsfApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Long} Sleep - sleep. optional.
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   */
  rpcHsfApi2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcHsfApi2', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
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
   * @param {Json} OtherParam - otherParam. optional.
   * @param {String} proxy_original_source_ip - proxy_original_source_ip. optional.
   * @param {Boolean} proxy_original_security_transport - proxy_original_security_transport. optional.
   * @param {Long} Sleep - sleep. optional.
   */
  rpcHsfApiMulti(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcHsfApiMulti', params, options);
  }

  /**
   * @param {String} Sleep - sleep. optional.
   * @param {String} P1 - p1. optional.
   */
  rpcHttpApi(params = {}, options = {}) {
    return this.request('RpcHttpApi', params, options);
  }

  /**
   * @param {String} Sleep - sleep. optional.
   * @param {String} P1 - p1. optional.
   */
  rpcHttpApi2(params = {}, options = {}) {
    return this.request('RpcHttpApi2', params, options);
  }

  /**
   * @param {String} Sleep - sleep. optional.
   * @param {String} P1 - p1. optional.
   */
  rpcHttpApi3(params = {}, options = {}) {
    return this.request('RpcHttpApi3', params, options);
  }

  /**
   * @param {String} P1 - p1. optional.
   * @param {String} P2 - p2. optional.
   * @param {Boolean} BooleanParam - booleanParam. optional.
   * @param {String} IspSignatureSecretKey - IspSignatureSecretKey. optional.
   * @param {String} IspSignature - IspSignature. optional.
   */
  rpcHttpSignTestApi(params = {}, options = {}) {
    return this.request('RpcHttpSignTestApi', params, options);
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
   */
  rpcNoDefaultErrorCodeApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValue')) {
      throw new TypeError('parameter "RequiredValue" is required');
    }

    return this.request('RpcNoDefaultErrorCodeApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {Integer} NumberRange - numberRange. optional.
   */
  rpcNoIspApi(params = {}, options = {}) {
    return this.request('RpcNoIspApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue1. optional.
   * @param {String} StringValue - stringValue1. optional.
   */
  rpcPOSTAllowedApi(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('RpcPOSTAllowedApi', params, options);
  }

  /**
   * @param {String} StringList - stringList. optional.
   */
  showJsonItemNameFtApi(params = {}, options = {}) {
    return this.request('ShowJsonItemNameFtApi', params, options);
  }

  /**
   * @param {String} Sleep - sleep. optional.
   * @param {String} P1 - p1. optional.
   */
  testVpcOnFt(params = {}, options = {}) {
    return this.request('TestVpcOnFt', params, options);
  }

}

module.exports = Client;
