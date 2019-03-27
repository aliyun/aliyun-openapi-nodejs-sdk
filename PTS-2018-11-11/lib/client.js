
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-11';
    super(config);
  }

  /**
   * @param {Long} ReportId - reportId. required.
   */
  getReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReportId')) {
      throw new TypeError('parameter "ReportId" is required');
    }

    return this.request('GetReport', params, options);
  }

}

module.exports = Client;
