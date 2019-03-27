
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-20';
    super(config);
  }

  /**
   * @param {RepeatList} DeviceName - deviceNames. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  applyDeviceWithNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
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
   * @param {String} ProductKey - productKey. required.
   */
  createMq(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CreateMq', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. required.
   * @param {Integer} NodeType - nodeType. optional.
   * @param {String} Desc - desc. optional.
   * @param {Long} CatId - catId. optional.
   * @param {String} ExtProps - extProps. optional.
   * @param {String} SecurityPolicy - securityPolicy. optional. default: P_D.
   * @param {Boolean} Id2 - id2. optional. default: false.
   * @param {Integer} PayType - payType. optional. default: 0.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
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
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Name - name. required.
   * @param {String} RuleDesc - ruleDesc. optional.
   * @param {String} DataType - dataType. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} SrcTopic - srcTopic. required.
   * @param {RepeatList} DstTopic - dstTopics. required.
   */
  createTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcTopic')) {
      throw new TypeError('parameter "SrcTopic" is required');
    }

    if (!hasOwnProperty(params, 'DstTopic')) {
      throw new TypeError('parameter "DstTopic" is required');
    }

    return this.request('CreateTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. optional.
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
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} PropKey - propKey. required.
   */
  deleteDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropKey')) {
      throw new TypeError('parameter "PropKey" is required');
    }

    return this.request('DeleteDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deleteMq(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteMq', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteProduct', params, options);
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
   * @param {String} ProductKey - productKey. required.
   */
  deleteProductTopicByProductKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteProductTopicByProductKey', params, options);
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  deleteSubDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DeleteSubDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SrcTopic - srcTopic. required.
   * @param {RepeatList} DstTopic - dstTopics. required.
   */
  deleteTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcTopic')) {
      throw new TypeError('parameter "SrcTopic" is required');
    }

    if (!hasOwnProperty(params, 'DstTopic')) {
      throw new TypeError('parameter "DstTopic" is required');
    }

    return this.request('DeleteTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  disableDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DisableDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  disableSubDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DisableSubDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  enableDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('EnableDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  enableSubDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('EnableSubDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getC2CConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetC2CConfig', params, options);
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
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  getDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ShadowMessage - shadowMessage. optional.
   */
  getDeviceShadow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetDeviceShadow', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getMqInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetMqInfo', params, options);
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
   * @param {String} RegionId - regionId. optional.
   */
  getServerMapping(params = {}, options = {}) {
    return this.request('GetServerMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcId. required.
   */
  getVpcInstanceMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('GetVpcInstanceMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  getVpcServerMapping(params = {}, options = {}) {
    return this.request('GetVpcServerMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstancePort - instancePort. required.
   */
  grantInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstancePort')) {
      throw new TypeError('parameter "InstancePort" is required');
    }

    return this.request('GrantInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
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
   * @param {String} ProductKey - productKey. required.
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} MessageContent - messageContent. required.
   */
  pubBroadcast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'MessageContent')) {
      throw new TypeError('parameter "MessageContent" is required');
    }

    return this.request('PubBroadcast', params, options);
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
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
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
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  queryDeviceDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  queryDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  queryDeviceSession(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceSession', params, options);
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
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  queryPageByApplyId(params = {}, options = {}) {
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
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ServeId - serveId. required.
   */
  queryServeById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServeId')) {
      throw new TypeError('parameter "ServeId" is required');
    }

    return this.request('QueryServeById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} ExclusionServe - exclusionServes. optional.
   */
  queryServeList(params = {}, options = {}) {
    return this.request('QueryServeList', params, options);
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
   * @param {String} DeviceName - deviceName. required.
   * @param {String} SubDeviceName - subDeviceName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  querySubDeviceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QuerySubDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryTenant(params = {}, options = {}) {
    return this.request('QueryTenant', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Topic - topic. required.
   */
  queryTopicReverseRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('QueryTopicReverseRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Topic - topic. required.
   */
  queryTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('QueryTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ServeId - serveId. required.
   */
  queryUserServeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServeId')) {
      throw new TypeError('parameter "ServeId" is required');
    }

    return this.request('QueryUserServeStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Timeout - timeout. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Topic - topic. optional.
   * @param {String} RequestBase64Byte - requestBase64Byte. required.
   */
  rRpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Timeout')) {
      throw new TypeError('parameter "Timeout" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'RequestBase64Byte')) {
      throw new TypeError('parameter "RequestBase64Byte" is required');
    }

    return this.request('RRpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  ramAuth(params = {}, options = {}) {
    return this.request('RamAuth', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstancePort - instancePort. required.
   */
  revokeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstancePort')) {
      throw new TypeError('parameter "InstancePort" is required');
    }

    return this.request('RevokeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Props - props. required.
   */
  saveDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Props')) {
      throw new TypeError('parameter "Props" is required');
    }

    return this.request('SaveDeviceProp', params, options);
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
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ServeId - serveId. required.
   * @param {String} Status - status. required.
   */
  saveUserServeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServeId')) {
      throw new TypeError('parameter "ServeId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveUserServeStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Props - props. required.
   */
  setDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Props')) {
      throw new TypeError('parameter "Props" is required');
    }

    return this.request('SetDeviceProp', params, options);
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
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} MessageType - messageType. required.
   */
  updateC2CConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    return this.request('UpdateC2CConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ShadowMessage - shadowMessage. required.
   */
  updateDeviceShadow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ShadowMessage')) {
      throw new TypeError('parameter "ShadowMessage" is required');
    }

    return this.request('UpdateDeviceShadow', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. optional.
   * @param {Integer} NodeType - nodeType. optional.
   * @param {String} ProductDesc - productDesc. optional.
   * @param {String} ExtProps - extProps. optional.
   * @param {Long} CatId - catId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  updateProduct(params = {}, options = {}) {
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
   * @param {String} ProductKey - productKey. optional.
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

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;
