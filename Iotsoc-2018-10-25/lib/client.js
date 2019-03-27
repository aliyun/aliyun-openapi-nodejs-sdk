
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-25';
    super(config);
  }

  /**
   */
  getVulnerabilityUpdateTime(params = {}, options = {}) {
    return this.request('GetVulnerabilityUpdateTime', params, options);
  }

  /**
   */
  queryBaselineResult(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryBaselineResult', params, options);
  }

  /**
   */
  queryPatchInfo(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryPatchInfo', params, options);
  }

  /**
   */
  queryPatchInfoList(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryPatchInfoList', params, options);
  }

  /**
   */
  queryVulnerabilityByFile(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryVulnerabilityByFile', params, options);
  }

  /**
   */
  queryVulnerabilityByFileList(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('QueryVulnerabilityByFileList', params, options);
  }

  /**
   */
  reportEvents(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ReportEvents', params, options);
  }

  /**
   */
  requestBaseline(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('RequestBaseline', params, options);
  }

}

module.exports = Client;
