
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-13';
    super(config);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} CloudProduct - cloudProduct. required.
   * @param {String} Lang - lang. optional.
   * @param {Integer} TTL - TTL. optional.
   * @param {String} ResourceQuota - resourceQuota. optional.
   * @param {Boolean} Overwrite - overwrite. optional. default: true.
   */
  analyzeProductLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'CloudProduct')) {
      throw new TypeError('parameter "CloudProduct" is required');
    }

    return this.request('AnalyzeProductLog', params, options);
  }

  /**
   * @param {String} Project - project. required.
   * @param {String} Logstore - logstore. required.
   * @param {String} Region - region. required.
   */
  deleteLogResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Logstore')) {
      throw new TypeError('parameter "Logstore" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('DeleteLogResource', params, options);
  }

}

module.exports = Client;
