
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-08-03';
    super(config);
  }

  /**
   */
  controlPolicyFt(params = {}, options = {}) {
    return this.request('ControlPolicyFt', params, options);
  }

  /**
   */
  controlPolicyFtBlacklistByIP(params = {}, options = {}) {
    return this.request('ControlPolicyFtBlacklistByIP', params, options);
  }

  /**
   */
  controlPolicyFtBlacklistByIPAndRegion(params = {}, options = {}) {
    return this.request('ControlPolicyFtBlacklistByIPAndRegion', params, options);
  }

  /**
   */
  controlPolicyFtBlacklistByUserId(params = {}, options = {}) {
    return this.request('ControlPolicyFtBlacklistByUserId', params, options);
  }

  /**
   */
  controlPolicyFtWhitelistByIP(params = {}, options = {}) {
    return this.request('ControlPolicyFtWhitelistByIP', params, options);
  }

  /**
   */
  controlPolicyFtWhitelistByIPAndRegion(params = {}, options = {}) {
    return this.request('ControlPolicyFtWhitelistByIPAndRegion', params, options);
  }

  /**
   */
  controlPolicyFtWhitelistByUserId(params = {}, options = {}) {
    return this.request('ControlPolicyFtWhitelistByUserId', params, options);
  }

  /**
   */
  controlPolicyFtWhitelistByUserIdAndIP(params = {}, options = {}) {
    return this.request('ControlPolicyFtWhitelistByUserIdAndIP', params, options);
  }

  /**
   */
  flowSpecialFtApi(params = {}, options = {}) {
    return this.request('FlowSpecialFtApi', params, options);
  }

}

module.exports = Client;
