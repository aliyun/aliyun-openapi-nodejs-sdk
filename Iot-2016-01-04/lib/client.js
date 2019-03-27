
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-04';
    super(config);
  }

  /**
   * @param {Long} AppKey - deviceAppKey. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} DeviceId - did. required.
   * @param {String} GrantType - type. required.
   */
  deviceGrant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('DeviceGrant', params, options);
  }

  /**
   * @param {Long} AppKey - deviceAppKey. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} DeviceId - did. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} GrantType - type. required.
   */
  devicePermitModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
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
   * @param {Long} AppKey - deviceAppKey. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} DeviceId - did. required.
   */
  deviceRevokeById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('DeviceRevokeById', params, options);
  }

  /**
   * @param {Long} AppKey - deviceAppKey. required.
   * @param {String} TopicFullName - topic. required.
   * @param {String} DeviceId - did. required.
   * @param {String} GrantType - type. required.
   */
  deviceRevokeByTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('DeviceRevokeByTopic', params, options);
  }

  /**
   * @param {Long} AppKey - deviceAppKey. required.
   * @param {String} DeviceId - did. required.
   */
  listDevicePermits(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('ListDevicePermits', params, options);
  }

  /**
   * @param {Long} AppKey - appKey. required.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} MessageContent - messageContent. required.
   */
  pub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
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
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceIds - deviceIds. required.
   * @param {String} PushContent - contentBase64. required.
   */
  pushByteMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceIds')) {
      throw new TypeError('parameter "DeviceIds" is required');
    }

    if (!hasOwnProperty(params, 'PushContent')) {
      throw new TypeError('parameter "PushContent" is required');
    }

    return this.request('PushByteMessage', params, options);
  }

  /**
   * @param {Long} AppKey - appKey. required.
   * @param {String} DeviceId - deviceId. required.
   * @param {String} RpcContent - requestBase64Byte. required.
   * @param {Integer} TimeOut - timeout. required.
   */
  revertRpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
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
   * @param {Long} AppKey - appKey. required.
   * @param {String} SubCallback - callback. required.
   * @param {String} TopicList - topicString. optional.
   * @param {RepeatList} Topic - topics. optional.
   */
  sub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'SubCallback')) {
      throw new TypeError('parameter "SubCallback" is required');
    }

    return this.request('Sub', params, options);
  }

  /**
   * @param {Long} AppKey - appKey. required.
   * @param {String} TopicList - topicString. optional.
   * @param {RepeatList} Topic - topics. optional.
   */
  unSub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('UnSub', params, options);
  }

}

module.exports = Client;
