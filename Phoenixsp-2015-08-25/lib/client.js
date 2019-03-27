
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-25';
    super(config);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} EventType - eventType. required.
   * @param {String} EventResult - eventResult. required.
   * @param {String} EventSource - eventSource. required.
   * @param {Boolean} Success - success. required.
   * @param {Long} EventTime - eventTime. required.
   * @param {String} OrderId - orderId. optional.
   * @param {String} ExtraData - extraData. optional.
   * @param {String} Token - token. required.
   */
  instanceLifecycleApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventResult')) {
      throw new TypeError('parameter "EventResult" is required');
    }

    if (!hasOwnProperty(params, 'EventSource')) {
      throw new TypeError('parameter "EventSource" is required');
    }

    if (!hasOwnProperty(params, 'Success')) {
      throw new TypeError('parameter "Success" is required');
    }

    if (!hasOwnProperty(params, 'EventTime')) {
      throw new TypeError('parameter "EventTime" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('InstanceLifecycleApi', params, options);
  }

}

module.exports = Client;
