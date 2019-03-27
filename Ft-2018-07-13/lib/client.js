
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-13';
    super(config);
  }

  /**
   * @param {String} Name - name. optional.
   */
  fTApiAliasApi(params = {}, options = {}) {
    return this.request('FTApiAliasApi', params, options);
  }

  /**
   * @param {Integer} IntValue - intValue. optional.
   * @param {String} StringValue - stringValue. optional.
   */
  ftDynamicAddressDubbo(params = {}, options = {}) {
    return this.request('FtDynamicAddressDubbo', params, options);
  }

  /**
   */
  ftDynamicAddressHsf(params = {}, options = {}) {
    return this.request('FtDynamicAddressHsf', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  ftEagleEye(params = {}, options = {}) {
    return this.request('FtEagleEye', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  ftFlowSpecial(params = {}, options = {}) {
    return this.request('FtFlowSpecial', params, options);
  }

  /**
   * @param {String} IsGatedLaunch - isGatedLaunch. optional.
   */
  ftGatedLaunchPolicy4(params = {}, options = {}) {
    return this.request('FtGatedLaunchPolicy4', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {RepeatList} Disk - disks. optional.
   */
  ftParamList(params = {}, options = {}) {
    return this.request('FtParamList', params, options);
  }

}

module.exports = Client;
