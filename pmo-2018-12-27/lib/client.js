
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-27';
    super(config);
  }

  /**
   * @param {String} BpId - bpId. optional.
   * @param {String} ProgramName - programName. optional.
   */
  createProgramFromASP(params = {}, options = {}) {
    return this.request('CreateProgramFromASP', params, options);
  }

}

module.exports = Client;
