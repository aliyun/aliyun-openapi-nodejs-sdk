
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-01';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} BizCode - bizCode. required.
   */
  getUserWarnSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'BizCode')) {
      throw new TypeError('parameter "BizCode" is required');
    }

    return this.request('GetUserWarnSetting', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} GmtSetting - gmtSetting. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} BizCode - bizCode. required.
   * @param {String} ProductCode - productCode. required.
   * @param {Long} Limit - limit. required.
   * @param {Long} WarnNum - warnNum. required.
   * @param {String} Operator - operator. optional.
   * @param {String} Memo - memo. optional.
   */
  setWarnNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'BizCode')) {
      throw new TypeError('parameter "BizCode" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    if (!hasOwnProperty(params, 'WarnNum')) {
      throw new TypeError('parameter "WarnNum" is required');
    }

    return this.request('SetWarnNum', params, options);
  }

}

module.exports = Client;
