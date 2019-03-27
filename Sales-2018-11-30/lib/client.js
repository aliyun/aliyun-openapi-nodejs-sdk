
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-30';
    super(config);
  }

  /**
   * @param {Long} Cid - cid. required.
   */
  findCustomerInfoByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('FindCustomerInfoByCid', params, options);
  }

  /**
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} MethodName - methodName. optional.
   * @param {String} ParamJson - paramJson. optional.
   * @param {String} ServiceClass - serviceClass. optional.
   */
  popProxyService(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PopProxyService', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} OperaterEmpId - operaterEmpid. required.
   * @param {String} Operater - operater. optional.
   * @param {Long} CID - cid. optional.
   * @param {Long} UID - uid. optional.
   * @param {String} Category - category. optional.
   * @param {String} EmpId - empId. optional.
   * @param {String} OperateReason - operateReason. required.
   * @param {String} OperateType - bussinessOperateType. required.
   * @param {Integer} ReleaseType - releaseType. required.
   */
  releaseCustomerRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'OperaterEmpId')) {
      throw new TypeError('parameter "OperaterEmpId" is required');
    }

    if (!hasOwnProperty(params, 'OperateReason')) {
      throw new TypeError('parameter "OperateReason" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    if (!hasOwnProperty(params, 'ReleaseType')) {
      throw new TypeError('parameter "ReleaseType" is required');
    }

    options.method = 'POST';
    return this.request('ReleaseCustomerRelation', params, options);
  }

}

module.exports = Client;
