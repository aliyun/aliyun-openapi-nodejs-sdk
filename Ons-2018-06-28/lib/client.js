
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-28';
    super(config);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {Boolean} Detail - detail. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsConsumerAccumulate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsConsumerAccumulate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsConsumerGetConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsConsumerGetConnection', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Type - type. required.
   * @param {Long} ResetTimestamp - timestamp. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsConsumerResetOffset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {Boolean} Detail - detail. optional.
   * @param {Boolean} NeedJstack - needJstack. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsConsumerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsConsumerStatus', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsConsumerTimeSpan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsConsumerTimeSpan', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {Boolean} ReadEnable - readEnable. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsGroupConsumerUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ReadEnable')) {
      throw new TypeError('parameter "ReadEnable" is required');
    }

    return this.request('OnsGroupConsumerUpdate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Remark - remark. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsGroupCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsGroupCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsGroupDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsGroupDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} GroupId - groupId. optional.
   */
  onsGroupList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsGroupList', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} InstanceId - instanceId. required.
   */
  onsInstanceBaseInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OnsInstanceBaseInfo', params, options);
  }

  /**
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} Remark - remark. optional.
   * @param {String} InstanceName - instanceName. required.
   */
  onsInstanceCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('OnsInstanceCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} InstanceId - instanceId. required.
   */
  onsInstanceDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OnsInstanceDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   */
  onsInstanceInServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    return this.request('OnsInstanceInServiceList', params, options);
  }

  /**
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} Remark - remark. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  onsInstanceUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OnsInstanceUpdate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Key - key. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} TaskId - taskId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsMessagePageQueryByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ClientId - clientId. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsMessagePush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} Tag - tag. optional.
   * @param {String} Key - key. optional.
   * @param {String} Message - message. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsMessageSend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} MsgId - msgId. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
   */
  onsMqttGroupIdCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsMqttGroupIdCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
   */
  onsMqttGroupIdDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('OnsMqttGroupIdDelete', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ClientId - clientId. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} ParentTopic - firstTopic. required.
   * @param {String} SubTopic - secondTopic. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
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
   * @param {String} InstanceId - mqttInstanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} TpsType - consoleType. required.
   * @param {String} TransType - queryType. required.
   * @param {String} ParentTopic - topic. required.
   * @param {String} SubTopic - secondTopic. optional.
   * @param {String} MsgType - msgType. optional.
   * @param {Integer} Qos - qos. optional.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} InstanceId - mqttInstanceId. optional.
   */
  onsMqttQueryMsgTransTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} MessageType - orderType. required.
   * @param {String} Remark - remark. optional.
   * @param {String} InstanceId - instanceId. optional.
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

    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    return this.request('OnsTopicCreate', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. optional.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Integer} Perm - perm. required.
   * @param {String} InstanceId - instanceId. optional.
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
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} QueryId - queryId. required.
   */
  onsTraceGetResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'QueryId')) {
      throw new TypeError('parameter "QueryId" is required');
    }

    return this.request('OnsTraceGetResult', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} MsgId - msgId. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsTraceQueryByMsgId(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OnsTraceQueryByMsgId', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {String} MsgKey - msgKey. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsTraceQueryByMsgKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MsgKey')) {
      throw new TypeError('parameter "MsgKey" is required');
    }

    if (!hasOwnProperty(params, 'BeginTime')) {
      throw new TypeError('parameter "BeginTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OnsTraceQueryByMsgKey', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Type - type. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} Period - period. optional.
   */
  onsTrendGroupOutputTps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
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

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsTrendGroupOutputTps', params, options);
  }

  /**
   * @param {String} OnsRegionId - _regionId. required.
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} Topic - topic. required.
   * @param {Long} BeginTime - beginTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Type - type. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} Period - period. optional.
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

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('OnsTrendTopicInputTps', params, options);
  }

  /**
   * @param {Long} PreventCache - __preventCache. required.
   * @param {String} OnsRegionId - _regionId. required.
   * @param {String} OnsPlatform - _platform. optional. default: onsFromPop.
   * @param {String} GroupId - groupId. required.
   * @param {String} Topic - topic. required.
   * @param {String} Threshold - threshold. required.
   * @param {String} Contacts - contacts. required.
   * @param {String} DelayTime - delayTime. required.
   * @param {String} BlockTime - blockTime. required.
   * @param {String} AlertTime - alertTime. required.
   * @param {String} Level - level. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsWarnCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
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
   * @param {String} GroupId - groupId. required.
   * @param {String} Topic - topic. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  onsWarnDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OnsRegionId')) {
      throw new TypeError('parameter "OnsRegionId" is required');
    }

    if (!hasOwnProperty(params, 'PreventCache')) {
      throw new TypeError('parameter "PreventCache" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('OnsWarnDelete', params, options);
  }

}

module.exports = Client;
