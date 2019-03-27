
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-28';
    super(config);
  }

  /**
   * @param {String} Receivers - receivers. required.
   * @param {String} Message - message. required.
   */
  cosmoAlarmServiceSendDingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Receivers')) {
      throw new TypeError('parameter "Receivers" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('CosmoAlarmServiceSendDingGroup', params, options);
  }

  /**
   * @param {String} Receivers - receivers. required.
   * @param {String} Message - message. required.
   */
  cosmoAlarmServiceSendDingTalk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Receivers')) {
      throw new TypeError('parameter "Receivers" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('CosmoAlarmServiceSendDingTalk', params, options);
  }

  /**
   * @param {String} Receivers - receivers. required.
   * @param {String} Message - message. required.
   */
  cosmoAlarmServiceSendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Receivers')) {
      throw new TypeError('parameter "Receivers" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('CosmoAlarmServiceSendSms', params, options);
  }

  /**
   */
  getPrivateGenericServiceData(params = {}, options = {}) {
    return this.request('GetPrivateGenericServiceData', params, options);
  }

}

module.exports = Client;
