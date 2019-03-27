
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-09';
    super(config);
  }

  /**
   * @param {String} SopProjectId - sopProjectId. required.
   */
  queryApplyCostList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SopProjectId')) {
      throw new TypeError('parameter "SopProjectId" is required');
    }

    return this.request('QueryApplyCostList', params, options);
  }

  /**
   * @param {String} SopProjectId - sopProjectId. required.
   */
  queryProjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SopProjectId')) {
      throw new TypeError('parameter "SopProjectId" is required');
    }

    return this.request('QueryProjectList', params, options);
  }

}

module.exports = Client;
