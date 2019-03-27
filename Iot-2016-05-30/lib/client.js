
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-30';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  applyDeviceWithNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('ApplyDeviceWithNames', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  batchGetDeviceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BatchGetDeviceState', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicOperation - topicOperation. required.
   * @param {String} Topic - topic. required.
   * @param {Long} ProductKey - productKey. required.
   */
  checkTopicPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicOperation')) {
      throw new TypeError('parameter "TopicOperation" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CheckTopicPermission', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} Desc - desc. optional.
   * @param {Long} CatId - catId. required.
   * @param {String} ExtProps - extProps. optional.
   * @param {String} SecurityPolicy - securityPolicy. optional. default: P_D.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'CatId')) {
      throw new TypeError('parameter "CatId" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TopicShortName - topicShortName. required.
   * @param {String} Operation - operation. optional.
   * @param {String} Desc - desc. optional.
   */
  createProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicShortName')) {
      throw new TypeError('parameter "TopicShortName" is required');
    }

    return this.request('CreateProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Select - select. optional.
   * @param {String} ShortTopic - shortTopic. optional.
   * @param {String} Where - where. optional.
   * @param {Long} ProductKey - productKey. optional.
   * @param {String} Name - name. required.
   * @param {String} RuleDesc - ruleDesc. optional.
   */
  createRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Type - type. required.
   * @param {String} Configuration - configuration. required.
   */
  createRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Configuration')) {
      throw new TypeError('parameter "Configuration" is required');
    }

    return this.request('CreateRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Sql - sql. required.
   * @param {String} JsonInfo - jsonInfo. required.
   */
  debugRuleSql(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Sql')) {
      throw new TypeError('parameter "Sql" is required');
    }

    if (!hasOwnProperty(params, 'JsonInfo')) {
      throw new TypeError('parameter "JsonInfo" is required');
    }

    return this.request('DebugRuleSql', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  deleteDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicId - topicId. required.
   */
  deleteProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('DeleteProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  deleteRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DeleteRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   */
  deleteRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    return this.request('DeleteRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - deviceAppKey. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} DeviceName - dname. required.
   * @param {String} GrantType - type. required.
   */
  deviceGrant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('DeviceGrant', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - deviceAppKey. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} DeviceName - dname. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} GrantType - type. required.
   */
  devicePermitModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('DevicePermitModify', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - deviceAppKey. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} DeviceName - dname. required.
   */
  deviceRevokeById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DeviceRevokeById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - deviceAppKey. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} DeviceName - dname. required.
   * @param {String} GrantType - type. required.
   */
  deviceRevokeByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('DeviceRevokeByTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RootId - rootId. required.
   */
  getCats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootId')) {
      throw new TypeError('parameter "RootId" is required');
    }

    return this.request('GetCats', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  getRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('GetRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   */
  getRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    return this.request('GetRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - deviceAppKey. required.
   * @param {String} DeviceName - dname. required.
   */
  listDevicePermits(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('ListDevicePermits', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrenPage - currenPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrenPage')) {
      throw new TypeError('parameter "CurrenPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  listRuleActions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('ListRuleActions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   * @param {Integer} Qos - qos. optional. default: 0.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} MessageContent - messageContent. required.
   */
  pub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'MessageContent')) {
      throw new TypeError('parameter "MessageContent" is required');
    }

    return this.request('Pub', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  queryApplyStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryApplyStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  queryDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceId - deviceId. required.
   */
  queryDeviceById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('QueryDeviceById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  queryDeviceByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrenPage - currenPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} ApplyId - applyId. required.
   */
  queryPageByApplyId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrenPage')) {
      throw new TypeError('parameter "CurrenPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryPageByApplyId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryProductByUserId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryProductByUserId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryServerCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryServerCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TopicName - topicName. required.
   */
  queryTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicName')) {
      throw new TypeError('parameter "TopicName" is required');
    }

    return this.request('QueryTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - customizeKey. optional.
   * @param {String} ProductKey - productKey. required.
   */
  registDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('RegistDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} RpcContent - requestBase64Byte. required.
   * @param {Integer} TimeOut - timeout. required.
   */
  revertRpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'RpcContent')) {
      throw new TypeError('parameter "RpcContent" is required');
    }

    if (!hasOwnProperty(params, 'TimeOut')) {
      throw new TypeError('parameter "TimeOut" is required');
    }

    return this.request('RevertRpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} MnsConfiguration - mnsConfiguration. optional.
   * @param {Integer} CallbackType - callbackType. required.
   */
  saveServerCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CallbackType')) {
      throw new TypeError('parameter "CallbackType" is required');
    }

    return this.request('SaveServerCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   */
  serverOnline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ServerOnline', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  startRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('StartRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  stopRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('StopRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   * @param {String} SubCallback - callback. required.
   * @param {String} TopicList - topicString. optional.
   * @param {RepeatList} Topic - topics. optional.
   */
  sub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'SubCallback')) {
      throw new TypeError('parameter "SubCallback" is required');
    }

    return this.request('Sub', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   * @param {String} SubCallback - callback. required.
   * @param {RepeatList} Topic - topics. required.
   */
  subTopicFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'SubCallback')) {
      throw new TypeError('parameter "SubCallback" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('SubTopicFilter', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ProductKey - appKey. required.
   * @param {String} TopicList - topicString. optional.
   * @param {RepeatList} Topic - topics. optional.
   */
  unSub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('UnSub', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. required.
   * @param {String} ProductDesc - productDesc. optional.
   * @param {String} ExtProps - extProps. optional.
   * @param {Long} CatId - catId. required.
   * @param {String} ProductKey - productKey. required.
   */
  updateProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'CatId')) {
      throw new TypeError('parameter "CatId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('UpdateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Desc - desc. optional.
   * @param {String} Operation - operation. optional.
   * @param {String} TopicShortName - topicShortName. optional.
   * @param {String} TopicId - topicId. optional.
   */
  updateProductTopic(params = {}, options = {}) {
    return this.request('UpdateProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Select - select. optional.
   * @param {String} ShortTopic - shortTopic. optional.
   * @param {String} Where - where. optional.
   * @param {Long} ProductKey - productKey. optional.
   * @param {String} Name - name. required.
   * @param {String} RuleDesc - ruleDesc. optional.
   */
  updateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   * @param {String} Type - type. required.
   * @param {String} Configuration - configuration. required.
   */
  updateRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Configuration')) {
      throw new TypeError('parameter "Configuration" is required');
    }

    return this.request('UpdateRuleAction', params, options);
  }

}

module.exports = Client;
