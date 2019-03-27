
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-21';
    super(config);
  }

  /**
   * @param {String} AbToken - abToken. required.
   * @param {String} ScenarioCode - scenarioCode. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {Long} Uid - aliUid. required.
   */
  getStsToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AbToken')) {
      throw new TypeError('parameter "AbToken" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioCode')) {
      throw new TypeError('parameter "ScenarioCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetStsToken', params, options);
  }

  /**
   * @param {String} FingerId - fingerId. required.
   * @param {String} MessageType - messageType. required.
   * @param {String} InstanceUuid - instanceUuid. required.
   * @param {String} Mobiles - mobiles. required.
   * @param {String} Params - params. required.
   */
  sendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FingerId')) {
      throw new TypeError('parameter "FingerId" is required');
    }

    if (!hasOwnProperty(params, 'MessageType')) {
      throw new TypeError('parameter "MessageType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceUuid')) {
      throw new TypeError('parameter "InstanceUuid" is required');
    }

    if (!hasOwnProperty(params, 'Mobiles')) {
      throw new TypeError('parameter "Mobiles" is required');
    }

    if (!hasOwnProperty(params, 'Params')) {
      throw new TypeError('parameter "Params" is required');
    }

    options.method = 'POST';
    return this.request('SendMessage', params, options);
  }

}

module.exports = Client;
