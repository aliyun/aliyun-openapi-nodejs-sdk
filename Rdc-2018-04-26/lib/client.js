
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-26';
    super(config);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} AliyunRegion - aliyunRegion. required.
   * @param {String} Network - network. required.
   * @param {String} Expiration - expiration. required.
   */
  getAddMachineCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'AliyunRegion')) {
      throw new TypeError('parameter "AliyunRegion" is required');
    }

    if (!hasOwnProperty(params, 'Network')) {
      throw new TypeError('parameter "Network" is required');
    }

    if (!hasOwnProperty(params, 'Expiration')) {
      throw new TypeError('parameter "Expiration" is required');
    }

    options.method = 'POST';
    return this.request('GetAddMachineCommand', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} SN - sn. required.
   */
  removeMachine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'SN')) {
      throw new TypeError('parameter "SN" is required');
    }

    options.method = 'POST';
    return this.request('RemoveMachine', params, options);
  }

}

module.exports = Client;
