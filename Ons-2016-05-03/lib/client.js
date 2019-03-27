
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-03';
    super(config);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional. default: cn-qingdao-publictest.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. optional. default: 1582152403000.
   * @param {String} data - CssProduce. required.
   */
  onsBuyOrdersProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OnsBuyOrdersProduce', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Cluster - cluster. optional.
   */
  onsClusterList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsClusterList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {Boolean} Detail - detail. optional.
   */
  onsConsumerAccumulate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerAccumulate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   */
  onsConsumerGetConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerGetConnection', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Type - type. required.
   * @param {Long} ResetTimestamp - timestamp. optional.
   */
  onsConsumerResetOffset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsConsumerResetOffset', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {Boolean} Detail - detail. optional.
   * @param {Boolean} NeedJstack - needJstack. optional.
   */
  onsConsumerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsConsumerStatus', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsConsumerTimeSpan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsConsumerTimeSpan', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Relation - relation. required.
   */
  onsEmpowerCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'EmpowerUser')) {
      throw new TypeError('parameter "EmpowerUser" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Relation')) {
      throw new TypeError('parameter "Relation" is required');
    }

    return this.request('OnsEmpowerCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. required.
   * @param {String} Topic - topic. required.
   */
  onsEmpowerDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'EmpowerUser')) {
      throw new TypeError('parameter "EmpowerUser" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsEmpowerDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} EmpowerUser - empowerUser. optional.
   * @param {String} Topic - topic. required.
   */
  onsEmpowerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsEmpowerList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Key - key. required.
   */
  onsMessageGetByKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('OnsMessageGetByKey', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} Topic - topic. required.
   */
  onsMessageGetByMsgId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsMessageGetByMsgId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} TaskId - taskId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  onsMessagePageQueryByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('OnsMessagePageQueryByTopic', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} ClientId - clientId. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} Topic - topic. required.
   */
  onsMessagePush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsMessagePush', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Tag - tag. optional.
   * @param {String} Key - key. optional.
   * @param {String} Message - message. required.
   */
  onsMessageSend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('OnsMessageSend', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} MsgId - msgId. required.
   */
  onsMessageTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MsgId')) {
      throw new TypeError('parameter "MsgId" is required');
    }

    return this.request('OnsMessageTrace', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional. default: cn-qingdao-publictest.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. optional. default: 1582152403000.
   * @param {String} data - CssCreateOrderParam. required.
   */
  onsMqttBuyCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OnsMqttBuyCheck', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional. default: cn-qingdao-publictest.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. optional. default: 1582152403000.
   * @param {String} data - CssProduce. required.
   */
  onsMqttBuyProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OnsMqttBuyProduce', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional. default: cn-qingdao-publictest.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. optional. default: 1582152403000.
   * @param {String} data - refundData. required.
   */
  onsMqttBuyRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OnsMqttBuyRefund', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsMqttGroupIdList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsMqttGroupIdList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OwnerId - ownerId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} AdminKey - adminKey. required.
   */
  onsMqttManualUpdateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AdminKey')) {
      throw new TypeError('parameter "AdminKey" is required');
    }

    return this.request('OnsMqttManualUpdateRule', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ClientId - clientId. required.
   */
  onsMqttQueryClientByClientId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    return this.request('OnsMqttQueryClientByClientId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   */
  onsMqttQueryClientByGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsMqttQueryClientByGroupId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ParentTopic - firstTopic. required.
   * @param {String} SubTopic - secondTopic. required.
   */
  onsMqttQueryClientByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ParentTopic')) {
      throw new TypeError('parameter "ParentTopic" is required');
    }

    if (!hasOwnProperty(params, 'SubTopic')) {
      throw new TypeError('parameter "SubTopic" is required');
    }

    return this.request('OnsMqttQueryClientByTopic', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  onsMqttQueryHistoryOnline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OnsMqttQueryHistoryOnline', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} ClientId - clientId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  onsMqttQueryMsgByPubInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OnsMqttQueryMsgByPubInfo', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} TpsType - consoleType. required.
   * @param {String} TransType - queryType. required.
   * @param {String} ParentTopic - topic. required.
   * @param {String} SubTopic - secondTopic. optional.
   * @param {String} MsgType - msgType. optional.
   * @param {Integer} Qos - qos. optional.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  onsMqttQueryMsgTransTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'TpsType')) {
      throw new TypeError('parameter "TpsType" is required');
    }

    if (!hasOwnProperty(params, 'TransType')) {
      throw new TypeError('parameter "TransType" is required');
    }

    if (!hasOwnProperty(params, 'ParentTopic')) {
      throw new TypeError('parameter "ParentTopic" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OnsMqttQueryMsgTransTrend', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} TraceId - traceId. required.
   * @param {String} Topic - topic. required.
   */
  onsMqttQueryTraceByTraceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsMqttQueryTraceByTraceId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} AppName - appName. optional.
   */
  onsPublishCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. optional.
   * @param {String} Topic - topic. required.
   */
  onsPublishDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} Topic - topic. required.
   */
  onsPublishGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsPublishGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsPublishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsPublishList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsPublishSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsPublishSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsRegionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsRegionList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsSubscriptionCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsSubscriptionCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. optional.
   */
  onsSubscriptionDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    return this.request('OnsSubscriptionDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsSubscriptionGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsSubscriptionGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsSubscriptionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsSubscriptionList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsSubscriptionSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsSubscriptionSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {Boolean} ReadEnable - readEnable. required.
   */
  onsSubscriptionUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'ReadEnable')) {
      throw new TypeError('parameter "ReadEnable" is required');
    }

    return this.request('OnsSubscriptionUpdate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Cluster - cluster. optional.
   * @param {Integer} QueueNum - queueNum. optional.
   * @param {Boolean} Order - order. optional.
   * @param {Long} Qps - qps. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} Appkey - appkey. optional.
   * @param {String} AppName - appName. optional.
   */
  onsTopicCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Cluster - cluster. optional.
   */
  onsTopicDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. optional.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   */
  onsTopicGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicGet', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. optional.
   */
  onsTopicList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsTopicList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Search - search. required.
   */
  onsTopicSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Search')) {
      throw new TypeError('parameter "Search" is required');
    }

    return this.request('OnsTopicSearch', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   */
  onsTopicStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsTopicStatus', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Perm - perm. required.
   */
  onsTopicUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Perm')) {
      throw new TypeError('parameter "Perm" is required');
    }

    return this.request('OnsTopicUpdate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Period - period. required.
   * @param {Integer} Type - type. required.
   */
  onsTrendGroupOutputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsTrendGroupOutputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Long} Period - period. required.
   * @param {Integer} Type - type. required.
   */
  onsTrendTopicInputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsTrendTopicInputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Threshold - threshold. required.
   * @param {String} Contacts - contacts. required.
   * @param {String} DelayTime - delayTime. required.
   * @param {String} BlockTime - blockTime. required.
   * @param {String} AlertTime - alertTime. required.
   * @param {String} Level - level. required.
   */
  onsWarnCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'Contacts')) {
      throw new TypeError('parameter "Contacts" is required');
    }

    if (!hasOwnProperty(params, 'DelayTime')) {
      throw new TypeError('parameter "DelayTime" is required');
    }

    if (!hasOwnProperty(params, 'BlockTime')) {
      throw new TypeError('parameter "BlockTime" is required');
    }

    if (!hasOwnProperty(params, 'AlertTime')) {
      throw new TypeError('parameter "AlertTime" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('OnsWarnCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ConsumerId - consumerId. required.
   * @param {String} Topic - topic. required.
   */
  onsWarnDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerId')) {
      throw new TypeError('parameter "ConsumerId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnDelete', params, options);
  }

}

module.exports = Client;
