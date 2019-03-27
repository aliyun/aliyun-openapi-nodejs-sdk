
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-01';
    super(config);
  }

  /**
   * @param {String} WarmUp - warmUp. optional.
   */
  anonymousApi(params = {}, options = {}) {
    return this.request('AnonymousApi', params, options);
  }

  /**
   * @param {String} WarmUp - warmUp. optional.
   */
  rpcControlPolicyBlackList(params = {}, options = {}) {
    return this.request('RpcControlPolicyBlackList', params, options);
  }

  /**
   * @param {String} WarmUp - warmUp. optional.
   */
  rpcControlPolicyWhiteList(params = {}, options = {}) {
    return this.request('RpcControlPolicyWhiteList', params, options);
  }

  /**
   */
  rpcDubboApi(params = {}, options = {}) {
    return this.request('RpcDubboApi', params, options);
  }

  /**
   */
  rpcHsfApi(params = {}, options = {}) {
    return this.request('RpcHsfApi', params, options);
  }

  /**
   * @param {String} Success - success. optional.
   * @param {String} Code - code. optional.
   * @param {String} WarmUp - warmUp. optional.
   * @param {String} DynamicCode - dynamicCode. optional.
   * @param {String} DynamicMessage - dynamicMessage. optional.
   * @param {String} EnumCheck - enumCheck. optional.
   * @param {Long} MinMaxValueCheck - minMaxValueCheck. optional.
   * @param {String} DefaultValue - defaultValue. optional. default: this is system default value.
   * @param {String} RequiredValueCheck - requiredValueCheck. required.
   * @param {String} InputValueReplace - inputValueReplace. optional.
   * @param {RepeatList} RepeatListL1 - repeatListL1. optional.
   */
  rpcHttpApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequiredValueCheck')) {
      throw new TypeError('parameter "RequiredValueCheck" is required');
    }

    return this.request('RpcHttpApi', params, options);
  }

}

module.exports = Client;
